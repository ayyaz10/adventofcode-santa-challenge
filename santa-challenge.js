const fs = require('fs');

fs.readFile('./santa-instructions.txt', (err, data) => {
    console.time('santa challenge')
    if(err) {
        console.log(err)
    }
    function fi(input, require){
        let a = [];
    for(let i = 0; i < input.length; i++){
        if(input.charAt(i) === require) {
            a.push(input.charAt(i))
        }
    }
    return a;
    }
    let op = fi(data.toString(), '(');
    let cp = fi(data.toString(), ')');
    const openingPrenthisis = op.length
    const closingPrenthisis = cp.length

    console.log("total floors: " + (openingPrenthisis - closingPrenthisis));
    console.timeEnd('santa challenge');
})