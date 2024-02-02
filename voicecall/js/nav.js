const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

console.log(navToggleI);
console.log(navListUl);
//.nav-toggle클릭하면
nav_toggle.onclick=()=>{
    //.nav-toggle i 햄버거메뉴 <-> X
    //클래스에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");
    //.nav-list .show-menu toggle
    navListUl.classList.toggle("show-menu");
};

