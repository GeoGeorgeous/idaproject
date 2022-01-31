(()=>{"use strict";var e={822:(e,t,n)=>{e.exports=n.p+"f3eddb09e92ca20a0873.jpg"},705:(e,t,n)=>{e.exports=n.p+"076901a9cb0fea6ea822.jpg"},141:(e,t,n)=>{e.exports=n.p+"ace00c337b981c89d6ef.jpg"},944:(e,t,n)=>{e.exports=n.p+"b1ab1fe33ca35abf322a.jpg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function t(e,n,r){var i=e.items,o=e.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=i,this._renderer=o,this._containerElement=n,this._handleLocalChange=r}var n,i;return n=t,i=[{key:"render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t?this._itemsSorted.forEach((function(t){e._renderer(t)})):this._items.forEach((function(t){e._renderer(t)})),this._handleLocalChange(this._items)}},{key:"sortByProperty",value:function(t){for(var n=!1;this._containerElement.firstChild;)this._containerElement.removeChild(this._containerElement.lastChild);"byPriceIncrease"===t&&(this._itemsSorted=e(this._items).sort((function(e,t){return e.price-t.price})),n=!0),"byPriceDecrease"===t&&(this._itemsSorted=e(this._items).sort((function(e,t){return t.price-e.price})),n=!0),"byName"===t&&(this._itemsSorted=e(this._items).sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0})),n=!0),this.render(n)}},{key:"addItem",value:function(e,t){this._items.unshift(e),this._handleLocalChange(this._items),t.classList.add("new-product"),this._containerElement.prepend(t)}},{key:"deleteItem",value:function(e){var t=e.name,n=e.desc,r=e.image,i=e.price;this._items.splice(this._items.findIndex((function(e){return e.name===t&&e.desc===n&&e.image===r&&e.price===i})),1),this._handleLocalChange(this._items)}}],i&&r(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t.name,this.desc=t.desc,this.image=t.image,this.price=t.price,this._templateSelector=n,this._callback=r}var t,n;return t=e,(n=[{key:"_cloneTemplate",value:function(){this._productElement=document.querySelector(this._templateSelector).content.querySelector(".product").cloneNode(!0)}},{key:"_formatPrice",value:function(){this._productPriceFormated="".concat(new Intl.NumberFormat("ru-RU").format(this.price)," руб.")}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton=this._productElement.querySelector(".product__delete-button"),this._deleteButton.addEventListener("click",(function(){e._removeProduct()}))}},{key:"generateProductMarkUp",value:function(){return this._cloneTemplate(),this._formatPrice(),this._productNameElement=this._productElement.querySelector(".product__title"),this._productDescElement=this._productElement.querySelector(".product__desc"),this._productImageElement=this._productElement.querySelector(".product__image"),this._productPriceElement=this._productElement.querySelector(".product__price"),this._productImageElement.src=this.image,this._productImageElement.alt=this.name,this._productNameElement.textContent=this.name,this._productDescElement.textContent=this.desc,this._productPriceElement.textContent=this._productPriceFormated,this._setEventListeners(),this._productElement}},{key:"_removeProduct",value:function(){var e=this;this._productElement.classList.add("remove-product"),this._callback(this),setTimeout((function(){e._productElement.remove(),e._productElement=null}),420)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),c=document.querySelector(".products__items"),s=document.forms["product-form"],u=s.querySelector(".form__submit-button"),l=document.querySelector(".header__sort-button");function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".notifications");var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._notifications=document.querySelector(".notifications"),this._message=t,this._element=null}var t,n;return t=e,(n=[{key:"_cloneNode",value:function(){this._notificationElement=document.querySelector("#notification").content.querySelector(".notification").cloneNode(!0)}},{key:"_createNotification",value:function(){return this._cloneNode(),this._notificationElement.querySelector(".notification__message").textContent=this._message,this._notificationElement}},{key:"_animatePopUp",value:function(){this._element.classList.remove("notification__message_hided"),this._element.classList.add("notification__message_shown")}},{key:"_animateHideOut",value:function(){var e=this;setTimeout((function(){e._element.classList.remove("notification__message_shown"),e._element.classList.add("notification__message_hided")}),1e3),setTimeout((function(){e._element.remove(),e._element=null}),2e3)}},{key:"popup",value:function(){var e=this;this._element=this._createNotification(),this._notifications.append(this._element),this._animatePopUp(),setTimeout((function(){return e._animateHideOut()}),5e3)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const d=[{name:"Фотоаппарат моментальной печати Polaroid OneStep",desc:"Рассматривайте ваши фотографии вживую сразу после снимка вместе с новой моментальной цифровой камерой. Благодаря интегрированной в камере системе печати вы сможете печатать фотографии прямо на месте съемки. Всего менее чем за одну минуту вы и ваши друзья получите копии ваших фотографий без использования компьютера или принтера. Вы даже можете обрезать снимок перед тем, как пустить его в печать для того, чтобы получить изображение именно таким, каким захотите вы",image:n(822),price:18e3},{name:"Не нуждается в описании",desc:"",image:n(705),price:25e3},{name:"Наименование товара",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:n(141),price:17e3},{name:"Наименование товара",desc:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",image:n(944),price:2e3}];function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=i,this._submitBtn=t,this._inputList=Array.from(this._form.querySelectorAll(n)),this._errorClass=r}var t,n;return t=e,(n=[{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e,e.validationMessage):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){this._form.querySelector("#".concat(e.id,"-error")).textContent=t,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._errorClass)}},{key:"_enableBtn",value:function(){this._submitBtn.disabled=!1}},{key:"_disableBtn",value:function(){this._submitBtn.disabled=!0}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableBtn():this._enableBtn()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(this._inputList),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList)}))}))}},{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._disableBtn()})),this._setEventListeners()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}localStorage.getItem("products")||localStorage.setItem("products",JSON.stringify(d));var v=new i({items:JSON.parse(localStorage.getItem("products")),renderer:function(e){var t=new a(e,"#product",(function(e){new m("Товар «".concat(e.name,"» успешно удалён")).popup(),v.deleteItem(e)}));c.append(t.generateProductMarkUp())}},c,(function(e){localStorage.setItem("products",JSON.stringify(e))}));v.render();s.addEventListener("submit",(function(e){e.preventDefault();var t=function(e){var t,n,r,i={},o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_(e))){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}(new FormData(e).entries());try{for(o.s();!(t=o.n()).done;){var a=(n=t.value,r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){c=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(n,r)||_(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],s=a[1];i[c]=s}}catch(e){o.e(e)}finally{o.f()}return i}(s),n=new a(t,"#product",(function(e){new m("Товар «".concat(e.name,"» успешно удалён")).popup(),v.deleteItem(e)}));v.addItem(t,n.generateProductMarkUp()),s.reset(),new m("Товар  «".concat(n.name,"» успешно добавлен")).popup()})),new h(u,".form__input","form__input_validity_error",s).enableValidation(),l.addEventListener("change",(function(e){new m("Товары отсортированы ".concat(e.target.options[e.target.selectedIndex].text.toLowerCase())).popup(),v.sortByProperty(l.value)}))})()})();