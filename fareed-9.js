'use strict';

// Creating the Hotel coding Project;

const restaurant ={
             name :'Fareed Albasit Range Hotel',
       location :'PIA Housing Socities Johur Town Phase 1  Lahore Punjab-Pakistan',
    catageries : ['Pakistaines Food', 'Chine','Italians','Vagiterian', 'Organic'],
    starterMenu: ['Mutton', 'Beef', 'Garlic Bread', 'Moderen Food with Advance Salad'],
         mainMenu: ['Burger', 'Pasta', 'Beef && mutton'],

              openingHours:{

                wed:{
                     open :10 ,
                     close:5, 
                  },

                Thurs:{
                     open :9 ,
                    close:6 , 
                                   },

                satur:{
                   open :10 ,
                   close:8 ,
                },
                } ,
           };


            const weekdays = ['Mon', 'Tus' , 'Wed','Thu','Fri','sat','Sun'];
            const openingHours = {
              [weekdays[3]] :{
                open:10,
                closed:3,
              },

              [weekdays[4]] :{
                open:11,
                closed:4,
              },

              [weekdays[5]] :{
                open:0,//open 24 hours;
                closed:5,
              },
            };


const restaurant3 ={
             name :'Fareed Albasit Range Hotel',
         location :'PIA Housing Socities Johur Town Phase 1  Lahore Punjab-Pakistan',
       catageries : ['Pakistaines Food', 'Chine','Italians','Vagiterian', 'Organic Foods'],
       starterMenu: ['Mutton', 'Beef', 'Garlic Bread', 'Moderen Food with Advance Salad'],
          mainMenu: ['Burger', 'Pasta', 'Beef && mutton || meat'],

          //EM6 Enhanced Objetcs Literals properties ;

          openingHours,
          order(startIndex,mainIndex){
            return[this.starterMenu[startIndex],this.mainMenu[mainIndex]]
          },
          orderDelivery({startIndex = 1,mainIndex =  0,time ='20:00',adress}){
         
          console.log(
            ` Oreder recieved ! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be  deleiverd to ${adress}  at ${time}`)
          },

                 orderBurger(piece1, piece2, piece3){
  console.log(
    `Here! is your is delecious burgers ${piece1} ,${piece2}  and  ${piece3}`)
      
                 },

                 orderMeat(mainIngredient , ...otherIngredients){
                  console.log(mainIngredient)
                  console.log(otherIngredients)
                      
                                 },
                  };

// String Methods Practices in the JavaScript;   

 /*  const flights = 

  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; */
  // We creat our Own Event for pakistan cities Multan,karachi,lahore and islamabad
  /* const flightEvents = `
  _Delayed_Departure;fao93766109;isb2133758440;10:30+
  _Arrival;kar0943384722;fao93766109;12:15+
  _Delayed_Arrival;hel7439299980;fao93766109;14:30+
  _Departure;fao93766109;khi2323639855;15:45+
  _Delayed_Departure;fao93766109;mul2133758440;18:00+
  _Arrival;isb0943384722;fao93766109;19:30+
  _Departure;mul93766109;lah2323639855;21:15+
  _Arrival;isb0943384722;mul93766109;22:45+
`;

console.log(flightEvents);

 const getcode = str =>str.slice(0,3).toUpperCase();

//Now the applyingth loops;
for (const flight of flightEvents.split('+')){
  const [type,from,to,time] = flight.split(';');
  const output =`${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replace(
    '_',
    ' '
  )} ${getCode(from)} {getCode(to)} (${time.replaceAllA(':' , 'h')})` .padStart(36);
  console.log(output)
}
 



// Coding Challenge #4


// Before we see that the use & difference b/w DOM and Events //

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀*/

//(1) => .append() Method:
// Purpose:
// The .append() method is used to insert one or more elements or text nodes at the end of a parent element. It is commonly used to dynamically add content to a webpage.

// var newParagraph = document.createElement('p');
//     newParagraph.textContent = 'This is a new Paragraph' ;

//     //Appending the New paragraph in the exsisting div with id = "content";

//     var contentDiv = document.getElementById('content');
//         contentDiv.append(newParagraph)

