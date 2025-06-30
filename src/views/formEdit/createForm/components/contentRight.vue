<template>
  <div class="tab-container">
    <el-tabs v-model="activeName" stretch>
      <el-tab-pane label="表单属性" name="formProp">
        <el-form
          ref="form"
          :model="requestData"
          label-position="top"
          :rules="rules"
        >
          <el-form-item label="表单名称" prop="name">
            <el-input v-model="requestData.name" placeholder="表单名称" />
          </el-form-item>
          <el-form-item label="表单分类" prop="formClassId" class="form-item">
            <el-select v-model="requestData.formClassId" placeholder="请选择">
              <el-option
                v-for="(item, i) in formType"
                :key="i"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="表单类型" class="form-item">
            <el-select v-model="requestData.type" placeholder="请选择">
              <el-option
                v-for="(val, key) in enums.typeEnums"
                :key="key"
                :label="val"
                :value="Number(key)"
              />
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="打印模板">
            <el-select v-model="formProp.templateId" placeholder="请选择">
              <el-option v-for="(item, i) in templates" :key="i" :label="template.name" :value="template.id" />
            </el-select>
          </el-form-item> -->
          <el-form-item label="排列方式">
            <el-radio-group v-model="requestData.layout" @change="changeLayout">
              <el-radio-button :label="0">单列</el-radio-button>
              <el-radio-button :label="1">双列</el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="表单描述">
            <el-input
              v-model="requestData.description"
              :autosize="{ minRows: 10, maxRows: 10 }"
              type="textarea"
              placeholder="请输入内容"
            />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="字段属性" name="itemProp">
        <el-form
          v-if="activeIndex !== null && childPropIndex === null"
          ref="itemForm"
          label-position="top"
        >
          <template
            v-for="(item, index) in requestData.fields[activeIndex].attribute"
          >
            <el-form-item
              v-if="![20, 21, 22].includes(item.key)"
              :key="`${item.vModel}-${item.key}`"
              :label="item.title"
            >
              <el-input
                v-if="
                  item.elType === 'input' ||
                  ([0, 1].includes(requestData.fields[activeIndex].key) &&
                    item.key === 2)
                "
                v-model="item[item.vModel]"
                placeholder="请输入"
                @input="val => handleChangeItem(val, index, item.isEchoNow)"
              />
              <el-input-number
                v-else-if="
                  item.elType === 'inputNumber' ||
                  ([2].includes(requestData.fields[activeIndex].key) &&
                    item.key === 2)
                "
                v-model="item[item.vModel]"
                :min="[5].includes(item.key) ? 0 : -9999999"
                :max="9999999"
                controls-position="right"
                step-strictly
                placeholder="请输入"
                @input="val => handleChangeItem(val, index, item.isEchoNow)"
              />
              <el-select
                v-else-if="
                  [4, 5, 6].includes(requestData.fields[activeIndex].key) &&
                  item.key === 2
                "
                v-model="item[item.vModel]"
                :multiple="requestData.fields[activeIndex].key === 5"
                clearable
                @change="val => handleChangeItem(val, index, item.isEchoNow)"
              >
                <el-option
                  v-for="(item, i) in defaultOption('')"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-select
                v-else-if="
                  [4, 12].includes(item.key) && item.elType === 'select'
                "
                v-model="item[item.vModel]"
                @change="val => handleChangeItem(val, index, item.isEchoNow)"
              >
                <el-option
                  v-for="(item, i) in item.options"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-checkbox
                v-else-if="item.elType === 'checkbox'"
                v-model="item[item.vModel]"
                :label="item.checkboxLabel"
                @change="val => handleChangeItem(val, index, item.isEchoNow)"
              />
              <el-radio-group
                v-else-if="item.elType === 'radioGroup'"
                v-model="item[item.vModel]"
                @change="val => handleChangeItem(val, index, item.isEchoNow)"
              >
                <el-radio-button
                  v-for="(item, i) in item.options"
                  :key="i"
                  :label="item.value"
                  >{{ item.label }}</el-radio-button
                >
              </el-radio-group>
              <!-- 单行文本下拉 -->
              <el-tooltip
                v-else-if="[6, 15, 16, 17].includes(item.key)"
                class="item"
                effect="dark"
                content="请注意对应组件是否已被使用"
                placement="top-start"
              >
                <el-select v-model="item[item.vModel]">
                  <el-option
                    v-for="(item, i) in textList()"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
              <!-- 上级选项 -->
              <el-tooltip
                v-else-if="item.key === 9"
                class="item"
                effect="dark"
                content="请注意其他下拉组件的层级关系，防止关系闭环"
                placement="top-start"
              >
                <el-select v-model="item[item.vModel]" clearable filterable>
                  <el-option
                    v-for="(item, i) in selectList()"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
              <!-- 设置上级科目 -->
              <el-select
                v-else-if="item.key === 14"
                v-model="item[item.vModel]"
              >
                <el-option
                  v-for="(item, i) in subjectList()"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <!-- 关联表 -->
              <el-select
                v-else-if="item.key === 18"
                v-model="item[item.vModel]"
                :loading="loadFormList"
                :remote-method="getFormData"
                filterable
                clearable
                remote
                placeholder="请选择"
                @focus="getFormData('')"
              >
                <el-option
                  v-for="(item, i) in formList"
                  :key="i"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
              <template v-if="[10, 19].includes(item.key)" #default>
                <!-- 选项设置 -->
                <div v-if="item.key === 10" class="option-field">
                  <el-table :data="item.value" class="options-table">
                    <el-table-column label="" width="40px" align="center">
                      <template v-slot="{ $index }">
                        <div>
                          <el-button
                            :icon="Delete"
                            type="danger"
                            circle
                            size="small"
                            title="删除"
                            @click="delOptions(index, $index)"
                          />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column
                      v-if="
                        requestData.fields[activeIndex].attribute[index - 1]
                          .parentVModel
                      "
                      label="上级选项"
                    >
                      <template v-slot="{ row }">
                        <div class="options-select">
                          <el-select
                            v-model="row.parentVModel"
                            clearable
                            filterable
                          >
                            <el-option
                              v-for="(item, i) in parentOption(index)"
                              :key="i"
                              :label="item.label"
                              :value="item.value"
                            />
                          </el-select>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column label="选项">
                      <template v-slot="{ row, $index }">
                        <div class="options-input">
                          <el-input
                            v-model="row.label"
                            @input="
                              val => handleOptionInput(val, index, $index)
                            "
                          />
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-button
                    size="small"
                    type="primary"
                    @click="addOptions(index)"
                    >+ 添加选项</el-button
                  >
                </div>
                <!-- 子表单字段 -->
                <div v-if="item.key === 19" class="child-field">
                  <ChildFormProp
                    :ref="`childProp-${index}`"
                    :prop-index="index"
                    :prop-list="requestData.fields[activeIndex].fields"
                    @handleChangeChild="handleChangeChild"
                  />
                </div>
              </template>
            </el-form-item>
          </template>
        </el-form>
        <!-- 子表单 -->
        <el-form
          v-if="
            activeIndex !== null &&
            childPropIndex !== null &&
            requestData.fields[activeIndex].key === 13
          "
          ref="itemForm"
          label-position="top"
        >
          <template
            v-for="(item, index) in requestData.fields[activeIndex].fields[
              childPropIndex
            ].attribute"
          >
            <el-form-item
              v-if="![11, 12].includes(item.key)"
              :key="`${item.vModel}-${item.key}`"
              :label="item.title"
            >
              <el-input
                v-if="
                  item.elType === 'input' ||
                  ([0, 1].includes(
                    requestData.fields[activeIndex].fields[childPropIndex].key
                  ) &&
                    item.key === 2)
                "
                v-model="item[item.vModel]"
                placeholder="请输入"
                @input="
                  val => handleChangeChildProp(val, index, item.isEchoNow)
                "
              />
              <el-input-number
                v-else-if="
                  item.elType === 'inputNumber' ||
                  ([2].includes(
                    requestData.fields[activeIndex].fields[childPropIndex].key
                  ) &&
                    item.key === 2)
                "
                v-model="item[item.vModel]"
                controls-position="right"
                step-strictly
                placeholder="请输入"
                @input="
                  val => handleChangeChildProp(val, index, item.isEchoNow)
                "
              />
              <el-select
                v-else-if="
                  [6].includes(
                    requestData.fields[activeIndex].fields[childPropIndex].key
                  ) && item.key === 2
                "
                v-model="item[item.vModel]"
                :multiple="
                  requestData.fields[activeIndex].fields[childPropIndex].key ===
                  5
                "
                clearable
                @change="
                  val => handleChangeChildProp(val, index, item.isEchoNow)
                "
              >
                <el-option
                  v-for="(item, i) in defaultOption('child')"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-select
                v-else-if="[4].includes(item.key) && item.elType === 'select'"
                v-model="item[item.vModel]"
                clearable
                @change="
                  val => handleChangeChildProp(val, index, item.isEchoNow)
                "
              >
                <el-option
                  v-for="(item, i) in item.options"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-checkbox
                v-else-if="item.elType === 'checkbox'"
                v-model="item[item.vModel]"
                :label="item.checkboxLabel"
                @change="
                  val => handleChangeChildProp(val, index, item.isEchoNow)
                "
              />
              <!-- 单行文本下拉 -->
              <el-tooltip
                v-else-if="[6, 15, 16, 17].includes(item.key)"
                class="item"
                effect="dark"
                content="请注意对应组件是否已被使用"
                placement="top-start"
              >
                <el-select v-model="item[item.vModel]" clearable>
                  <el-option
                    v-for="(item, i) in textList('child')"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
              <!-- 上级选项 -->
              <el-tooltip
                v-else-if="item.key === 9"
                class="item"
                effect="dark"
                content="请注意其他下拉组件的层级关系，防止关系闭环"
                placement="top-start"
              >
                <el-select v-model="item[item.vModel]" clearable filterable>
                  <el-option
                    v-for="(item, i) in selectList('child')"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
              <!-- 设置上级科目 -->
              <el-select
                v-else-if="item.key === 14"
                v-model="item[item.vModel]"
                clearable
              >
                <el-option
                  v-for="(item, i) in subjectList('')"
                  :key="i"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <!-- 子表单数字字段汇总中文大写 -->
              <el-tooltip
                v-else-if="[20].includes(item.key)"
                class="item"
                effect="dark"
                content="请注意对应组件是否已被使用"
                placement="top-start"
              >
                <el-select v-model="item[item.vModel]" clearable>
                  <el-option
                    v-for="(item, i) in textList()"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
              <!-- 子表单数字字段汇总小写 -->
              <el-tooltip
                v-else-if="[21].includes(item.key)"
                class="item"
                effect="dark"
                content="请注意对应组件是否已被使用"
                placement="top-start"
              >
                <el-select v-model="item[item.vModel]" clearable>
                  <el-option
                    v-for="(item, i) in numberList()"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-tooltip>
              <template v-if="[10, 19].includes(item.key)" #default>
                <!-- 选项设置 -->
                <div v-if="item.key === 10">
                  <el-table :data="item.value" class="options-table">
                    <el-table-column label="" width="40px" align="center">
                      <template v-slot="{ $index }">
                        <div>
                          <el-button
                            :icon="Delete"
                            type="danger"
                            circle
                            size="small"
                            title="删除"
                            @click="delOptions(index, $index)"
                          />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column
                      v-if="showChildParentOption(index)"
                      label="上级选项"
                    >
                      <template v-slot="{ row }">
                        <div class="options-select">
                          <el-select
                            v-model="row.parentVModel"
                            clearable
                            filterable
                          >
                            <el-option
                              v-for="(item, i) in parentOption(index, 'child')"
                              :key="i"
                              :label="item.label"
                              :value="item.value"
                            />
                          </el-select>
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column label="选项">
                      <template v-slot="{ row, $index }">
                        <div class="options-input">
                          <el-input
                            v-model="row.label"
                            @input="
                              val =>
                                handleOptionInput(val, index, $index, 'child')
                            "
                          />
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-button
                    size="small"
                    type="primary"
                    @click="addOptions(index, 'child')"
                    >+ 添加选项</el-button
                  >
                </div>
              </template>
              <template v-if="item.key === 22">
                <div>
                  <el-button type="primary" @click="openComputeDialog"
                    >公式编辑</el-button
                  >
                  <el-dialog
                    v-if="computeDialog"
                    v-model:visible="computeDialog"
                    :close-on-click-modal="false"
                    title="编辑运算公式"
                    width="500px"
                  >
                    <!-- <FormulaCompute
                      ref="formulaCompute"
                      :formula-value="item[item.vModel]"
                      :prop-list="numberList('child')"
                      @sendInputResult="getComputeResult"
                    /> -->
                    <template #footer>
                      <div>
                        <el-button @click="computeDialog = false"
                          >取消</el-button
                        >
                        <el-button type="primary" @click="handleSureCompute"
                          >确认</el-button
                        >
                      </div>
                    </template>
                  </el-dialog>
                </div>
              </template>
            </el-form-item>
          </template>
          <el-button
            :icon="DArrowLeft"
            class="back-child-field"
            @click="setChildTable"
            >返回子表单</el-button
          >
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from "vue";
import { Delete, DArrowLeft } from "@element-plus/icons-vue";
// import FormulaCompute from "@/components/FormulaCompute.vue";
import formConfig from "../../components/formConfig.ts";
import handleForm from "../../components/handleForm.ts";
import ChildFormProp from "./childFormProp.vue";
import { Bus } from "./bus";

