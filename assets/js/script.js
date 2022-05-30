var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var buttonPositive = document.getElementsByTagName('button')[1];

function increment(){
    if(currentNumber < 10){
        currentNumberWrapper.style.color = 'green';
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement(){
    if(currentNumber > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    if(currentNumber == 0){
        currentNumberWrapper.style.color = 'red';
    }
}


buttonPositive.addEventListener('click', increment, false);
