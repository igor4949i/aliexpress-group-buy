$(document).ready(function () {
  $('.sort-table-product').DataTable({
    "asSorting": [],
    "scrollY": "100%",
    "scrollX": true,

    "scrollCollapse": true,
    "paging": false
  });
  // $('.dataTables_length').addClass('bs-select');
});


//scroll
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function loadData() {
  return new Promise((resolve, reject) => {
    // setTimeout не является частью решения
    // Код ниже должен быть заменен на логику подходящую для решения вашей задачи
    setTimeout(resolve, 2000);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.getElementById('preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
  });