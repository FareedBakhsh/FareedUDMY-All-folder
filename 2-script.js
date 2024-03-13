'Use sctrict';
   
// //These are totaly all important functiuoin that are mixup during the writiitng and clearing their the conscept ; threrfore you sholufd keep in 
// // focus in mind during when you  are using using and wrtiing the function in thhe larg4es porgrams ;


// let fareedHaslicene =false
// const passTest = true;
// if(passTest)fareedHaslicene =true;
// if(fareedHaslicene) console.log('Fareed can Drive evry : Vehicle at any type ');

// //The use of the function 

// //functiuon are calling inside and outside the block scope  & function aer conneected with anoher program by calling to  them outside and inside ;

// function naming() {
//      console.log('My name is Fareed Bakshsh and currently living in the lahore ');
// } 
// // Here the function is calling the outside its body /outside the block;
// //calling//invoking// runing the function
// naming();
// naming();
// naming();
 
// // Here we ere writing the function in different ways to their concept  and different function are and programs are connectted  and depended to each other ;
 
// function fruitMixture( Mangoes,grapes){
//       const juice = ` My juice is made up of ${Mangoes} Mangoes and ${grapes}grapes.`
//       return juice;
// }
// const MyFavouriteJuiceMakeUp=fruitMixture(5,40);
// console.log(MyFavouriteJuiceMakeUp);

// const MyFavouriteHealtyJuice =fruitMixture(3,25);
// console.log(MyFavouriteHealtyJuice)


// // Function Declaration vs. Expression ;


// //   Function Declaraion \

// function exactAge1(birthyear){
//       return 2024 -birthyear;
// }
// const Age1 = exactAge1(2003)
 

// // Function Expression ;

//  const exactAge2 = function(birthyear){
//       return 2024 - birthyear;
// }  
// const Age2 =  exactAge2(2003)

// console.log(Age1,Age2);//21 years

// //Arrow Expression 


// const exactAge3 = birthyear => 2024 -birthyear;
// const Age3 = exactAge3(2003);
// console.log(Age3);//21 years 

// const RetirementUntilYears =(birthyear, firstname) =>{

//       const age =2024 -birthyear;
//       const retirtement = 35 - age;
//       return `${firstname} retires in ${retirtement}years.`;
// }
//  console.log(RetirementUntilYears(2003,'Fareed'));
//  console.log(RetirementUntilYears(2001,'Saqlain'));


// // Function calling Another Function;

//  // In this this we lerarn that how function  calling to antoher function na d then give the output in the console;

// function fruititems(fruit){

//       return fruit * 4 ;
// }

// // here the below function is calling the above function & vice versa ;

// function fruitMixtureMakeUp(orange,bananas){

//       const  orangesPiece  = fruititems(orange);
//       const  banansPieces  = fruititems(bananas);
//       const  juice =`juice is makeup of  ${orangesPiece} pieces of orange & ${bananas} pieces of the bananas.`;
//       return juice
// }
// console.log(fruitMixtureMakeUp(5,4));


// // Introduction of Array ; in which the Function and the Array are written the code  progran collectively 
// // The use of the function and Aray simultaneously ;

//     //freinds[2]= 'array'
//     //console.log(freinds);
//     // freinds= ['Anas','Mohsin'] //. will not work because it has been not  declear ;

//      // Now make it possible to best way that is below 

//       const  annty =['a','c','c','d','e']
//       console.log(annty);
//       console.log(annty.length);
//       console.log(annty[3])//will find the index that is 'd'/

//       // Exerecise 

//       const calcAge = function(birthyear){
//             return 2037 -birthyear;
//       }

//       const years =['1947','1950','1960','1965','1972'];
//  //Function is calling throught the by array ; best practice example s;
//       const age8 = calcAge(years[0]);
//       const age9 = calcAge(years[1]);
//       const age12= calcAge(years[3]);
//       const age11= calcAge(years[4]);

//       console.log(age11,age12,age8,age9)

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length -1])]
//  console.log(ages);

//  // Array Methods;

//      let best = ['orange','Fareed','grapes','tomatoes','bananas','Saqlain' ,'potatoes']

//        console.log(best);

//          best.push('ali') 

//        console.log(best);

//        best.pop();

//         console.log(best);

//         best.shift();

//        console.log(best);

//        best.unshift('namaz');

//         console.log(best);

//         console.log(best.indexOf('potatoes'))
//         console.log(best.includes(786))// from this console ,we get the bollen type from the array;// it will return out put the false ;

//         console.log(best.includes('Fareed')) // AT here you will do the syntax error such as small or capital letter then it will through the error;
        

//         // At here we use the if condition with the array that is define below ;

