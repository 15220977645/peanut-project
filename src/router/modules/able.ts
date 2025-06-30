import { $t } from "@/plugins/i18n";
import { able } from "@/router/enums";

export default {
  path: "/able",
  redirect: "/able/watermark",
  meta: {
    icon: "ubuntuFill",
    title: $t("menus.hsAble"),
    rank: able
  },
  children: [
    {
      path: "/able/watermark",
      name: "WaterMark",
      component: () => import("@/views/able/watermark.vue"),
      meta: {
        title: $t("menus.hsWatermark")
      }
    },
    {
      path: "/able/print",
      name: "Print",
      component: () => import("@/views/able/print.vue"),
      meta: {
        title: $t("menus.hsPrint")
      }
    },
    {
      path: "/able/barcode",
      name: "BarCode",
      component: () => import("@/views/able/barcode.vue"),
      meta: {
        title: $t("menus.hsBarcode")
      }
    },
    {
      path: "/able/qrcode",
      name: "QrCode",
      component: () => import("@/views/able/qrcode.vue"),
      meta: {
        title: $t("menus.hsQrcode")
      }
    },
    {
      path: "/able/virtualList",
      name: "VirtualList",
      component: () => import("@/views/able/virtual-list/index.vue"),
      meta: {
        title: $t("menus.hsVirtualList")
      }
    },
    {
      path: "/able/execl",
      name: "Execl",
      component: () => import("@/views/able/execl.vue"),
      meta: {
        title: $t("menus.hsExecl")
      }
    },
    {
      path: "/able/infiniteScroll",
      name: "InfiniteScroll",
      component: () => import("@/views/able/infinite-scroll.vue"),
      meta: {
        title: $t("menus.hsInfiniteScroll")
      }
    }
  ]
} as RouteConfigsTable;
