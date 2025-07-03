<template>
  <ElTabs
    v-model="activeName"
    lazy
    class="three-tabs"
    @tab-change="changeTab"
    v-loading="loadThree"
  >
    <ElTabPane label="Cube环境贴图" name="cube">
      <div ref="threeCubeBox" id="three-cube-box" class="three-box"></div>
    </ElTabPane>
    <ElTabPane label="HDR环境贴图" name="hbr">
      <div ref="threeHbrBox" id="three-hbr-box" class="three-box"></div>
    </ElTabPane>
  </ElTabs>
</template>

<script setup lang="ts" name="EnvironmentMap">
import { requireImg } from "@/utils/requireImg";
import * as THREE from "three";
// 导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 导入hdr加载器
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const loadThree = ref(true); // 加载动画
const activeName = ref("cube");
const threeHbrBox = ref();
const threeCubeBox = ref();
let scene = {
  hbr: null,
  cube: null
};
let camera = {
  hbr: null,
  cube: null
};
let renderer = {
  hbr: null,
  cube: null
};

/* 初始化 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initHbr = async () => {
  loadThree.value = true; // 显示加载动画
  await nextTick();
  // 1、创建场景
  scene.hbr = new THREE.Scene();
  scene.hbr.background = new THREE.Color(0x003261); // 将背景色设置为蓝色
  let hbrTexture = null;
  // 加载hdr环境图
  const rgbeLoader = new RGBELoader();
  const texture = await rgbeLoader.loadAsync(requireImg("three/scene1.hdr"));
  texture.mapping = THREE.EquirectangularReflectionMapping; // 设置映射类型
  scene.hbr.background = texture; // 设置背景
  scene.hbr.environment = texture; // 设置环境贴图
  hbrTexture = texture;

  // 2、创建相机
  camera.hbr = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // 设置相机位置
  camera.hbr.position.set(0, 0, 10);
  scene.hbr.add(camera.hbr);

  // 创建球体
  const sphereGeometry = new THREE.SphereGeometry(2, 20, 20); // 参数：半径、水平分段数、垂直分段数
  const material = new THREE.MeshPhysicalMaterial({
    metalness: 0.0, //玻璃非金属
    roughness: 0.0, //玻璃表面光滑
    transmission: 0.3, //玻璃材质透光率，transmission替代opacity
    ior: 1.1, //折射率
    envMap: hbrTexture, //环境贴图
    envMapIntensity: 0.5 //环境贴图对Mesh表面影响程度
  });

  const sphere = new THREE.Mesh(sphereGeometry, material); // 根据几何体和材质创建球体
  scene.hbr.add(sphere); // 添加到场景中

  // 灯光
  // 环境光
  // 参数 1：光源颜色 2：光源强度
  const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
  scene.hbr.add(light); // 将光源添加到场景中
  //直线光源
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 参数：光源颜色、光源强度
  directionalLight.position.set(10, 10, 10); // 设置光源位置
  scene.hbr.add(directionalLight); // 将光源添加到场景中

  renderer.hbr = new THREE.WebGLRenderer();
  renderer.hbr.setClearColor(0xcccccc); // 设置背景颜色为浅灰色
  renderer.hbr.setSize(
    threeHbrBox.value.clientWidth,
    threeHbrBox.value.clientHeight
  );
  threeHbrBox.value.appendChild(renderer.hbr.domElement);

  // 创建轨道控制器
  const controls = new OrbitControls(camera.hbr, renderer.hbr.domElement);
  // 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
  controls.enableDamping = true;
  loadThree.value = false; // 隐藏加载动画
  async function render() {
    await nextTick();
    controls.update();
    renderer.hbr.render(scene.hbr, camera.hbr);
    //   渲染下一帧的时候就会调用render函数
    requestAnimationFrame(render);
  }

  render();
};

/* 初始化画板 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initCube = async () => {
  loadThree.value = true; // 显示加载动画
  await nextTick();
  // 创建场景
  // 1、创建场景
  scene.cube = new THREE.Scene();
  scene.cube.background = new THREE.Color(0x003261); // 将背景色设置为蓝色

  // 2、创建相机
  camera.cube = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // 设置相机位置
  camera.cube.position.set(0, 0, 5);
  scene.cube.add(camera.cube);

  // 设置cube纹理加载器
  const cubeTextureLoader = new THREE.CubeTextureLoader(); // 立方体纹理加载器
  // 加载环境贴图
  // 图片尺寸要求：必须是2的n次方，且宽高比为1:1
  const textureCube = cubeTextureLoader.load([
    requireImg("three/px.jpg"),
    requireImg("three/nx.jpg"),
    requireImg("three/py.jpg"),
    requireImg("three/ny.jpg"),
    requireImg("three/pz.jpg"),
    requireImg("three/nz.jpg")
  ]);
  // 创建球体
  const sphereGeometry = new THREE.SphereGeometry(1, 50, 50); // 参数：半径、水平分段数、垂直分段数
  const material = new THREE.MeshStandardMaterial({
    // 创建材质
    metalness: 1, // 金属度
    roughness: 0.1, // 粗糙度
    envMap: textureCube // 环境贴图
  });
  const sphere1 = new THREE.Mesh(sphereGeometry, material); // 根据几何体和材质创建球体
  scene.cube.add(sphere1); // 添加到场景中

  // 给场景添加背景
  scene.cube.background = textureCube;

  // 灯光
  // 环境光
  // 参数 1：光源颜色 2：光源强度
  const light = new THREE.AmbientLight(0xffffff, 1); // soft white light
  light.position.set(1, 1, 1).normalize();
  scene.cube.add(light); // 将光源添加到场景中
  //直线光源
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 参数：光源颜色、光源强度
  directionalLight.position.set(10, 10, 10); // 设置光源位置
  scene.cube.add(directionalLight); // 将光源添加到场景中
  // 初始化渲染器
  renderer.cube = new THREE.WebGLRenderer();
  renderer.cube.setClearColor(0xcccccc); // 设置背景颜色为浅灰色
  renderer.cube.setSize(
    threeCubeBox.value.clientWidth,
    threeCubeBox.value.clientHeight
  );
  threeCubeBox.value.appendChild(renderer.cube.domElement);
  // 创建轨道控制器
  const controls = new OrbitControls(camera.cube, renderer.cube.domElement);
  // 设置控制器阻尼，让控制器更有真实效果,必须在动画循环里调用.update()。
  controls.enableDamping = true;
  loadThree.value = false; // 隐藏加载动画
  async function render() {
    await nextTick();
    controls.update();
    renderer.cube.render(scene.cube, camera.cube);
    //   渲染下一帧的时候就会调用render函数
    requestAnimationFrame(render);
  }
  render();
};

/* 更新画板 */
const onResize = () => {
  // 获取新的容器宽高
  const width = threeHbrBox.value.clientWidth || threeCubeBox.value.clientWidth;
  const height =
    threeHbrBox.value.clientHeight || threeCubeBox.value.clientHeight;
  // 更新渲染器尺寸
  renderer.hbr.setSize(width, height);
  renderer.cube.setSize(width, height);
  // 更新相机视角
  camera.hbr.aspect = width / height;
  camera.cube.aspect = width / height;
  camera.hbr.updateProjectionMatrix();
  camera.cube.updateProjectionMatrix();
  //   设置渲染器的像素比
  renderer.hbr.setPixelRatio(window.devicePixelRatio);
  renderer.cube.setPixelRatio(window.devicePixelRatio);
};

/* 更换tab */
const changeTab = () => {
  if (activeName.value === "hbr" && !renderer.hbr) initHbr();
  else if (activeName.value === "cube" && !renderer.cube) initCube();
};

onMounted(() => {
  initCube();
  // 监听窗口大小变化
  window.addEventListener("resize", onResize);
});
onBeforeUnmount(() => {
  // 移除监听
  window.removeEventListener("resize", onResize);
});
</script>
<style scoped lang="scss">
:deep {
  .el-tab-pane {
    height: 100%;

    .three-box {
      height: 100%;
    }
  }
}

.three-tabs {
  height: calc(100% - 30px);
  padding: 0 15px;
  margin: 15px;
  background-color: #fff;
}
</style>
