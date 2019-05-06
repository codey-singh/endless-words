function gamepage(params) {
  var reload = params;
  init(reload);
}

function init(reload = "reload") {
  console.log('This is the game page!');
  $('.player').text(utility.ss.getItem('player'));
  $('span.scores').text(utility.ss.getItem('scores'));
  $('span.qno').text(utility.ss.getItem('question'));
  if (reload === "reload")
    game.startGame();
  render();
}

function validateAnswer() {
  var nodes = $('.word-holder tr td');
  var { question, hints, answer, scoreForThisLevel } = getQuestionData();
  var actual = ""
  for (node of nodes) {
    actual += $(node).text().trim();
  }
  console.log(question, hints, answer);
  if (actual.toUpperCase() === answer.toUpperCase()) {
    refreshScores(scoreForThisLevel);
    var { isLevelUp, isNextQuestionPopulated } = game.nextQuestion();
    render(isLevelUp, !isNextQuestionPopulated);
  } else {
    highlightErrors(actual, answer);
  }
}

function highlightErrors(actual, answer) {
  var wrongIndexes = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i].trim() !== answer[i]) {
      $('.word-holder tr td:nth-child(' + (i + 1) + ')').css('background', '#d90d0d').addClass('error');
      wrongIndexes.push(i);
    }
  }
  console.log(wrongIndexes);
}

function refreshScores(scoreForThisLevel) {
  utility.ss.setItem('scores',
    Number(utility.ss.getItem('scores')) + Number(scoreForThisLevel));
}

function render(isLevelUp, isGameOver) {
  $('span.scores').text(utility.ss.getItem('scores'));
  $('span.level').text(utility.ss.getItem('level'));
  $('span.qno').text(utility.ss.getItem('question'));
  if (isGameOver) {
    showPage('summary');
  } else if (isLevelUp) {
    showPage('level');
  }
  else {
    var { question, hints } = getQuestionData();
    populateQuestion(question, hints);
  }
}

function getQuestionData() {
  var qno = utility.ss.getItem('question');
  var level = utility.ss.getItem('level');
  console.log(wordbank[level - 1].words[qno - 1])
  var scoreForThisLevel = wordbank[level - 1].score;
  var question = wordbank[level - 1].words[qno - 1].display;
  var hints = wordbank[level - 1].words[qno - 1].hints;
  var answer = wordbank[level - 1].words[qno - 1].word;

  return { question, hints, answer, scoreForThisLevel };
}

function populateQuestion(question, hints) {
  var htmlString = "";
  for (const word of question) {
    if (word != '_') {
      htmlString += `<td>${word}</td>`
    } else {
      htmlString += `<td class='cell' contenteditable="true">&nbsp</td>`
    }
  }
  $('.word-holder tr').html(htmlString);
  var hintString = "";
  for (const hint of hints) {
    hintString += `<li>${hint}</li>`;
  }
  $('ul.hints').html(hintString);
}

registerPage('game', gamepage);
