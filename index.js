// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(facts) {
  let counter = 0;
  let modifiedFacts = [];
  while(counter < facts.length) {
    modifiedFacts.push(`${facts[counter]}!!!`);
    counter++;
  }
  return modifiedFacts;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return arr;
}