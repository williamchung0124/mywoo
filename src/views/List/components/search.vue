<template>
  <div class="filter-container">
    <div class="header">
      <div class="logo">
        買屋網
        <Icon name="icon-02" size="24" />
      </div>
      <div class="input-search">
        <el-select v-model="city" placeholder="Select">
          <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-input v-model="search" placeholder="請輸入物件關鍵字...">
          <template #append>
            <el-icon size="18">
              <Search />
            </el-icon>搜尋
          </template>
        </el-input>
      </div>
      <div class="map">
        <Icon name="house-map" size="18" />
        <span>地圖找房</span>
      </div>
    </div>
    <!-- Tab 切换 -->
    <el-tabs v-model="activeTab" class="mb-4">
      <el-tab-pane label="精選推薦" name="recommend"></el-tab-pane>
      <el-tab-pane label="條件搜尋" name="filter"></el-tab-pane>
    </el-tabs>
    <!-- 精選推薦 -->
    <div class="filter-content" v-show="activeTab === 'recommend'">
      <!-- 位置 -->
      <div class="filter-group1">
        <div class="flex-header">
          <label class="filter-label">位置</label>
          <el-select v-model="city" placeholder="Select">
            <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <span @click="resetFilters" class="reset">
            <el-icon>
              <Delete />
            </el-icon>清空條件</span>
        </div>
        <div class="filter-options">
          <span class="nolimit" :class="{ active: selectedLocations.length === 0 }"
            @click="selectedLocations = []">不限</span>
          <el-checkbox-group v-model="selectedLocations">
            <el-checkbox v-for="location in locations" :key="location" :label="location">
              {{ location }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <!-- 類型 -->
      <div class="filter-group">
        <label class="filter-label">類型</label>
        <span class="nolimit" :class="{ active: selectedTypes.length === 0 }" @click="selectedTypes = []">不限</span>
        <el-checkbox-group v-model="selectedTypes">
          <el-checkbox v-for="type in types" :key="type" :label="type">
            {{ type }}
          </el-checkbox>
        </el-checkbox-group>
      </div>

      <!-- 總價 -->
      <div class="filter-group">
        <label class="filter-label">總價</label>
        <span class="nolimit" :class="{ active: selectedPrice.length === 0 }" @click="selectedPrice = []">不限</span>
        <el-checkbox-group v-model="selectedPrice">
          <el-checkbox v-for="price in prices" :key="price.value" :label="price.value">
            {{ price.label }}
          </el-checkbox>
        </el-checkbox-group>
        <div class="price-inputs">
          <el-input v-model="priceRange.min" style="width: 52px" size="small" class="price-input" /><i>萬</i>
          <span> - </span>
          <el-input v-model="priceRange.max" style="width: 52px" size="small" class="price-input" /><i>萬</i>
          <span v-if="priceRange.min && priceRange.max" class="sure">確定</span>
        </div>
      </div>

      <!-- 坪數 -->
      <div class="filter-group">
        <label class="filter-label">坪數</label>
        <span class="nolimit" :class="{ active: selectedArea.length === 0 }" @click="selectedArea = []">不限</span>
        <el-checkbox-group v-model="selectedArea">
          <el-checkbox v-for="area in areas" :key="area.value" :label="area.value">
            {{ area.label }}
          </el-checkbox>
        </el-checkbox-group>
        <div class="area-inputs">
          <el-input v-model="areaRange.min" placeholder="最小坪" style="width: 58px" size="small"
            class="area-input" /><i>坪</i>
          <span> - </span>
          <el-input v-model="areaRange.max" placeholder="最大坪" style="width: 58px" size="small"
            class="area-input" /><i>坪</i>
          <span v-if="areaRange.min && areaRange.max" class="sure">確定</span>
        </div>
      </div>

      <!-- 屋齡 -->
      <div class="filter-group">
        <label class="filter-label">屋齡</label>
        <span class="nolimit" :class="{ active: selectedAge.length === 0 }" @click="selectedAge = []">
          不限
        </span>
        <el-checkbox-group v-model="selectedAge">
          <el-checkbox v-for="age in ages" :key="age.value" :label="age.value">
            {{ age.label }}
          </el-checkbox>
        </el-checkbox-group>
        <div class="age-inputs">
          <el-input v-model="ageRange.min" style="width: 36px" size="small" class="age-input" />
          <span> - </span>
          <el-input v-model="ageRange.max" style="width: 36px" size="small" class="age-input" />
          <i>年</i>
          <span v-if="ageRange.min && ageRange.max" class="sure">確定</span>
        </div>
      </div>

      <!-- 更多 -->
      <div class="filter-group more">
        <label class="filter-label">更多</label>
        <el-select v-model="beats" placeholder="Select" class="beats">
          <el-option v-for="item in beatsoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-select v-model="type" placeholder="Select">
          <el-option v-for="item in typeoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>

    </div>
    <!-- 條件搜尋 -->
    <div class="filter-content" v-show="activeTab === 'filter'">
      <!-- 位置 -->
      <div class="filter-group1">
        <div class="flex-header">
          <label class="filter-label">位置</label>
          <el-select v-model="city" placeholder="Select">
            <el-option v-for="item in cityoptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <span @click="resetFilters" class="reset">
            <el-icon>
              <Delete />
            </el-icon>清空條件</span>
        </div>
        <div class="filter-options">
          <span class="nolimit" :class="{ active: selectedLocations.length === 0 }"
            @click="selectedLocations = []">不限</span>
          <el-checkbox-group v-model="selectedLocations">
            <el-checkbox v-for="location in locations" :key="location" :label="location">
              {{ location }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <!-- 類型 -->
      <div class="filter-group">
        <label class="filter-label">類型</label>
        <span class="nolimit" :class="{ active: selectedTypes.length === 0 }" @click="selectedTypes = []">不限</span>
        <el-checkbox-group v-model="selectedTypes">
          <el-checkbox v-for="type in types" :key="type" :label="type">
            {{ type }}
          </el-checkbox>
        </el-checkbox-group>
      </div>

      <!-- 總價 -->
      <div class="filter-group">
        <label class="filter-label">售價</label>
        <span class="nolimit" :class="{ active: selectedPrice.length === 0 }" @click="selectedPrice = []">不限</span>
        <el-checkbox-group v-model="selectedPrice">
          <el-checkbox v-for="price in prices" :key="price.value" :label="price.value">
            {{ price.label }}
          </el-checkbox>
        </el-checkbox-group>
        <div class="edit" @click="showPriceInputs1 = !showPriceInputs1" @mouseover="hovering1 = true"
          @mouseleave="hovering1 = false">
          <Icon :name="hovering1 ? 'edit-color' : 'edit'" size="14" />
          <span style="margin-left: 3px;">自定義售價</span>
        </div>
        <div v-if="showPriceInputs1" class="price-inputs">
          <el-input v-model="priceRange.min" style="width: 52px" size="small" class="price-input" /><i>萬</i>
          <span> - </span>
          <el-input v-model="priceRange.max" style="width: 52px" size="small" class="price-input" /><i>萬</i>
          <span v-if="priceRange.min && priceRange.max" class="sure">確定</span>
        </div>
      </div>

      <!-- 坪數 -->
      <div class="filter-group">
        <label class="filter-label">坪數</label>
        <span class="nolimit" :class="{ active: selectedArea.length === 0 }" @click="selectedArea = []">不限</span>
        <el-checkbox-group v-model="selectedArea">
          <el-checkbox v-for="area in areas" :key="area.value" :label="area.value">
            {{ area.label }}
          </el-checkbox>
        </el-checkbox-group>
        <div class="edit" @click="showPriceInputs2 = !showPriceInputs2" @mouseover="hovering2 = true"
          @mouseleave="hovering2 = false">
          <Icon :name="hovering2 ? 'edit-color' : 'edit'" size="14" />
          <span style="margin-left: 3px;">自定義坪數</span>
        </div>
        <div class="area-inputs" v-if="showPriceInputs2">
          <el-input v-model="areaRange.min" placeholder="最小坪" style="width: 58px" size="small"
            class="area-input" /><i>坪</i>
          <span> - </span>
          <el-input v-model="areaRange.max" placeholder="最大坪" style="width: 58px" size="small"
            class="area-input" /><i>坪</i>
          <span v-if="areaRange.min && areaRange.max" class="sure">確定</span>
        </div>
      </div>

      <!-- 屋齡 -->
      <div class="filter-group">
        <label class="filter-label">屋齡</label>
        <span class="nolimit" :class="{ active: selectedAge.length === 0 }" @click="selectedAge = []">
          不限
        </span>
        <el-checkbox-group v-model="selectedAge">
          <el-checkbox v-for="age in ages" :key="age.value" :label="age.value">
            {{ age.label }}
          </el-checkbox>
        </el-checkbox-group>
        <div class="edit" @click="showPriceInputs3 = !showPriceInputs3" @mouseover="hovering3 = true"
          @mouseleave="hovering3 = false">
          <Icon :name="hovering3 ? 'edit-color' : 'edit'" size="14" />
          <span style="margin-left: 3px;">自定義屋齡</span>
        </div>
        <div class="age-inputs" v-if="showPriceInputs3">
          <el-input v-model="ageRange.min" style="width: 36px" size="small" class="age-input" />
          <span> - </span>
          <el-input v-model="ageRange.max" style="width: 36px" size="small" class="age-input" />
          <i>年</i>
          <span v-if="ageRange.min && ageRange.max" class="sure">確定</span>
        </div>
      </div>

      <!-- 更多 -->
      <div class="filter-group more">
        <label class="filter-label">更多</label>
        <el-select v-model="beats" placeholder="Select" class="beats">
          <el-option v-for="item in beatsoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-select v-model="floor" placeholder="Select" class="floor">
          <el-option v-for="item in flooroptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-select v-model="type" placeholder="Select">
          <el-option v-for="item in typeoptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const city = ref('1')
const search = ref('')
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
const beats = ref('1')
const beatsoptions = [
  {
    value: '1',
    label: '拍次',
  },
  {
    value: '2',
    label: '拍次1',
  }
]
const floor = ref('1')
const flooroptions = [
  {
    value: '1',
    label: '樓層',
  },
  {
    value: '2',
    label: '樓層1',
  }
]
const type = ref('1')
const typeoptions = [
  {
    value: '1',
    label: '車位類型',
  },
  {
    value: '2',
    label: '車位類型1',
  }
]
const hovering1 = ref(false)
const hovering2 = ref(false)
const hovering3 = ref(false)
const showPriceInputs1 = ref(false)
const showPriceInputs2 = ref(false)
const showPriceInputs3 = ref(false)
// Tab 切换
const activeTab = ref('recommend');

// 城市和位置
const cities = ['高雄市', '台北市', '台中市'];
const selectedCity = ref('高雄市');
const locations = [
  '鳳山區', '三民區', '左營區', '新興區', '鹽埕區', '苓雅區', '小港區', '鼓山區', '大寮區'
];
const selectedLocations = ref([]);

// 類型
const types = ['一樓', '華廈', '公寓', '透天', '土地', '其他'];
const selectedTypes = ref(['華廈', '公寓']);

// 總價
const prices = [
  { label: '500萬內', value: '500萬內' },
  { label: '500萬-1000萬', value: '500萬-1000萬' },
  { label: '1000萬-1500萬', value: '1000萬-1500萬' },
  { label: '1500萬以上', value: '1500萬以上' },
];
const selectedPrice = ref([]);
const priceRange = ref({ min: '', max: '' });

// 坪數
const areas = [
  { label: '20坪內', value: '20坪內' },
  { label: '20-40坪', value: '20-40坪' },
  { label: '40-60坪', value: '40-60坪' },
  { label: '60坪以上', value: '60坪以上' },
];
const selectedArea = ref([]);
const areaRange = ref({ min: '', max: '' });

// 屋齡
const ages = [
  { label: '5年內', value: '5年內' },
  { label: '5年-10年', value: '5年-10年' },
  { label: '10年-20年', value: '10年-20年' },
  { label: '20年以上', value: '20年以上' },
];
const selectedAge = ref([]);
const ageRange = ref({ min: '', max: '' });

const resetFilters = () => {
  selectedCity.value = '高雄市';
  selectedLocations.value = [];
  selectedTypes.value = [];
  selectedArea.value = []
  selectedAge.value = []
  selectedPrice.value = []
  priceRange.value = { min: '', max: '' };
  areaRange.value = { min: '', max: '' };
  ageRange.value = { min: '', max: '' };
  beats.value = '1'
  floor.value = '1'
  type.value = '1'
};
</script>

<style scoped lang="scss">
.filter-container {}

.filter-content {
  background-color: #fafafa;
  padding: 32px;
  padding-bottom: 4px;
  margin-bottom: 32px;
  border-radius: 4px;
  margin-top: 24px;
}

.filter-group {
  display: flex;
  margin-bottom: 16px;
  align-items: baseline;

  i {
    font-size: 14px;
    color: #333;
  }

  .sure {
    display: inline-block;
    cursor: pointer;
    width: 40px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    margin-left: 3px;
    border-radius: 2px;
    background-color: #0566B3;
  }

  .edit {
    color: #333;
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
  }

  .edit:hover {
    color: #EA5513;
  }
}

.nolimit {
  font-size: 14px;
  color: #333;
  margin-left: 15px;
  margin-right: 16px;
  cursor: pointer;
  width: 40px;
  display: inline-block;
  flex: 0 0 auto;
}

.nolimit.active {
  color: #EA5513;
  font-weight: bold;
}

.filter-group1 {
  position: relative;

  .flex-header {
    display: flex;
  }

  .filter-label {
    line-height: 32px;
  }

  .el-select {
    margin-left: 18px;
    margin-top: 9px;

    .el-select__placeholder {
      color: #EA5513 !important;
    }
  }

  .reset {
    cursor: pointer;
    position: absolute;
    right: 0;
    padding: 0 4px;

    .el-icon {
      vertical-align: text-top;
      margin-right: 3px;
    }

    display: inline-block;
    line-height: 32px;
    font-size: 14px;
    color: #333;
  }

  .reset:hover {
    background: #EEEEEE;
    border-radius: 4px;
  }

  .filter-options {
    display: flex;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    padding: 24px 0px 12px;
    margin-bottom: 24px;
    margin-left: 43px;

    .nolimit {
      margin-left: 0;
      margin-top: -4px;
    }
  }
}

.filter-label {
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
  flex: 0 0 auto;
  width: 28px;
  display: inline-block;
}

.price-inputs,
.area-inputs,
.age-inputs {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-actions {
  display: flex;
  gap: 16px;
}
</style>
<style lang="scss">
.filter-container {
  .header {
    padding-top: 24px;
    padding-bottom: 32px;
    display: flex;
    align-items: center;

    .logo {
      font-weight: bold;
      font-size: 24px;
    }

    .input-search {
      display: flex;
      align-items: center;
      margin-left: 88px;
      margin-right: 24px;
    }

    .el-input-group {
      height: 40px;
      width: 634px;
      margin-left: 12px;
    }

    .el-input-group__append {
      background-color: #0566B3;
      color: #fff;
      font-size: 14px;
      border: 1px solid #0566B3;
      box-shadow: none;
      cursor: pointer;

      .el-icon {
        margin-right: 4px;
      }
    }

    .map {
      cursor: pointer;

      span {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        margin-left: 4px;
      }
    }
  }

  .el-input__inner {
    color: #333 !important;
    font-size: 14px;
  }

  .el-tabs {
    height: 59px;

    .el-tabs__header {
      margin: 0 !important;
    }

    .el-tabs__item {
      line-height: 59px;
      height: 59px;
      text-align: center;
      width: 128px;
      padding: 0;
    }

    .el-tabs__item.is-active {
      color: #fff;
      background-color: #EA5513;
    }

    .el-tabs__item:hover {
      color: unset !important
    }

    .el-tabs__item.is-active:hover {
      color: #fff !important;
    }

    .el-tabs__active-bar,
    .el-tabs__nav-wrap:after {
      background-color: #EA5513 !important;
    }
  }

  .el-checkbox {
    color: #333 !important;
    height: unset !important;
    margin-right: 16px;
    margin-bottom: 12px;
  }

  .el-checkbox:hover {
    color: #EA5513 !important;
  }

  .el-checkbox__label {
    padding-left: 3px;
  }

  .el-checkbox__inner {
    height: 10px;
    width: 10px;
  }

  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #EA5513 !important;
    font-weight: bold;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #EA5513 !important;
    border-color: #EA5513 !important
  }

  .el-checkbox__inner:after {
    height: 3px !important;
    left: 2px !important;
  }

  .el-select {
    width: 64px;
  }

  .el-select__wrapper {
    padding: 0;
    box-shadow: none;
    background: unset;
  }

  .el-select__placeholder {
    color: #333;
  }

  .filter-group1 {
    .el-select__placeholder {
      color: #EA5513 !important;
    }
  }

  .el-select__wrapper.is-hovering:not(.is-focused) {
    box-shadow: none !important
  }

  .more {
    align-items: flex-start !important;

    .el-select {
      margin-left: 16px;
    }

    .el-select.beats,
    .el-select.floor {
      .el-select__wrapper {
        width: 57px;
      }
    }

    .el-select__wrapper {
      width: 85px;
      min-height: unset;
      height: 20px;
    }
  }
}
</style>