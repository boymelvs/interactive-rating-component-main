"use strict";

/* add/remove classes to make element vissible */
const addRemoveClasses = (elem) => {
   if (elem.classList.contains("show")) {
      elem.classList.remove("active");

      setTimeout(() => {
         elem.classList.remove("show");
      }, 300);
   } else {
      elem.classList.add("show");

      setTimeout(() => {
         elem.classList.add("active");
      }, 0.1);
   }
};

/* provide listening for click */
const clickListen = (action, elems, optional) => {
   if (action.length > 1) {
      elems.forEach((elem, elemKey) => {
         elem.addEventListener("click", (e) => {
            rateLoop(elems, elemKey);
         });
      });
   } else {
      action.addEventListener("click", (e) => {
         if (action.classList.contains("close")) {
            addRemoveClasses(elems);
         } else if (getSelectedRate(elems)) {
            addRemoveClasses(optional);
         }
      });
   }
};

/* looping in the rates */
const rateLoop = (els, elemKey) => {
   els.forEach((el, elKey) => {
      if (elKey == elemKey) {
         addRemoveClasses(el);
      } else {
         el.classList.remove("active");
      }
   });
};

/* select which rate is active */
const getSelectedRate = (elems) => {
   let isActive;

   const selectedRate = document.querySelector(".selected_rate");
   elems.forEach((el, elKey) => {
      if (el.classList.contains("active")) {
         selectedRate.innerText = el.innerText;
         isActive = true;
      }
   });

   return isActive;
};

const rates = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit_btn");
const thanksModal = document.querySelector(".thanks_modal_container");
const closeThanksModal = document.querySelector(".close");

clickListen(rates, rates);
clickListen(submitBtn, rates, thanksModal);
clickListen(closeThanksModal, thanksModal);
