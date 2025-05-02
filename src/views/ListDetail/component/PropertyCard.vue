<template>
  <div class="property-card">
    <div class="box">
      <img :src="property.imgurl" alt="">
      <p class="status">{{ property.status }}</p>
      <p class="title">{{ property.title }}{{ property.subtitle }}</p>
    </div>


    <div class="center">
      <div class="property-info">
        <p>{{ property.type }}</p>
        <p>總價<i>{{ property.totalPrice }}</i>萬</p>
      </div>
      <div class="property-info">
        <p>{{ property.type1 }}</p>
        <p>單價<i>{{ property.pricePerPing }}</i>坪</p>
      </div>
    </div>

    <div class="bottom">
      <p>
        <span class="label">拍賣日期</span>
        <span class="value">{{ property.auctionDate }}</span>
      </p>
      <p>
        <span class="label">狀態</span>
        <span class="value">{{ property.statusName }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  property: {
    type: Object,
    required: true,
  }
})
</script>


<style scoped lang="scss">
.property-card {
  .box {
    position: relative;
    width: 345px;
    height: 215px;
    overflow: hidden;

    img {
      width: 100%;
      height: 215px;
      object-fit: cover;
      opacity: 0.85;
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    img:hover {
      opacity: 1;
      transform: scale(1.15);
    }

    p {
      position: absolute;
      font-size: 16px;
      color: #fff;
      line-height: 24px;
      z-index: 11;
      bottom: 0;
      padding: 3px;
    }

    p.status {
      top: 8px;
      bottom: 0;
      left: 3px;
      padding: 0;
      width: 32px;
      height: 16px;
      background: rgba(5, 102, 179, 1);
      font-size: 10px;
      border-radius: 8px;
      text-align: center;
      line-height: 16px;
    }
  }

  .center {
    padding: 15px 0;
    border-bottom: 1px solid #e1e1e1;

    .property-info {
      display: flex;
      justify-content: space-between;

      p:first-child {
        margin-bottom: 7px;
      }

      p {
        font-size: 14px;
        color: #666;

        i {
          color: rgba(234, 85, 19, 1);
          font-size: 18px;
          font-weight: bold;
          margin: 0 3px;
        }
      }
    }
  }

  .bottom {
    padding-top: 12px;

    p {
      font-size: 14px;
      color: #666;
    }

    .label {
      width: 56px;
      display: inline-block;
      margin-right: 19px;
    }

    .value {
      font-weight: bold;
    }
  }

}



@media (max-width: 768px) {}
</style>