//         if(best.includes('Fareed','Saqlan')){
//             console.log('Saqlain is a good friend of the Saqlain');
//         }

// // Problems; Calculate the bill,tips and and totals using the  naming /arrow => function  and using the logic operators in functioin that is called by array
//    // Naming Function 

//    /* const calcTips = function(bill){
//       return   bill >= 50 && bill <= 400 ? bill *.20 :  bill * .3 ;
//   }  */

//   // Arrow Function ; */

//      const  calcTips = bill => bill >=50 &&  bill <= 400 ?  bill * .20 : bill * .3 ;
  
//   const bill =[150,500,700]
//   const tips = [calcTips(bill[0]),calcTips(bill[1]), calcTips(bill[2])];

//   const totals =  [ bill[0] + bill[0]  ,  bill[1] + bill[2],   bill[2] + bill[0] ];
//   console.log(tips,bill,totals);

// // Objects in the Java Script ;


// const  set = {
//       firstName : 'Faredd',
//       lastName :'Bakhsh',
//            age : 46,
//       education : "Bachler in the Computure science",
//       profession : "Developer",
//       freinds :['ali',' saqlain' , 'urdu'],
// } // in object ,we do mistake during the writting code that is the we do not put comma, that i do myself during the writing the code;

// console.log(set)

// // NOW  WE DO DISCUSS THE METHODS OF THE OBJECTS  THAT ARE DISCUSS THE BELOW ;

// // At below we Discuss the Dot  Vs. Bracket Notation 

//     console.log(set.lastName);
//     //console.lopg(set.['lastName'])// wiil throuhg the error

//     // method to get the key value sfrom the object sets ;
//     const lockey = 'Name' ;
    
//     console.log(set['first' +lockey]);
//     console.log(set['last' +lockey]);// it will return the key:values from the object  body ;

//     // sensitive Question in which the  prompt is used , and also the if ,els condition is applied and objected is connected with them ;
//   // use of the objesct in the if ,else and in the prompt;
//     const personality = prompt('Is you realy intersted want to know about the set ?choose between the firstName,lastName,age ,profession and freinds');
//     if(set[personality]){
//       console.log(set[personality])
//     } else{
//       console.log('Wrong Request!choose between the firstName,lastName,age ,profession and freinds')
//     }

//     set.location ='Pakistan'
//     //set.['Twitter'] = '@steFareed' syntax Error/
//     console.log(set);

//     // Now we check  and write object set in template literals;
//     console.log(`${set.firstName} has many friends like as such ${set.freinds} these are 
//     all his friends that are living 24 hours with him but the best is ${set.freinds[1]} friend`)


//   // Here we will discuss the Body mass index(BMI) , we will calculate it thruogh it the object and putting the valuse of OR calling the function inside the object /
//   //Q2:problems  Take Fareed and Saqlain mass and  height calculate the their BMI(Body mass and height  with their index and compare with them each other )
//          const  height = 10;
//           const  mass = 40;
  
//   const fareed ={
//             fullName :'Fareed Bakhsh',
//               height : 10,
//               mass : 40,
//               calcBMI : function(){

//               fareed_bmi  =mass / height **2;
//                return fareed_bmi;
//                   }
//               }
//               const  height1 = 20;
//               const  mass1 = 50;
      



//             const sq ={
//                   fullName :'Muhammad Saqlain',
//                     height1 : 10,
//                     mass1 : 40,
//                     calcBMI : function(){
//                      sq_bmi = mass1/height1**2;
//                      return sq_bmi;
      
//                     }
//                   }

//            fareed.calcBMI();
//            sq.calcBMI();
//            console.log(fareed_bmi,sq_bmi)

//       //Appling the if & else condition;
//        if(fareed_bmi >sq_bmi){
       
//             console.log(`${fareed.fullName}'s BMI (${fareed_bmi}) is higher than (${sq.fullName})'s BMI (${sq_bmi})`)
               
//                            }else{console.log(`${fareed.fullName}'s BMI (${fareed_bmi}) is smaller than (${sq.fullName})'s BMI (${sq_bmi})`)
//                            }


//Loop in the javascript 

