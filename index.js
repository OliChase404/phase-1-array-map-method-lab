const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


//---------------------------------------------------------------
function titleCased(){
const titleCased = tutorials.map((i) => {
  let strToArr = i.split(' ').map((y) => {
    return y.charAt(0).toUpperCase() + y.slice(1)
  })
  return strToArr.join(' ')
})
return titleCased
}

console.log(titleCased())
//------------------------------------------------------------




// console.log(tutorials[0].split(' '))

const upperCaseTutorials = tutorials.map((i) => i.toUpperCase())

// console.log(upperCaseTutorials)

const reverseTutorials = tutorials.map((i) => i.split('').reverse().join(''))

// console.log(reverseTutorials)


const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});

// console.log(activatedRobots);