// add solution here
function theBeatlesPlay(musicians, instruments) {
var newArray = [];
for (var i = 0; i < musicians.length; i++) {
   newArray.push(musicians[i] + " plays " + instruments[i]);
}
return newArray;
}

function johnLennonFacts(facts) {
  var r = [];
  var count = 0;
  while (count < facts.length) {
    r.push(facts[count] + "!!!");
    count++;
  }
  return r;
}

function iLoveTheBeatles(number) {
  i = i + 1;
  var v = [];
  do {v.push("I love the Beatles!"); i++;}
while ( i < 15 );
return v
}