// console.log("Holy  Quran is the last book of the universe")
// console.log("Holy  Quran is the last book of the universe")
// console.log("Holy  Quran is the last book of the universe")
// console.log("Holy  Quran is the last book of the universe")
// console.log("Holy  Quran is the last book of the universe")
// console.log("Holy  Quran is the last book of the universe")
// console.log("Holy  Quran is the last book of the universe")
// console.log("Holy  Quran is the last book of the universe")
// console.log("Holy  Quran is the last book of the universe")

   // To avoid  from such writting we we will use the  condiiton l;

    // for loop

  /*  for ( a = 2; a <=9;a++){
      // console.log(`The values of the key a is reptiting when the condition is not falss ${a}`);
      console.log(a)
   }
 */
   //Looping Array ,Breaking and Continuing 

      //   const fb =[
      //       "ali",
      //       "orange",
      //       'yelloe',
      //       1947,
      //       ['ali','michle','pellow'],
      //       true
      //   ]
      //   console.log(fb);
      //   console.log(fb[0]);
      //   console.log(fb[2]);
      //   console.log(fb[3]);
      //   console.log(fb[4]);
      //   console.log(fb.length);
      

        // Applying the loops on the Array;
     /*  
      for (i = 0; i<fb.length; i++){
            // reading from the fb array;
            console.log(fb[i], typeof  fb[i])
                                             }


const  years = [1947,1965,1972,2000]
const  age = []
for (a = 0 ; a < years.length; a++ ){
      age.push(2030 - years[a])
}
console.log(age); */

// Braeking and Continuing;
// At here the Array,for loop ,function and if condition are collectively working;

// for (a = 0 ; a < years.length; a++ ){

//       if(typeof years[a] === 'number') continue;
      
//       console.log(years[a] , typeof years[a]) 
// }
// for (a = 0 ; a < years.length; a++ ){

//       if(typeof years[a] === 'string') break;
      
//       console.log(years[a] , typeof years[a]) 
// }

/// In this the below theorm , the concept  in which one array has been taken, negatively loop is apply and  two loops are collectivly appplied and 
// they are depended to each other through the outside taking array;

//Breakiung the loops;
 /*  const anas = [
               'masjid',
               'membor',
               'musla',
               'urkan',
               ['namaz','zakat','hug','roza','Toheed-o-Risalut'],
               true
               ] */
// // Breaking loops & loops in loops;
// for(stone = 0; stone<=20;stone++){

//       console.log(`Everyone that is doing the hug & umrah throwing ${stone}   stones  contiuesly on lusifer`)


//       for(lucifer = 0; lucifer<=20;lucifer++){
//             console.log(`Everyone that is doing the hug & umrah throw   ${lucifer}      stones  on the lucifer  contiuesly when Qiyamut is not come.`) 
//       } 
// }


 // In this  below we will  be learn the about the cons=cept of the while loops ;

     /*  for (l2 = 7; l2 <=6 ; l2++){
               console.log(l2); 
        } 

        // New way of the writting of the while loops;
        let l1 = 8;

        while (l1 <= 20 ) {
            console.log(l1);
            l1++;
        }

        let l = 8;

        while (l <= 20) {
            console.log(l);
            l++;
        } */
        
        // At below example we take the while loop in which we put if condition and understand the concept of the math.random and math.trunce

// At where we learn about the concept of the math function use inthe javascript  and used the for the calculation 
// perform various function 



//In JavaScript, you can generate random numbers using the Math.random() function, which returns a pseudo-random floating-point number in the range from 0 (inclusive) to 1 (exclusive). Here's a basic example:

let   randomValue = Math.random()
console.log(randomValue);

let randomValue1 = Math.random();
console.log(randomValue1);

// Best Example of the random using in the function;

// Generate a random integer between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let randomInteger = getRandomInt(1, 10);
  console.log(randomInteger);

  //By my own ways of the ways of exaple using math.floor and math.random in the function by callinfg it ;

      function fareedGetInge(min,max){
            return  Math.floor( Math.random() *(min + max) + min);
      }
          
      const calcfareedGetInge = fareedGetInge(5,20);
      console.log(calcfareedGetInge);



     // In JavaScript, the Math.floor() function is used to round a number down to the nearest integer less than or equal to the original number. This function is often used when you want to truncate the decimal part of a number and obtain the largest integer less than or equal to it.

//Here's a simple example:

// Math.Floor of the used;//
let originalNumber = 12.89;
let roundedDownNumber = Math.floor(originalNumber);

console.log(roundedDownNumber);  // Output: 12
//In this example, Math.floor() takes the original number 7.89 and rounds it down to the nearest integer, which is 7. The result is stored in the variable roundedDownNumber.


  
//In this example, getRandomInt takes a minimum and maximum value and returns a random integer within that range.

// similarly when we wana to  get the valuse in the decimal wihtout the rounding of the nummber ,yhen we use it that is below;

   //Math.trunc():
  // The Math.trunc() function returns the integer part of a number by removing any fractional digits. It effectively truncates the decimal portion of a number.

   let truncatedValue = Math.trunc(3.14159);
console.log(truncatedValue);  // Output: 3

//This is particularly useful when you want to discard the decimal part of a number without rounding.




























 


















            
       

 




































 
 