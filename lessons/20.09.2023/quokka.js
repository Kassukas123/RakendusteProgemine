const a = 1
const b = 2

const hello = name =>
  console.log(name)(() => {
    console.log("hi")
  })()

//string to number
/*let actuallyNumber = '1'
console.log(parseInt(actuallyNumber))
console.log(+actuallyNumber)

;(async () => {
    const myPromise = () =>
        new Promise(resolve =>
            setTimeout(() => resolve("myPromise2 resolved in 200ms"), 200)
        )
    const myPromise2 = new Promise(resolve => 
        setTimeout(() => resolve("myPromise2 resolved in 200ms"), 200)
    )

    const asyncAwait = async => {
        const myPromiseResponse = myPromise()
        const myPromiseResponse2 = await myPromise2

    return { myPromiseResponse, myPromiseResponse2 }
}

console.log('..')
console.log(await asyncAwait()))*/

let massiiv = [1, 2, 3, 6, 47]
let x = massiiv[4]
console.log(x)

const Raimo = {
  name: "Raimo",
  kool: "TLU",
  "dreams and etc": ":D"
}

console.log(Raimo.name)
console.log(Raimo.kool)
console.log(Raimo["dreams and etc"])
console.log(Raimo.name + " 6petab " + Raimo.kool)

/*
    time: 1,
    place: 2,
    city: 3,
    something: 4
}

const deconstruct = () => {
    const {city, place} = myObject

    return {city, place}
}

console.log(deconstruct()) {city:3, place:2}
})()*/
