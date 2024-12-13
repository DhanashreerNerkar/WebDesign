"use strict";
(
    function(){
        const buttonEl = document.querySelector(".hamburger");
        const navLinks = document.querySelector('.nav-links');
        buttonEl.addEventListener(
            "click",function(){
                navLinks.classList.toggle('active');
            }
            )
    }
)();