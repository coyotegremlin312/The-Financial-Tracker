/*const person = {
    name: 'Ashley',
    age: 29,
    location: {
        city: 'Los Angeles',
        temp: 60
    }
};

const {name: firstName = 'Anonymous', age} = person;
const {city, temp: temperature} = person.location;

console.log(`${ firstName } is ${ age }.`)

if(city && temperature){
    console.log(`It's ${temperature} in ${city}.`)
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const  {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
*/

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];

const [Drink, , MedPrice] = item;

console.log(`A medium ${Drink} costs ${MedPrice}.`)