const enums = ref({});
const activeName = ref("formProp");
const formType = ref([]);
const formList = ref([]);
const loadFormList = ref(false);
const rules = ref({
  name: [{ required: true, message: "请输入表单名称", trigger: "change" }],
  formClassId: [{ required: true, message: "请输入表单分类", trigger: "blur" }]
});
const activeIndex = ref(null);
const childPropIndex = ref(null);
const requestData = reactive({
  name: "",
  formClassId: null,
  type: "",
  externalUuid: "",
  // templateId: '',
  layout: "",
  description: "",
  fields: [] // JSON字符串的表单信息
});
const computeDialog = ref(false);
let computeResult = "";
// const formulaCompute = ref();
let computedStatus = false;

/* 单行文本下拉 */
const textList = computed(() => type => {
  const configData = JSON.parse(JSON.stringify(requestData));
  const tarFields =
    type === "child"
      ? configData.fields[activeIndex.value].fields
      : configData.fields;
  let list = tarFields.map(item => {
    if (item.type === "text")
      return {
        label: item.attribute[0].value || "单行文本",
        value: item.vModel
      };
  });
  list = list.filter(item => item);
  return list;
});
/* 默认值下拉 */
const defaultOption = computed(() => type => {
  const tarProp = requestData.fields[activeIndex.value];
  const list =
    type === "child"
      ? tarProp.fields[childPropIndex.value].attribute
      : tarProp.attribute;
  for (const iterator of list) {
    if (iterator.key === 10) return iterator.value;
  }
  return [];
});
/* 子表单数字字段汇总小写 */
const numberList = computed(() => type => {
  const configData = JSON.parse(JSON.stringify(requestData));
  const tarFields =
    type === "child"
      ? configData.fields[activeIndex.value].fields
      : configData.fields;
  let list = tarFields.map(item => {
    if (item.type === "number")
      return { label: item.attribute[0].value || "数字", value: item.vModel };
  });
  list = list.filter(item => item);
  return list;
});
/* 子表单选项设置是否显示上级选项 */
const showChildParentOption = computed(() => index => {
  const fields = requestData.fields[activeIndex.value].fields;
  const isHaveParent =
    !!fields[childPropIndex.value].attribute[index - 1].parentVModel;
  return isHaveParent;
});
/* 上级选项 */
const selectList = computed(() => type => {
  return handleSuperiorSelect("select", "下拉单选框", type);
});
/* 上级科目 */
const subjectList = computed(() => type => {
  return handleSuperiorSelect("subject", "科目", type);
});
/* 上级选项下拉 */
const parentOption = computed(() => (index, type) => {
  let tarItemAttribute = [];
  let tarFields = [];
  if (type === "child") {
    tarItemAttribute =
      requestData.fields[activeIndex.value].fields[childPropIndex.value]
        .attribute;
    tarFields = requestData.fields[activeIndex.value].fields;
  } else {
    tarItemAttribute = requestData.fields[activeIndex.value].attribute;
    tarFields = requestData.fields;
  }
  if (!tarItemAttribute[index - 1]) return [];
  const parentVModel = tarItemAttribute[index - 1].parentVModel;
  const parentItem = tarFields.find(item => item.vModel === parentVModel);
  if (!parentItem) return [];
  let list = [];
  for (const item of parentItem.attribute) {
    if (item.vModel === "options") list = item.value;
  }
  return list;
});

