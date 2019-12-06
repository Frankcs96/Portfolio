
// Making navbar responsive
function changeNavClass() {
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }

// timer for quizz
function timer() {
  startquizz();
  var stopwatch = document.getElementById('timer');
  var seconds = 59;
  
  var myInterval = setInterval(function(){ 
      stopwatch.innerHTML = 'Timer: ' + seconds;
      seconds--;
      if (seconds == -1) {
        clearInterval(myInterval);
        submitQuizz();
      }
     }, 1000); 
  
    
}


//start button pressed (quizz)
function startquizz() {
  document.getElementById('introQuizz').style.display = 'none';
  document.getElementById('quizz').style.display = 'block'; 
}

var answers;
var userAnswers;
var score = 0;

//validate answers when time is out or you click
function submitQuizz() {
    document.getElementById('quizz').style.display = 'none';
    answers = ['b','a','a','b','b','a'];
    userAnswers = ['','','','','',''];
    if (document.querySelector('input[name="one"]:checked') != null) {
      userAnswers[0] =  document.querySelector('input[name="one"]:checked').value; 
    }

    if (document.querySelector('input[name="two"]:checked') != null) {
      userAnswers[1] =  document.querySelector('input[name="two"]:checked').value;
    }

    if (document.querySelector('input[name="three"]:checked') != null) {
      userAnswers[2] =  document.querySelector('input[name="three"]:checked').value; 
    }

    if (document.querySelector('input[name="four"]:checked') != null) {
      userAnswers[3] =  document.querySelector('input[name="four"]:checked').value; 
    }

    if (document.querySelector('input[name="five"]:checked') != null) {
      userAnswers[4] =  document.querySelector('input[name="five"]:checked').value; 
    }

    if (document.querySelector('input[name="six"]:checked') != null) {
      userAnswers[5] =  document.querySelector('input[name="six"]:checked').value; 
    }
    
    

    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == userAnswers[i]) {
        score++;
      }
    }  

    if (score >= 3) {
      document.getElementById("victory").style.display = 'block';
    } else {
      document.getElementById("defeat").style.display = 'block';
    }

    document.getElementById('Scoreshow1').innerHTML = score + "/6 correct answers";
    document.getElementById('Scoreshow2').innerHTML = score + "/6 correct answers";
}


// 2 functions to show/hide images on hover for bibliography
  function showImage(id) {
    var element = document.getElementById(id);

    element.style.display ="block";
  }

  function hideImage(id) {
    var element = document.getElementById(id);

    element.style.display = "none";
  }


    
    


  