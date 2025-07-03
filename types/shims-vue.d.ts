declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.scss" {
  const scss: Record<string, string>;
  export default scss;
}

declare module "vue-virtual-scroller";
declare module "vuedraggable/src/vuedraggable";
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 添加图片等静态资源的类型声明
const src: string;
declare module "*.png" {
  export default src;
}
declare module "*.jpg" {
  export default src;
}
declare module "*.jpeg" {
  export default src;
}
declare module "*.gif" {
  export default src;
}
declare module "*.svg" {
  export default src;
}
declare module "*.webp" {
  export default src;
}
declare module "*.glb" {
  export default src;
}
declare module "*.gltf" {
  export default src;
}
