const fs = require('fs');

fs.readFile('./santa-instructions.txt', (err, data) => {
    // console.time('santa challenge')
    if(err) {
        console.log(err)
    }
    
    // To what floor do the instructions take Santa?

    // function fi(input, require){
        // let a = [];
        // for(let i = 0; i < input.length; i++){
            // if(input.charAt(i) === require) {
                // a.push(input.charAt(i))
            // }
        // }
        // return a;
        // }
        // let op = fi(data.toString(), '(');
        // let cp = fi(data.toString(), ')');
        // const openingPrenthisis = op.length;
        // const closingPrenthisis = cp.length;

    // console.log("total floors: " + (openingPrenthisis - closingPrenthisis));
    // console.timeEnd('santa challenge');


    // What is the position of the character that causes Santa to first enter the basement?
//     function fi(input) {
//         let inputArray = [];

//         for(let i = 0; i < input.length; i++) {
//             inputArray.push(input.charAt(i))
//         }

//         const mutatedArray = inputArray.map((each) => {
//             if(each === '(') {
//                 return 1;
//             } else {
//                 return -1;
//             }
//         })
    

//         let value = mutatedArray.reduce((acc, curr, i)=>{
//             if(acc + curr === -1) { 
//                 console.log(i+1)
//             }
//             return acc + curr;
//         }, 0);
//         console.log(value);
// }

//     fi(data.toString());
// })