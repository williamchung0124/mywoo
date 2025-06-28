/*
 * @Date: 2025-06-04 22:19:40
 * @LastEditors: “jiamin” “jiamin@gritworld.com”
 * @LastEditTime: 2025-06-28 15:48:08
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
  { id: 1, name: "首页", link: "home.html" },
  { id: 2, name: "關於我們", link: "about.html" },
  { id: 3, name: "服務項目", link: "serve.html" },
  { id: 4, name: "菁英群", link: "eliteGroup.html" },
  { id: 5, name: "房產大小事", link: "news.html" },
  { id: 6, name: "法拍專業課程", link: "class.html" },
  { id: 7, name: "資訊會員登入", link: "vipLogin.html" },
];

createNavMenu(menuItems, "nav-menu");
setActiveMenuItem(menuItems, "nav-menu");
