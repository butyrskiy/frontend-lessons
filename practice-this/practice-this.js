const obj = {
    str: '',
    setStr: function(input) {
        if (!input) {
            this.str = '';
        } else if (typeof input === 'number') {
            this.str = input.toString();
        } else {
            this.str = input;
        }
        return this;
    },
getStr: function() {
    return this.str;
},
getLengthStr: function() {
    return this.str.length;
},
getReverseStr: function() {
let reverseStr = '';
for(let i = this.str.length - 1; i >= 0; i--) {
    reverseStr += this.str[i];
}
return reverseStr;
},
upperStr: function() {  
    return this.str.toUpperCase();  
}
};


obj.setStr('Danilo');
console.log(obj.getStr()); 
console.log(obj.getLengthStr()); 
console.log(obj.getReverseStr());

console.log(obj.getStr().toUpperCase());