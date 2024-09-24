let nav = document.querySelector(".navigation-wrap");
window.onscroll = () => {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on")
    }
};

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");


// navBar.forEach((a) => {
//     a.addEventListener("click", () => {
//         document.querySelector(".active-link")?.classList.remove("active-link");
//         a.classList.add("active-link");
//     })
// });



navBar.forEach((a) => {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    })
});
