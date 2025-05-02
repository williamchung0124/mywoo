<template>
  <div>
    <!-- 筛选栏 -->
    <div class="container py-3">
      <form class="row g-2 align-items-center">
        <div class="col-12 col-md-3">
          <input type="text" class="form-control" placeholder="請輸入物件關鍵字...">
        </div>
        <div class="col-6 col-md-2">
          <select class="form-select">
            <option>高雄市</option>
            <option>台南市</option>
            <option>台中市</option>
          </select>
        </div>
        <div class="col-6 col-md-2">
          <select class="form-select">
            <option>類型</option>
            <option>公寓</option>
            <option>華廈</option>
            <option>透天</option>
            <option>土地</option>
          </select>
        </div>
        <div class="col-6 col-md-2">
          <select class="form-select">
            <option>坪數</option>
            <option>20坪內</option>
            <option>20-40坪</option>
            <option>40坪以上</option>
          </select>
        </div>
        <div class="col-6 col-md-2">
          <select class="form-select">
            <option>總價</option>
            <option>500萬內</option>
            <option>500-1000萬</option>
            <option>1000萬以上</option>
          </select>
        </div>
        <div class="col-12 col-md-1 d-grid">
          <button class="btn btn-primary" type="submit">搜尋</button>
        </div>
      </form>
    </div>

    <!-- 精選推薦/近期拍賣等区块 -->
    <div class="container mb-4">
      <div class="row g-3">
        <div class="col-12 col-md-6">
          <div class="bg-light p-3 rounded">
            <span class="badge bg-primary me-2">精選推薦</span>
            <span>捷運火車旁大3房大樓 法拍精選物件 吳美慧</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="bg-light p-3 rounded">
            <span class="badge bg-success me-2">近期拍賣</span>
            <span>陽明溜冰場--近建工商圈2層美透 專業法拍首選 宋依璇</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 物件列表 -->
    <div class="container">
      <div class="row g-4">
        <ListCard v-for="item in listData" :key="item.id" :item="item" />
      </div>
    </div>

    <!-- 分页 -->
    <div class="container my-4">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled"><a class="page-link">上一頁</a></li>
          <li class="page-item active"><a class="page-link">1</a></li>
          <li class="page-item"><a class="page-link">2</a></li>
          <li class="page-item"><a class="page-link">3</a></li>
          <li class="page-item"><a class="page-link">4</a></li>
          <li class="page-item"><a class="page-link">5</a></li>
          <li class="page-item"><a class="page-link">下一頁</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ListCard from '@/views/List/components/ListCard.vue'

// 生成30条假数据
const listData = ref(
  Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `高雄市苓雅區武廟路${i + 1}號${Math.floor(Math.random() * 10) + 1}樓`,
    desc: `捷運火車旁大3房大樓 法拍精選物件 吳美慧${i + 1}`,
    area: `${30 + Math.floor(Math.random() * 30)}坪 | 公寓 | ${Math.floor(Math.random() * 12) + 1}F/12F | 有車位`,
    price: `${500 + Math.floor(Math.random() * 1000)}`,
    unitPrice: `${10 + Math.floor(Math.random() * 10)}萬/坪`,
    tag: ["推薦", "精選", "一拍", "二拍", "應買", "持分", "疑似凶宅"][i % 7],
    img: `https://source.unsplash.com/400x300/?house,home,building&sig=${i}`
  }))
)
</script>
