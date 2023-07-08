import fs from "node:fs"

let data = fs.readFileSync("input.txt", "utf-8").toString().split("\n")

// part 1

for (let i in data) {
    let anchor = parseInt(data[i])
    let firstArray = data.slice(1)
    // console.log(anchor)

    for (let j in firstArray) {
        let ship = parseInt(firstArray[j])
        // console.log(ship)
        if (anchor + ship === 2020) {
            let value = anchor * ship;
            console.log(value)
        }
    }
}

// let array = [1, 2, 3, 4, 5]
// let firstArray = array.slice(1)

// console.log(array, firstArray)
// quick testing before running 

// part 2 

for (let i in data) {
    let anchor = parseInt(data[i])
    let firstArray = data.slice(1)

    for (let j in firstArray) {
        let ship = parseInt(firstArray[j])
        let secondArray = firstArray.slice(1)

        for (let k in secondArray) {
            let plane = parseInt(secondArray[k]);
            if (anchor + ship + plane === 2020) {
                console.log(anchor * ship * plane)
            }
        }
    }
}