// $(document).ready(function(){

//     $(i.icon).click(function(){
//         $('.nav-list').slideToggle()
//     })
// })

document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector("i.icon");
    const navList = document.querySelector(".nav-list");

    if (icon && navList) {
        icon.addEventListener("click", function () {
            // Toggle visibility with sliding effect (basic)
            if (navList.style.display === "block") {
                navList.style.display = "none";
            } else {
                navList.style.display = "block";
            }
        });
    }
});
