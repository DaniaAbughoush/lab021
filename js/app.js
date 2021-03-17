'use strict';
let userName = prompt('what is your name ?');

alert(`Hello ${userName} Lets play guessing game ,please answer yes/no or y/n ` );


let age =prompt('is my age above 25 ?');

if(age.toLowerCase() === 'yes' || age.toLocaleUpperCase() === 'Y')
{
  alert(' you are incorrect');
  //console.log('is my age above 25 ? you  answer are incorrect');

}
else if(age.toLowerCase() === 'no' || age.toLocaleUpperCase() === 'N')
{
  alert('you are correct');
  //console.log('is my age above 25 ? you  answer are correct');
}

let born=prompt('do I born in aqaba ?');

if(born.toLowerCase() === 'yes' || born.toLocaleUpperCase() === 'Y')
{
  alert('you are correct');
  //console.log('do I born in aqaba ? you answer  are correct');

}
else if(born.toLowerCase() === 'no' || born.toLocaleUpperCase() === 'N')
{
  alert('you are incorrect');
  //console.log('do I born in aqaba ? you answer  are incorrect');
}

let live=prompt('do I live in irbid?');

if(live.toLowerCase() === 'yes' || live.toLocaleUpperCase() === 'Y')
{
  alert('you are correct');
  //console.log('do I live in irbid? you answer are correct');
}
else if(live.toLowerCase() === 'no' || live.toLocaleUpperCase() === 'N')
{
  alert('you are incorrect');
  //console.log('do I live in irbid? you answer are incorrect');
}

let bacalo=prompt('do I have bacalorous degree of chemistry?');

if(bacalo.toLowerCase() === 'yes' || bacalo.toLocaleUpperCase() === 'Y')
{
  alert('you are correct');
  //console.log('do I have bacalorous degree of chemistry? you answer are correct');

}
else if(bacalo.toLowerCase() === 'no' || bacalo.toLocaleUpperCase() === 'N')
{
  alert('you are incorrect');
  //console.log('do I have bacalorous degree of chemistry? you answer are incorrect');

}
let exp=prompt('do I have any experience?');


if(exp.toLowerCase() === 'yes' || exp.toLocaleUpperCase() === 'Y')
{
  alert('you are incorrect ');
  //console.log('do I have any experience? you answer are incorrect');

}
else if(exp.toLowerCase() === 'no' || exp.toLocaleUpperCase() === 'N')
{
  alert('you are correct');
  //console.log('do I have any experience? you answer are correct');
}
alert('thanks you for palying');

//6th question
let x = 6;
let number=prompt('guess a number between 0 and 100 you have ' + x +' attempt');

if(number === '63')
{
  alert('you are hacking, your are correct');}
else for(let i=0 ;i<5 && number!==63 ;i++)
{

  if (number > 63)
  {
    x--;
    number=prompt('too High you have ' + x +' attempt left');
    //console.log(x);
  }
  else if (number < 63)
  {
    x--;
    number=prompt('too low you have ' + x +' attempt left');
    //console.log(x);
  }
  else if (x===1){
    i=i/i+5;}
  else if(number === '63')
  {
    i=i/i+5;
    alert('good guess you are correct');}
}
if(x===1)
{
  alert ('sorry you are out of attempt  the correct answer is 63');
}

//7th question
let fav='';
let grade=0;
let colors = ['red','green','white'];
let correct = false;
for (let i = 1; i <= 6; i++) {
  fav = prompt('what is my favarite colors ?');
  for (let i = 0; i < colors.length; i++) {
    if (fav === colors[1])
    {console.log(colors);
      console.log(i);
      correct = true;
      grade++;
      break;
    }

  }
  if (correct) {
    alert('correct answer');
    break;
  }

}alert('your final grade ' + grade + ' of  3');