//2. .querySelector() Method:
//Purpose:
//The .querySelector() method is used to select and return the first element that matches a specified CSS selector within the document. 
//It's a powerful tool for selecting elements based on their classes, IDs, or other attributes.

//Example: =

// Selecting the First Paragraph element with the class "highlight";

// var highlightedParagraph = document.querySelector('.highlight');
//      highlightedParagraph.textContent =  'This paragraph is highlited';
 
// //Challenging Solution

//  document.body.append(document.createElement('textarea'));
//  document.body.append(document.createElement('buttun'));

//  document.querySelector('buttun').addEventListener('click' , function( ){

//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
  
//   for(const [i, row] of rows.entries()){
//     const [first , second] = row.tolowerCase().trim().slpit('_');
//     const output = ` ${first}${second.replase(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)} ${'✅' .repeat(i +1)}`);
//   }
//  });





//  document.body.append(document.createElement('textarea'));
//  document.body.append(document.createElement('button'));
 
//  document.querySelector('button').addEventListener('click', function () {
//    const text = document.querySelector('textarea').value;
//    const rows = text.split('\n');
 
//    for (const [i, row] of rows.entries()) {
//      const [first, second] = row.toLowerCase().trim().split('_');
 
//      const output = `${first}${second.replace(
//        second[0],
//        second[0].toUpperCase()
//      )}`;
//      console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//    }
//  });


//Working with the string part -2;'

    // SPLIT && JOIN 
//console.log('a+VERY+nice +strin '.split("+"));
// console.log('I ','love',' the',' Holy' ,'Quran' .split("+"))
//console.log('FAREED BAKHSH' .split(' '))


// Function callinng with for loops methods and nth number of the names   that is given below;
const [firstName, lastName] = 'Fareed bakhsh' .split(' ');

const newName = ['Mr.' ,firstName ,lastName.toUpperCase()].join(' ');
console.log(newName)

const capitalizeName = function(name){
  const  names = name.split(' ');
  const  namesUpper = [ ];
  for(const n of name){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0] , n[0].toUpperCase( )))
  }
  console.log(namesUpper.join(' '));
}
//function calling the outside the scope ;
capitalizeName('Fareed Bakhsh Attari & Rasool Bakhsh Attari');
capitalizeName('Hasfiz Muhammad Imran Attari && Hazoor Bakhsh Attari');

// Padding , the use of the padstart and padEnd methods;

 const message = ' Go to the MOSQUE from the main gate No:# 3!'
 console.log(message.padStart(500 ,"+=====*****").padEnd(1000,'+'))


 const maskCreditCard = function(number){
  const str = number + ' ';
  const last =str.slice(-4);
  // Here the slice method is used to slect number or anohter ,starting from the end of the string.
    return   last.padStart(str.length ,'*');
 };
 console.log( maskCreditCard(3345677843566775));
 console.log(maskCreditCard(13333233313344));
 console.log(maskCreditCard('1234234234678909876567898765435678987654'));

 // Repeating Methods;
 
       const news = "Weather condition in the whole country is bad..... All the Deliveries will be much delayed!"
      console.log(news.repeat(2));


      // Creating the Naming Function;
// JavaSCript Progarmming languages using  in the Aeroplanes Systems ;such below examples 
      const planesInLine = function(n){
        console.log(`There are ${n} planes in line such as ${'🛩' .repeat(n)}`);
      };
      planesInLine(7);
      planesInLine(14);
      planesInLine(25);


// Working With Strings - Part 3


const airline = 'TAp Pak islalmabad Airline';
console.log(airline.toLocaleUpperCase());
console.log(airline.toLowerCase());

// Fix capitalization in name

const passenger = 'FarEEd BakSHs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails;

const email = "info@onlinefood.com";
const loginEmail = "debugFlow@devlop.IO \n";
const loweremail=  loginEmail.toLowerCase();
const trimmedEmail = loweremail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email);
console.log(email === normalizedEmail)

// replacing
 const pricePK = '300pKR == 1$';
 const priceUS1 = pricePK.replace('PKR', '$').replace(',' ,'.');
 console.log(priceUS1)

const announcement = 'All passangers of the lines number 1 are  come at door entery 7. The line number 2 passangers  are come at door 9!'

