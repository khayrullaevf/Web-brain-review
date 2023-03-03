


 let me={
    name:'Fazliddin',
    surname:'Khayrullaev',
    age:19,
    pro:'IT',
    status:'student',
    myFunc:function(){
        console.log(this.name);
        console.log(this.surname);
        console.log(this.age);
        console.log(this.pro);
        console.log(this.status);

        //bu yerda this =>object ni uziga ya'ni  me ga teng boladi

    }




 }


 me.myFunc();
//  console.log(this); eng katta urab turuvchu=> window , global window
//  console.log(this);
//  console.log(this);
//  console.log(this);



//  Object.freeze(me) muzlatib qoyadi
// Object.seal(me)  faqqat update ishlaydi , delete  va and ishlaymaydi

//  console.log(me.name);
//  console.log(me.surname='Khayrullaev');
//  console.log(me);

//  console.log(me['name']='EMINEM');
// //  console.log(Object.keys(me));
//  console.log(Object.keys(me).findIndex(v=>v=='name'));
// //  console.log(Object.values(me));
// //  console.log(Object.values(me));
// //  console.log(Object.values(me));

//  let a =Object.entries(me); //qiymat va key ni array ichida array qilib olib beradi
//  console.log(a);

//  console.log(Object.fromEntries(a));




