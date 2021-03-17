'use strict';
let userName = prompt('what is your name ?');

alert(`Hello ${userName} Lets play guessing game ,please answer yes/no or y/n ` );

let a=0; let b=0; let c=0; let d=0; let e=0; let f=0; let g=0;
function q1(){let age =prompt('is my age above 25 ?');

  if(age.toLowerCase() === 'yes' || age.toLocaleUpperCase() === 'Y')
  {
    alert(' you are incorrect');
    //console.log('is my age above 25 ? you  answer are incorrect');

  }
  else if(age.toLowerCase() === 'no' || age.toLocaleUpperCase() === 'N')
  {
    alert('you are correct');
    a++;
  //console.log('is my age above 25 ? you  answer are correct');
  }

} q1();

function q2(){
  let football =prompt('do i like playing football ?');

  if(football.toLowerCase() === 'yes' || football.toLocaleUpperCase() === 'Y')
  {
    alert(' you are incorrect');
    //console.log('is my football above 25 ? you  answer are incorrect');

  }
  else if(football.toLowerCase() === 'no' || football.toLocaleUpperCase() === 'N')
  {
    alert('you are correct');
    b++;
    //console.log('is my football above 25 ? you  answer are correct');
  }
} q2();



function q3(){
  let live=prompt('do I live in irbid?');

  if(live.toLowerCase() === 'yes' || live.toLocaleUpperCase() === 'Y')
  {
    alert('you are correct');
    c++;
    //console.log('do I live in irbid? you answer are correct');
  }
  else if(live.toLowerCase() === 'no' || live.toLocaleUpperCase() === 'N')
  {
    alert('you are incorrect');
    //console.log('do I live in irbid? you answer are incorrect');
  }
}q3();


function q4(){
  let bacalo=prompt('do I have bacalorous degree of chemistry?');

  if(bacalo.toLowerCase() === 'yes' || bacalo.toLocaleUpperCase() === 'Y')
  {
    alert('you are correct');
    d++;
    //console.log('do I have bacalorous degree of chemistry? you answer are correct');

  }
  else if(bacalo.toLowerCase() === 'no' || bacalo.toLocaleUpperCase() === 'N')
  {
    alert('you are incorrect');
    //console.log('do I have bacalorous degree of chemistry? you answer are incorrect');

  }
}q4();



function q5() {


  let exp=prompt('do I have any experience?');


  if(exp.toLowerCase() === 'yes' || exp.toLocaleUpperCase() === 'Y')
  {
    alert('you are incorrect ');
    //console.log('do I have any experience? you answer are incorrect');

  }
  else if(exp.toLowerCase() === 'no' || exp.toLocaleUpperCase() === 'N')
  {
    alert('you are correct');
    e++;
  //console.log('do I have any experience? you answer are correct');
  }
  alert('thanks you for palying');

}
q5;
//6th question
function q6() {
  let x = 6;
  let number=prompt('guess a number between 0 and 100 you have ' + x +' attempt');

  if(number === '63')
  {
    alert('you are hacking, your are correct');
    f++;
  }
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
      f++;
      alert('good guess you are correct');}
  }
  if(x===1)
  {
    alert ('sorry you are out of attempt  the correct answer is 63');
  }
}q6();

//7th question
function q7(){
  let drinks = ['orange','water','tea','apple','coffe','mango','lemon'];


  for( let x=0 ; x<6 ;x++)
  { let favDrink=prompt('Now guess my faviourit drink');


    if (favDrink===drinks[1] || favDrink===drinks[2]|| favDrink===drinks[3] || favDrink===drinks[4] || favDrink===drinks[5] || favDrink===drinks[6] || favDrink===drinks[7] )
    {alert(' you got this one right');
      g++;

      break;

    } else {alert('nope!');


    }}

  alert('the drinks that i like is'+' '+drinks);
}q7();

let y =a+b+c+d+e+f+g;
alert('your score is' +' '+y);