console.log(announcement.replace ('door','gate'));
//console.log(announcement.replaceAll('door','gate'));
console.log(announcement.replace (/door/g,'gate'));

// Booleans

const plane = 'AlFareedBus, ALFB1122New';
console.log(plane.includes('ALFB1122'));
console.log(plane.includes("kotMithan"));
console.log(plane.startsWith('AlFareedB'));

if(plane.startsWith('AlFareedB') && plane.endsWith('New')){
  console.log('This is a part of the Alfareed BUs Family');
}


// Practice exercise

 const checkBaggage = function (items){
  const baggage = items.toLowerCase();

 if (baggage.includes('knife') || baggage.includes('gun')){
  console.log("You are not allowed on abroad")
}else{
  console.log('Well-come  abroad !')
  }
   }
    checkBaggage('I have laptop,food items and a pocket knife');
    checkBaggage('Sock & camerta');
    checkBaggage('Keep Gun with himself for the protection');



// // Working With Strings - Part -4;

 const airlinE = " TAP Air Palkistan"
 const planE  = "AFB1199"
 console.log(planE[0]);
 console.log(planE[2]);
 console.log(planE[1]);
 console.log(planE[0]);
console.log('B737'[0]);

 console.log(airline.length);
 console.log("B737".length);

console.log(airlinE.indexOf('r'));
 console.log(airlinE.lastIndexOf('r'));
  console.log(airlinE.indexOf('Pakistan'));

console.log(airlinE.slice(4));
 console.log(airlinE.slice(4,7));


 console.log(airlinE.slice(0,airlinE.indexOf(" ")));
 console.log(airlinE.slice(airlinE.lastIndexOf(' ') +1));

console.log(airlinE.slice(-2));
console.log(airlinE.slice(1,-1));

