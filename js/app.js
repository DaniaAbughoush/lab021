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
