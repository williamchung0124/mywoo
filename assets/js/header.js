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
  { id: 0, name: "新曝光", link: "home.html" },
  { id: 1, name: "找好房", link: "list.html" },
  { id: 2, name: "菁英群", link: "elite.html" },
  { id: 3, name: "法拍專業課程", link: "course.html" },
  { id: 4, name: "房產大小事", link: "news.html" },
  { id: 5, name: "最新消息", link: "latest.html" },
  { id: 6, name: "業務型象", link: "business.html" },
  { id: 7, name: "關於買屋網", link: "about.html" },
];

createNavMenu(menuItems, "nav-menu");
setActiveMenuItem(menuItems, "nav-menu");
