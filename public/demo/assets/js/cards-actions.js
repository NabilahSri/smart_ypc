"use strict";!function(){const e=[].slice.call(document.querySelectorAll(".card-collapsible")),l=[].slice.call(document.querySelectorAll(".card-expand")),s=[].slice.call(document.querySelectorAll(".card-close"));let c=document.getElementById("sortable-4");e&&e.map((function(e){e.addEventListener("click",(l=>{l.preventDefault(),new bootstrap.Collapse(e.closest(".card").querySelector(".collapse")),e.closest(".card-header").classList.toggle("collapsed"),Helpers._toggleClass(e.firstElementChild,"bx-chevron-down","bx-chevron-up")}))})),l&&l.map((function(e){e.addEventListener("click",(l=>{l.preventDefault(),Helpers._toggleClass(e.firstElementChild,"bx-fullscreen","bx-exit-fullscreen"),e.closest(".card").classList.toggle("card-fullscreen")}))})),document.addEventListener("keyup",(e=>{if(e.preventDefault(),"Escape"===e.key){const e=document.querySelector(".card-fullscreen");e&&(Helpers._toggleClass(e.querySelector(".card-expand").firstChild,"bx-fullscreen","bx-exit-fullscreen"),e.classList.toggle("card-fullscreen"))}})),s&&s.map((function(e){e.addEventListener("click",(l=>{l.preventDefault(),e.closest(".card").classList.add("d-none")}))})),void 0!==typeof c&&null!==c&&Sortable.create(c,{animation:500,handle:".card"})}(),$((function(){const e=$(".card-reload");e.length&&e.on("click",(function(e){e.preventDefault();var l=$(this);l.closest(".card").block({message:'<div class="sk-fold sk-primary"><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div><div class="sk-fold-cube"></div></div><h5>LOADING...</h5>',css:{backgroundColor:"transparent",border:"0"},overlayCSS:{backgroundColor:$("html").hasClass("dark-style")?"#000":"#fff",opacity:.55}}),setTimeout((function(){l.closest(".card").unblock(),l.closest(".card").find(".card-alert").length&&l.closest(".card").find(".card-alert").html('<div class="alert alert-solid-danger alert-dismissible fade show" role="alert"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><span class="fw-medium">Holy grail!</span> Your success/error message here.</div>')}),2500)}))}));