/* 初始化 */
function init() {
  getFormData();
  listenChangeForm();
  listenActiveItem();
  listenSendFormData();
  listenDrop();
  listenActiveChildItem();
}

/* 获取表单列表 */
function getFormData(val) {
  return val;
}

/* 设置上级下拉 */
function handleSuperiorSelect(name, label, type) {
  let tarFields = [];
  let tarFormItem = null;
  if (type === "child") {
    tarFields = requestData.fields[activeIndex.value].fields;
    tarFormItem = tarFields[childPropIndex.value];
  } else {
    tarFields = requestData.fields;
    tarFormItem = tarFields[activeIndex.value];
  }
  let list = tarFields.map(item => {
    const optionItem = {
      label: item.attribute[0].value || label,
      value: item.vModel
    };
    if (item.type === name && tarFormItem.vModel !== item.vModel)
      return optionItem;
  });
  list = list.filter(item => item);
  return list;
}

/* 动态生成单个字段属性 */
function listenChangeForm() {
  Bus.on("changeForm", dataArr => {
    const data = dataArr[0];
    const delI = dataArr[1];
    // 新增else删除
    const attribute = [];
    let activeI = null;
    if (!delI) {
      data[data.length - 1].itemProp.forEach(item => {
        if (![20, 21, 22].includes(item)) {
          const tarProp = JSON.parse(
            JSON.stringify(formConfig.propItemData[item])
          );
          tarProp[tarProp.vModel] = tarProp.value;
          if (tarProp.vModel === "label")
            tarProp.label =
              data[data.length - 1].key === 7 ? "" : data[data.length - 1].text;
          if (tarProp.vModel === "placeholder")
            tarProp.placeholder = data[data.length - 1].placeholder;
          if (tarProp.vModel === "layout") tarProp.layout = requestData.layout;
          if (item === 2) {
            if (data[data.length - 1].key === 5) tarProp.defaultValue = [];
            if (data[data.length - 1].key === 2) tarProp.defaultValue = 0;
          }
          attribute.push(tarProp);
        }
      });
      requestData.fields.push({ ...data[data.length - 1], attribute });
      activeI = requestData.fields.length - 1;
    } else {
      requestData.fields.splice(delI, 1);
      if (delI >= 0 && delI < requestData.fields.length - 1) activeI = delI;
      else if (delI >= requestData.fields.length - 1)
        activeI = requestData.fields.length - 1;
      else activeI = null;
    }
    handleActive(activeI);
  });
}

