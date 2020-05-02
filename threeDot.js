const array1=[2,3,4,5,6];
const array2=[7,8,9,10,11];
//old way
const togetherArray=array1.concat(array1).concat(array2);
//console.log(togetherArray);

//ES6 way:

const array3=[2,3,4,5,6];
const array4=[7,8,9,10,11];

const togetherArrayDot=[...array3,20,30,...array4,...array1,...array2] //three dot array to combine individual array into one big array.
console.log(togetherArrayDot);

const s1=200; //tk
const s2=300;
const s3=400; 

const s123=[200,300,400];
const max=Math.max(...s123);
console.log(max);





