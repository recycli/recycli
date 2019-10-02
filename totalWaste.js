
const data = require('./mockdata.js')

let sum = 0
for(var i=0;i<(data.length);i++){
    sum += data[i].waste;
}

sum = 1234566;

let digits = [];
for(var i=0;i<9;i++){
    digits.push('0');
}

for(var i=8;i>=0;i--){
    if(i==5 || i==1){
        digits[i] = ','
    }else{
        digits[i] = Math.floor(sum%10);
        sum /= 10;
    }
}

module.exports = digits;