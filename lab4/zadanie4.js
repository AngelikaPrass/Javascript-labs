const tab = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
];

function indexing(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property];
        if(!acc[key]) {
            acc[key] = []
        };
        acc[key].push(obj);
        return acc
    }, {})
}
let indexed = indexing(tab, 'id');
console.log(indexed);