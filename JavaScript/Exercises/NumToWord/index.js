


let hisob=(num)=>{

    let minglik=Math.floor(num/1000)
    num=num%1000;
    console.log(num);
    let yuzlik=Math.floor(num/100);
    // console.log(yuzlik);//2
    num=num%100; //34
    // console.log(num);//34
    let onlik=Math.floor(num/10); //34/10==3
    // console.log(onlik); //3
    let birlik=num%10; //34%10=4
    // console.log(birlik);  //4

    let bir={
        // 0:'',
        1:'bir',
        2:'ikki',
        3:'uch',
        4:'tort',
        5:'besh',
        6:'olti',
        7:'yetti',
        8:'sakkiz',
        9:'toqqiz',
       

    };
    // console.log(bir[0]);
    let on={
        // 0:'',
        1:'on',
        2:'yigirma',
        3:'ottiz',
        4:'qirq',
        5:'ellik',
        6:'oltmish',
        7:'yetmish',
        8:'sakson',
        9:'toqson',
        

    };
    if (!yuzlik==0) {

    return`${bir[minglik]} ming ${bir[yuzlik]} yuz ${on[onlik]} ${bir[birlik]}`;
        
    } 
    
    else return `${on[onlik]} ${bir[birlik]}`.trim();
}

console.log(hisob(9878));