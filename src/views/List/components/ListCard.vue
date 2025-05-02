<template>
  <div class='col-12 col-md-6 col-lg-4'>
    <div class='card h-100 shadow-sm'>
      <img :src="item.img" class='card-img-top' :alt="item.title">
      <div class='card-body'>
        <span class='badge bg-primary mb-2'>{{ item.tag }}</span>
        <h5 class='card-title'>{{ item.title }}</h5>
        <p class='card-text text-muted small mb-1'>{{ item.area }}</p>
        <p class='card-text'>{{ item.desc }}</p>
        <div class='d-flex justify-content-between align-items-end'>
          <div>
            <span class='fw-bold text-danger fs-4'>{{ item.price }}</span>
            <span class='text-muted'>萬</span>
            <span class='ms-2 text-secondary small'>{{ item.unitPrice }}</span>
          </div>
          <button class='btn btn-outline-primary btn-sm'>收藏</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
  item: {
    type: Object,
    required: true,
  }
})
</script>
<style scoped>
.card-img-top {
  object-fit: cover;
  height: 180px;
}
</style>