
'use strict'
/*let currentyear =2030;
const birthYear =2003;
let age = currentyear -birthYear; 
function calcAge(birthYear){
      //const currentyear= 2030
        const  age = 2030 - birthYear;
}
calcAge(2003);
console.log(age);

     /// This is the programm in which we take first functiin ,then take  anohthr function in previous function ,then take the if and else condition stsetment 
     // the second functiin funcscooe 
function calcAge(birthYear){
   const age = 2037 - birthYear;

   function printAge(){

    let  output  = ` ${firstName} ,you are ${age}, and born in the ${birthYear}`;
    console.log(output);

    if(birthYear >= 2000 && birthYear <= 2004){
       
        var millenial = true;

        //creating the new varible   by the name as we amke and  declear. outside the scope of the variablee;

      const firstName = 'fareed bakhsh'

      //Reassignign values as outscope's Variable;

        output = ' NEW OUTPUT !'

        const str = ` Oh,  and   you are millenial ,${firstName} `;

       console.log(str);

        function add(a,b){
           return a + b ;
        }
    }
      console.log(str);
      console.log(output);
      console.log(millenial);
      console.log(add(2,3));
   }
   printAge()
   return age;
}
const firstName = 'Fareed';
calcAge(2003);
//printAge();
//console.log(age);



// Here we first understand the concept of the  HOISTING & TDZ(TEMPORAL ZONE )

  // HOISTING;
          // This is a mehtod that is used in the JavaScript , in it variables & function are used before its declartion,it give acces to us
          // that we use varable and function before its declaration 

          //Examples ;
           

                                 console.log(y);// it will throw the error;

                                 const y = 1122;

                                 console.log(y);//print he 1122;


//TDZ(Temporal Dead Zone )
// it is the behavour like to declare variables with let and var but they are the like hoisted;

      console.log(z);//will through the error;

      let z = 786;


      //  Udemy method Hoisting and TDZ in Practice ;


      //Variables;

      console.log(me);
      console.log(job);
      console.log(year);

      let me = 'Fareed Bakhsh';
         job = 'Developer';
         years = 2003 ;


// Function;

console.log(addDecl(2,3));
//console.log(addExpr(2,4));
console.log(addArrow(4,5));

//different ways of the writting the functiion;
function addDecl(p,q){
   
   return p+q;
}

const addExpr = function(t,s){
   return t +s;
}

//Declearing the function with arrow mthods;

var addDecl  = (q,p) => q + p ;

// Taking the another examples ;

console.log(undefined);

if(!numProducts) deleteShoppingCart();

var numProducts = 20;

function deleteShoppingCart(){
   console.log('All products are deleted !')
} ;


var t = 1;
let l = 2;
const p =3;

console.log(t === window.t);
console.log(l === window.l);
console.log(p === window.p);


//The ' this ' keywords in the Programming javaSCript Practice;

console.log(this);

//Naming Function;

   calcAge = function(birthYear){

      console.log(2030 - birthYear);
       console.log(this);
   }
 calcAge(2003);


//Arrow Function;

const calcAgeArrow = birthYear => {
   console.log(2030 - birthYear);
   console.log(this);

} 
calcAgeArrow(2003/*///faeed date of the birht*/);

// Taking the function within the objects;

// const  fareed = {
//    years :2030,

//     calcAge : function (){
//       console.log(this);
//       console.log(2030 - this.years);
//     }
// }

// fareed.calcAge();

// const saqlain = {
//    year :2000,
// }

// fareed.calcAge = saqlain.calcAge;

// saqlain.calcAge();

// const f = fareed.calcAge( );
// f();
///-------------------------------------------------/

//Regular Funtion Vs. Arrow  Function 

//Regular Function / Funcion Decleration  ;

// Regular function are  basically  function  in the javaScript are referd as "Function Declearatin " using the reserved keywords with function Name .Let's go start ;

       //Examples writing methods  explaing the body ;