const  checkMiddleSeat = function( seat){
//   //B & E are middle seats 
 const s = seat.slice(-1);
   if(s === "B" || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
 }



checkMiddleSeat('11B')
checkMiddleSeat('23c');
 checkMiddleSeat('3E');

 console.log(new String('Fareed'));
  console.log(typeof new String('Fareed'));
 console.log(typeof new String('Fareed').slice(1));






///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
// The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀*/


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1
const events = [ ...new Set(gameEvents.values())];
console.log(events);


//2 
gameEvents.delete(64);

//3
   console.log(
           `An event happened ,on average ,every ${90 / gameEvents.size} minutes`
   );

   const time = [...gameEvents.keys( )].pop( );
   console.log(time);
   console.log(
    `An event happened ,on average ,every ${time/ gameEvents.size} minutes`
);
// 4.

for (const[min,event] of gameEvents){
  const half = min <= 45 ? 'First' : 'second' ;
  console.log(`[${half}HALF] ${min} : ${event}`);
}




//Rest Parameters;

// Here we will cover the concept of the restparametrs ;
//Rest parametrs /Spread Syntax/Destructive Assignment ;(...)
//Examples :
//1 coppied Array

const originalArry = [1,2,3,4,5];
const copiedArray = [...originalArry];
console.log(copiedArray);// output =[1,2,3,4,5];

//2; concat Array;
const array1 = [1,23,4];
const array2 = [4,5,6,7,7];
const concatedArray = [...array1 ,...array2];
console.log(concatedArray);//output = [1, 23, 4, 4, 5, 6, 7, 7];

//3 USe of rest parameters (...)in the function ;

   function sum(...numbers){
    return numbers.reduce((acc ,num) => acc +num,0 );

  }
  console.log(sum(1,2,3,4,5));//output = 15;

  //4 Use of the rest parameters (...)in Array Destructing ;

//const array = [arrayFirst,...restArray] = [1,2,3,4,5,6,7,8];
//console.log(arrayFirst);//output = [1];
//console.log(restArray);//output = [2,3,4,5,6,7,8];

  //5 Use of the rest parameters (...)in object Destructing ;

const {firsLastName, ...restInfo} = {
  firsLastName :"Fareed Bakhsh" ,

  age: 21,
  birthyear : 2003,
  Location : 'Lahore',
  Qualification :'Bachler'
}

console.log(firsLastName); //output = Fareed Bakhsh;
console.log(restInfo);//output = {age: 21, birthyear: 2003, Location: 'Lahore', Qualification: 'Bachler'};

// if you wana to study  more  rest parameters read abd study thebelow artilcle

//https://www.facebook.com/share/p/vNG2JsyjHqqhop1w/?mibextid=9R9pXO



//use of the New Map concept in the JavaSCript;

      //it is used to store the key and values pairs

      //cretaing the new map 
      //myMap = new Map();

      //. Adding the Entries
       
      //myMap.set('key1', 'value1');
      //myMap.set(45,'fourtyfive');
      //  myMap.set({name:'fareed'} , 'valuse for fareed');
     
// getting the values ;
   
      //console.log(myMap.get('key1')); //output = value1
      //console.log(myMap.get(45));//output =fourtyfive
      //console.log(myMap.get({name :'fareed'}));//undefine
     

// Checking if keys has /Mean Getting the Boolen Vlaues true and false;
      // console.log(myMap.has('key1'));//true 
      // console.log(myMap.has('nonekey'));//false
       
// Deleting Entries;

    //console.log(myMap.delete('key1'));//true
    //console.log(myMap.has('key1'));//false 
    
    // Iterating Over Entries of loop on map :

 ///       for (const [key,value] of myMap){
    ///    console.log(`${key} : ${value}`);
  //      }

// Applying  and usingthe methods  of map on function that is below;

//Creating the functioin new  Map;
 const FunctioinkeyMap = new Map( );
 // creating the Arrow Function 
const myFunction = ( ) => {  };
FunctioinkeyMap.set(myFunction , 'Value for myFunction');
console.log(FunctioinkeyMap.get(myFunction));

//For Further Detail about New MAP concept Detail and Explanatioin ,eloboration ,read and study the below Blog commnt links;
//https://www.facebook.com/share/p/nxEUQFQuZsMbSCTw/?mibextid=9R9pXO



// Maps : Intrgration;

const question = new Map([
  ['Question', 'Which is the best programing languages in the world ?'],
  [1,'java'],
  [2,'JavaScript'],
  [3,'Python'],
  ['correct', 3],
  [true,'correct'],
  [false,'Try Agasin !'],
]);

console.log(question);
// Convert object to map ;

//console.log(Object.entries(openingHours));
//const hoursMap = new Map(Object.entries(openingHours))
//console.log(hoursMap);// nothing output because openingHours is not define ;

// Quiz app


console.log(question.get('quesion'))

for (const [key,value] of question){
  if (typeof key === 'number')console.log(`Anaswer ${key} : ${value}`);
}


//const answer = Number(prompt('Your answer'));

const answer  = 3
console.log(answer);
console.log(question.get(question.get('correct') === answer));


// Convert map to array

console.log([...question]);
console.log(...question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


///////////////////////////////////////
// Maps: Fundamentals

const rest = new Map
rest.set('name', 'Alduabi');
rest.set(1,'Almultan,Faisalabad');
console.log(rest.set(2, 'AlkarachiBuryani, Mulatan Hulwa'));

rest
.set('catageries', ['MultaniFood','Pizza', 'Vegitables', 'Oragnic food'])
.set('open', 11)
.set('closed', 24)
.set(true,'We are open:D')
.set(false,'We are closed :(')
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));


//////////////////////////////////////
// Sets

const orederset = new Set([
  'Pasta',
  'Pizza',
  'Samosa',
  'Pukohra',
  'Jaleeby',
  'chutny',
  'dahy',
  'Lusy',

]);
console.log(orederset);
console.log(new Set ('Jonas'));
console.log(orederset.size);
console.log(orederset.has('Pizza'));
console.log(orederset.has('Bread'));
orederset.add('Sag of the Musturd Plants');
orederset.add('Biryani of Karachi');
orederset.delete('Lusy');
//orederset.clear();
  console.log(orederset)

for (const order  of orederset) console.log(order);
//Example;
const staff = ['CEO','Principal','Wise Principal','Teacher', 'Peon', 'Guard','care Taker'];
const uniquestaff = [...new Set(staff)];
console.log(uniquestaff);
console.log(new Set(['CEO','Principal','Wise Principal','Teacher', 'Peon', 'Guard','care Taker']).size);
console.log(new Set('Fareed School Managment System').size);

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, 
  you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT:
 Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,

