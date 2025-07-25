<script setup lang="ts" name="GltfDemo">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { requireImg } from "@/utils/requireImg";

const loadThree = ref(true); // 控制加载动画
const threeBox = ref();
let scene = null;
let camera = null;
let renderer = null;
let action = null; // 动画混合器
// let Object3D = null;
let width, height;
const gltfLoader = new GLTFLoader();

/* 更新画板 */
const onResize = () => {
  // 获取新的容器宽高
  width = threeBox.value.clientWidth;
  height = threeBox.value.clientHeight;
  // 更新渲染器尺寸
  renderer.setSize(width, height);
  // 更新相机视角
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

/* 初始化画板 */
const init = async () => {
  // 创建场景
  scene = new THREE.Scene();

  // 创建相机视角
  camera = new THREE.PerspectiveCamera(
    75,
    threeBox.value.clientWidth / threeBox.value.clientHeight,
    0.1,
    1000
  );
  // 相机位置
  camera.position.set(-1, 0.8, -2.3);

  // 添加光照
  const ambientLight = new THREE.AmbientLight("#fff");
  scene.add(ambientLight);
  // 聚光源
  const pointLight = new THREE.PointLight("#FFCC99", 10);
  pointLight.decay = 2; //设置光源不随距离衰减
  scene.add(pointLight); //点光源添加到场景中

  // 设置画板
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xcccccc); // 设置背景颜色为浅灰色
  renderer.setSize(threeBox.value.clientWidth, threeBox.value.clientHeight);
  threeBox.value.appendChild(renderer.domElement);

  // 添加茶几图片texture
  const textureLoader = new THREE.TextureLoader();
  const texture = await textureLoader.load(
    requireImg("three/zhengfangti.jpeg"),
    async () => {
      // 设置模型大小
      texture.wrapS = THREE.RepeatWrapping; // 设置纹理重复方式
      texture.wrapT = THREE.RepeatWrapping; // 设置纹理重复方式
      texture.rotation = Math.PI; // 设置纹理旋转角度
      texture.center.set(0.99, 0.18); // 设置纹理中心点
      // texture.repeat.set(2, 1.5); // 设置纹理重复次数
      // 设置纹理缩放比例
      texture.repeat.x = 2; // 设置纹理缩放比例
      texture.repeat.y = 3; // 设置纹理缩放比例
      // 设置场景模型
      // gltf路径要为绝对路径或者不含@的相对路径
      await gltfLoader.load(
        requireImg("three/scene1.gltf"),
        function (gltf: any) {
          gltf.scene.traverse((child: any) => {
            if (child.isMesh) {
              if (child.material?.name === "Kaca") {
                child.material = new THREE.MeshPhysicalMaterial({
                  color: child.material.color, //默认颜色
                  metalness: 0.8, //车外壳金属度
                  roughness: 0.5, //车外壳粗糙度
                  map: texture, //车外壳纹理贴图
                  envMapIntensity: 2.5 //环境贴图对Mesh表面影响程度
                });
                // child.material.map = texture; // 设置茶几纹理贴图
                // 确保材质需要更新
                child.material.needsUpdate = true;
              }
              if (child.material?.name === "Sofa Kecil") {
                child.material = new THREE.MeshPhysicalMaterial({
                  transparent: true, // 启用透明度
                  opacity: 0.5,
                  color: child.material.color //默认颜色
                });
                // 确保材质需要更新
                child.material.needsUpdate = true;
                const edges = new THREE.EdgesGeometry(child.geometry);
                const edgeMaterial = new THREE.LineBasicMaterial({
                  color: "#0FF", // 设置边缘颜色为黑色
                  linewidth: 2 // 设置边缘线宽
                });
                const edge = new THREE.LineSegments(edges, edgeMaterial);
                child.add(edge); // 将边缘线添加到模型中
              }
            }
          });
          scene.add(gltf.scene);
        }
      );
    }
  );

  let mixer = null; // 动画混合器
  // 添加机器人模型
  await gltfLoader.load(requireImg("three/robot.glb"), function (gltf: any) {
    const model = gltf.scene;
    scene.add(model);
    // 如果模型包含动画，创建动画混合器
    if (gltf.animations && gltf.animations.length) {
      mixer = new THREE.AnimationMixer(model);
      mixer.update(0.015);
      gltf.animations.forEach(clip => {
        action = mixer.clipAction(clip);
        action.play(); // 播放所有动画
      });
    }
    model.scale.set(0.5, 0.5, 0.5); // 缩放模型
    model.rotation.set(0, Math.PI, 0); // 旋转模型
    model.position.set(-1, 0.01, -1); // 设置模型位置
  });

  // 设置相机控件轨道控制器OrbitControls;
  new OrbitControls(camera, renderer.domElement);
  loadThree.value = false; // 关闭加载动画
  // 渲染循环
  const animate = () => {
    requestAnimationFrame(animate);
    // 更新动画混合器
    if (mixer) mixer.update(0.0015);
    renderer.render(scene, camera);
  };
  animate();
};

onMounted(() => {
  init();
  window.addEventListener("resize", onResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <div
    ref="threeBox"
    id="three-box"
    class="three-box"
    v-loading="loadThree"
  ></div>
</template>

<style scoped lang="scss">
.three-box {
  height: calc(100% - 30px);
  margin: 15px;
}
</style>
