


let str='23hg221h9jh1';



// console.log(str.match(/[0-9]/g).reduce((a,b)=>a+ +b,0));

// let total=0;
// for (let i = 0; i < str.length; i++) {
//    if (+str[i]==str[i]) {
//     //   total+=+str[i]
//       total+=parseInt(str[i])
//    }
    
// }

// console.log(total);


function User(name){
    this.name=name;
}

let user=new User('Abror')

console.log(user.name);