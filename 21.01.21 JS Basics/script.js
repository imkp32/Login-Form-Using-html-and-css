//Variables//
let country='India';
let continent="asia";
let population='20 millions';
console.log(country,continent,population);
console.log(typeof 'kumar');
//Data Types//
let randmNum=Math.random();
console.log(randmNum);
let numNew=Math.ceil(randmNum*10);
console.log(numNew);
//Strings//
let testNew='bird';
let newTest='boy';
let numTest=40;
let newVar=testNew+newTest+numTest;
console.log(newVar);
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph);
//Template String//
console.log(`the sum of 2 and 3 is 5`);
let a=5;
let b=6;
console.log(`the sum of ${a} and ${b} is ${a+b}`);
let js = 'JavaScript'
console.log(js.length)                                  //Length
let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)     
let stringNew = 'JavaScript'                            //uppercase & Lowercase
console.log(stringNew.toUpperCase())
console.log(stringNew.toLowerCase());
let stringOld = 'JavaScript'
console.log(stringOld.substr(4,6))                     //substring 
let firstName = 'Asabeneh'
console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]
let string_g = '   30 Days Of JavaScript   '                //trim
console.log(string_g)
console.log(string_g.trim(' '))
let string_p = '30 Days Of JavaScript'                     //includes
console.log(string_p.includes('Days'))     // true
console.log(string_p.includes('days'))     // false - it is case sensitive!
let country_A = 'Finland'                         //replace
console.log(country_A.replace('Fin', 'Noman'))       // Nomanland
//Operators//
let number=prompt('Enter number','Number goes here')
console.log(number);
//Array//
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)