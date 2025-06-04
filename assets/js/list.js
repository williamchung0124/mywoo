/**
 * 搜索功能开始--------------------------------------------------
 */
$(".tab").on("click", function () {
  $(".tab").removeClass("active");
  $(this).addClass("active");

  const tabName = $(this).data("tab");
  $(".tab-filters").toggleClass("active", tabName === "filters");

  // 切换到“精選推薦”时，显示相关元素
  const showRecommendation = tabName === "recommendation";
  $(".text-price, .text-areas, .text-ages").toggle(showRecommendation);
  $("#price-confirm, #areas-confirm, #ages-confirm").toggle(!showRecommendation);
});

// 城市下拉选项生成
const cities = ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市'];
const citySelect = document.getElementById('city-select');
cities.forEach((city, index) => {
  const option = new Option(city, city, index === 0);
  citySelect.add(option);
});

// 动态生成筛选条件
const filters = {
  locationData: ['鳳山區', '三民區', '左營區', '新興區', '鹽埕區', '苓雅區', '小港區', '鼓山區', '大寮區'],
  typeData: ['一樓', '華廈', '公寓', '透天', '土地', '其他'],
  priceData: ["500萬內", "500萬-1000萬", "1000萬-1500萬", "1500萬以上"],
  areas: ['20坪內', '20-40坪', '40-60坪', '60坪以上'],
  ages: ['5年內', '5年-10年', '10年-20年', '20年以上']
};

Object.entries(filters).forEach(([key, data]) => {
  const container = $(`#${key.replace('Data', '')}-filter`);
  data.forEach(item => container.append(`<label><input type="checkbox" value="${item}"> ${item}</label>`));
});

// 筛选条件样式更新
$(".filter-group input[type='checkbox']").on("change", function () {
  const label = $(this).parent("label");
  label.css({
    "color": $(this).is(":checked") ? "#EA5513" : "",
    "font-weight": $(this).is(":checked") ? "bold" : ""
  });
}).css({ "accent-color": "#EA5513" });

// 清空筛选条件
$(".unlimited-btn").on("click", function () {
  const parentGroup = $(this).closest(".filter-group");
  parentGroup.find("input[type='checkbox']").prop("checked", false);
  $(this).addClass("active");
});

$(".filter-group input[type='checkbox']").on("change", function () {
  const parentGroup = $(this).closest(".filter-group");
  parentGroup.find(".unlimited-btn").toggleClass("active", !parentGroup.find("input[type='checkbox']:checked").length);
});

// 显示确认按钮
function handleInputChange(inputSelector, confirmSelector, btnSelector) {
  $(inputSelector).on("input", function () {
    const hasValue = $(inputSelector).toArray().some(input => $(input).val());
    $(confirmSelector).css("display", hasValue ? "inline-block" : "none");
    $(btnSelector).toggleClass("active", !hasValue);
  });
}

handleInputChange("#price-min, #price-max", "#price-confirm", ".unlimited-btn.price-btn");
handleInputChange("#areas-min, #areas-max", "#areas-confirm", ".unlimited-btn.areas-btn");
handleInputChange("#ages-min, #ages-max", "#ages-confirm", ".unlimited-btn.ages-btn");

// 自定义显示输入事件
$(".edit").on("click", function () {
  const filterGroup = $(this).closest(".filter-group");
  filterGroup.find(".text-price, .text-areas, .text-ages, .sure").toggle();
});

// 清空条件按钮
$(".clear-btn").on("click", function () {
  $(".filter-group input[type='checkbox']").prop("checked", false);
  $(".unlimited-btn").addClass("active");
  $("#price-min, #price-max, #areas-min, #areas-max, #ages-min, #ages-max").val('');
  $(".filter-group input[type='checkbox']").parent("label").css({ "color": "", "font-weight": "" });
});

/**
 * 搜索功能结束-------------------------------------------------------------
 */

// 列表排序
let activeIndex = 0;
$('.sort-option').click(function () {
  $('.sort-option').removeClass('active').find('.sort-icon').attr('src', 'assets/image/icons/arrow-down.svg');
  $(this).addClass('active').find('.sort-icon').attr('src', 'assets/image/icons/up.svg');
  activeIndex = $(this).data('index');
});

// 收藏功能
$('.add-collect').click(function () {
  const icon = $(this).find('.favorite-icon');
  const isAdded = icon.attr('src').includes('icon-favorite-added.svg');
  icon.attr('src', isAdded ? 'assets/image/icons/icon-favorite.svg' : 'assets/image/icons/icon-favorite-added.svg');
});

// 设置标签颜色
$('.listTag').each(function () {
  const tagColors = {
    '推薦': '#0566B3',
    '無須競標': '#43C62F',
    '最後一拍': '#AD42CA',
    '精選': '#EA5513'
  };
  $(this).css('background-color', tagColors[$(this).text().trim()] || '');
});
