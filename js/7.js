/*7th question
let grade =0;
let y=3;
let colors=['red','green','blue'];
let fav=prompt('what is my favorite colors ? you have ' + y + ' attempts');

if(fav.toLowerCase()===colors[0] || fav.toLowerCase()===colors[1] || fav.toLowerCase()===colors[2])
{
  grade = grade +1 ;
  colors=colors.filter(e=>e !==fav.toLowerCase());
  //colors.splice(fav.toLowerCase()); test
  fav=prompt('very good guess , you still have ' + y + ' attempts');
  console.log(colors);
}
else for(let z=0; z<2 && grade!==3;z++)
{console.log('i=',z);
  if (fav.toLowerCase()===colors[0] || fav.toLowerCase()===colors[1] || fav.toLowerCase()===colors[2]) {
    grade = grade +1 ;
    colors=colors.filter(e=>e !==fav.toLowerCase());

    fav=prompt('very good guess , you still have ' + y + ' attempts');
    console.log(colors);
  }
}

let grade =0;
let y=5;
let colors=['red','green','blue'];
let fav=prompt('what is my favorite colors ? you have ' + y + ' attempts');
for(let i=0;i<5;i++)
  console.log(i);
{
  if(fav.toLowerCase()===colors[0] || fav.toLowerCase()===colors[1] || fav.toLowerCase()===colors[2])
  {
    grade= grade +1 ;
    fav=prompt('very good guess , you still have ' + y + ' attempts');
  }else if(fav.toLowerCase()!==colors[0] || fav.toLowerCase()!==colors[1] || fav.toLowerCase()!==colors[2]);{
    y=y-1;
    fav=prompt('sorry incorrect try again you have '+ y + ' attempt lef');
    console.log('y=',y);
  }
} //}
//}}
//for(let a=0;a<6;a++)
console.log('g=',grade)//'