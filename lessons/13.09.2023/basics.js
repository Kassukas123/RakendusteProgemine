/*
 * Basic JS funktsioonide n2ited
 */

function findAnIndex(array, element) {
    return array.indexOf(element)
}

// tavaline funktsioon
function addNumbers(num1, num2) {
    return num1 + num2
}

// arrow function
const addArrow = (num1, num2) => {
    return num1 + num2
}

// arrow function lyhendatud
const addArrowShort = (num1, num2) => num1 + num2

// nested function
function addNested(a) {
    return function addSecond(b) {
        return a + b
    }
}

// nested function lyhendatud
function addNested2(a) {
    return (b) => a + b
}

// nested function veel lyhendatud (pull v2rk)
const addNested3 = (a) => (b) => a + b

// string literals
const nameString = (name) => `Name is ${name}`

// map, filter, reduce?
const numberArray = [1, 3, 5, 2, 7]

// map kutsub v2lja callbacki iga array elemendi jaoks
// asi mis callbackist returnitakse lisatakse uude arraysse
// .map(() => {})

// liita igale elemendile 5
const newAddedArray = numberArray.map((elem) => elem + 5)

// filter kutsub v2lja callbacki iga array elemendi jaoks
// callback tagastab booli, mis m22rab 2ra kas lisada see element uude arraysse v6i mitte


const filteredArray = numberArray.filter((elem) => elem == 3)


/*
 * Kasutused
 */

const numbrid = [0, 3, 13, 12, 8, 7]
console.log(findAnIndex(numbrid, 13))
//console.log(addArrowShort(3, 5))
console.log(addNested3(3)(5))
console.log(nameString("Kaspar"))
console.log(filteredArray)

/* const newArray = numberArray.map(element, index, array => {
    console.log({
        element: element,
        newElement: element + 5,
        "index": index,
        array 
    }

    return element + 5
} */

const filteredArray1 = numberArray.filter(num => num < 4)

console.log(1 < 4)

console.log({numberArray, filteredArray1})


const names = ["Mari", "Jaan", "Mihkel", "Juku"]

const data = names.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: name.toLowerCase() + "@company.com",
        address:  name + " Street 55",
        username: name.split("").reverse().join(""),
    }
})
console.log(data)

console.log(data[0])

const newJuku = {
    ...data[0],
    height: 175
}

const evenNewerJuku = {
    ...newJuku,
    age: 99
}

console.log({ newJuku, evenNewerJuku })