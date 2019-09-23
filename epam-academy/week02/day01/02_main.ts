import {Mammals , Reptile, Bird} from './02_ani'

const reptile = new Reptile('Crocodile');
const mammal = new Mammals('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');

console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);