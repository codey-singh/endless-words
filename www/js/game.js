var game = {

  startGame: function () {
    utility.ss.setItem('level', 1);
    utility.ss.setItem('question', 1);
    utility.ss.setItem('scores', 0);
  },

  getCurrentLevel: function () {
    return Number(utility.ss.getItem('level')) ? Number(utility.ss.getItem('level')) : null;
  },

  isGameOver: function () {
    return utility.ss.getItem('level') >= settings.levels
      && utility.ss.getItem('question') >= settings.wordsPerLevel;
  },

  nextQuestion: function () {
    let isNextQuestionPopulated = false;
    let isLevelUp = false;
    if (!this.isGameOver()) {
      var question = utility.ss.getItem('question');
      if (question >= settings.wordsPerLevel) {
        isLevelUp = true;
        this.levelUp();
      } else {
        utility.ss.setItem('question', Number(question) + 1);
      }
      isNextQuestionPopulated = true;
    } else {
      isNextQuestionPopulated = false;
    }
    return { isLevelUp, isNextQuestionPopulated };
  },

  levelUp: function () {
    utility.ss.setItem('level', Number(utility.ss.getItem('level')) + 1);
    utility.ss.setItem('question', 1);
  }

}