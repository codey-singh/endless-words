function summarypage() {
  console.log('This is the summary page!');

  var dataString = "";
  var grandScore = 0;
  for (let level = 1; level <= settings.levels; level++) {
    let words = wordbank[level - 1].words.length;
    let lvlScores = wordbank[level - 1].score * words;
    dataString += `<tr><td>${level}</td><td>${words}</td><td>${lvlScores}</td></tr>`;
    grandScore += lvlScores;
  }
  $('.scores-data').html(dataString);
  $('.gtot').html(grandScore);

}

registerPage('summary', summarypage);
