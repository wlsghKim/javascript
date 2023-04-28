{
    const people = [{
	name: 'Alberto',
	age: 27
},{
	name: 'Caroline',
	age: 27
},{
	name: 'Josh',
	age: 31
}];

const markup = `
<ul>
  ${(people.map(person => `<li>  ${person.name}</li>`).join(''))}
</ul>
`;
console.log(markup);
}

{
let person = "Alberto";
let age = 25;

function myTag(strings,personName,personAge){
    console.log(strings,personName,personAge);
  let str = strings[1];
  let ageStr;

  personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";

  return personName + str + ageStr;
}

let sentence = myTag`${person} is a ${age}`;
console.log(sentence);
// Alberto is a youngster
}