and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {

    team1 : 'Fareed-Club',
    team2 :  'Saqlain-Club',
    players :[

      ['a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
    ],
 [
   'f1',
   'a2',
    'r3',
    'e4', 
    'e5', 
    'd6',
    'b7', 
    'a8',
     'k9',
      'h10',
       's11',
      ] ,
    ],
              score:'4.3',
        scored :[ 'f1',
        'a2',
        'r3',
        'e4',],
  
        date:'Dec 34,2023',

      odds : {
        team1: 2.3,
        x : 1.3,
        team2 :6.4
        },
  }

//1
for (const [i,player] of game.scored.entries())
console.log(`GOAL${i + 1 }: ${player}`);
 
// 2.


const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;

average /= odds.length; 
console.log(average);

// 3.
 for (const [ team, odd] of Object.entries(game.odds)){
 const teamStr = team === 'x' ? 'draw' : ` victory ${game[team]}`;
 console.log(`odd of ${teamStr} ${odd}`);
 }

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase 
//the count as we encounter a new occurence of a certain element

const scorers = {};
for ( const player of game.scored){
  scorers[player] ? scorers[player]++ : (scorers[player] = 1) ;
}

 ///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES   

const  openingHours1 ={
  monday : '10 to 4pm',
  tuseday : '11 to 5pm',
  thursday : '12 to 6 pm',
  wednesdays: '9 to 5:30pm',
  Friday : '24 hours',
}
const properties = Object.keys(openingHours1);
console.log(properties);

let openStr = ` We are open on ${properties.length} days`;
///for(const day of properties1){
  //openStr += `${day},` ;
//}
//console.log(openStr);


// Property VALUES

const values = Object.values(openingHours1);
console.log(values);

// Entire object
const entries = Object.entries(openingHours1);
console.log(entries);

// [key, value]

for (const [day,{open,close}] of entries){
  console.log(`on ${day} we open at ${open} and close at ${close}`);
};

///////////////////////////////////////
// Optional Chaining

// const restaurant ={
//              name :'Fareed Albasit Range Hotel',
//           location :'PIA Housing Socities Johur Town Phase 1  Lahore Punjab-Pakistan',
//        catageries : ['Pakistaines Food', 'Chine','Italians','Vagiterian', 'Organic'],
//         starterMenu: ['Mutton', 'Beef', 'Garlic Bread', 'Moderen Food with Advance Salad'],
//          mainMenu: ['Burger', 'Pasta', 'Beef && mutton'],
  
//                 openingHours:{
  
//                   wed:{
//                        open :10 ,
//                          close:5, 
//                      },
  
//                      Thurs:{
//                   open :9 ,
//                        close:6 ,
//                        },
  
//                      satur:{
//                           open :10 ,
//                          close:8 ,
//                  },
//                } ,
//              };


if(restaurant.openingHours && restaurant.openingHours.wed)
  console.log(restaurant.openingHours.wed.open);
  
// WITH optional chaining ; '?'
console.log(restaurant.openingHours.wed?.open);
console.log(restaurant.openingHours?.wed?.open);

// Example
//Now we explore the more opitional chaning more;
const days = ['mon', 'tue','wed' ,'thu', 'fri' , 'sat', ' sun'];

for (const day of days ){
  const open = restaurant.openingHours[day]?.open ?? "closed" ;

  console.log(`on ${day} , we open at ${open}`);

}

// Methods

console.log(restaurant.order?.(0,1)  ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1)  ?? 'Method does not exist');

// Arrays

const user = [{name : 'Fareed' , email: 'hello@FAREED.com'}];

// const users = [];
console.log(user[0]?.name ?? 'user array empty');


if(user.length >0)console.log(user[0].name);
else console.log('User array  empty');


// The for-of  loop;

const menu  = [...restaurant.starterMenu,  ...restaurant.mainMenu];
for (const items of menu )console.log(items);
for (const [i,el] of menu.entries()){
  console.log(`${i +1}:${el}`);
};


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') 
with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 
players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, 
along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or
 the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀

*/

