<template>
  <div class="list">
    <div class="banner">
      <div class='container'>
        <div class="breadcrumb">
          首頁 > 高雄市 > 苓雅區 > 建國北路 > 住宅 > 整層住家 > <i>{{ houseInfor.id }}</i>
        </div>
        <div class="houseContent">
          <div class="left">
            <div class="title">
              {{ houseInfor.title }}
            </div>
            <Swiper v-if="thumbsSwiper" :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }" class="main-swiper">
              <SwiperSlide v-for="img in images" :key="img">
                <img :src="img" />
              </SwiperSlide>
            </Swiper>

            <Swiper @swiper="(swiper) => (thumbsSwiper = swiper)" :space-between="8" watch-slides-progress
              :slides-per-view="5" class="thumbs-swiper" :modules="[Navigation]" navigation>
              <SwiperSlide v-for="img in images" :key="img">
                <img :src="img" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="right">
            <div class="icon">
              <a @click="onAddCollect">
                <Icon :name="isFavoriteAdded ? 'icon-favorite-added' : 'icon-favorite'" size="28" color="#fff" />收藏 ({{
                  houseInfor.collect }})
              </a>
              <a href="">
                <Icon name="icon-fb-bg" size="28" />分享
              </a>
              <a href="">
                <Icon name="icon-line" size="28" />分享
              </a>
            </div>

            <div class="dic">
              <p>
                <span>總價</span>
                <span><i class="price">{{ houseInfor.totalPrice }}</i>萬</span>
              </p>
              <p>
                <span>單價</span>
                <span><i class="price">{{ houseInfor.unitPrice }}</i>萬</span>
              </p>
            </div>

            <div class='dic'>
              <div>
                <p>
                  <span>公告建坪</span>
                  <span><i class='size'>{{ houseInfor.announcementFlat }}</i>坪</span>
                </p>
                <p class="mr">
                  <span>地坪</span>
                  <span><i class='size'>{{ houseInfor.horizon }}</i>坪</span>
                </p>
              </div>
              <p>
                <span>總坪數</span>
                <span><i class='size'>{{ houseInfor.horizon }}</i>坪</span>
              </p>
            </div>

            <div class='dic'>
              <div>
                <p>
                  <span>類型</span>
                  <span><i class="q">{{ houseInfor.type }}</i></span>
                </p>
                <p class="mr">
                  <span>屋齡</span>
                  <span><i class="q">{{ houseInfor.houseAge }}</i>坪</span>
                </p>
              </div>
              <p>
                <span>地址</span>
                <span class="adress">
                  <i>{{ houseInfor.adress }}</i>
                  <Icon name="icon-location-color" size="16" />
                </span>
              </p>
            </div>

            <div class='dic'>
              <div>
                <p>
                  <span>開標狀態</span>
                  <span class="q">{{ houseInfor.status }}</span>
                </p>
                <p class="mr">
                  <span>拍次</span>
                  <span class="q">{{ houseInfor.beatTime }}</span>
                </p>
              </div>
              <p>
                <span>拍賣日期</span>
                <span><i class="q">{{ houseInfor.auctionDate }}</i></span>
              </p>
            </div>

            <div class="dic">
              <div class="info">
                <div class="avatar">
                  <img src="@/assets/image/image 7.png" alt="" srcset="">
                </div>
                <div class="desc">
                  <p>陳慧瑜</p>
                  <p>代標千萬經紀人</p>
                </div>
              </div>
              <div class="btn">
                <div class="phone">
                  <Icon name="icon-phone" size="16" />
                  <a href="tel:0911151441" class="button">
                    0911-151441
                  </a>
                </div>
                <div class="line">
                  <Icon name="icon-line" size="32" />
                  <a href="" class="button">
                    Line 加好友
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="bg container">
        <!-- 房屋介绍 -->
        <div class="houseDescription">
          <div class="title">房屋介紹</div>
          <div class="recordCase">
            <p class="subtitle">案件筆錄</p>
            <p class="info" v-html="formatContent(houseDescription.recordCase)">
            </p>
          </div>
          <div class="supplementaryStatement">
            <p class="subtitle">補充說明</p>
            <p class="info" v-html="formatContent(houseDescription.supplementaryStatement)">
            </p>
          </div>
        </div>
        <!-- 房屋图片 -->
        <div class="housePicture">
          <p class="title">房屋圖片</p>
          <p class="masonry-item" v-for="(image, index) in houseDescription.housePicture" :key="index">
            <img :src="image" :alt="image" />
          </p>
        </div>
        <!-- 地理位置 -->
        <div class="location">
          <p class="title">地圖位置</p>
          <div class="locationBox">
            <div class="left">
              <img src="/Users/wangjiamin/Desktop/mywoo/mywoo/src/assets/image/list/image 16.svg" alt="" srcset="">
            </div>
            <div class="right">
              <p class="subtitle">補充說明</p>
              <ul>
                <li v-for="item in typeList" :key="item">
                  <p>
                    <Icon :name="item.icon" size="60" class="icon" />
                  </p>
                  <p class="name">{{ item.name }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box1">
      <div class="bg container">
        <div class="message">
          <p class="title">實價登錄資訊</p>
          <ul>
            <li v-for="item in messageList" :key="item.id">
              <p class="subtitle">{{ item.title }}</p>
              <div class="list">
                <div>
                  <p>{{ item.houseType }}</p>
                  <p><i>{{ item.houseTypePrice }}</i>萬/坪</p>
                </div>
                <div>
                  <p>總價</p>
                  <p><i>{{ item.totalPrice.split(',')[0] }}</i>至<i>{{ item.totalPrice.split(',')[1] }}</i>萬</p>
                </div>
                <div class="hr"></div>
                <div class="desc">{{ item.infor }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="nearbyObjects">
          <div class="title">附近物件</div>

          <div class="property-container">
            <div class="desktop-view">
              <div class="custom-prev"><el-icon :size="24">
                  <ArrowLeft />
                </el-icon></div>
              <div class="custom-next"><el-icon :size="24">
                  <ArrowRight />
                </el-icon></div>
              <swiper :slides-per-view="3" :space-between="42" watch-slides-progress :modules="[Navigation]"
                :navigation="{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev'
                }" :autoplay="{ delay: 5000, disableOnInteraction: false }" class="property-swiper">
                <swiper-slide v-for="(property, index) in properties" :key="index">
                  <PropertyCard :property="property" />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import PropertyCard from './component/PropertyCard.vue'
import pic1 from '@/assets/image/list/Group 128.svg'
import pic2 from '@/assets/image/list/Group 129.svg'
import pic3 from '@/assets/image/list/Group 130.svg'
import pic4 from '@/assets/image/list/Group 131.svg'
import pic5 from '@/assets/image/list/Group 132.svg'
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules'
import { Thumbs, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const thumbsSwiper = ref(null)
const images = [pic1, pic2, pic3, pic4, pic5, pic1]

const isFavoriteAdded = ref(false)
/**
 * 字段说明
 */
// 标题：title
// 收藏；collect
// 总价totalPrice
// 单价unitPrice
// 公告平announcementFlat
// 地平horizon
// 总平数totalMean
// 类型type
// 地址：adress
// 房龄houseAge
// 状态status
// 拍次beatTime
// 拍卖日期auctionDate
// 案件笔录recordCase
// 补充说明supplementaryStatement
// 房屋图片housePicture

const houseInfor = reactive({
  id: 'R18192419',
  title: '金龍風暴!法拍好貸! ✅ 科工館旁精選大3房美寓🏠 代標千萬經紀人 陳慧瑜',
  collect: 99,
  totalPrice: 666,
  unitPrice: 13.5,
  announcementFlat: 36.4,
  horizon: 8,
  totalMean: 36.4,
  type: '公寓',
  adress: '高雄市苓雅區武廟路70號4樓',
  houseAge: '43',
  status: '待標',
  beatTime: '一拍',
  auctionDate: '114/03/12'
})

const houseDescription = reactive({
  recordCase: '1‧113年5月6日查封時，債務人陳稱自行居住使用，無出租出借。113年6月20日現場執行時，據債務人陳稱由其與家人自行居住，三房二廳二衛，無管委會，無配屬停車位、停車格，每3個月繳水塔清潔費300元，每1-2年繳化糞池清潔費由住戶均分。據地政人員表示，前後鐵窗為增建。本件拍定後除編號1建物依現況點交外，其餘均不點交。至於實際詳情及使用現況，請投標人自行查明。\n2‧本件建物據債務人稱自住；惟實際使用情形，投標人應自行查明。\n3‧編號2之建物未辦建物所有權第一次登記，不能依權利移轉證書辦理所有權登記，請投標人注意，又該建物占用之土地不在拍賣範圍。\n4‧請投標人自行查明是否有未繳納之工程受益費、差額地價，於辦理移轉時，應自行處理工程受益費、差額地價繳清事宜。\n5‧經拍賣之土地，如拍定價額不足扣繳土地增值稅時，應由拍定人代為繳清差額後再行發給權利移轉證書，請投標人注意。\n6‧本件債務人是否有積欠大樓管理費或公共基金、系爭標的有無管委會、規約暨詳細內容為何，均請投標人自行查明。\n7‧本件拍賣標的物依強制執行法第113條準用第69條之規定，拍賣物買受人就物之瑕疵無擔保請求權。請投標人自行查明，不得於拍定後主張。\n8‧本件勘估標的據債務人陳稱並無海砂屋、輻射屋、地震受創、火災受損、非自然死亡等特殊情事之資訊，惟實際使用情形投標人應自行查明。\n9‧如二人以上共同投標，日後欲領回保證金時，除有符合司法院訂定「地方法院民事執行處撥匯案款參考要點」第4點第1項但書、第2項規定情形外，本國人僅以共同受款人之「聯名帳戶」為限，請投標人自行斟酌注意。《法院案號：高雄地方法院案號：113年度司執齊字第55121號，清償票款》◎投標地點：高雄市前鎮區中山二路91號18樓-8，洽詢電話：(07)335-1278',
  supplementaryStatement: "金服公司📢 💁\n便宜買房!法拍好貸! ✅近鳳山高中精選3房美寓🏠\n⛳️高雄市鳳山區文學街16-3號4樓👍👍👍\n📆03/12 (3)  第1拍 (有點交)\n❤️【底價】355萬 / 保証金71萬\n💛【待標樓層】4樓/總樓層5樓\n💚【房屋坪數】建坪26坪/主建物25坪\n💜房屋格局:  3房2廳2衛\n💜交通機能: 正義車站車程3分鐘、國道1號車程5分鐘\n💜生活機能：7-11、全家、五金行\n💜鄰近學校：鳳山高中\n💜公園綠地:  寶業治洪公園",
  housePicture: [pic1, pic2, pic3, pic4, pic5]
})

const typeList = reactive([
  { name: '交通', icon: 'icon-traffic' },
  { name: '學校', icon: 'icon-school' },
  { name: '購物', icon: 'icon-shopping' },
  { name: '餐飲', icon: 'icon-restaurant' },
  { name: '醫院', icon: 'icon-hospital' },
  { name: '公園', icon: 'icon-park' },
  { name: '銀行', icon: 'icon-bank' },
])

const messageList = ref([
  {
    id: 1,
    title: '實價登錄',
    houseType: '同棟成交大樓',
    houseTypePrice: '12.22',
    totalPrice: '105,400',
    infor: '114年2月至114年3月，成交5筆'
  },
  {
    id: 2,
    title: '周遭實價',
    houseType: '38~44年公寓',
    houseTypePrice: '12.22',
    totalPrice: '230,620',
    infor: '周遭100公尺內，112年05月起交易，共13筆'
  },
  {
    id: 3,
    title: '周遭實價租金',
    houseType: '36~46年公寓',
    houseTypePrice: '12.22',
    totalPrice: '8千,4.3',
    infor: '周遭100公尺內，105年04月起交易，共22筆'
  }
])

const properties = ref([
  {
    id: 1,
    title: "房貸緊縮!法拍好貸! 武廟商圈正3房美寓",
    subtitle: "代標千萬經紀人 陳慧瑜",
    type: "李雅區/公寓/33.3坪",
    type1: "3/12(三)待標",
    auctionDate: "114/03/13(四)",
    status: "待標",
    statusName: "待標(113水141079)",
    totalPrice: "8000",
    pricePerPing: "13.5",
    imgurl: pic1
  },
  {
    id: 2,
    title: "北園別墅山腳路 大華國小活動中心",
    subtitle: "最紮實 林邵涵",
    type: "鳥松區/別墅/84.8坪",
    type1: "4/20(三)/一拍/待標",
    totalPrice: "1535",
    pricePerPing: "13.5",
    auctionDate: "114/03/13(四)",
    status: "待標",
    statusName: "待標(113水141079)",
    imgurl: pic2
  },
  {
    id: 3,
    title: "金龍風暴!法拍好貸蚵仔寮漁港大地坪3層車庫透天",
    subtitle: "代標經紀人 陳慧瑜",
    type: "苓雅區/透天/33.3坪",
    type1: "4/20(三)/一拍/流標",
    totalPrice: "748",
    pricePerPing: "14",
    auctionDate: "114/03/13(四)",
    status: "待標",
    statusName: "待標(113水141079)",
    imgurl: pic3
  },
  {
    id: 4,
    title: "北園別墅山腳路 大華國小活動中心",
    subtitle: "最紮實 林邵涵",
    type: "鳥松區/別墅/84.8坪",
    type1: "4/20(三)/一拍/待標",
    totalPrice: "1535",
    pricePerPing: "13.5",
    auctionDate: "114/03/13(四)",
    status: "待標",
    statusName: "待標(113水141079)",
    imgurl: pic2
  },
]);

// const isMobile = ref(false);

// const checkScreenSize = () => {
//   isMobile.value = window.innerWidth <= 768;
// };

// onMounted(() => {
//   checkScreenSize();
//   window.addEventListener('resize', checkScreenSize);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', checkScreenSize);
// });

// 收藏
const onAddCollect = () => {
  isFavoriteAdded.value = !isFavoriteAdded.value
  houseInfor.collect = isFavoriteAdded.value ? houseInfor.collect + 1 : houseInfor.collect - 1
}

const formatContent = (text) => {
  return text.replace(/\n/g, '<br>')
}


</script>

<style lang="scss" scoped>
@import url('./scss/index.scss');
</style>
<style lang="scss">
.list {
  .thumbs-swiper {

    .swiper-button-next,
    .swiper-button-prev {
      color: rgba(255, 255, 255, 0.7);
      background: rgba(51, 51, 51, 0.3);
      width: 20px;
      height: 115px;
      margin-top: 0;
      top: 0;
    }

    .swiper-button-prev {
      left: 0
    }

    .swiper-button-next {
      right: 0;
    }

    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-size: 18px;
    }

    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
      opacity: unset;
    }
  }

  .property-swiper {}
}
</style>