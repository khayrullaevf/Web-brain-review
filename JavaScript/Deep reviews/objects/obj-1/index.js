




const me={
    id:1,
    name:'Fazliddin',
    surname:'Khayrullaev',
    hiMe:function(){
       
        console.log(`Hi ${me.name}  ${me.surname} ${this.dad}! you are  ${this.age}  years old!`);
    }
}

// var name=me.name;
// var surname=me.surname;
const{name,surname}=me;

const me2={
    dad:'Hasan ogli',
    age:20,
}
const {dad,age}=me2
// me.hiMe.call(me2);
console.log(name);
console.log(dad);
console.log(age);