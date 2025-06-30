<template>
  <div ref="threeBox" id="three-box" class="three-box"></div>
</template>

<script setup lang="ts" name="First3DDemo">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import imgMeshBg from "@/assets/three/zhengfangti.jpeg";
import ballMeshBg from "@/assets/three/ball.png";
import cizhuanMeshBg from "@/assets/three/cizhuan.png";
import qinghuaciMesh from "@/assets/three/qinghuaci.jpg";
import chinaJson from "@/utils/mapJson/china.json";

const threeBox = ref();
let scene = null;
let camera = null;
let renderer = null;
let Object3D = null;
let width, height;

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

/* 初始化3D画板 */
const init = async () => {
  // 创建场景
  scene = new THREE.Scene();
  // 视场角，越大看的东西越多
  // 宽高比
  // 近切面，限制最近视角
  // 远切面，限制最远视角
  camera = new THREE.PerspectiveCamera(
    75,
    threeBox.value.clientWidth / threeBox.value.clientHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0xcccccc); // 设置背景颜色为浅灰色
  renderer.setSize(threeBox.value.clientWidth, threeBox.value.clientHeight);
  threeBox.value.appendChild(renderer.domElement);

  // 创建向量
  const direction = new THREE.Vector3(1, 1, 1);
  direction.normalize(); // 归一化向量

  // 创建箭头辅助对象
  const arrowHelper = new THREE.ArrowHelper(
    direction,
    new THREE.Vector3(0, 0, 0),
    1,
    "#000"
  );
  scene.add(arrowHelper); // 将箭头添加到场景中
  Object3D = new THREE.Group();

  // 加载立方体
  // x长，y宽，z高
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshPhongMaterial({
    color: "#F00",
    transparent: true,
    wireframe: true,
    side: THREE.DoubleSide, //两面可见
    opacity: 0.8
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(-3, 2, 0);
  Object3D.add(mesh);
  // 正方体复制
  const copyMesh = mesh.clone();
  // const copyMesh = new THREE.Mesh(geometry, copyMaterial);
  copyMesh.material = mesh.material.clone(); // 克隆会用原材质
  // copyMesh.material.copy(mesh.material); // 复制会用原材质
  copyMesh.material.wireframe = false; // 取消线框
  copyMesh.material.color.set("gray");
  copyMesh.position.set(-3, 3, 0);
  Object3D.add(copyMesh);
  // 图片正方体
  const imgMesh = mesh.clone();
  const texture = await new THREE.TextureLoader().load(
    imgMeshBg,
    () => {
      // 确保纹理加载完成后更新纹理
      texture.needsUpdate = true;
    },
    undefined, // 进度回调（可选）
    function (error) {
      console.error("纹理加载失败:", error);
    }
  );
  imgMesh.material = new THREE.MeshBasicMaterial({
    map: texture
  });
  imgMesh.position.set(-3, 1, 0);
  Object3D.add(imgMesh);
  Object3D.scale.set(0.8, 0.8, 0.8);
  Object3D.name = "方块堆叠";
  scene.add(Object3D);

  // 加载圆柱体
  // x底面，y顶面，z高
  const cGeometry = new THREE.CylinderGeometry();
  const cMaterial = new THREE.MeshLambertMaterial({
    color: "#0F0",
    side: THREE.DoubleSide //两面可见
  });
  const cMesh = new THREE.Mesh(cGeometry, cMaterial);
  cMesh.position.set(0, 2, 0);
  scene.add(cMesh);

  // 加载球体
  // 半径、水分面数、垂直面数、水平起始度数、水平绘制长度、垂直起始度数、垂直绘制长度
  const sGeometry = new THREE.SphereGeometry(1, 50, 10);
  const sMaterial = new THREE.MeshPhongMaterial({
    color: "#00F",
    wireframe: true,
    side: THREE.DoubleSide //两面可见
  });
  const sMesh = new THREE.Mesh(sGeometry, sMaterial);
  const sTexture = await new THREE.TextureLoader().load(
    ballMeshBg,
    () => {
      // 确保纹理加载完成后更新纹理
      texture.needsUpdate = true;
    },
    undefined, // 进度回调（可选）
    function (error) {
      console.error("纹理加载失败:", error);
    }
  );
  sMesh.material = new THREE.MeshBasicMaterial({
    map: sTexture
  });
  sMesh.position.set(3, 2, 0);
  scene.add(sMesh);

  // 加载圆锥体
  // 底部半径、高度、底部分段数、截面分段数、底部起始度数、底部绘制长度
  const conGeometry = new THREE.ConeGeometry(1, 1, 10);
  const conMaterial = new THREE.MeshStandardMaterial({
    color: "#FF0",
    // wireframe: true,
    roughness: 1, //表面粗糙度
    metalness: 1, // 金属化
    side: THREE.DoubleSide //两面可见
  });
  const conMesh = new THREE.Mesh(conGeometry, conMaterial);
  conMesh.position.set(-5, 1.5, 0);
  scene.add(conMesh);

  // 加载矩形平面
  // 长、宽
  const pGeometry = new THREE.PlaneGeometry(150, 150);
  const pMaterial = new THREE.MeshLambertMaterial({
    wireframe: true,
    color: "#0FF",
    side: THREE.DoubleSide //两面可见
  });
  pGeometry.scale(2, 2, 2);
  const pMesh = new THREE.Mesh(pGeometry, pMaterial);
  const pTexture = await new THREE.TextureLoader().load(
    cizhuanMeshBg,
    () => {
      // 确保纹理加载完成后更新纹理
      texture.needsUpdate = true;
    },
    undefined, // 进度回调（可选）
    function (error) {
      console.error("纹理加载失败:", error);
    }
  );
  pTexture.wrapS = THREE.RepeatWrapping; // 设置纹理重复方式
  pTexture.wrapT = THREE.RepeatWrapping; // 设置纹理重复方式
  pMesh.rotation.x = Math.PI * -0.5;
  pTexture.repeat.set(150, 150); // 设置纹理重复次数
  pMesh.material = new THREE.MeshBasicMaterial({
    map: pTexture
  });
  pMesh.position.set(0, 0, 0);
  scene.add(pMesh);

  // 加载圆平面
  // 半径、分段数
  const ciGeometry = new THREE.CircleGeometry();
  const ciMaterial = new THREE.MeshBasicMaterial({ color: "#F0F" });
  const ciMesh = new THREE.Mesh(ciGeometry, ciMaterial);
  ciMesh.position.set(6, 2, 0);
  scene.add(ciMesh);

  // 添加光照
  const ambientLight = new THREE.AmbientLight("#fff");
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 1);
  scene.add(directionalLight);

  // 相机位置
  camera.position.set(0, 5, 20);
  const axesHelper = new THREE.AxesHelper(10);
  scene.add(axesHelper);
  const pointLight = new THREE.PointLight(0xffffff, 1.0);
  pointLight.decay = 1.0; //设置光源不随距离衰减
  pointLight.intensity = 10.0; //光照强度
  scene.add(pointLight); //点光源添加到场景中
  const gridHelper = new THREE.GridHelper(300, 25, 0x004444, 0x004444);
  scene.add(gridHelper); //点光源添加到场景中
  // 设置相机控件轨道控制器OrbitControls
  new OrbitControls(camera, renderer.domElement);
  handleGeometry();
  // 渲染-循环动画
  const animate = () => {
    requestAnimationFrame(animate);
    cMesh.rotation.x += 0.01;
    cMesh.rotation.y += 0.01;
    sMesh.rotation.x += 0.01;
    sMesh.rotation.y += 0.01;
    conMesh.rotation.x += 0.01;
    conMesh.rotation.y += 0.01;
    // pTexture.offset.x += 0.005;
    // pTexture.offset.y += 0.005;
    // pMesh.rotation.x += 0.01;
    // pMesh.rotation.y += 0.01;
    ciMesh.rotation.x += 0.01;
    ciMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
};

/* 几何进阶 */
const handleGeometry = () => {
  generateArc();
  getArc();
  handleTubeGeometry();
  handleLatheGeometry();
  handleShapeGeometry();
  handleExtrudeGeometry();
  handleShapeHoles();
  handleVertexGeometry();
  handleCatmullRomCurve3();
  renderGDMap();
};

/* 渲染广东地图 */
const renderGDMap = () => {
  const GDJson = chinaJson.features.find((item: any) =>
    item.properties.name.includes("广东")
  );
  const lonLatData = GDJson.geometry.coordinates[0][0];
  const vector2Arr = [];
  lonLatData.forEach(item => {
    const vector2 = new THREE.Vector2(item[0], item[1]);
    vector2Arr.push(vector2);
  });
  const shape = new THREE.Shape(vector2Arr);
  const geometry = new THREE.ShapeGeometry(shape);
  const material = new THREE.MeshBasicMaterial({
    color: "#F00",
    // 双面
    side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(geometry, material);
  const box3 = new THREE.Box3();
  box3.expandByObject(mesh);
  mesh.position.set(-(box3.min.x + 17), -(box3.min.y - 2), 0);
  scene.add(mesh);
};

/* 生成圆弧顶点 */
const generateArc = () => {
  // 创建圆弧模型以及基础数据
  const geometry = new THREE.BufferGeometry();
  const R = 1;
  const N = 50;
  const sp = Math.PI / 2;
  // 计算圆弧顶点
  const arr = [];
  for (let i = 0; i < N; i++) {
    const x = R * Math.sin(sp * (i / N));
    const y = R * Math.cos(sp * (i / N));
    const z = 0;
    if (i < N - 1) arr.push(x, y, z);
    else arr.push(R, 0, 0);
  }

  // 创建顶点数据
  const vertices = new Float32Array(arr);
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  // 创建材质
  const material = new THREE.LineBasicMaterial({
    color: "#F00",
    linewidth: 2
  });
  // 创建线条对象
  const line = new THREE.Line(geometry, material);
  // 设置线条旋转
  // line.rotation.set(0, 0, Math.PI / 4);

  // 2. 创建附加线段几何体
  const lineGeometry = new THREE.BufferGeometry();

  // 3. 创建两个独立的线条对象
  const lineLine = new THREE.Line(lineGeometry, material);
  const pointsArr = [
    // 三维向量Vector2表示的坐标值
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(-Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0),
    new THREE.Vector3(0, 1, 0)
  ];
  lineGeometry.setFromPoints(pointsArr);
  // 设置线条位置
  line.position.set(0, 5, 0);
  lineLine.position.set(-0.1, 5, 0);
  // 添加到场景中
  scene.add(line, lineLine);
};

/* 获取椭圆、圆弧线顶点 */
const getArc = () => {
  // 参数1和2表示椭圆中心坐标  参数3和4表示x和y方向半径, 参数5表示起始角度
  // 参数6表示结束角度，参数7表示是否顺时针绘制
  const arc = new THREE.EllipseCurve(0, 0, 1, 0.5, 0, Math.PI * 2, false);
  const pointsArr = arc.getPoints(50); //分段数50，返回51个顶点
  // 创建顶点数据
  const vertices = new Float32Array(pointsArr.length * 3);
  for (let i = 0; i < pointsArr.length; i++) {
    vertices[i * 3] = pointsArr[i].x;
    vertices[i * 3 + 1] = pointsArr[i].y;
    vertices[i * 3 + 2] = 0;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  // 创建材质
  const material = new THREE.LineBasicMaterial({
    color: "#F00",
    linewidth: 2
  });
  // 创建线条对象
  const line = new THREE.Line(geometry, material);
  // 参数1和2表示圆弧中心坐标  参数3表示半径，参数4表示起始角度
  // 参数5表示结束角度，参数6表示是否顺时针绘制
  const arc1 = new THREE.ArcCurve(0, 0, 1, 0, Math.PI / 2);
  const pointsArr1 = arc1.getPoints(50); //分段数50，返回51个顶点
  const geometry1 = new THREE.BufferGeometry();
  // 创建顶点数据
  const vertices1 = new Float32Array(pointsArr1.length * 3);
  for (let i = 0; i < pointsArr1.length; i++) {
    vertices1[i * 3] = pointsArr1[i].x;
    vertices1[i * 3 + 1] = pointsArr1[i].y;
    vertices1[i * 3 + 2] = 0;
  }
  geometry1.setAttribute("position", new THREE.BufferAttribute(vertices1, 3));
  // 创建材质
  const material1 = new THREE.LineBasicMaterial({
    color: "#F00",
    linewidth: 2
  });
  // 创建线条对象
  const line1 = new THREE.Line(geometry1, material1);
  // 设置线条位置
  line.position.set(-3, 5, 0);
  line1.position.set(-2.5, 5, 0);
  scene.add(line);
  scene.add(line1);

  // p1、p3轨迹线起始点坐标
  const p1 = new THREE.Vector3(-1, -1, -1);
  const p3 = new THREE.Vector3(1, 1, 1);
  // 计算p1和p3的中点坐标
  const x2 = (p1.x + p3.x) / 2;
  const z2 = (p1.z + p3.z) / 2;
  const h = 1;
  const p2 = new THREE.Vector3(x2, h, z2);
  // 三维二次贝赛尔曲线
  const curve = new THREE.QuadraticBezierCurve3(p1, p2, p3);
  // 计算曲线上的点
  const points = curve.getPoints(50);
  // 创建顶点数据
  const vertices2 = new Float32Array(points.length * 3);
  for (let i = 0; i < points.length; i++) {
    vertices2[i * 3] = points[i].x;
    vertices2[i * 3 + 1] = points[i].y;
    vertices2[i * 3 + 2] = points[i].z;
  }
  const geometry2 = new THREE.BufferGeometry();
  geometry2.setAttribute("position", new THREE.BufferAttribute(vertices2, 3));
  // 创建材质
  const material2 = new THREE.LineBasicMaterial({
    color: "#F00",
    linewidth: 2
  });
  // 创建线条对象
  const line2 = new THREE.Line(geometry2, material2);
  // 设置线条位置
  line2.position.set(3, 5, 0);
  // 添加到场景中
  scene.add(line2);
};

/* 曲线管道 */
const handleTubeGeometry = () => {
  // 创建曲线
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(1, 0, 0)
  ]);
  // 创建管道几何体
  // 参数1：曲线对象，参数2：分段数，参数3：管道半径，参数4：管道分段数，参数5：是否闭合
  const geometry = new THREE.TubeGeometry(curve, 100, 0.2, 50, false);
  // 创建材质
  const material = new THREE.MeshBasicMaterial({
    color: "#F00",
    side: THREE.DoubleSide, //两面可见
    opacity: 0.5,
    transparent: true
  });
  // 创建网格对象
  const mesh = new THREE.Mesh(geometry, material);
  // 设置网格位置
  mesh.position.set(5, 5, 0);
  // 添加到场景中
  scene.add(mesh);
};

/* 旋转成型 */
const handleLatheGeometry = async () => {
  const curve = new THREE.SplineCurve([
    new THREE.Vector2(-1, 0),
    new THREE.Vector2(-0.5, -1),
    new THREE.Vector2(-1.5, -1.5),
    new THREE.Vector2(-1.5, -3),
    new THREE.Vector2(-1, -3.5),
    new THREE.Vector2(0, -3.5)
  ]);
  const geometry = new THREE.LatheGeometry(
    curve.getPoints(50),
    5,
    0,
    Math.PI * 2
  );
  // 图片正方体
  const texture = await new THREE.TextureLoader().load(
    qinghuaciMesh,
    () => {
      // 确保纹理加载完成后更新纹理
      texture.needsUpdate = true;
    },
    undefined, // 进度回调（可选）
    function (error) {
      console.error("纹理加载失败:", error);
    }
  );

  const mesh = new THREE.Mesh(geometry);
  mesh.material = new THREE.MeshBasicMaterial({
    map: texture
  });
  mesh.position.set(-6, 7, 0);
  const box3 = new THREE.Box3();
  box3.expandByObject(mesh);
  console.log("青花瓷花瓶box3", box3);
  const scale = new THREE.Vector3();
  box3.getSize(scale);
  console.log("青花瓷花瓶scale", scale);
  scene.add(mesh);
};

/* 轮廓填充 */
const handleShapeGeometry = () => {
  // 一组二维向量表示一个多边形轮廓坐标
  const pointsArr = [
    new THREE.Vector2(0, 0.6),
    new THREE.Vector2(0.3, 0),
    new THREE.Vector2(1, 0),
    new THREE.Vector2(0.5, -0.5),
    new THREE.Vector2(0.8, -1),
    new THREE.Vector2(0, -0.5),
    new THREE.Vector2(-0.8, -1),
    new THREE.Vector2(-0.5, -0.5),
    new THREE.Vector2(-1, 0),
    new THREE.Vector2(-0.3, 0)
  ];
  // 创建一个形状
  const shape = new THREE.Shape(pointsArr);
  // 创建几何体
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 1 //拉伸长度
    // bevelEnabled: false, //禁止倒角,默认true
    // bevelThickness: 0, //倒角尺寸:拉伸方向
    // bevelSegments: 10, //倒圆角：倒角细分精度，默认3
    // bevelSize: 1 //倒角尺寸:垂直拉伸方向
  });
  // 创建材质
  const material = new THREE.MeshBasicMaterial({
    color: "#00F",
    opacity: 0.7,
    transparent: true
  });
  // 创建网格对象
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(-7.5, 2, 0);
  scene.add(mesh);
};

/* 扫描ExtrudeGeometry */
const handleExtrudeGeometry = () => {
  const shape = new THREE.Shape([
    new THREE.Vector2(-1, 1.5),
    new THREE.Vector2(1.5, 1.7),
    new THREE.Vector2(-0.9, -1),
    new THREE.Vector2(1, -1.3),
    new THREE.Vector2(1.2, -1.4),
    new THREE.Vector2(-1.5, -1.2),
    new THREE.Vector2(0.1, 1.3),
    new THREE.Vector2(-1, 1.4)
  ]);
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, 1, 1),
    new THREE.Vector3(3, -3, 2.5),
    new THREE.Vector3(3.5, -3.5, 3)
  ]);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    steps: 100, // 扫描分段数
    extrudePath: curve, // 扫描路径
    bevelEnabled: true, // 倒角
    bevelThickness: 0, //倒角尺寸:拉伸方向
    bevelSegments: 10, //倒圆角：倒角细分精度，默认3
    bevelSize: 1 //倒角尺寸:垂直拉伸方向
  });
  const material = new THREE.MeshBasicMaterial({
    color: "#F40",
    opacity: 0.7,
    transparent: true
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(6, 8, 0);
  scene.add(mesh);
};

/* 打孔多边形 */
const handleShapeHoles = () => {
  const shape = new THREE.Shape([
    new THREE.Vector2(-2, 2),
    new THREE.Vector2(2, 2),
    new THREE.Vector2(2, -2),
    new THREE.Vector2(-2, -2)
  ]);
  const pathRange1 = new THREE.Path();
  pathRange1.absarc(-1, 1, 0.5, 0, Math.PI * 2, false);
  const pathRange2 = new THREE.Path();
  pathRange2.absarc(1, 1, 0.5, 0, Math.PI * 2, false);
  // 三角形
  const pathRange3 = new THREE.Path();
  pathRange3.moveTo(-1, 0);
  pathRange3.lineTo(1, 0);
  pathRange3.lineTo(0, -1);
  pathRange3.lineTo(-1, 0);
  // 添加孔
  shape.holes.push(pathRange1, pathRange2, pathRange3);
  // 创建几何体
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 1 //拉伸长度
  });
  // 创建材质
  const material = new THREE.MeshBasicMaterial({
    color: "#F00",
    opacity: 0.7,
    transparent: true
  });
  // 创建网格对象
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 10, 0);
  scene.add(mesh);
};