//1 .
const [players1 ,players2] = game.players;
 console.log(players1,players2);

 //2. 
    const [gk,  ...fieldPlayers] = players1; // Here gk mean is that Goals Keeper
    console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2] ;
console.log(allPlayers)

// 4. 
    const players1Final = [ ...players1 , 'Sabir' , 'Shahid' , 'Jaffar'];

//5 
  const {
    odds :{team1, x: draw,team2},
  }=  game ;
  console.log(team1,draw,team2);
//6;
const printGoals = function(...players){
   console.log(players);
   console.log(`${players.length} goals were scored`);
};

// printGoals('Tariq, 'Mudassir', 'Saqalin', 'Mubashir');
// printGoals('Ghulam Hussain', 'MUhammad Hussain');
printGoals(...game.scored);
// 7.

team1 <team2 && console.log('Team  1 is more likely to win');
team2 <team2 && console.log('Team  2 is more likely to win');

//////////////////////////////////////

//The Nullish Coalescing Opertaors 
restaurant.numGuests = 0 ;
const guests = restaurant.numGuests ||10;
console.log(guests);
///////////////////////////////////////
// Short Circuting (&& and ||)
console.log('---- OR ----');
//Use Any Data Type , Return Any data Type , short-circuting 
console.log(3 || 'Fareed');
console.log(3 || 'Fareed');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || ' ' || 'Hellow' || 23 || null)

restaurant.numGuests = 0 ;
const guests1 = restaurant.numGuests  ?  restaurant.numGuests  : 10 ;
console.log(guests1);

const guests2 = restaurant.numGuests || 10 ;
console.log(guests2);
console.log('---AND---');
console.log(0 && 'Fareed');
console.log(7 && 'Fareed')
console.log('Hello' && 23 && null && 'Fareed')

// Practical example
// Define the restaurant object (if not already defined)
var  restaurant786 = {
  orederPizza: function (gift , meal){
    console.log(`Order has been recieved from the company  that is ${gift} and ${meal} .`)
  }
};
if(restaurant786.orederPizza){
  restaurant786.orederPizza('Brger','Meal');
}
restaurant786.orederPizza && restaurant786.orederPizza('Brger','Meal');

/////////////////////////////////////////////////////////////////////////////////////

// Assume the restaurant object is defined somewhere in your code
const restaurant1122 = {
  mainMenu: ['pizza', 'pasta'],
  starterMenu: ['salad'],
  openingHours: {
    sat: {
      open: 12,
      close: 22,
    },
    // Add other days as needed
  },
};
// Rest Patteren amd Parameters ;
// 1) Destructing 

// Spread , Because on Right Side of =
 const arr1 = [1,2, ...[3,4]];

 // Rest , Because on the left side of =
 const [a,b,...others] = [1,2,3,4,5]
console.log(a,b,others);

const [pizza,,pasta, ...otherFood] =[
  ...restaurant1122.mainMenu,
  ...restaurant1122.starterMenu,
];
console.log(pizza,pasta,otherFood);

// objects 
const { sat, ...weekdays1} = restaurant1122.openingHours
console.log(weekdays1)///

// 2) Functions
const add = function (...numbers){
  let sum = 0;
  for (let i = 0 ; i < numbers.length ; i++) sum += numbers [i];
  console.log(sum);

}
add(2,3);
add(4,5,6,7,2)
add(8,2,4,5,6,7,9)

const x = [23,5,7];
add(...x);

// Assuming restaurant has an orderPizza function
restaurant1122.orderPizza = function (...toppings) {
  console.log('Order received with toppings:', toppings.join(', '));
};

restaurant1122.orderPizza('mushroom', 'onion', 'banana', 'Vegetables');
restaurant1122.orderPizza('Vegetables');

