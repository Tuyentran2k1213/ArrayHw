
var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const warn = $('#warning');
  const result = $('#result');
  const inputTag = $('.input_num.form-control');
  const first = $('.firstNum');
  const second = $('.SecNum');


  const addNumBtn = $('.addNum');
  const deleteNum = $('.delete');
  const totaly = $('.total');
  const posLength = $('.posLength');
  const small = $('.smol');
  const smallestPositive = $('.posSmol');
  const lEven = $('.lastEven');
  const sortUp = $('.sortUp');
  const ss = $('.comparison');
  const findInt = $('.findInt');
  const findFirstPrime = $('.findFirstPrime');
  const swapThing = $('.swap');
  
  var ArrNum = [];
  var Positive = [];
  var Negative = [];
  var Even = [];
  var intNum = [];
  var primeNum = []

function printScreen(value, answer, text){
  if(value){
    warn.innerText = `Your array now is: [${value}]`;
  };
  if(answer){
    result.innerText = `${text}: ${answer}`;
  }
}

function addNum(){
  var adder = inputTag.value * 1; 
  ArrNum.push(adder);
  printScreen(ArrNum);
  inputTag.value = ''; 
}

function delNum(){
  ArrNum.pop();
  printScreen(ArrNum);
}

function getPositive(){
  Positive = ArrNum.filter((num) => num > 0);
}

function getNegative(){
  Negative = ArrNum.filter((num) => num < 0);
}

function findEven(){
  Even = ArrNum.filter((number) => (number % 2 == 0))
}

function findPrime(){
  primeNum = ArrNum.filter(function(num){
    if(num < 2){
      return false;
    }
    if(num === 2){
      return true;
    }
    if(num > 2){
      for(i = 3; i < (num -1); i += 2){
        if(num % i == 0){
          return false;
        }
      }
    }
    return true;
  })
}

function totalArr(){
  getPositive();
  var total = Positive.reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
  });
  printScreen(false, total,'Tổng số dương trong mảng là');
}

function getPosLength(){
  getPositive();
  printScreen(false, Positive.length, 'Lượng số dương có trong mẳng là');
}

function findSmallest(){
  var smallest = ArrNum[0];
  for(i = 0; i < ArrNum.length; i++){
    if(smallest >= ArrNum[i]){
      smallest = ArrNum[i];
    }
  }
  printScreen(false, smallest, 'Số nhỏ nhất là');
}

function findSmallestPos(){
  getPositive();
  var smallestPos = Positive[0];
  for(i = 0; i < Positive.length; i++){
    if(smallestPos >= Positive[i]){
      smallestPos = Positive[i];
    }
  }
  console.log(smallestPos);
  printScreen(false, smallestPos, 'Số nguyên dương nhỏ nhất trong mảng là');
}

function lastEven(){
  findEven();
  var lastEven = Even.length == 0 ? -1 : Even[Even.length - 1];
  printScreen(false, lastEven, 'Số chẵn cuối cùng trong mảng là'); 
}

function sortToUp(){
  var sortedUp = ArrNum.sort((a, b) => a - b);
  printScreen(false, sortedUp, 'Sắp xếp theo thứ tự tăng dần của các thành phần trong mảng');
}

function comPosANeg(){
  getPositive();
  getNegative();
  var posL = Positive.length;
  var NegL = Negative.length;
  if(posL > NegL){
    printScreen(false, 'Số lượng số DƯƠNG nhiều hơn số ÂM', 'So sánh');
  } else if(posL < NegL){
    printScreen(false, 'Số lượng số ÂM nhiều hơn số DƯƠNG', 'So sánh');
  } else {
    printScreen(false, 'Số lượng số ÂM và số DƯƠNG bằng nhau', 'So sánh');
  }
}

function getInteger(){
  intNum = ArrNum.filter((item) => Number.isInteger(item));
  printScreen(false, intNum.length, 'Lương số nguyên có trong mảng là');
}

function getFirstPrime(){
  findPrime();
  var firstPrime = primeNum.length == 0 ? -1 : primeNum[0];
  printScreen(false, firstPrime, 'Số nguyên tố đầu tiên trong mảng là');
}

function swapNum(){
  var firstValue = first.value * 1;
  var SecValue = second.value * 1;
  var temp;
  if(firstValue && SecValue){
    temp = ArrNum[firstValue - 1];
    ArrNum[firstValue - 1] = ArrNum[SecValue - 1];
    ArrNum[SecValue - 1] = temp;
  }
  printScreen(ArrNum);
}

// enter in input event 
inputTag.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    addNumBtn.click();
  }
});

addNumBtn.onclick = function(){addNum()};
deleteNum.onclick = function(){delNum()};
totaly.onclick = function(){totalArr()};
posLength.onclick = function(){getPosLength()};
small.onclick = function(){findSmallest()};
smallestPositive.onclick = function(){findSmallestPos()};
lEven.onclick = function(){lastEven()};
sortUp.onclick = function(){sortToUp()};
ss.onclick = function(){comPosANeg()};
findInt.onclick = function(){getInteger()};
findFirstPrime.onclick = function(){getFirstPrime()};
swapThing.onclick = function(){swapNum()};