/* 顶点几何 */
const handleVertexGeometry = () => {
  const vertices = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 1]);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  // 设置颜色
  const colorsVertices = new Float32Array([1, 0, 0, 0, 0, 1, 0, 1, 0]);
  geometry.setAttribute("color", new THREE.BufferAttribute(colorsVertices, 3));
  // 创建材质
  const material = new THREE.PointsMaterial({
    vertexColors: true,
    side: THREE.DoubleSide
  });
  // 创建点对象
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(8, 1, 0);
  scene.add(mesh);
};

/* 曲线渐变 */
const handleCatmullRomCurve3 = () => {
  const geometry = new THREE.BufferGeometry();
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2, 1, 2),
    new THREE.Vector3(-1, 2, 1),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1, -2, -1),
    new THREE.Vector3(2, -1, -2)
  ]);
  const pointsArr = curve.getSpacedPoints(100);
  geometry.setFromPoints(pointsArr);
  // 设置颜色
  const pos = geometry.attributes.position;
  const count = pos.count; //顶点数量
  // 计算每个顶点的颜色值，曲线一点一对应
  const colorsArr = [];
  for (let i = 0; i < count; i++) {
    const percent = i / count; //点索引值相对所有点数量的百分比
    //根据顶点位置顺序大小设置颜色渐变
    // 红色分量从0到1变化，蓝色分量从1到0变化
    colorsArr.push(1 - percent, 0, percent); //蓝色到红色渐变色
  }
  //类型数组创建顶点颜色color数据
  const colors = new Float32Array(colorsArr);
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  // 创建材质
  const material = new THREE.LineBasicMaterial({
    vertexColors: true,
    side: THREE.DoubleSide
  });
  // 创建点对象
  const mesh = new THREE.Line(geometry, material);
  mesh.position.set(-6, 10, 0);
  scene.add(mesh);
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
.three-box {
  height: calc(100% - 30px);
  margin: 15px;
}
</style>
