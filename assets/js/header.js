/*
 * @Date: 2025-06-04 22:19:40
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-06-30 01:43:08
 * @FilePath: /mywoo/assets/js/header.js
 */
function createNavMenu(menuItems, menuContainerId) {
  const navMenu = document.getElementById(menuContainerId);

  if (!navMenu) {
    console.error(`Element with id "${menuContainerId}" not found.`);
    return;
  }

  menuItems.forEach(({ id, name, link }) => {
    const li = document.createElement("li");
    li.textContent = name;
    li.dataset.id = id;
    li.dataset.link = link;

    li.addEventListener("click", () => {
      window.location.href = link;
    });

    navMenu.appendChild(li);
  });
}

function setActiveMenuItem(menuItems, menuContainerId) {
  const navMenu = document.getElementById(menuContainerId);

  if (!navMenu) {
    console.error(`Element with id "${menuContainerId}" not found.`);
    return;
  }
  const currentPath = window.location.pathname.split("/").pop().split(".")[0];
  menuItems.forEach(({ link }) => {
    const li = navMenu.querySelector(`li[data-link="${link}"]`);
    if (li) {
      li.classList.toggle("active", currentPath.includes(link.split(".")[0]));
    }
  });
}





const menuItems = [
  {
    id: '1',
    name: "首頁",
    link: "home.html",
  },
  {
    id: 2,
    name: "關於我們",
    link: "about.html",
  },
  {
    id: 3,
    name: "服務項目",
    link: "serve.html",
  },
  {
    id: 4,
    name: "菁英群",
    link: "eliteGroup.html",
  },
  {
    id: 5,
    name: "房產大小事",
    link: "news.html",
  },
  {
    id: 6,
    name: "法拍專業課程",
    link: "class.html",
  },
  {
    id: 7,
    name: "資訊會員登入",
    link: "vipLogin.html",
  },
];

createNavMenu(menuItems, "nav-menu");
setActiveMenuItem(menuItems, "nav-menu");


const currentPath = window.location.pathname.split("/").pop();
const searchParams = window.location.search;

if (currentPath === "list.html") {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    const firstLi = navMenu.querySelector("li:first-child");
    if (firstLi) {
      firstLi.innerHTML = `
        <a href="./home.html">首頁</a> <i>/<i>
        <a href="./list.html${searchParams}">查询结果</a>
      `;
    }
  }
} else if (currentPath === "list-content.html") {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    const firstLi = navMenu.querySelector("li:first-child");
    if (firstLi) {
      firstLi.innerHTML = `
        <a href="./home.html">首頁</a> <i>/<i>
        <a href="./list.html${searchParams}">查詢結果</a> <i>/<i>
        <a href="./list-content.html${searchParams}">詳細資料</a>
      `;
    }
  }
} else if (currentPath === "list-map.html") {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    const firstLi = navMenu.querySelector("li:first-child");
    if (firstLi) {
      firstLi.innerHTML = `
        <a href="./home.html">首頁</a> <i>/<i>
        <a href="./list-map.html${searchParams}">地圖搜尋</a>
      `;
    }
  }
}

