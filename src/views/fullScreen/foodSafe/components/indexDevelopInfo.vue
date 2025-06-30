<template>
  <div class="box news-box">
    <HeadTitle name="新闻动态" icon="News-icon.svg" />
    <!-- 显示区 -->
    <div
      v-if="developInfo.length > 0"
      class="develop-block"
      @mouseenter="mouseCtrlAnim(false)"
      @mouseout="mouseCtrlAnim(true)"
    >
      <!-- 滚动层 -->
      <div class="scroll-develop">
        <!-- 包裹遍历节点、 -->
        <div class="scroll0">
          <div v-for="(item, index) in developInfo" :key="index">
            <!-- 判断每组信息是否需要显示 -->
            <div
              v-if="item.fileList.length > 0 || item.richText !== ''"
              class="develop-info"
            >
              <div class="info-head">
                <div><span class="point" />{{ item.title }}</div>
                <div>{{ item.publishTime }}</div>
              </div>
              <div class="info-content">
                <div class="imgs">
                  <img
                    v-for="(imgs, iIndex) in item.fileList"
                    :key="iIndex"
                    :src="imgs.url"
                    alt=""
                  />
                </div>
                <div class="rich-text" v-html="item.content" />
              </div>
            </div>
          </div>
        </div>
        <!-- 第二组遍历节点：无限循环滑动 -->
      </div>
    </div>
    <div v-else class="empty-box">
      <EmptyData />
    </div>
  </div>
</template>

<script setup>
import HeadTitle from "./headTitle.vue";
import EmptyData from "./emptyData.vue";

const developInfo = ref([]);
const timer = ref(null);
const scrollStatus = ref(false);
const showDom = ref(null);
const nextDomIndex = ref(1);
const scrollHeight = ref(0);
const screenWidth = ref(document.body.clientWidth);

