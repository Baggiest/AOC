import fs from "node:fs"

let data = fs.readFileSync("input.txt", "utf-8").toString().split("\n")
    let result: [Number]


for (let i in data) {
    let anchor = parseInt(data[i])
    let newArray = data.slice(1)
    // console.log(anchor)
    
    for (let j in newArray) {
        let ship = parseInt(newArray[j])
        // console.log(ship)
        if (anchor + ship === 2020) {
            let value = anchor * ship;
            console.log(value)
        }
    }
}

// let array = [1, 2, 3, 4, 5]
// let newArray = array.slice(1)

// console.log(array, newArray)
// quick testing before running 