/* 打开公式弹窗 */
function openComputeDialog() {
  computeDialog.value = true;
}
/* 监听拖拽切换顺序 */
function listenDrop() {
  Bus.on("handleDrop", data => {
    const fields = JSON.parse(JSON.stringify(requestData.fields));
    const currentTar = JSON.parse(
      JSON.stringify(requestData.fields[data.startIndex])
    );
    fields.splice(data.startIndex, 1);
    fields.splice(data.currentIndex, 0, currentTar);
    requestData.fields = fields;
    if (activeIndex.value === data.startIndex)
      activeIndex.value = data.currentIndex;
    else {
      const i =
        data.startIndex < activeIndex.value
          ? activeIndex.value - 1
          : activeIndex.value + 1;
      activeIndex.value = i;
    }
  });
}

/* 被触发获取表单数据 */
function listenSendFormData() {
  Bus.on("getFormData", data => {
    requestData.useType = data;
    console.log(requestData);
    const newRequestData = JSON.parse(JSON.stringify(requestData));
    newRequestData.fields = handleForm.handleFormResult(newRequestData.fields);
    Bus.emit("sendFormData", newRequestData);
  });
}

/* 处理聚集子表单字段 */
function listenActiveChildItem() {
  Bus.on("activeChildItem", dataArr => {
    const index = dataArr[1];
    childPropIndex.value = index;
  });
}