/* 初始化 */
function init() {
  handlerDevelopInfo();
}
/* 初始化动画 */
function initAnimation() {
  const newsBoxDom = document.getElementsByClassName("news-box")[0];
  showDom.value = newsBoxDom.getElementsByClassName("develop-block")[0];
  const showHeight = showDom.value?.offsetHeight;
  const scrollH =
    newsBoxDom.getElementsByClassName("scroll-develop")[0]?.offsetHeight;
  scrollHeight.value = scrollH;
  if (scrollH > showHeight) {
    setTimeout(() => {
      scrollStatus.value = true;
      timer.value = setInterval(scrollAnimate, 300);
    }, 2000);
  }
}
/* 处理为显示数据 */
async function handlerDevelopInfo() {
  const developData = [
    {
      title: "乐苗「餐桌的故事」（一）：学生营养餐如何做？从食谱定制开始！",
      publishTime: "2023.11.10",
      content:
        '"<p><img class="rich_pages wxw-img __bg_gif" src="https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/J6GPd7XZta6JY4RN.png" alt="图片" crossorigin="anonymous" data-galleryid="" data-ratio="0.5032437442075997" data-src="https://mmbiz.qpic.cn/mmbiz_gif/MibZoS6RzG7S5K2mb4zwgXXEsXbSqcTLqz6wrIE3tHyicFAzMXcBHysPubmXu4Pslw3jpZuVpBSJtQnhOYTtj5qg/640?wx_fmt=gif" data-type="gif" data-w="1079" data-index="0" data-sec-load-status="2" data-order="0" /></p>\n<section>\n<p>&nbsp;</p>\n<section>\n<section>\n<section>\n<section class="" data-lazy-bgimg="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDEWKy2otXEzfVEoXdyfBObLrfwZPS0ySOzfKwl7iasAibJ7P3APDHtIdQ/640?wx_fmt=png" data-fail="0">\n<section>\n<section>\n<section>\n<section>\n<p>正午时分，清脆的下课铃准时敲响，香喷喷的饭菜在保温箱里，等待着小朋友们前来品尝。营养美味的饭菜，总能拂去疲惫，为下午的学习与活动带来能量。</p>\n</section>\n</section>\n<section>\n<section>\n<p>那么，大家手中餐盒的饭菜，是怎么从农田来到餐桌的呢？欢迎进入「餐桌的故事」&mdash;&mdash;<strong>食谱定制篇</strong>。</p>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<p>&nbsp;</p>\n<section>\n<section>\n<p>1</p>\n</section>\n</section>\n<section>\n<section></section>\n</section>\n<section>\n<p><strong>我们为何定制食谱</strong></p>\n</section>\n<section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n</section>\n<section>\n<section class="" data-lazy-bgimg="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDEWKy2otXEzfVEoXdyfBObLrfwZPS0ySOzfKwl7iasAibJ7P3APDHtIdQ/640?wx_fmt=png" data-fail="0">\n<section>\n<section>\n<section>\n<section>\n<p>众所周知，青少年的健康成长，离不开各类营养物质的均衡摄入。</p>\n<p>然而，通过前期调研，我们发现，由于储存、饮食习惯、烹饪意愿或技能等影响因素，校园餐食菜品较为单一。</p>\n<p>同时，部分学校食堂为了顺应学生偏好，倾向于制作重油、重盐、重辣的餐食。</p>\n<p>此外，各地营养知识普及程度存在偏差，导致部门学校食堂供应的食物营养搭配不佳，钙铁锌及维生素等存在摄入不足的问题。</p>\n</section>\n</section>\n<section>\n<p>&nbsp;</p>\n</section>\n<section>\n<section>\n<section>\n<section>\n<section><img class="rich_pages wxw-img" src="https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/RaR3JACHP5Bkz7Yc.png" alt="图片" crossorigin="anonymous" data-ratio="0.6560197" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDmicjibEe1NZEPe5CPVDsofKBc0lNLZYicGmdPtID8RsHTb8qqTeWIRMVw/640?wx_fmt=png" data-type="png" data-w="814" data-index="1" data-fail="0" /></section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<section><img class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDCwictRyxPf9KZNKk3BR2f8CiayAwzR2BNVibY9MTa45iaP7rQwO4wP1zhw/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.1724138" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDCwictRyxPf9KZNKk3BR2f8CiayAwzR2BNVibY9MTa45iaP7rQwO4wP1zhw/640?wx_fmt=png" data-type="png" data-w="928" data-index="2" data-fail="0" /></section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<section>\n<section><img class="" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDCwictRyxPf9KZNKk3BR2f8CiayAwzR2BNVibY9MTa45iaP7rQwO4wP1zhw/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.1724138" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDCwictRyxPf9KZNKk3BR2f8CiayAwzR2BNVibY9MTa45iaP7rQwO4wP1zhw/640?wx_fmt=png" data-type="png" data-w="928" data-index="3" data-fail="0" /></section>\n</section>\n</section>\n<section>\n<section>\n<section>\n<section><img class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDQ10WZtTxLmNInnP5To6WOn0KpvhRlxYVQCOFcI2ib9ibpNGyRdiaBVZyw/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.6580087" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDQ10WZtTxLmNInnP5To6WOn0KpvhRlxYVQCOFcI2ib9ibpNGyRdiaBVZyw/640?wx_fmt=png" data-type="png" data-w="924" data-index="4" data-fail="0" /></section>\n</section>\n</section>\n</section>\n</section>\n<section>\n<p>&nbsp;</p>\n</section>\n<section>\n<section>\n<p>鉴于此，乐苗在2021年推出了学生营养食谱推进计划，着眼于调整中小学生在校就餐的膳食结构，改善隐形饥饿。</p>\n<p>针对不同年龄段的中小学生，制定适合他们的营养菜谱，是乐苗为中小学生打造营养餐桌的第一步。</p>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<p>&nbsp;</p>\n<section>\n<section>\n<p>2</p>\n</section>\n</section>\n<section>\n<section></section>\n</section>\n<section>\n<p><strong>营养食谱制定有妙招</strong></p>\n</section>\n<section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n</section>\n<section>\n<section class="" data-lazy-bgimg="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDEWKy2otXEzfVEoXdyfBObLrfwZPS0ySOzfKwl7iasAibJ7P3APDHtIdQ/640?wx_fmt=png" data-fail="0">\n<section>\n<section>\n<section>\n<section>\n<p>针对当前中小学生就餐现状，乐苗因地制宜地提出多样化中小学生营养餐服务方案，以集团商业生态链为支撑，打造高标准的中小学餐食服务体系，从不同环节契合当地需求，为中小学生营养餐的阳光、安全、健康、美味保驾护航。</p>\n<p>那么，乐苗具体是怎么做的呢？</p>\n</section>\n</section>\n<section>\n<p>&nbsp;</p>\n</section>\n<section>\n<section>\n<section>\n<section>\n<section><img class="" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDicvOvJ6NKHCvrL63WHYSqicseRj97uREicm89HN3XvShuwd74s9iaSIt6Q/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.6558792" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDicvOvJ6NKHCvrL63WHYSqicseRj97uREicm89HN3XvShuwd74s9iaSIt6Q/640?wx_fmt=png" data-type="png" data-w="927" data-index="4" data-fail="0" /></section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<section><img class="" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDCwictRyxPf9KZNKk3BR2f8CiayAwzR2BNVibY9MTa45iaP7rQwO4wP1zhw/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.1724138" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDCwictRyxPf9KZNKk3BR2f8CiayAwzR2BNVibY9MTa45iaP7rQwO4wP1zhw/640?wx_fmt=png" data-type="png" data-w="928" data-index="5" data-fail="0" /></section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<section>\n<section><img class="" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDCwictRyxPf9KZNKk3BR2f8CiayAwzR2BNVibY9MTa45iaP7rQwO4wP1zhw/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.1724138" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDCwictRyxPf9KZNKk3BR2f8CiayAwzR2BNVibY9MTa45iaP7rQwO4wP1zhw/640?wx_fmt=png" data-type="png" data-w="928" data-index="6" data-fail="0" /></section>\n</section>\n</section>\n<section>\n<section>\n<section>\n<section><img class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDueM2LUbuC4SyU8ic9EQYYiaXI0eJS9uvDseRV37Ynz2xwQ8A0741lFBA/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.6558792" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDueM2LUbuC4SyU8ic9EQYYiaXI0eJS9uvDseRV37Ynz2xwQ8A0741lFBA/640?wx_fmt=png" data-type="png" data-w="927" data-index="7" data-fail="0" /></section>\n</section>\n</section>\n</section>\n</section>\n<section>\n<p>&nbsp;</p>\n</section>\n<section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n<section>\n<section>\n<p><strong>前期调研&amp;初拟菜品库</strong></p>\n</section>\n</section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<p>在营养食谱制定之前，了解当地中小学生饮食现状尤为必要。</p>\n<p>在项目开展之初，乐苗积极与各校负责人建立沟通关系，了解当地中小学生在校的膳食结构，分析当地中小学生的营养状况，结合各校原有餐标及食堂菜品，初步拟定对应学校的营养食谱菜品库。</p>\n<p>初版的营养食谱菜品库，将由乐苗相关负责人对接各个学校，收集校方反馈，为营养食谱的正式制定做好准备。</p>\n</section>\n</section>\n<section>\n<section><img class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDfvIicoYOgkEfBIyMag2MWVID6vUibicp9Qia4ZypVEZF8gXlo2jGPPfTqw/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.660152" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDfvIicoYOgkEfBIyMag2MWVID6vUibicp9Qia4ZypVEZF8gXlo2jGPPfTqw/640?wx_fmt=png" data-type="png" data-w="921" data-index="8" data-fail="0" /></section>\n</section>\n<section>\n<p>&nbsp;</p>\n</section>\n<section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n<section>\n<section>\n<p><strong>营养食谱制定</strong></p>\n</section>\n</section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<p>在了解、分析当地现状并建立初版菜品库之后，乐苗的营养师团队将根据《中国居民膳食指南》和《学生餐营养指南》等国家和行业标准，并结合校方对初版营养食谱菜品库的意见及建议，为当地的中小学生制定适合他们的营养菜谱。</p>\n<p>乐苗营养师团队介绍，孩子们在不同的年龄段，需要不同的营养方案。乐苗营养师团队依照各年龄段学生所需的营养成分及分量，针对性制定最佳供餐方案，以保障学生各类营养成分摄入充足，增强体质，促进发育。</p>\n<p>同时，乐苗也在逐步推进&ldquo;减盐行动&rdquo;，提倡清淡饮食习惯，通过减少钠的摄入，帮助学生逐渐养成良好的日常膳食习惯和生活方式，提升中小学生健康水平。</p>\n</section>\n</section>\n<section>\n<section><img class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcD4Rl2D6Y0GpkNRklZf8LgOQpt2ol3fWo8vnnicqRHFV3z98wL7Pz2sfw/640?wx_fmt=png&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="0.6591928" data-src="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcD4Rl2D6Y0GpkNRklZf8LgOQpt2ol3fWo8vnnicqRHFV3z98wL7Pz2sfw/640?wx_fmt=png" data-type="png" data-w="892" data-index="9" data-fail="0" /></section>\n</section>\n<section>\n<p>&nbsp;</p>\n</section>\n<section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n<section>\n<section>\n<p><strong>用餐情况定期反馈</strong></p>\n</section>\n</section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<p>对学生用餐情况细致、全方位的关怀，也是乐苗营养食谱得以持续推进与落实的关键一环。</p>\n<p>在充分考虑营养摄入的同时，乐苗也对学生口味十分上心。通过定期收集学生用餐情况反馈，营养师团队将结合当地饮食特色和营养标准对菜单持续优化，既保障学生们的营养成分摄入量，也兼顾饮食偏好与口感，让孩子们&ldquo;吃饱&rdquo;也&ldquo;吃好&rdquo;。</p>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n<p>&nbsp;</p>\n<section>\n<section>\n<p>3</p>\n</section>\n</section>\n<section>\n<section></section>\n</section>\n<section>\n<p><strong>结语</strong></p>\n</section>\n<section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n</section>\n<section>\n<section class="" data-lazy-bgimg="https://mmbiz.qpic.cn/mmbiz_png/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDEWKy2otXEzfVEoXdyfBObLrfwZPS0ySOzfKwl7iasAibJ7P3APDHtIdQ/640?wx_fmt=png" data-fail="0">\n<section>\n<section>\n<section>\n<section>\n<p>&ldquo;少年强则国强&rdquo;，乐苗作为高标准中小学食材供应链引领者，必将履行应有的企业担当与社会责任，以&ldquo;让孩子们吃得更好&rdquo;为企业使命，持续推广搭配均衡、多样化的学生营养食谱，为中小学生营养餐的阳光、安全、健康、美味保驾护航。</p>\n</section>\n</section>\n</section>\n</section>\n</section>\n</section>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<section>\n<section>\n<section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<section>\n<section>\n<section>\n<p><strong>END</strong></p>\n</section>\n</section>\n</section>\n</section>\n</section>\n<section>\n<section>\n<section>\n<section>\n<section></section>\n</section>\n</section>\n</section>\n</section>\n</section>\n<section>\n<section><img class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_jpg/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcD3DtaibOc28icBUUFOH7bSGmicRZ6EX9k4ibw1JtDiazUiaicwWQaC67fjocwA/640?wx_fmt=jpeg&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-ratio="1" data-src="https://mmbiz.qpic.cn/mmbiz_jpg/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcD3DtaibOc28icBUUFOH7bSGmicRZ6EX9k4ibw1JtDiazUiaicwWQaC67fjocwA/640?wx_fmt=jpeg" data-type="jpeg" data-w="258" data-index="10" data-fail="0" /></section>\n</section>\n<section>\n<section>\n<p><strong>- 乐苗 -</strong></p>\n<p>让孩子们吃得更好</p>\n</section>\n</section>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n</section>\n</section>\n</section>\n<p><img class="rich_pages wxw-img" src="https://mmbiz.qpic.cn/mmbiz_jpg/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDcgWtDziaoibDRN46vnpbFcbiaYDOM6JDGjoicxXibiaqYURT5cPZYFicSqIlw/640?wx_fmt=jpeg&amp;tp=wxpic&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" crossorigin="anonymous" data-galleryid="" data-ratio="1.9812252964426877" data-s="300,640" data-src="https://mmbiz.qpic.cn/mmbiz_jpg/MibZoS6RzG7S2jKK2vw9VoQewzQ262WcDcgWtDziaoibDRN46vnpbFcbiaYDOM6JDGjoicxXibiaqYURT5cPZYFicSqIlw/640?wx_fmt=jpeg" data-type="jpeg" data-w="1012" data-index="12" data-fail="0" /></p>"'
    }
  ];
  developData.forEach(item => {
    const fileList = [];
    item.content = item.content?.replace(
      /<img [^>]*src=['"]([^'"]+)[^>]*>/g,
      function () {
        fileList.push({
          url: "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/J6GPd7XZta6JY4RN.png"
        });
        return "";
      }
    );
    item.fileList = fileList;
  });
  developInfo.value = developData;
  await nextTick();
  initAnimation();
}
/* 鼠标控制动画 */
function mouseCtrlAnim(status) {
  scrollStatus.value = status;
}
/* 动画滚动 */
async function scrollAnimate() {
  if (scrollStatus.value) {
    await nextTick();
    const scrollDoms =
      showDom.value.getElementsByClassName("scroll-develop")[0];
    const scrollList = scrollDoms?.children;
    const showHeight = showDom.value?.offsetHeight;
    if (showHeight - scrollHeight.value > scrollDoms?.offsetTop) {
      if (scrollList.length > 1) changeNextDomTop();
      else addSecondDom();
    }
    let top = scrollDoms?.offsetTop;
    top = top - screenWidth.value * (10 / 1920);
    scrollDoms.style.top = `${top}px`;
  }
}
/* 添加第二节点 */
function addSecondDom() {
  const scrollDoms = showDom.value.getElementsByClassName("scroll-develop")[0];
  const scrollFirst = scrollDoms.getElementsByClassName("scroll0")[0];
  const divClone = scrollFirst.cloneNode(true);
  scrollDoms.appendChild(divClone);
  const scrollSecond = scrollDoms.getElementsByClassName("scroll0")[1];
  scrollSecond.classList.add("scroll1");
  scrollSecond.classList.remove("scroll0");
  nextDomIndex.value = 0;
  scrollHeight.value = scrollFirst?.offsetHeight * 2;
}
/* 动态改变下一节点偏移量 */
function changeNextDomTop() {
  const i = nextDomIndex.value;
  const scrollDoms = showDom.value.getElementsByClassName("scroll-develop")[0];
  const changDom = showDom.value.getElementsByClassName(`scroll${i}`)[0];
  const multiplePx =
    Math.round(Math.abs(scrollDoms?.offsetTop) / (changDom?.offsetHeight * 2)) *
    2;
  changDom.style.top = `${changDom?.offsetHeight * multiplePx}px`;
  nextDomIndex.value = Number(!i);
  scrollHeight.value = scrollHeight.value + changDom?.offsetHeight;
}

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});
</script>

