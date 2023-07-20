
// ejercicio 1
for(var i=0; i<5;i++){   
   console.log(i);
}
// el resultado es: 0,1,2,3,4

// ejercicio 2
for(var i=0; i<5; i++)
{
   i = i + 1;  
   console.log(i);
}

// el resulado es: 1,3,5


// ejercicio 3
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
// el resultado es: 3,7

// ejercicio 4
function y(num1, num2){   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 
// el resultado es: 5,8

//ejercicio 5
function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))
 
//el resultado es:2,5,3,8

//ejercicio 6
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);

//el resultado es: 15,10,10

//ejercicio 7
a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a*2;
}
b = y(10);
console.log(b);

//el resultado es: 15,10,20