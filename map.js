const numbers = [2,8,6,54,5,4]

function doubleIt (num) {
    // console.log(num)
    return num * 2
}

const double2 = (n) => n * 3;

const output = numbers.map(double2);
// console.log(output)

const result = numbers.map(doubleIt)
// console.log(result)


// const doubled = [];
// for(const num of numbers){
//     const duble = num * 2;
//     doubled.push(duble)
// }
// console.log(doubled)



const numberss = [2,1,12,10,8,15,17];

const selected = numberss.filter(na => na > 4)

// const double3 = numberss.map(number => number/2)
console.log(selected)