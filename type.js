// Types in typescript
var num;
num = 10;
var text = 'test';
var bool = true;
var arr = ["test", "test"];
//Array
var arr2 = ['sss', 1];
var complex = {
    data: [1, 2, 3, 4, 5],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [2, 3, 4, 5, 5, 5],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealReaAge = 27;
//myRealReaAge = '27';
if (typeof myRealReaAge == 'number') {
    console.log('my age is in numbers');
}
//never
function neverReturnFunction() {
    throw new Error('This function will never return');
}
neverReturnFunction();
