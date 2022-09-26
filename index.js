const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
    cats.push('Ralph');

}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
}

function appendCat(name) {
    let otherCats = [...cats, name];
   return otherCats; 
}

function prependCat(name) {
    let someCats = [name, ...cats];
    return someCats;
}

function removeLastCat() {
   return cats.slice(0, cats.length - 1);
    
}

function removeFirstCat() {
    return cats.slice(1);
}