<style lang="scss" scoped>
.empty-box {
  background-color: rgba(#9cc4ff, 0.06);
}

.develop-block {
  position: relative;
  height: calc(100% - 1.6666rem);
  overflow: hidden;
  background-color: rgba(#9cc4ff, 0.06);

  .scroll-develop {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear 0s;

    > div {
      position: relative;
      padding-bottom: 5.2083rem;
    }
  }

  div,
  span,
  img {
    pointer-events: none;
  }

  .develop-info {
    display: flex;
    flex-direction: column;

    .info-head {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: 0.7813rem;
      margin-bottom: 1rem;
      font-size: 0.7292rem;
      color: #fff;
      background-color: rgba($color: #4e6bff, $alpha: 10%);
      border-radius: 0.4167rem;

      .point {
        display: inline-block;
        width: 0.3646rem;
        height: 0.3646rem;
        margin-right: 0.5208rem;
        background-color: #fff;
        border-radius: 50%;
      }
    }

    .info-content {
      display: flex;
      flex-direction: column;
      padding: 0 0.5208rem;
      font-size: 0.625rem;

      .imgs {
        position: relative;
        display: flex;
        flex-wrap: wrap;

        img {
          width: calc((100% - 3%) / 4);
          height: auto;
          margin-bottom: 1%;

          &:not(:nth-child(4n)) {
            margin-right: 1%;
          }
        }
      }

      .rich-text {
        color: #7e92bc;
      }
    }
  }
}
</style>
