<template>
  <div class="listItem">
    <div class="left">
      <img :src="pic1" alt="" srcset="">
      <p>精选</p>
    </div>
    <div class="right">
      <div class="box">
        <div class="title" @click="handleClick">
          <a>中山路一段 大地坪獨棟農舍 近大湖國小/湖內國中 法拍精選物件 吳美慧</a>
        </div>
        <div class="collection hidden-xs-only">
          <a @click="onAddCollect">
            <Icon :name="isFavoriteAdded ? 'icon-favorite-added' : 'icon-favorite'" size="28" color="#fff" />
          </a>
        </div>
      </div>
      <div class="box">
        <div class="info">
          <p>坪數 56坪 | 土地 | 1F/1F | 屋齡 34年</p>
          <p>
            <Icon name="icon-location-color" :size="windowWidth < 750 ? 13 : 18" />凱旋門 | 三民區復興一路163號5樓凱旋門大廈
          </p>
          <p>
            <span>開標日 : 114/05/05(二)</span>
            <span>一拍</span>
            <span>疑似凶宅</span>
          </p>
          <p class="hidden-xs-only">
            <img src="@/assets/image/image 7.png" alt="" srcset="">
            <span class="name">代標顧問 蘇秀珠</span>
          </p>
        </div>
        <div class="price">
          <p>總價 <span>1680</span> <span>萬</span></p>
          <p><i class="hidden-xs-only">單價</i><i>13.5</i>萬/坪</p>
          <p>預估三拍：<i>415</i>萬</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
import pic1 from '@/assets/image/list/Group 132.svg'
import { RouterView, useRouter, useRoute } from 'vue-router'
const isFavoriteAdded = ref(false)
const route = useRoute();
const $router = useRouter()
// 收藏
const onAddCollect = () => {
  isFavoriteAdded.value = !isFavoriteAdded.value
}

const handleClick = (index) => {
  $router.push('/list/content/' + 1)
}
</script>
<style lang="scss" scoped>
.listItem {
  cursor: pointer;
  display: flex;
  border-bottom: 1px solid #e1e1e1;
  gap: 20px;
  padding-top: 32px;
  padding-bottom: 24px;
  padding-right: 20px;

  p {
    margin: 0;
    padding: 0;
  }

  .left {
    position: relative;
    min-width: 272px;
    height: 204px;
    overflow: hidden;

    img {
      width: 272px;
      height: 204px;
      border-radius: 4px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.15);
    }

    p {
      position: absolute;
      top: 0;
      width: 41px;
      height: 24px;
      background: #EA5513;
      font-size: 12px;
      color: #fff;
      text-align: center;
      line-height: 24px;
      border-top-left-radius: 4px;
      border-bottom-right-radius: 7px;
    }
  }

  .right {
    width: 100%;

    .box {
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      .title {
        a {
          font-size: 24px;
          font-weight: bold;
          color: #333;
        }

        a:hover {
          text-decoration: underline;
        }
      }


      .collection {
        margin-top: 3px;

        .svg-icon {
          margin-left: 24px;
        }
      }

      .info {
        p {
          font-size: 16px;
          color: #666;
          line-height: 24px;
          margin: 12px 0;

          span {
            display: inline-block;
            color: #0566B3;
            font-size: 12px;
            line-height: 24px;
            border-radius: 2px;
            padding: 0 8px;
            background-color: #E9EDF8;
            margin-right: 8px;
          }

          span:last-child {
            background-color: #FFD6D6;
            color: #666666;
          }

          img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            vertical-align: bottom;
          }

          .name {
            font-size: 16px;
            color: #333;
            line-height: 24px;
          }

          .svg-icon {
            margin-right: 3px;
            vertical-align: text-top;
          }
        }

        p:last-child {
          margin-bottom: 0;

          span {
            background: unset;
            color: #333;
          }
        }
      }

      .price {
        p {
          font-size: 16px;
          color: #333;
          line-height: 34px;

          span {
            font-size: 32px;
            font-weight: bold;
            color: #EA5513;
            vertical-align: bottom;
            margin: 0 6px;
          }

          span:last-child {
            font-size: 20px;
            color: #EA5513;
          }
        }

        p:last-child,
        p:nth-child(2) {
          font-size: 16px;
          color: #666;
          margin-top: 5px;
        }

        p:last-child {
          margin-top: 3px;
        }
      }
    }
  }
}

.listItem:hover {
  background-color: #fafafa;
}

@media only screen and (max-width: 767px) {
  .listItem {
    gap: 0.14rem;
    padding: 0.32rem 0;

    .right .box {
      align-items: unset;
      display: unset;

      .info p:first-child {
        margin-top: 0.12rem;
      }

      .info p {
        font-size: 0.24rem;
        margin: 0;
        margin-bottom: 0.12rem;
        line-height: 0.28rem;

        span {
          font-size: 0.2rem;
          margin-right: 0.12rem;
          padding: 0 0.08rem;
        }
      }

      .price {
        display: flex;

        p {
          line-height: 0.34rem;
          margin-right: 0.12rem;
          font-size: 0.24rem !important;

          span {
            font-size: 0.32rem !important;
            margin: 0;
          }

          span:last-child {
            font-size: 0.24rem !important;
          }
        }

        p:last-child,
        p:nth-child(2) {
          font-size: 0.18rem !important;
          margin-top: 0 !important;
        }

      }
    }

    .title {
      word-wrap: break-word;
      word-break: break-word;
      white-space: normal;
      line-height: 0.12rem;
      margin-bottom: 0.25rem;
      margin-top: -0.15rem;

      a {
        font-size: 0.28rem !important;
      }
    }

    .left {
      min-width: 2.74rem !important;
      height: 2.04rem !important;
    }

    .left img {
      width: 2.74rem !important;
      height: 2.04rem !important;
    }
  }
}
</style>
