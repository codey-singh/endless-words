function homepage() {
  console.log('This is the home page!');

  $('#btn-go').on('click', function (e) {
    e.preventDefault();
    var playerName = $('#name').val();
    utility.ss.setItem('player', playerName || "guest");
    showPage('game');
  });

  $('#btn-validate').on('click', function (e) {
    e.preventDefault();
    validateAnswer();
  });

  $('#btn-play').on('click', function (e) {
    e.preventDefault();
    showPage('home');
  });

  $('#btn-next').on('click', function (e) {
    e.preventDefault();
    showPage('game', "no")
  });
}

registerPage('home', homepage);