/* 子表单更改字段 */
function handleChangeChild(data, index, type) {
  const tarProp = { ...requestData.fields[activeIndex.value] };
  if (!data) {
    const tarChildProp = tarProp.value[index];
    tarProp.value.splice(index, 1);
    if (type !== "del")
      tarProp.value.splice(index + (type === "down" ? 1 : -1), 0, tarChildProp);
    tarProp.value = tarProp.value.filter(item => item);
    tarProp.fields = tarProp.value;
    requestData.fields[activeIndex.value] = tarProp;
    return;
  }
  tarProp.value[index] = data;
  tarProp.value = tarProp.value.filter(item => item);
  tarProp.fields[index] = tarProp.value[index];
  requestData.fields[activeIndex.value] = tarProp;
}

/* 更改子表单任一属性字段 */
function handleChangeChildProp(val, index, isEchoNow) {
  const tarProp = requestData.fields[activeIndex.value];
  const tarAttribute = tarProp.fields[childPropIndex.value].attribute;
  tarAttribute[index].value = val;
  if (isEchoNow) {
    const data = {
      tarChild: tarProp.fields[childPropIndex.value],
      index: childPropIndex.value,
      propKey: tarAttribute[index].key,
      title: tarAttribute[index].title,
      vModel: tarAttribute[index].vModel,
      value: tarAttribute[index].value
    };
    data[data.vModel] = data.value;
    Bus.emit("handleChangeItem", {
      index: activeIndex.value,
      propKey: 19,
      value: tarProp.fields,
      vModel: "fields"
    });
  }
}

