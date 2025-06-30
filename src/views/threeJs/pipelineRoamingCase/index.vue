<template>
  <div class="three-container">
    <el-button
      type="primary"
      @click="playCamera"
      :disabled="animationFrame"
      class="play-btn"
    >
      {{ animationFrame ? "播放中" : "播放" }}
    </el-button>
    <div ref="threeBox" class="three-box"></div>
  </div>
</template>

<script setup lang="ts" name="PipelineRoamingCase">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const threeBox = ref();
let scene = null;
let camera = null;
let renderer = null;
let width, height;
let animationFrame = ref(undefined);

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

/* 初始化 */
const init = () => {
  width = threeBox.value.clientWidth;
  height = threeBox.value.clientHeight;
  /* 创建场景 */
  scene = new THREE.Scene();
  /* 创建相机 */
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);
  /* 创建渲染器 */
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  threeBox.value.appendChild(renderer.domElement);
  new OrbitControls(camera, renderer.domElement);
  drawPipeLine();
  // 渲染-循环动画
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
};
let curve = null;
/* 画管道 */
const drawPipeLine = () => {
  // 创建曲线
  curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 0),
    new THREE.Vector3(0, 10, 0),
    new THREE.Vector3(10, 0, 0),
    new THREE.Vector3(20, -10, 0),
    new THREE.Vector3(22, -20, 10),
    new THREE.Vector3(40, 30, 0),
    new THREE.Vector3(0, 20, 50)
  ]);
  // 管道模型
  const geometry = new THREE.TubeGeometry(curve, 100, 4, 50, false);
  // 创建材质
  const material = new THREE.MeshBasicMaterial({
    color: "#0FF",
    side: THREE.DoubleSide, //两面可见
    opacity: 0.5,
    transparent: true
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
};

/* 播放漫游动画 */
const playCamera = () => {
  const pointArr = curve.getPoints(750);
  let i = 0;
  function animate() {
    // 从曲线上等距获取坐标
    if (pointArr[i + 1]) {
      camera.distanceToTarget = 100;
      camera.position.copy(pointArr[i]);
      camera.lookAt(pointArr[i + 1]);
      i++;
    } else {
      camera.position.set(0, 0, 100);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      cancelAnimationFrame(animationFrame.value);
      animationFrame.value = undefined;
      return;
    }
    renderer.render(scene, camera);
    animationFrame.value = requestAnimationFrame(animate);
  }
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

<style scoped lang="scss">
.three-container {
  position: relative;
  height: calc(100% - 30px);
  margin: 15px;

  .play-btn {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .three-box {
    width: 100%;
    height: 100%;
  }
}
</style>
