import { $t } from "@/plugins/i18n";
import { newComponents } from "@/router/enums";

export default {
  path: "/newComponents",
  meta: {
    icon: "menu",
    title: $t("menus.newComponents"),
    rank: newComponents
  },
  children: [
    {
      path: "/newComponents/updateVue/index",
      name: "UpdateVue",
      component: () => import("@/views/newComponents/updateVue/index.vue"),
      meta: {
        title: $t("menus.upgradeVue"),
        keepAlive: true
      }
    },
    {
      path: "/newComponents/other/index",
      name: "",
      component: () => import("@/views/newComponents/other/index.vue"),
      meta: {
        title: $t("menus.comingSoon"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