/* 返回设置子表单 */
function setChildTable() {
  Bus.emit("activeItem", [activeIndex.value]);
}

/* 处理聚焦表单 */
function listenActiveItem() {
  Bus.on("activeItem", dataArr => {
    handleActive(dataArr[0]);
    childPropIndex.value = null;
  });
}

/* 更改聚焦 */
function handleActive(index) {
  if (activeIndex.value === index) return;
  activeIndex.value = index < 0 ? null : index;
  activeName.value = index < 0 ? "formProp" : "itemProp";
}

/* 更改任一属性字段 */
function handleChangeItem(val, index, isEchoNow) {
  const tarAttribute = requestData.fields[activeIndex.value].attribute;
  tarAttribute[index].value = val;
  tarAttribute[index][tarAttribute[index].vModel] = val;
  if (isEchoNow) {
    const data = {
      index: activeIndex.value,
      propKey: tarAttribute[index].key,
      title: tarAttribute[index].title,
      vModel: tarAttribute[index].vModel,
      value: tarAttribute[index].value
    };
    data[data.vModel] = data.value;
    Bus.emit("handleChangeItem", data);
  }
}

/* 添加选项 */
function addOptions(index, type) {
  let tarAttribute = null;
  if (type === "child")
    tarAttribute =
      requestData.fields[activeIndex.value].fields[childPropIndex.value]
        .attribute;
  else tarAttribute = requestData.fields[activeIndex.value].attribute;
  const len = tarAttribute[index].value.length + 1;
  tarAttribute[index].value.push({ label: `选项${len}`, value: len });
  tarAttribute[index].value.forEach((item, index) => {
    item.value = index;
  });
  if (type === "child")
    handleChangeChildProp(tarAttribute[index].value, index, false);
  else handleChangeItem(tarAttribute[index].value, index, true);
}

