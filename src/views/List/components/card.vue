<!--
 * @Date: 2025-05-10 14:40:35
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-05-18 18:44:25
 * @FilePath: /mywoo/src/views/List/components/card.vue
-->
<template>
  <div class="card">
    <div>
      <img :src="pic1" alt="">
    </div>
    <div class="box">
      <div class="title">
        建地|★(低調)【南臺灣尚讚26公頃高爾夫球場】
      </div>
      <div class="regional-area">
        旗津區 ｜76580坪
      </div>
      <div class="price">
        <p>總價 <span>168</span> <span>萬</span></p>
        <p><span>1.65</span>萬/坪</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import pic1 from '@/assets/image/list/Group 132.svg'
</script>
<style scoped lang="scss">
.card {
  width: 232px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  margin-bottom: 16px;
  cursor: pointer;

  img {
    width: 230px;
    height: 173px;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .box {
    padding: 16px;

    .title {
      font-size: 14px;
      font-weight: bold;
      line-height: 22px;
      color: #000;
    }

    .regional-area {
      font-size: 12px;
      color: #666;
      line-height: 18px;
      margin: 8px 0;
    }

    .price {
      display: flex;
      justify-content: space-between;

      p:nth-child(1) {
        font-size: 16px;
        color: #333;
        line-height: 24px;

        span:first-child {
          font-weight: bold;
        }

        span {
          color: #EA5513;
        }
      }

      p:nth-child(2) {
        font-size: 12px;
        color: #666;
        line-height: 24px;
      }
    }
  }
}

.card:hover {
  box-shadow: 2px 2px 4px 0px rgb(0 0 0 / 10%);
}
</style>