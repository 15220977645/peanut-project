import { addIcon } from "@iconify/vue/dist/offline";

/**
 * 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
 */

// 本地菜单图标，后端在路由的icon中返回对应的图标字符串并且前端在此处使用addIcon添加即可渲染菜单图标
import UbuntuFill from "@iconify-icons/ri/ubuntu-fill";
import Menu from "@iconify-icons/ep/menu";
import Edit from "@iconify-icons/ep/edit";
import HomeFilled from "@iconify-icons/ep/home-filled";
import computerLine from "@iconify-icons/ri/computer-line";
import TerminalWindowLine from "@iconify-icons/ri/terminal-window-line";

addIcon("ubuntuFill", UbuntuFill);
addIcon("terminalWindowLine", TerminalWindowLine);
addIcon("menu", Menu);
addIcon("edit", Edit);
addIcon("homeFilled", HomeFilled);
addIcon("computerLine", computerLine);
