'use strict';
let userName = prompt('what is your name ?');

let gender=prompt('are you a male ?');
let age =prompt('is your age above 25 ?');
let live=prompt('do you live in irbid?');
let bacalo=prompt('do you have bacalorous degree?');
let exp=prompt('do you have any experience?');
alert('wellcome '+ userName);
if(gender.toLowerCase() === 'yes' || gender === 'y')
{
  let gen='male';
  console.log('you are a male');
  alert(gen);
}
else if(gender.toLowerCase() === 'no' || gender === 'n')
{
  let gen='female';
  console.log('you are a female');
  alert(gen);
}
if(age.toLowerCase() === 'yes' || age === 'y')
{
  let age1='above 25';
  console.log('your age mabe 26');
  alert(age1);
}
else if(age.toLowerCase() === 'no' || age === 'n')
{
  let age1='under 25';
  console.log('your age maybe 24 ');
  alert(age1);
}

if(live.toLowerCase() === 'yes' || live === 'y')
{
  let life='you live in irbid';
  console.log('you live in irbid');
  alert(life);
}
else if(live.toLowerCase() === 'no' || live === 'n')
{
  let life='you live out of irbid';
  console.log('you dont live in irbid');
  alert(life);
}

if(bacalo.toLowerCase() === 'yes' || bacalo === 'y')
{
  let baca='you have bacalorous degree';
  console.log('you have bacalorous degree');
  alert(baca);
}
else if(bacalo.toLowerCase() === 'no' || bacalo === 'n')
{
  let baca='you dont have bacalorous degree';
  console.log('you dont  have bacalorous degree');
  alert(baca);
}

if(exp.toLowerCase() === 'yes' || exp === 'y')
{
  let exp=prompt('how long your experience?');
  console.log('you have '+exp+'  years of experience');
  alert('you have '+exp+'  years of experience');
}
else if(exp.toLowerCase() === 'no' || exp === 'n')
{
  console.log('you dont have any experience');
  alert('you dont have any experience');
}





