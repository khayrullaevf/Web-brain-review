


//DOM ==> Document Object Model



// console.log(document);
// console.log(document.title='Webbrain');
// document.getElementById('title')
// console.log(document.getElementById('title').innerHTML='Hi Leo');
// const title=document.getElementById('title');
// console.log(title.innerHTML);
// title.innerHTML=" Fazliddin Khayrullaev"
// console.log(document.getElementsByClassName('title'));


// const ct=document.getElementsByClassName('title')

// console.log(ct[0]);
// console.log(ct[1]);
// console.log(ct[2]);
// console.log(ct[3]);


// const general=document.querySelector('.title')
// const general=document.querySelectorAll('#title')
// const general=document.querySelector('h1')
// // const general=document.querySelector('#title')
// general.innerHTML='hello world';

// general.style.color='red';
// general.style.background='green';
// // console.log(general);

// console.log(general.innerHTML='Class 1');
// console.log(general[1]);
// console.log(general[0]);
// general.innerHTML='Hi'


const ol= document.querySelector('ol');
const button= document.querySelector('#btn');
// console.log(ol.children);




 for (let i = 0; i < ol.children.length; i++) {
      if (i %2==0) ol.children[i].style.color='red';
      else ol.children[i].style.color='blue';
 }



 const test=document.querySelector('.test');

var isActive=true;
 const onChange=()=>{
      isActive 
?  (test.style.cssText=`
    background:green;
    color:black;
   
    width:150px;
     height:50px;
   
   `)
   :
   (

    test.style.cssText=`
    background:blue;
    color:red;
    transition:all 1s;
     width:150px;
     height:50px;
   
   
   `

   )
   
   isActive=!isActive


 }





// console.log(ol.innerHTML);eeeffe





button .addEventListener('click', onChange)