// $(document).ready(function(){

//     $(i.icon).click(function(){
//         $('.nav-list').slideToggle()
//     })

//     $(window).scrol(function(){
//         var sc = $(this).scrollTop();
//         if(sc > 100){
//             $('header').addClass('sticky');
//         }else{
//             $('header').removeClass('sticky');
//         }
//     });
// });

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

window.addEventListener('scroll', function() {
    var sc = window.scrollY;
    var header = document.querySelector('header');

    if (sc > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
