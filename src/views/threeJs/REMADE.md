# Three 性能优化方式

## 思路

1. 场景优化：减少场景复杂度，优化渲染过程。（减少模型数量，合并模型，LOD 技术）
2. 资源管理：优化纹理、几何体等资源的使用。(压缩静态资源，使用压缩格式（如 ASTC、ETC、PVRTC）减少纹理内存占用。)
3. 渲染技术：利用高级渲染技术提升性能。
4. 动画与交互：优化动画和交互逻辑，减少计算开销。

- LOD

```
const lod = new THREE.LOD();
lod.addLevel(new THREE.Mesh(highDetailGeometry, material), 0);
lod.addLevel(new THREE.Mesh(mediumDetailGeometry, material), 5);
lod.addLevel(new THREE.Mesh(lowDetailGeometry, material), 10);
scene.add(lod);

- 合并模型

```

const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries([geometry1, geometry2]);

- 简化材质

```
使用轻量级材质（如MeshBasicMaterial或MeshLambertMaterial），避免复杂材质（如MeshPhongMaterial）。

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

- 自定义着色器

- 渲染优化

```

1. 使用 InstancedMesh 减少重复物体的绘制调用。

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial();
const instancedMesh = new THREE.InstancedMesh(geometry, material, count);

2. 视锥剔除，启用 frustumCulled 属性，避免渲染视野外的物体。
   mesh.frustumCulled = true;

- 动画与交互优化，控制渲染频率：
  通过 requestAnimationFrame 或时钟对象调整渲染频率，避免不必要的渲染。

```
const clock = new THREE.Clock();
const FPS = 30;
const renderInterval = 1 / FPS;
let lastTime = 0;

function animate(time) {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();
  if (delta > renderInterval) {
    renderer.render(scene, camera);
  }
}

- 使用WebWorker：将密集型任务（如数据解析、几何体计算）转移到WebWorker线程。

```

const worker = new Worker('worker.js');
worker.postMessage({ data: geometryData });

- 控制渲染频率：通过 requestAnimationFrame 或时钟对象调整渲染频率，避免不必要的渲染。

```
  const clock = new THREE.Clock();
  const FPS = 30;
  const renderInterval = 1 / FPS;
  let lastTime = 0;

  function animate(time) {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (delta > renderInterval) {
      renderer.render(scene, camera);
    }
  }
```
