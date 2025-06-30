<template>
  <div class="select-none">
    <img :src="bg" class="wave" />
    <div class="flex-c absolute right-5 top-3">
      <!-- 国际化 -->
      <el-dropdown trigger="click">
        <globalization
          class="hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300"
        />
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'zh')"
              :class="['dark:!text-white', getDropdownItemClass(locale, 'zh')]"
              @click="translationCh"
            >
              <IconifyIconOffline
                class="check-zh"
                v-show="locale === 'zh'"
                :icon="Check"
              />
              简体中文
            </el-dropdown-item>
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'en')"
              :class="['dark:!text-white', getDropdownItemClass(locale, 'en')]"
              @click="translationEn"
            >
              <span class="check-en" v-show="locale === 'en'">
                <IconifyIconOffline :icon="Check" />
              </span>
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="login-container">
      <div class="img">
        <component :is="toRaw(illustration)" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <avatar class="avatar" />
          <Motion>
            <h2 class="outline-none">
              <TypeIt :values="[title]" :cursor="false" :speed="150" />
            </h2>
          </Motion>

          <el-form
            v-if="currentPage === 0"
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="loginRules"
            size="large"
          >
            <Motion :delay="100">
              <el-form-item
                :rules="[
                  {
                    required: true,
                    message: transformI18n($t('login.usernameReg')),
                    trigger: 'blur'
                  }
                ]"
                prop="username"
              >
                <el-input
                  clearable
                  v-model="ruleForm.username"
                  :placeholder="t('login.username')"
                  :prefix-icon="useRenderIcon(User)"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input
                  clearable
                  show-password
                  v-model="ruleForm.password"
                  :placeholder="t('login.password')"
                  :prefix-icon="useRenderIcon(Lock)"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="200">
              <el-form-item prop="verifyCode">
                <el-input
                  clearable
                  v-model="ruleForm.verifyCode"
                  :placeholder="t('login.verifyCode')"
                  :prefix-icon="useRenderIcon('ri:shield-keyhole-line')"
                >
                  <template v-slot:append>
                    <ReImageVerify v-model:code="imgCode" />
                  </template>
                </el-input>
              </el-form-item>
            </Motion>

            <Motion :delay="250">
              <el-form-item>
                <div class="w-full h-[20px] flex justify-between items-center">
                  <el-checkbox v-model="checked">
                    {{ t("login.remember") }}
                  </el-checkbox>
                  <el-button
                    link
                    type="primary"
                    @click="useUserStoreHook().SET_CURRENTPAGE(4)"
                  >
                    {{ t("login.forget") }}
                  </el-button>
                </div>
                <el-button
                  class="w-full mt-4"
                  size="default"
                  type="primary"
                  :loading="loading"
                  @click="onLogin(ruleFormRef)"
                >
                  {{ t("login.login") }}
                </el-button>
              </el-form-item>
            </Motion>

            <Motion :delay="300">
              <el-form-item>
                <div class="w-full h-[20px] flex justify-between items-center">
                  <el-button
                    v-for="(item, index) in operates"
                    :key="index"
                    class="w-full mt-4"
                    size="default"
                    @click="useUserStoreHook().SET_CURRENTPAGE(index + 1)"
                  >
                    {{ t(item.title) }}
                  </el-button>
                </div>
              </el-form-item>
            </Motion>
          </el-form>
          <!-- 游客进入 -->
          <Motion v-if="currentPage === 0" :delay="350">
            <el-form-item>
              <el-divider>
                <p class="text-gray-500 text-xs">
                  {{ t("login.touristsEnter") }}
                </p>
              </el-divider>
              <div class="tourists flex">
                <el-button @click="loginFun">{{
                  t("login.touristsEnter")
                }}</el-button>
              </div>
            </el-form-item>
          </Motion>
          <!-- 手机号登录 -->
          <Phone v-if="currentPage === 1" />
          <!-- 二维码登录 -->
          <QrCode v-if="currentPage === 2" />
          <!-- 注册 -->
          <Regist v-if="currentPage === 3" />
          <!-- 忘记密码 -->
          <Update v-if="currentPage === 4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import { toRaw } from "vue";
import { useI18n } from "vue-i18n";
import Motion from "./utils/motion";
import { useRouter } from "vue-router";
import { loginRules } from "./utils/rule";
import TypeIt from "@/components/ReTypeit";
import Phone from "./components/phone.vue";
import QrCode from "./components/qrCode.vue";
import Regist from "./components/regist.vue";
import Update from "./components/update.vue";
import { useNav } from "@/layout/hooks/useNav";
import type { FormInstance } from "element-plus";
import { $t, transformI18n } from "@/plugins/i18n";
import { operates } from "./utils/enums";
import { useLayout } from "@/layout/hooks/useLayout";
import { useUserStoreHook } from "@/store/modules/user";
import { initRouter, getTopMenu } from "@/router/utils";
import { bg, avatar, illustration } from "./utils/static";
import { ReImageVerify } from "@/components/ReImageVerify";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { useTranslationLang } from "@/layout/hooks/useTranslationLang";
import { useDataThemeChange } from "@/layout/hooks/useDataThemeChange";
import globalization from "@/assets/svg/globalization.svg?component";
import Lock from "@iconify-icons/ri/lock-fill";
import Check from "@iconify-icons/ep/check";
import User from "@iconify-icons/ri/user-3-fill";
// 练习
import testTs from "@/utils/test";

const imgCode = ref("");
const router = useRouter();
const loading = ref(false);
const checked = ref(false);
const ruleFormRef = ref<FormInstance>();
const currentPage = computed(() => useUserStoreHook().currentPage);
const { t } = useI18n();
const { initStorage } = useLayout();
initStorage();
const { dataThemeChange } = useDataThemeChange();
dataThemeChange();
const { title, getDropdownItemStyle, getDropdownItemClass } = useNav();
const { locale, translationCh, translationEn } = useTranslationLang();

const ruleForm = reactive({
  username: "yaosheng",
  password: "admin123",
  verifyCode: ""
});

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      loginFun();
    } else {
      loading.value = false;
      return fields;
    }
  });
};

/* 剥离登录代码 */
async function loginFun() {
  const res = await useUserStoreHook().loginByUsername({
    username: ruleForm.username,
    password: "admin123"
  });
  if (res.success) {
    // 获取后端路由
    await initRouter();
    router.push(getTopMenu(true).path);
  }
}

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
  if (code === "Enter") {
    onLogin(ruleFormRef.value);
  }
}

onMounted(() => {
  window.document.addEventListener("keypress", onkeypress);
  testTs();
});

onBeforeUnmount(() => {
  window.document.removeEventListener("keypress", onkeypress);
});

watch(imgCode, value => {
  useUserStoreHook().SET_VERIFYCODE(value);
});
</script>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

.tourists {
  justify-content: center;
  width: 100%;
}

.translation {
  :deep(.el-dropdown-menu__item) {
    padding: 5px 40px;
  }

  .check-zh {
    position: absolute;
    left: 20px;
  }

  .check-en {
    position: absolute;
    left: 20px;
  }
}
</style>
