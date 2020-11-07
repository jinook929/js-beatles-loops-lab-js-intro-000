// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let counter = 0;
  let modifiedFacts = [];
  while(counter < facts.length) {
    modifiedFacts.push(`${facts[counter]}!!!`);
    counter++;
  }
}