///////////////////////////////////////////////////////////////
///////////////////////////////////////
// The Spread Operators (....); (....)
const fareedArr =[1,4,5,9,10];
const baddNewfareedArr = [1,2,3,fareedArr[1],fareedArr[3],fareedArr[4]]
console.log(baddNewfareedArr);
const newArr =[1,2, ...fareedArr];
console.log(newArr);
console.log(...newArr)
console.log(1,2,3,4,5,6,7);
const newMenu = [ ...restaurant.mainMenu, 'chicken'];
console.log(newMenu);
// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
 // Join 2 arrays
 const menu1 =[...restaurant.starterMenu, ...restaurant.mainMenu];
 console.log(menu1);

 //Iterables : arrys,strings,maps, stes. NOT
 const str = 'Fareed Bakhsh';
 const letters = [...str, " " , 'Attari.'];
 console.log(letters);
 console.log(...rest);
  //console.log(`${...str} Schmedtmann`);
 
  // Real-world example

  const ingredients786 = [
    prompt ("Let's make pasta! ingrent 1 ?"),
    prompt("Ingredient 2?"),
    prompt("Ingredient 3?"),
  ];
console.log(ingredients786);
/// chat gpt code 
// Assume the restaurant object is defined somewhere in your code
const restaurant22 = {
  orderPasta: function (ingredient221, ingredient222, ingredient223) {
    console.log(`Pasta ordered with ingredients: ${ingredient221}, ${ingredient222} and
     ${ingredient223}`);
    // Add your pasta order processing logic here
  }
};
// Example usage with spread syntax
const ingredients22 = ['tomato', 'chees' ,'Potato']

// Using individual arguments
restaurant22.orderPasta(ingredients22[0], ingredients22[1], ingredients22[2]);

// Using spread syntax
restaurant22.orderPasta(...ingredients22);


/// Objects
const newRestaurant = { foundedIn : 2003, ...restaurant , founder: "Fareed"} ;
console.log(newRestaurant);
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Alfraeed Resturant';
console.log(restaurantCopy.name);

///////////////////////////////////////////////////////
// Destructuring Objects(Giving the Again structure);

///restaurant.orderDelivery({
//   time : '5:30 am',
//   adress:'PIA Housing Socities',
//   mainIndex : 2,
//   startIndex :2,
// });

//restaurant.orderDelivery({
  //adress : 'Pia Housing Socities',
  //startIndex : 1,
//});

const {name ,openingHours11,catageries} = restaurant
console.log(name , openingHours11 , catageries);


const {
  name: restaurantName,
  openingHours11: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);


 // Default values

 const { menufaree = [ ], startMenue : starter = [ ]} = restaurant ;
 console.log(menufaree,starter)

//  Mutating variables
/* let a = 315;
let b = 1199;
const obj = {
  a : 23 ,b: 7, 
};
({a,b,} = obj);
console.assert.log(a,b,); */ //output will be 23,7 ,it will take the just const values instead by let wali values taking

// Nested objects
//  const {
//       fri :{ open : o ,close :c} ,
//  } = openingHours ;
//  console.log(o,c);


///////////////////////////////////////
// Destructuring Arrays

const Arr = [2,3,4];
const a9 = Arr[0];
const b9 = Arr[1];
const c9 = Arr[2];
const [x1,y,z] = Arr;
console.log(x1,y,z)
console.log(Arr);

//////////////////////////////////////////

let [ main ,  ,secondary] = restaurant.catageries;
console.log(main , secondary)

// Switching variables
const temp = main
main = secondary;
secondary = temp ;
console.log(main , secondary);


[ main , secondary] = [ secondary,main];
console.log(main , secondary);

 // Receive 2 return values from a function

 /* const  [starter1 , ender] = restaurant.order(2,0);
 console.log(starter1 ,ender) */ // will through it error

   // Nested destructuring
  const nested = [2, 3,  [5,6]];//nested array in array
  //  //const [i, ,j] = nested;
  const [i, , [j, k]] = nested;
    console.log(i, j ,k);

 /*  const nested = [2, 3,4,  [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); */ //  will through it error ,

    // find the error in it by comparing the below term 

//   // Nested destructuring
//   const nested = [2, 4, [5, 6]];
// //const [i, , j] = nested;
//  const [i, , [j ,k]] = nested;// in it we declare the index by english letter of above valuse 
//  // they are taking the same above values as index work 
//  console.log(i, j, k);
 // Default values
 const  [ p = 1,q = 1, r = 1] = [ 8,9];
 console.log(p,q,r);// at here the r is not given  in equal to array ,it by default taking the 
 // value in previous  that is 1 (one);


 /// The topic and lectures are totaly end;

