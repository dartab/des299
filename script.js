
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

  var Quiz = function(){
  var self = this;
  this.init = function(){
    self._bindEvents();
  }

  this.correctAnswers = [
    { question: 1, answer: 'a' },
    { question: 2, answer: 'c' },
    { question: 3, answer: 'c' },
    { question: 4, answer: 'c' },
    { question: 5, answer: 'a' },
    { question: 6, answer: 'b' },
    { question: 7, answer: 'a' },
  ]

  this._pickAnswer = function($answer, $answers){
    $answers.find('.quiz-answer').removeClass('active');
$answer.addClass('active');
  }
  this._calcResult = function(){
    var numberOfCorrectAnswers = 0;
    $('ul[data-quiz-question]').each(function(i){
      var $this = $(this),
          chosenAnswer = $this.find('.quiz-answer.active').data('quiz-answer'),
          correctAnswer;

      for ( var j = 0; j < self.correctAnswers.length; j++ ) {
        var a = self.correctAnswers[j];
        if ( a.question == $this.data('quiz-question') ) {
          correctAnswer = a.answer;
        }
      }

      if ( chosenAnswer == correctAnswer ) {
        numberOfCorrectAnswers++;

        // highlight this as correct answer
        $this.find('.quiz-answer.active').addClass('correct');
      }
      else {
        $this.find('.quiz-answer[data-quiz-answer="'+correctAnswer+'"]').addClass('correct');
        $this.find('.quiz-answer.active').addClass('incorrect');
      }
    });
    if ( numberOfCorrectAnswers == 0 ) {
      return {code: 'bad', text: 'You are just straight up awful, and probably a troll. Please begin improving your life by starting therapy and repairing your relationship with your mother.'};
    }
    else if ( numberOfCorrectAnswers < 7 || numberOfCorrectAnswers == 1 ) {
      return {code: 'mid', text: 'You are an ordinary misogynist! There are an awful lot of you out there. Work on making good on your pretenses and don’t take credit for being hip when you’re really just an asshole!'};
    }
    else if ( numberOfCorrectAnswers == 7 ) {
      return {code: 'good', text: 'Good job! You passed Respecting Women & Femmes 101. Please consult other resources to apply this to your life!'};
    }
  }
  this._isComplete = function(){
    var answersComplete = 0;
    $('ul[data-quiz-question]').each(function(){
      if ( $(this).find('.quiz-answer.active').length ) {
        answersComplete++;
      }
    });
    if ( answersComplete >= 7 ) {
      return true;
    }
    else {
      return false;
    }
  }
  this._showResult = function(result){
    $('.quiz-result').addClass(result.code).html(result.text);
  }
  this._bindEvents = function(){
    $('.quiz-answer').on('click', function(){
      var $this = $(this),
          $answers = $this.closest('ul[data-quiz-question]');
      self._pickAnswer($this, $answers);
      if ( self._isComplete() ) {

        // scroll to answer section
        $('html, body').animate({
          scrollTop: $('.quiz-result').offset().top
        });

        self._showResult( self._calcResult() );
        $('.quiz-answer').off('click');

      }
    });
  }
}
var quiz = new Quiz();
quiz.init();

});
