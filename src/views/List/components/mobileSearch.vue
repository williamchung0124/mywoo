<!--
 * @Date: 2025-05-10 22:16:03
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-05-10 23:18:00
 * @FilePath: /mywoo/src/views/List/components/mobileSearch.vue
-->
<template>
  <div class="mobile-search">
    <div class="search">
      <el-input v-model="input" size="small" placeholder="" :prefix-icon="Search" />
      <span>
        <img src="@/assets/image/icons/house-map.svg" alt="" srcset=""><br />
        地圖
      </span>
    </div>

    <div class="box">
      <el-select v-model="city" placeholder="Select">
        <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="type" placeholder="Select">
        <el-option v-for="item in typeoptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="totalprice" placeholder="Select">
        <el-option v-for="item in totalpriceoptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="squarefootage" placeholder="Select">
        <el-option v-for="item in squarefootageoptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="more" placeholder="Select">
        <el-option v-for="item in moreoptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <img src="@/assets/image/icons/two-way-arrow.svg" alt="" srcset="">
    </div>

    <div class="chooseType">
      <p>精選推薦</p>
      <p>近期拍賣</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('仁武區')
const city = ref('1')
const cityoptions = [
  {
    value: '1',
    label: '高雄市',
  },
  {
    value: '2',
    label: '高雄2',
  },
  {
    value: '3',
    label: '高雄2',
  }
]
const squarefootage = ref('1')
const squarefootageoptions = [
  {
    value: '1',
    label: '坪數',
  },
  {
    value: '2',
    label: '坪數1',
  }
]
const totalprice = ref('1')
const totalpriceoptions = [
  {
    value: '1',
    label: '總價',
  },
  {
    value: '2',
    label: '總價1',
  }
]
const type = ref('1')
const typeoptions = [
  {
    value: '1',
    label: '類型',
  },
  {
    value: '2',
    label: '類型1',
  }
]
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
</script>
<style lang="scss">
@media only screen and (max-width: 767px) {
  .mobile-search {

    .search,
    .box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .el-select {
        display: inline-block;
        width: 0.87rem;
        margin: 0;
      }

      .el-select:nth-child(1) {
        width: 1.12rem !important;

        .el-select__placeholder {
          color: #EA5513 !important;
        }
      }

      .el-select__wrapper {
        box-shadow: none;
        padding: 0;
        min-height: unset;
        line-height: unset;
        font-size: 0.24rem;
        color: #333;
      }

      .el-select__placeholder {
        color: #333;
      }

      img {
        width: 0.36rem;
        height: 0.36rem;
      }
    }

    .box {
      margin-top: 0.32rem;
      height: 0.36rem;
    }

    .search {
      height: 0.6rem;
      position: relative;

      .el-input {
        width: 92%;
        height: 0.6rem;
      }

      .el-input__wrapper {
        border: 0;
        box-shadow: unset;
        background-color: #e9e9e9 !important;
      }

      span {
        font-size: 0.16rem;
        color: #333;
      }

      .el-input__prefix-inner {
        font-size: 0.24rem !important;
        color: #999;
      }

      .el-input__inner {
        font-size: 0.28rem;
        color: #333;
      }
    }

    .chooseType {
      display: flex;

      p {
        background-color: #eee;
        border-radius: 4px;
        display: inline-block;
        width: 1.2rem;
        height: 0.46rem;
        font-size: 0.24rem;
        color: #333;
        text-align: center;
        line-height: 0.46rem;
        margin-right: 0.24rem;
        margin-top: 0.16rem;
      }
    }
  }
}
</style>