const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttton = document.querySelectorAll('[data-modal-close]');
const allmodals = document.querySelectorAll('[data-modal]');

modalButtons.forEach(function (item) {
   item.addEventListener('click', function() {
    const modalId =  this.dataset.modalButton;

    const modal = document.querySelector('#' + modalId);

    modal.classList.remove('hidden');

      //находим внутри модалки запрещаем передавать клик родителю
    modal.querySelector('.modal-window').addEventListener('click', function (e) {
      e.stopPropagation();
    })

   })
})


modalClosebuttton.forEach(function(item) {
   item.addEventListener('click', function() {
      const modal = this.closest('[data-modal]');
      modal.classList.add('hidden');
   })
})

allmodals.forEach(function(item) {
   item.addEventListener('click', function() {
      this.classList.add('hidden');
   })
})

window.addEventListener('click', function(event) {


   //Обьявили переменную для счетчика
   let counter;

   //Проверяем клик сторого по кнопкам плюс или минус
   if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
      
   }
 
   // Проверяем является ли элемент кнопкой +
   if (event.target.dataset.action === 'plus') {
      

      //Находим обертку счетчика
     const counterWrapper = event.target.closest('.counter-wrapper');
      

      //Находим див с числом счетчика
     const counter = counterWrapper.querySelector('[data-counter]');
      

      counter.innerText = ++counter.innerText;
   }

    // Проверяем является ли элемент кнопкой -
    if (event.target.dataset.action === 'minus') {
      

      const counterWrapper = event.target.closest('.counter-wrapper');
      

     const counter = counterWrapper.querySelector('[data-counter]');
      

      counter.innerText = --counter.innerText;
   }

   

});