///Syntax        //function functionName (parametrs1 , parpameters , ...,,,,,, ){
          //Function Body ;
          // code to be excutation 
          //return result // optional;

        //}

        //Pure Pracitcally Programs 

        //Function Decleration 

        //Examples;

//         function fareed5(name){
//          console.log("Hllow, " +name+ " ! ");
        
//            return fareed5;
//         }

//         //Invoking /calling funcion;

//         fareed5( 'sultan');//Result //Hello Sultan!;

// //Function Expression ;

     
//  // This is new method in the JavaScript  to creatinf the function in which  functions are assigned variables ;

// //Syntax
    
// const  funcionName = function (parametrs1, parametrs2 ,/*....*/){
      
//         //Fuction  Body
//         //code to be Excuted;
        
//         return result ;
// }

// //Example;
//            // Function Expression 
//                    const fareed1 = function(name){
//                      console.log("Hello, " +name+" !")
//                    }

//                    //Function invoking /Calling 
                   
//                    fareed1(name);//output // Hello sultan !;

// //Udemy "Jonas " practice ;


//   const abu = {
//    firstName :'Fareed-Bakhsh' ,
//         year : 2003,

//         calcAge : function(){
//          //console.log(this);
//          console.log(2030 - this.year);

//       //  // solution  1;
//       //  //const self = this ; // self  or that ;
//       //  // const isMillenial = function (){
//       //    console.log(self);
//       //    console.log(self.year >= 2000  && self.year <=2035 )

    
//       //Solution 2;
//             const isMillenial =() =>{
//                console.log(this);
//                console.log(2030 - this.year);
//              console.log(this.year >=2000 &&  this.year <=2035);

//             }
//             isMillenial( );

//             greet :() =>{
//                console.log(this);
//                console.log(`Hey ${this.firstName}`);
//             }
//        }

//       }

//        abu.calcAge(2003);
//        abu.greet();


// Arguments Keywords;


// Writing the in the Naming Function ways ;

// const add = function(a,b){
//  console.log(arguments);
//  return a+b;

// }
// add(2,3);
// add(2,3,4,5,);


// Writting the in the Arrow  Function ways ;

// var addArrow = (a,b) =>{
//    console.log(arguments);
//    return a + b ;
// };

// addArrow(3,4,6);


//Objets Vs. Parameters;

// let   age = 30 ;
// let  oldAge = age;
//       age =31;
//       console.log(age);
//       console.log(oldAge);

      // Another examples in the best new ways explantion;
      const me  ={
         name : 'Fareed',
         age : 20,
      };

   const boy = me;
   boy.age = 23;
   console.log('Boy:', boy);
   console.log('Me',me);

   const me1 = { 
      name1: 'Jonas',
      age: 30,
    };
    const friend = me;
    friend.age = 27;
    console.log('Friend:', friend);
    console.log('Me1', me1);

    //Primitive Vs. Objects in the Practice;

    //Pirmitive Types;
       
    let lastName1 = "Fareed-bakhsh";
    let oldName = lastName1;
      lastName1 = 'Abu-Huzaifah';

      console.log(lastName1, oldName);
      
 // Refrence type;

 const rehin = {
   firstName :'Rehina',
   lastName  : "kundul",
   age :23,
             }
             const marriedFAreed = rehin;
             marriedFAreed.lastName = 'kundul';

  console.log('Before MArriage:' , rehin);
  console.log('After MArriage:' , marriedFAreed);


  // copying the object
 
 const hussain ={
   firstName : 'Muhammad',
   lastName :'Hussain',
        age :25,   
   family  :['Faqeer Bakhsh', 'Ayaz']  
 } ;

 const hussainCopy = Object.assign({ }, hussain );

       hussainCopy.lastName = 'Sultan' ;
       hussainCopy.family.push('Gulam');
       hussainCopy.family.push('Hussain');

       console.log('Before MArriage:' , hussain);
       console.log('After MArriage:' , hussainCopy);
     










































