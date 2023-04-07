/*---------------------------tabs start---------------------------------- */
// нашли все заголовки табов по дата отрибуту ('[data-tab]')
const tabHeader = document.querySelectorAll('[data-tab]');

tabHeader.forEach(function(item) {
   item.addEventListener('click', function () { 

      //dataset позволяет считывать или устанавливать любые дата-атрибуты на HTML-элементе. Дата-атрибут — это пользовательский атрибут на элементе, название которого начинается с data- , например data-testid . Дата атрибуты используются, чтобы хранить значения на элементах в HTML.
     
      const contentBox = document.querySelector('#' + this.dataset.tab)
      console.log(contentBox)
      contentBox.classList.toggle('hidden')
    })
});




/*---------------------------tabs end------------------------------------ */