const lp3 = require('./toplist');
const _ = require('lodash');
const { flatten, toArray } = require('lodash');

console.log("\n Zadanie 1 \n");
const x = [];
const queenArr = _.concat(x, (_.filter(lp3, {'author': 'Queen'})));
console.log(queenArr);

console.log("\n Zadanie 2 \n");
const pinkFloydArr = _.concat(x, (_.filter(lp3, obj => ((obj.change >= 10) && obj.author == 'Pink Floyd'))));
console.log(pinkFloydArr)

console.log("\n Zadanie 3 \n");

const n = 3 // zmienna wg której obieramy ile utworów chcemy usunąć
const sorted = _.sortBy(lp3, obj => obj.change).slice(0, -n);
console.log(sorted);

console.log("\n Zadanie 4 \n");

const first = _.pick(_.head(lp3), 'author', 'song');
console.log(first);

console.log("\n Zadanie 5 \n");

let numbers = [1, 23, 7];
function func2(array) {
    let res = []
    if (_.some(array, Number)) {
        for(let element of array) {
            res.push(_.find(lp3, obj => obj.place == element));
        }
    }
    return res;
}
console.log(func2(numbers));

console.log("\n Zadanie 6 \n");

function func3(n, min, max) {
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      };
    const x = getRandom(min, max);
    let res = []
    for (let i = 0; i < n; i++) {
       res.push(_.find(lp3, obj => obj.place == x));
    }
    return res;
}
console.log(func3(5, 7, 20));


console.log("\n Zadanie 7 \n");

let func = number => {
    console.log(_.find(lp3, obj => obj.place == number));
  };
for(let i = 1; i <= 10; i++) {
    //_.delay(func, 5000 * (i + 1), i); zakomentowane aby nie sprawiało problemów z późniejszymi zadaniami :)
}

console.log("\n Zadanie 8 \n");

const fallingArr = _.concat(x, (_.filter(lp3, obj => ((obj.change < 0)))));
console.log(fallingArr);

console.log("\n Zadanie 9 \n");

const newObject = _.mapKeys(lp3, 'song');
console.log(newObject)

console.log("\n Zadanie 10 \n");

let songsByArtists =_.mapValues(_.groupBy(lp3, 'author'), element => _.map(element, element2=>_.pick(element2, ["song", "place"])));
console.log(songsByArtists);

console.log("\n Zadanie 11 \n");

let artists = _.values(_.mapValues((_.mapKeys(lp3, 'song')), 'author'));
console.log(artists);
let countedArtists = _(artists).reduce(function (acc, curr) {
    if (curr in acc) {
        acc[curr]++;
    }
    else {
        acc[curr] = 1;
    }
    return acc;
}, {});
console.log(countedArtists)

console.log("\n Zadanie 11 \n");
let changes = _.orderBy(lp3, 'change');
console.log("największy spadek: " + changes[0]['change']);
console.log("największy wzrost: " + changes[changes.length - 1]['change']);