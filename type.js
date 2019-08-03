// Types in typescript
//number
var num;
num = 10;
//string
var text = 'test';
var bool = true;
//any
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
myRealReaAge = '27';
if (typeof myRealReaAge == 'number') {
    console.log('my age is in numbers');
}
//never
function neverReturnFunction() {
    throw new Error('This function will never return');
}
//neverReturnFunction();
//Nullable types
var canBeNull = 21;
canBeNull = null;
console.log(canBeNull);
var canAlsoBeNull;
canAlsoBeNull = null;
console.log(canAlsoBeNull);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
    name: 'Sunil',
    bankAccount: bankAccount,
    hobbies: ['sports', 'cooking']
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf);
//
var temp;
temp = 10;
//# sourceMappingURL=type.js.map