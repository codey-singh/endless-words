function levelpage() {
  console.log('This is the level page!');

  $('.prevlevel').text(Number(utility.ss.getItem('level')) - 1);
  $('.nextlevel').text(Number(utility.ss.getItem('level')));
}

registerPage('level', levelpage);
