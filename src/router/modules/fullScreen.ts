import { $t } from "@/plugins/i18n";
import { fullScreen } from "@/router/enums";

export default {
  path: "/fullScreen",
  meta: {
    icon: "computerLine",
    title: $t("menus.fullScreen"),
    rank: fullScreen
  },
  children: [
    {
      path: "/fullScreen/hngsChargeScreen/index",
      name: "HngsChargeScreen",
      component: () => import("@/views/fullScreen/hngsChargeScreen/index.vue"),
      meta: {
        title: $t("menus.hngsChargeScreen"),
        keepAlive: true
      }
    },
    {
      path: "/fullScreen/foodSafe/index",
      name: "FoodFullScreen",
      component: () => import("@/views/fullScreen/foodSafe/index.vue"),
      meta: {
        title: $t("menus.foodFullScreen"),
        keepAlive: true
      }
    },
    {
      path: "/fullScreen/megoFood/index",
      name: "MegoFood",
      component: () => import("@/views/fullScreen/megoFood/index.vue"),
      meta: {
        title: $t("menus.tmsScreen"),
        keepAlive: true
      }
    },
    {
      path: "/fullScreen/crm/index",
      name: "CrmFullScreen",
      component: () => import("@/views/fullScreen/crm/index.vue"),
      meta: {
        title: $t("menus.crmFullScreen"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
