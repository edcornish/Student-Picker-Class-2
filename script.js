const names = ["Sarah", "Phoebe", "Adam", "Frederick", "Iuliia", "Matthew", "Dimple", "Lucy", "Hannah", "Oliwia", "Hugo", "Aimee", "Agnes", "Eva", "Constance", "Ciara"]
const classSize = names.length
var countdown = 0;
var ticker = 100;
var numbers = []



// Fill the numbers array with the numbers of students in the class
for (let x = 0; x < classSize; x++) {
    numbers.push(x)
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }



function picker(){

    shuffle(numbers);

    let selecta = numbers[countdown]

    // This sets the number of time the function is repeated, and the delay each time it runs
    if (countdown < classSize){
        
        document.querySelector(".studentName").innerHTML=names[selecta]

        countdown++
        setTimeout(picker, ticker)
        // setTimeout(picker, 75)

        console.log(countdown)

    }

    if (countdown > classSize-1){

    // This controls all the confetti
    var count = 500;
    var defaults = {
      origin: { y: 0.7 }
    };
    
    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }
    
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
    }

    document.querySelector(".studentName").classList.remove("hovering")
}


function countdownReset() {
    countdown = 0
}




window.onload = function(){
    document.querySelector(".studentName").addEventListener('click', countdownReset)
    document.querySelector(".studentName").addEventListener('click', picker)
}

