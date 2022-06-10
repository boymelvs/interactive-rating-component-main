"use strict";

const toggle = (elem) => {
   elem.classList.contains("active") ? elem.classList.remove("active") : elem.classList.add("active");
};

const addRemoveClasses = (elem) => {
   if (elem.classList.contains("show")) {
      toggle(elem);

      setTimeout(() => {
         elem.classList.remove("show");
      }, 300);
   } else {
      elem.classList.add("show");

      setTimeout(() => {
         toggle(elem);
      }, 0.1);
   }
};

const clickListen = (action, elems) => {
   if (action.length > 1) {
      elems.forEach((elem, elemKey) => {
         elem.addEventListener("click", (e) => {
            provideLoop(elems, elemKey);
         });
      });
   } else {
      action.addEventListener("click", (e) => {
         console.log("getrate", provideLoop(action, elems));
      });
   }
};

const provideLoop = (els, elemKey) => {
   if (els.length > 1) {
      els.forEach((el, elKey) => {
         if (elKey == elemKey) {
            let getRate = el.innerText;

            toggle(el);
            getSelectedRate(getRate);
         } else {
            el.classList.remove("active");
         }
      });
   }
};

const getSelectedRate = (rate) => {
   const selectedRate = document.querySelector(".selected_rate");
   selectedRate.innerText = rate;
};

const rates = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit_btn");
const thanksModal = document.querySelector(".thanks_modal_container");
clickListen(rates, rates);
clickListen(submitBtn, thanksModal);
getSelectedRate();
