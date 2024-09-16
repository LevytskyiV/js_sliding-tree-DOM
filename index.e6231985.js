document.querySelectorAll(".tree li").forEach(function(e){var t=e.firstChild,l=document.createElement("span");l.textContent=t.textContent.trim(),e.replaceChild(l,t),l.addEventListener("click",function(){var t=e.querySelector("ul");t&&("none"===t.style.display?t.style.display="block":t.style.display="none")})});
//# sourceMappingURL=index.e6231985.js.map
