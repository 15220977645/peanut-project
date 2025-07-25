<!--
 技能实践要素：
 下雨下雪✔
 点击模型
 模型更新操作面板
 模型动画
 模型信息标注
 阴影
 光边
 -->
<template>
  <div ref="container" class="container">
    <div class="screen-box">
      <div class="head">
        <div class="title">综合训练</div>
        <div class="date-time">{{ nowTime }}</div>
      </div>
    </div>
    <div
      ref="threeBox"
      id="three-box"
      v-loading="loadThree"
      class="three-box"
    ></div>
  </div>
</template>

<script setup lang="ts" name="IntegratedTraining">
import { requireImg } from "@/utils/requireImg";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const threeBox = ref();
const loadThree = ref(false);
const nowTime = ref("");
let scene = null;
let camera = null;
let renderer = null;
let width, height;
let controls = null;
let carSignGroup = new THREE.Group();
let rainGroup = new THREE.Group();
let treeGroup = new THREE.Group();
const gltfLoader = new GLTFLoader();

/* 动态时间 */
const getNowTime = () => {
  // 添0
  const add0 = (num: number) => {
    return num < 10 ? "0" + num : num;
  };
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  nowTime.value = `${year}年${add0(month)}月${add0(day)}日 ${add0(
    hours
  )}:${add0(minutes)}:${add0(seconds)}`;
};

/* 模型渲染 */
const handleModelRender = async () => {
  // renderRaining();
  renderCar();
  renderFloor();
  renderCarPlace();
  renderMountTree();
};

/* 车 */
const renderCar = async () => {
  await gltfLoader.load(
    requireImg("three/benz-car.gltf"),
    gltf => {
      gltf.scene.position.set(30, 0, -10);
      gltf.scene.scale.set(1.5, 1.5, 1.5);
      scene.add(gltf.scene);
    },
    undefined,
    function (err) {
      console.error("加载模型失败:", err);
    }
  );
};

/* 山体; 树 */
const renderMountTree = async () => {
  // 山体
  const mountTexture = await new THREE.TextureLoader().load(
    requireImg("three/mount-texture.jpg"),
    async () => {
      mountTexture.wrapS = THREE.RepeatWrapping; // 设置纹理重复方式
      mountTexture.wrapT = THREE.RepeatWrapping; // 设置纹理重复方式
      await gltfLoader.load(
        requireImg("three/mount.gltf"),
        gltf => {
          gltf.scene.traverse(child => {
            if (child.isMesh) {
              child.material.map = mountTexture;
              child.material.needsUpdate = true;
            }
          });
          gltf.scene.position.set(0, -8, -450);
          gltf.scene.scale.set(150, 70, 50);
          scene.add(gltf.scene);
        },
        undefined,
        function (err) {
          console.error("加载模型失败:", err);
        }
      );
    }
  );
  // 树
  await gltfLoader.load(
    requireImg("three/tree.gltf"),
    gltf => {
      // 复制模型的函数
      const cloneModel = model => {
        const clonedModel = new THREE.Group();
        model.traverse(function (child) {
          if (child.isMesh) {
            const clonedMesh = child.clone();
            clonedModel.add(clonedMesh);
          }
        });
        return clonedModel;
      };
      gltf.scene.scale.set(2.5, 2.5, 2.5);
      treeGroup.add(gltf.scene);
      // 复制模型
      for (let i = 1; i <= 3; i++) {
        const clonedModel = cloneModel(gltf.scene);
        clonedModel.position.x += 20 * i; // 将复制的模型稍微移动一下，以便看到两个模型
        if (i === 3) clonedModel.scale.set(2.5, 2.5, 2.5);
        treeGroup.add(clonedModel);
      }
      console.log("treeGroup", treeGroup);
      treeGroup.position.set(-50, -0.9, -220);
      treeGroup.rotation.x = Math.PI * -0.5;
      treeGroup.scale.set(2, 2, 2);
      scene.add(treeGroup);
    },
    undefined,
    function (err) {
      console.error("加载模型失败:", err);
    }
  );
};

