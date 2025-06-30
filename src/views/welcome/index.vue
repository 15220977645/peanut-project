<template>
  <div class="container">
    <div class="l">
      <div class="title">个人简历</div>
      <div class="pdf-block">
        <vue-pdf-embed
          :source="requireImg('biographicalNotes.pdf')"
        ></vue-pdf-embed>
      </div>
    </div>
    <div class="r">
      <div class="title">作品墙（部分）</div>
      <div class="img-block">
        <el-image
          v-for="(item, i) in imgs"
          :key="i"
          :src="item"
          :preview-src-list="imgs"
          :initial-index="initialIndex"
          preview-teleported
          fit="contain"
          @click="initialIndex = i"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Welcome">
import VuePdfEmbed from "vue-pdf-embed";
import { requireImg } from "@/utils/requireImg";

const initialIndex = ref(0);
const imgs = ref([
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/xtable_20240603123824-PZennZ7Xf7Na7j7x.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/xtable_20240603123238-D4xHHS3pBxH52sPc.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/xtable_20240603123258-At6FPHx6zTkZGxXW.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/wximg_20240503135716-AFT3WPSaiFe2X2pG.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/mjdraw_20240603123255-eNaRw8tKwe5jYEfS.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/mjdraw_20240603123302-6sZhaKsjEQ4Cc7KY.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/mjdraw_20240603123247-k6R2T7mkmzEPRrBT.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/mjdraw_20240603123231-wdhfkM3PNDpT28fC.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/tips_20240603123250-wpDEeQSbZ4mKwRZG.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/qualityReport/smartimg_20240603123242-NimykbYmkPDZpAdw.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110160138-nRrPRE6jxiNjNxeE.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE202401101601381-HjM6mRYfDn3zZTMH.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/1212-TD5rnGTnQEbaeG4Y.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110162713-2B4WnDwbjfaPFdXT.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110162749-3GxxDdznbw7bw262.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110163734-ER8ywrhh8dWXK8di.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110163559-4Xzmnj8ZDbWhT8ah.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110163444-mYdxWGiEmZ3xs33E.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110162907-FXER55rpA5GyHZA8.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110163047-5Y6n6DXCbsKMEDRk.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110163816-siSRp6Z2QtZ3pyGK.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110163249-a2meASdnHbGENSAS.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110163930-PjWcnkGfdhf6e6iz.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110164307-bQ2WCXbhrPFKNmeP.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110165923-XiS7jx5DnZ3tD372.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110164141-t47Jnn8axzQ7Ym2G.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/QQ%E6%88%AA%E5%9B%BE20240110164218-kNCHy3cAEM8n758Z.png",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240110170626-hb4W84ZEAPBDynxG.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240110170618-78SJacZzQ2StNnct.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240110170611-435KSsfWBET7xXGZ.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240110170602-AciFGN5cehjdQXiA.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240110170629-aDSibtD8c5E2bfax.jpg",
  "https://bucket-lehe.oss-cn-shenzhen.aliyuncs.com/food/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240110170622-YJFMdXPb7KEajRBc.jpg"
]);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: calc(100% - 30px) !important;
  margin: 15px;

  .l,
  .r {
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #fff;

    .title {
      padding: 0.5208rem;
      font-size: 1rem;
      font-weight: bold;
      color: #333;
      border-bottom: 1px solid #cdd0d6;
    }
  }

  .l {
    width: 900px;
    min-width: 50%;
    margin-right: 15px;

    .pdf-block {
      margin-top: 15px;
    }
  }

  .r {
    flex: 1;

    .img-block {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;

      .el-image {
        width: 13.0208rem;
        height: 7.8125rem;
        margin: 10px;
        border: 0.0521rem solid #cdd0d6;
        border-radius: 0.5208rem;

        &:hover {
          transition: all 0.5s;
          transform: scale(1.2);
        }
      }
    }
  }
}

@media screen and (orientation: portrait) {
  .container {
    flex-flow: column wrap;

    .l,
    .r {
      width: 100%;
      margin-top: 15px;
    }
  }
}
</style>
