


//Constructor function

// function User(name){
//     this.name=name;

// }


// let user= new User('Fazliddin');
// let user2=new User('Rahim')
// let user3=new User('Rahim')


// console.log(  user.name);
// console.log(user2.name);
// console.log(user2==user3); //false










//OOP ===> Object Oriented Programming -->Abstraction , Encapsulation, Inheritance , Polymory




//class


// class Person{
//     constructor(name,status,age,year){
//         this.name=name;
//         this.status=status;
//         this.age=age;
//         this.year=year;

//     }

//     sayHello(){
//         console.log('hi, your name is  ' +this.name +'!   your age is '+this.age + ', your  status is '+ this.status+ ',  you was born in  ' +this.year);
//     }

// }

// var user=new Person('Fazliddin','programmer' ,20 , 2003);
// var user2=new Person('Messi','GOAT' ,35 , 1987);
// var user3=new Person('Suarez','El-pestalerio',35 , 1987)

// user.sayHello()
// user2.sayHello()




// class Students{
//     constructor(id,name,surname , age){
//         this.id=id;
//         this.name=name;
//         this.surname=surname;
//         this.age=age;
//     }

//     callStudent(){

//         console.log(`Hi , your id is  ${this.id} ,  your full name is ${this.name}  ${this.surname}  , and your age is ${this.age}`);


//     }
// }


// let st1=new Students(1, 'Lionel' , 'Messi' , 35);
// let st2=new Students(2, 'Dani' , 'Alves' , 41);

// // st1.callStudent()
// // st2.callStudent()



// class Player extends Students{
//     constructor(id,name,surname,age,country){
//        super(id, name , surname,age)
//        this.country=country;

//     }  
//      callMe(){
        
//         console.log(`Hi , your name is ${this.name} and your country is ${this.country}`);
//      }

// }


// let p1= new Player(1 , "Penaldo" ,'Cris',37,"Portugal");
// let p2= new Player(1 , "Lionel Messi " ,'Andres Messi',35,"Argentina");

// p2.callMe()