/* 模拟下雨 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderRaining = () => {
  const texture = new THREE.TextureLoader().load(
    requireImg("three/water-droplet.svg")
  );
  const spriteMater = new THREE.SpriteMaterial({
    map: texture
  });
  for (let i = 0; i < 70000; i++) {
    const sprite = new THREE.Sprite(spriteMater);
    rainGroup.add(sprite);
    sprite.scale.set(1, 1, 1);
    sprite.position.set(
      Math.random() * 1000 - 500,
      Math.random() * 500,
      Math.random() * 1000 - 500
    );
  }
  scene.add(rainGroup);
  // 循环改变雨滴y位置
  const loop = () => {
    rainGroup.children.forEach(item => {
      item.position.y -= 0.5;
      if (item.position.y < -1) {
        item.position.y = 500;
      }
    });
    requestAnimationFrame(loop);
  };
  loop();
};

/* 建立车位标识组合 */
const renderCarPlace = async () => {
  const pointArr = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0, 2),
    new THREE.Vector2(2, 2),
    new THREE.Vector2(2, 1.5),
    new THREE.Vector2(0.5, 1.5),
    new THREE.Vector2(0.5, 0)
  ];
  // 创建一个形状
  const shape = new THREE.Shape(pointArr);
  // 创建几何体
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0 //拉伸长度
  });
  // 创建材质
  const material = new THREE.MeshBasicMaterial({
    color: "#996600",
    opacity: 0.7,
    transparent: true
  });
  // 创建网格对象
  const placeSign = new THREE.Mesh(geometry, material);
  const placeSign2 = placeSign.clone();
  placeSign2.position.set(16, 0, 0);
  placeSign2.rotation.set(0, Math.PI, 0);
  const placeSign3 = placeSign.clone();
  placeSign3.position.set(0, -8, 0);
  placeSign3.rotation.set(-Math.PI, 0, 0);
  const placeSign4 = placeSign3.clone();
  placeSign4.position.set(16, -8, 0);
  placeSign4.rotation.set(0, 0, Math.PI);
  carSignGroup.add(placeSign);
  carSignGroup.add(placeSign2);
  carSignGroup.add(placeSign3);
  carSignGroup.add(placeSign4);
  carSignGroup.rotation.set(Math.PI * -0.5, 0, Math.PI * 1.25);
  carSignGroup.position.set(-10, 0.2, 0);
  scene.add(carSignGroup);
};

/* 建立地板 */
const renderFloor = async () => {
  const floorGeo = new THREE.PlaneGeometry(1000, 1000);
  const floorMat = new THREE.MeshLambertMaterial({
    color: 0x999999,
    side: THREE.DoubleSide
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  const meshImg = requireImg("three/floor-01.jpg");
  const floorTexture = await new THREE.TextureLoader().load(
    meshImg,
    () => {
      // 确保纹理加载完成后更新纹理
      floorTexture.needsUpdate = true;
    },
    undefined,
    function (err) {
      console.error("加载纹理失败:", err);
    }
  );
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(1000, 1000);
  floor.position.set(0, 0, 0);
  floor.rotation.x = Math.PI * -0.5;
  floor.material.map = floorTexture;
  scene.add(floor);
};

/* 更新画板 */
const onResize = () => {
  width = threeBox.value.clientWidth;
  height = threeBox.value.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

/* 画板初始化 */
const initThree = async () => {
  // 创建场景
  scene = new THREE.Scene();

  // 创建相机视角
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 15, 30);

  // 添加光照
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.castShadow = true;
  directionalLight.position.set(0, 50, 40);
  scene.add(directionalLight);
  // 创建向量
  const direction = new THREE.Vector3(1, 1, 1);
  direction.normalize(); // 归一化向量

  // 设置画板
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor("#ccc"); // 设置背景颜色为浅灰色0
  renderer.setSize(threeBox.value.clientWidth, threeBox.value.clientHeight);
  threeBox.value.appendChild(renderer.domElement);

  // 空间相关模型渲染
  handleModelRender();

  // 设置相机控件轨道控制器OrbitControls;
  controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableRotate = false; // 允许旋转
  controls.minDistance = 5;
  controls.maxDistance = 100;
  // 设置最小缩放
  loadThree.value = false; // 关闭加载动画
  // 渲染循环
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
};

onMounted(() => {
  width = threeBox.value.clientWidth;
  height = threeBox.value.clientHeight;
  initThree();
  setInterval(getNowTime, 1000);
  window.addEventListener("resize", onResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>
<style scoped lang="scss">
.container {
  position: relative;
  max-width: calc(100% - 30px);
  height: calc(100% - 30px);
  margin: 15px;

  .screen-box {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 15px;
    pointer-events: none;
    box-shadow: inset 0 0 30px 30px rgb(0 0 0 / 50%);

    .head {
      display: flex;
      justify-content: flex-end;
      padding: 0 0.5208rem;
      font-size: 1.6667rem;
      color: #f8e1c3;

      .title {
        position: absolute;
        top: 0.7813rem;
        left: 50%;
        font-weight: bold;
        color: transparent;
        background: linear-gradient(
          to bottom,
          #fff 0%,
          #a26631 40%,
          #a24d02 100%
        );
        background-clip: text;
        transform: translateX(-50%);
      }

      .date-time {
        font-size: 1.25rem;
        transform: translateY(0.2vh);
      }
    }
  }
}

.three-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
