'use strict';
let userName = prompt('what is your name ?');
alert('wellcome '+ userName);
alert('please answer yes/no or y/n ');

let age =prompt('is my age above 25 ?');

if(age.toLowerCase() === 'yes' || age.toLocaleUpperCase() === 'Y')
{
  alert('incorrect');
  console.log(age);

}
else if(age.toLowerCase() === 'no' || age.toLocaleUpperCase() === 'N')
{
  alert('correct');
  console.log(age);
}

let born=prompt('do I born in aqaba ?');

if(born.toLowerCase() === 'yes' || born.toLocaleUpperCase() === 'Y')
{
  alert('correct');
  console.log(born);

}
else if(born.toLowerCase() === 'no' || born.toLocaleUpperCase() === 'N')
{
  alert('incorrect');
  console.log(born);
}

let live=prompt('do I live in irbid?');

if(live.toLowerCase() === 'yes' || live.toLocaleUpperCase() === 'Y')
{
  alert('correct');
  console.log(live);

}
else if(live.toLowerCase() === 'no' || live.toLocaleUpperCase() === 'N')
{
  alert('incorrect');
  console.log(live);
}

let bacalo=prompt('do I have bacalorous degree?');

if(bacalo.toLowerCase() === 'yes' || bacalo.toLocaleUpperCase() === 'Y')
{
  alert('correct');
  console.log(bacalo);

}
else if(bacalo.toLowerCase() === 'no' || bacalo.toLocaleUpperCase() === 'N')
{
  alert('incorrect');
  console.log(bacalo);

}
let exp=prompt('do I have any experience?');


if(exp.toLowerCase() === 'yes' || exp.toLocaleUpperCase() === 'Y')
{
  alert('incorrect ');
  console.log(exp);

}
else if(exp.toLowerCase() === 'no' || exp.toLocaleUpperCase() === 'N')
{
  alert('correct');
  console.log(exp);
}
alert('thanks you for palying');
