class Parent{
 constructor(){
     this.fathersName="Kazi Nur";
 }
}

class Child extends Parent{ //using extends key word to inherit the  parent class
    constructor(name)
    {   
        super();//using super key Word
        this.name=name;
    }
}

const child1=new Child("saadi");
const child2=new Child("neaz");

console.log(child1,child2);
