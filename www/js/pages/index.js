$(function () {
  showPage('home');

  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});

const pageFunctions = {};

function hideAllPages() {
  $('.page').hide();
}

function registerPage(name, pageFunction) {
  pageFunctions[name] = pageFunction;
}

$('.page-link').click(function (event) {
  event.preventDefault();
  const name = this.dataset.page;
  $('.active').removeClass('active');
  this.classList.add('active');
  showPage(name);
});

function showPage(name, params) {
  $('.page').hide();
  $('.' + name + '-page').show();

  pageFunctions[name](params);
}

