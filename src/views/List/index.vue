<template>
  <div class="list">
    <div class="container">
      <search class="hidden-xs-only"></search>
      <MobileSearch class="hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only"></MobileSearch>
      <div class="box">
        <div class="left">
          <div class="title hidden-xs-only">
            <p>已為你找到 <span>29694</span> 間房屋</p>
            <ul>
              <li :class="{ active: activeIndex === 0 }" @click="setActive(0)">預設排序</li>
              <li :class="{ active: activeIndex === 1 }" @click="setActive(1)">金額
                <Icon :name="activeIndex === 1 ? 'up' : 'arrow-down'" size="12" />
              </li>
              <li :class="{ active: activeIndex === 2 }" @click="setActive(2)">坪數
                <Icon :name="activeIndex === 2 ? 'up' : 'arrow-down'" size="12" />
              </li>
              <li :class="{ active: activeIndex === 3 }" @click="setActive(3)">刊登時間
                <Icon :name="activeIndex === 3 ? 'up' : 'arrow-down'" size="12" />
              </li>
              <li :class="{ active: activeIndex === 4 }" @click="setActive(4)">
                <el-select v-model="more" placeholder="Select">
                  <el-option v-for="item in moreoptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </li>
            </ul>
          </div>
          <ListItem v-for="(item, index) in 7" :key="index"></ListItem>
          <div class="loadmore hidden-sm-only hidden-md-only hidden-lg-only hidden-xl-only">
            查看更多好房
          </div>
          <div class="pagination hidden-xs-only">
            <el-pagination background layout="prev, pager, next" :total="1000" prev-text="上一頁" next-text="下一頁" />
          </div>
        </div>
        <div class="right hidden-xs-only">
          <div class="diamondCard">
            <p class="name">
              <Icon name="diamond" size="20" />
              <span>代標顧問</span>
            </p>
            <div class="info1">
              <img src="@/assets/image/index/pic.svg" alt="" srcset="">
              <p>實務經驗最紮實 王曉嵐</p>
            </div>
            <div class="info2">
              <p>營業員編號：雄123506921</p>
              <p>經紀業：104高欣仲介經紀有限公司</p>
            </div>
            <p class="tel">
              <a href="tel:0972-199-982">0972-199-982轉12345</a>
            </p>
          </div>

          <div class="guess">
            <p class="title">猜你喜歡</p>
            <Card v-for="(item, index) in 2" :key="index"></Card>
          </div>

          <div class="recentAuction">
            <p class="title">近期拍賣</p>
            <Card v-for="(item, index) in 1" :key="index"></Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import search from './components/search.vue'
import MobileSearch from './components/mobileSearch.vue'
import ListItem from './components/listItem.vue'
import Card from './components/card.vue'
const more = ref('1')
const moreoptions = [
  {
    value: '1',
    label: '更多',
  },
  {
    value: '2',
    label: '更',
  }
]
const activeIndex = ref(0)

const setActive = (index) => {
  activeIndex.value = index
}
</script>
<style scoped lang="scss">
.list {
  background-color: #fff;

  .box {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      font-size: 16px;
      color: #333;

      p {
        font-size: 24px;
        font-weight: bold;
        line-height: 36px;

        span {
          font-weight: bold;
          font-size: 24px;
          color: #EA5513;
        }
      }

      ul {
        display: flex;
        gap: 20px;

        li {
          cursor: pointer;
          font-size: 14px;



          .el-icon {
            vertical-align: text-top
          }
        }

        li:hover {
          color: #EA5513;
        }

        li.active {
          color: #EA5513;
          font-weight: bold;
        }
      }
    }
  }

  .right {
    .diamondCard {
      width: 232px;
      background: linear-gradient(90deg, #FFF6D1 0%, #FFD992 100%);
      border-radius: 4px;
      padding: 8px 8px;
      cursor: pointer;

      .name {
        span {
          margin-left: 8px;
          font-size: 16px;
          color: #333;
          font-weight: bold;
          line-height: 24px;
        }
      }

      div.info1 {
        position: relative;

        p {
          position: absolute;
          bottom: 0;
          line-height: 33px;
          width: 100%;
          background-color: #EA5513;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          color: #fff;
        }
      }

      div.info2 {
        background-color: #FFAE8B;
        font-size: 12px;
        color: #333;
        padding: 8px 13px;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      .tel {
        text-align: center;
        margin-top: 9px;

        a {
          font-size: 19px;
          font-weight: bold;
          line-height: 24px;
          color: #333 !important;
        }
      }
    }

    .diamondCard:hover {
      box-shadow: 2px 2px 4px 0px rgb(0 0 0 / 10%);
    }

    .guess,
    .recentAuction {
      .title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        line-height: 34px;
        margin-top: 24px;
        margin-bottom: 6px;
      }
    }
  }

  .pagination {
    margin-top: 24px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .list {
    .container {
      max-width: unset;
      width: 100%;
      padding: 0.2rem;
    }

    .loadmore {
      font-size: 0.24rem;
      color: #0566B3;
      text-align: center;
      margin-top: 0.24rem;
      margin-bottom: 0.35rem;
    }
  }
}
</style>
<style lang="scss">
.el-pager li,
.el-pagination button {
  color: #0566B3;
  border: 1px solid;
  border-right: 0;
  border-color: #DEE2E6;
  background: #fff !important;
  margin: 0 !important;
}

.el-pagination button {
  width: 74px;
  text-align: center;
}

.el-pagination button:last-child {
  border-right: 1px solid #DEE2E6
}

.el-pager li {
  border-radius: 0;
}

.el-pager li.is-active {
  background-color: #0566B3 !important;
  color: #fff;
  border-color: #0566B3;
}

.list .el-select__wrapper {
  width: 50px;
  font-size: 14px;
  color: #333333;
  box-shadow: none;
  line-height: unset;
  height: unset;
  min-height: unset;
  background: unset;
  border-radius: unset;
  padding: 0;
}

.list .el-select__placeholder,
.list .el-select__caret {
  color: #333333;
}

.list .el-select__placeholder:hover {
  color: #EA5513;
}

.list .el-select__wrapper.is-hovering:not(.is-focused) {
  box-shadow: none !important;
}

:focus-visible {
  outline: none !important;
}
</style>
