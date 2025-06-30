import { $t } from "@/plugins/i18n";
import { threeJs } from "@/router/enums";

export default {
  path: "/threeJs",
  redirect: "/threeJs/index",
  meta: {
    icon: "menu",
    title: $t("menus.threeTemplate"),
    rank: threeJs
  },
  children: [
    {
      path: "/threeJs/first3DDemo/index",
      name: "First3DDemo",
      component: () => import("@/views/threeJs/first3DDemo/index.vue"),
      meta: {
        title: $t("menus.solid"),
        keepAlive: true
      }
    },
    {
      path: "/threeJs/gltfDemo/index",
      name: "GltfDemo",
      component: () => import("@/views/threeJs/gltfDemo/index.vue"),
      meta: {
        title: $t("menus.gltfDemo"),
        keepAlive: true
      }
    },
    {
      path: "/threeJs/environmentMap/index",
      name: "EnvironmentMap",
      component: () => import("@/views/threeJs/environmentMap/index.vue"),
      meta: {
        title: $t("menus.environmentMap"),
        keepAlive: true
      }
    },
    {
      path: "/threeJs/pipelineRoamingCase/index",
      name: "PipelineRoamingCase",
      component: () => import("@/views/threeJs/pipelineRoamingCase/index.vue"),
      meta: {
        title: $t("menus.pipelineRoamingCase"),
        keepAlive: true
      }
    },
    {
      path: "/threeJs/integratedTraining/index",
      name: "IntegratedTraining",
      component: () => import("@/views/threeJs/integratedTraining/index.vue"),
      meta: {
        title: $t("menus.integratedTraining"),
        keepAlive: true
      }
    },
    {
      path: "/threeJs/other/index",
      name: "",
      component: () => import("@/views/threeJs/other/index.vue"),
      meta: {
        title: $t("menus.comingSoon"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
