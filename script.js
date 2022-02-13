const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const valentineDay="Mon Feb 14 2022 ";
function countdown()  {
  const valentineDayDate = new Date(valentineDay);
  const currentDate = new Date();
  const TotalSeconds = (valentineDayDate-currentDate)/1000

  const days = Math.floor(TotalSeconds/3600/24);
  const hours = Math.floor(TotalSeconds/3600)%24;
  const mins = Math.floor(TotalSeconds/60)%24;
  const seconds = Math.floor(TotalSeconds)%60;

  dayEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;




  countdown();
  setInterval(countdown,1000);

}


// function([string1, string2],target id,[color1,color2])    
 consoleText(['I have looked at you in a million ways and loved you in each.', 'Thinking of you always, my dear', 'You lift me up and hold me down',' you make me smile when Im feeling down.','You bring me peace, you bring me gifts, you re the person Im most happy to share my life with'], 'text',['white','#A37462','#E48D72']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


