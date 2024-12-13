"use strict";

(
    function()
    {
        document.addEventListener("DOMContentLoaded", function() {
            const accordionHeaders = document.querySelectorAll(".accordion-header");
        
            accordionHeaders.forEach(header => {
                header.addEventListener("click", () => {
                    const accordionItem = header.parentElement;
                    accordionItem.classList.toggle("active");
        
                    const accordionContent = accordionItem.querySelector(".accordion-content");
                    if (accordionItem.classList.contains("active")) {
                        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                    } else {
                        accordionContent.style.maxHeight = "0";
                    }
                });
            });
        });        
    }
)();