/* 删除选项 */
function delOptions(index, delI, type) {
  let tarAttribute = null;
  if (type === "child")
    tarAttribute =
      requestData.fields[activeIndex.value].fields[childPropIndex.value]
        .attribute;
  else tarAttribute = requestData.fields[activeIndex.value].attribute;
  requestData.fields[activeIndex.value].attribute[index].value.splice(delI, 1);
  for (const iterator of requestData.fields[activeIndex.value].attribute) {
    if (iterator.key === 2) {
      if (Array.isArray(iterator.defaultValue))
        iterator.defaultValue.splice(delI, 1);
      else iterator.defaultValue = "";
      iterator.value = iterator.defaultValue;
      break;
    }
  }

  if (type !== "child")
    handleChangeItem(
      requestData.fields[activeIndex.value].attribute[index].value,
      index,
      true
    );
  return tarAttribute;
}

/* 更改选项值 */
function handleOptionInput(val, index, changeI, type) {
  let tarProp = null;
  if (type === "child")
    tarProp =
      requestData.fields[activeIndex.value].fields[childPropIndex.value]
        .attribute[index];
  else tarProp = requestData.fields[activeIndex.value].attribute[index];
  tarProp.value[changeI].label = val;
  if (type !== "child") handleChangeItem(tarProp.value, index, true);
}

/* 获取编辑公式 */
// function getComputeResult(inputVal, valResult, status) {
//   const inputProp = inputVal
//     .split(/([\=\+\-\*\/\(\)])/)
//     .filter(calculation => calculation.trim() !== "");
//   const propIndex = [];
//   inputProp.forEach((item, index) => {
//     if (!["=", "+", "-", "*", "/", "(", ")"].includes(item))
//       propIndex.push(index);
//   });
//   propIndex.forEach((tarI, i) => {
//     inputProp[tarI] = valResult[i];
//   });
//   computeResult = inputProp.join("");
//   computedStatus = !status;
// }

/* 确认公式 */
function handleSureCompute() {
  if (!computedStatus) return;
  const tarChildAttribute =
    requestData.fields[activeIndex.value].fields[childPropIndex.value]
      .attribute;
  let tarIndex = null;
  const tarProp = tarChildAttribute.find((item, index) => {
    tarIndex = index;
    return item.key === 22;
  });
  computeDialog.value = false;
  requestData.fields[activeIndex.value].fields[childPropIndex.value].attribute[
    tarIndex
  ][tarProp.vModel] = computeResult;
}

/* 更改布局 */
function changeLayout(val) {
  const fieldsData = JSON.parse(JSON.stringify(requestData.fields));
  fieldsData.forEach(item => {
    for (const itemAttribute of item.attribute) {
      if (itemAttribute.key === 12) {
        itemAttribute.layout = val;
        itemAttribute.value = val;
      }
    }
  });
  requestData.fields = fieldsData;
}

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  Bus.off("changeForm");
  Bus.off("activeItem");
  Bus.off("handleDrop");
  Bus.off("activeChildItem");
  Bus.off("getFormData");
});
</script>
<style lang="scss" scoped>
:deep {
  .el-tabs__nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .block {
    float: none !important;
  }

  .el-cascader,
  .el-input-number,
  .el-select {
    width: 100%;

    .el-input__inner {
      height: 36px;
    }
  }

  .el-input__inner {
    text-align: left;
  }

  .options-table {
    .cell {
      padding: 0 5px;
    }

    .el-button--danger {
      color: #606266;
      background-color: #fff;
      border-color: #dcdfe6;

      &:hover {
        color: #fff;
        background-color: #f56c6c;
      }
    }
  }

  .el-form-item__label {
    font-weight: normal;
  }
}

.tab-container {
  height: 100%;
  padding: 0.5208rem;
}

.options-table {
  .options-input {
    padding: 5px 0;
  }

  .cell {
    padding: 0 5px;
  }
}

.new-primary-add {
  margin: 5px 0 0 2px;
}

.option-field,
.child-field {
  width: 100%;
}

.back-child-field {
  margin-bottom: 10px;
}
</style>
