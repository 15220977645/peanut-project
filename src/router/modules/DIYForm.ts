import { $t } from "@/plugins/i18n";
import { newComponents } from "@/router/enums";

export default {
  path: "/formEdit",
  meta: {
    icon: "terminalWindowLine",
    title: $t("menus.DIYForm"),
    rank: newComponents
  },
  children: [
    {
      path: "/formEdit/createForm/index",
      name: "CreateForm",
      component: () => import("@/views/formEdit/createForm/index.vue"),
      meta: {
        title: $t("menus.createForm"),
        keepAlive: true
      }
    },
    {
      path: "/formEdit/other/index",
      name: "",
      component: () => import("@/views/formEdit/other/index.vue"),
      meta: {
        title: $t("menus.comingSoon"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
