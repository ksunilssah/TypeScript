// Types in typescript

let num: number;
num = 10;

let text: string = 'test';
let bool: boolean = true;

let arr: any[] = ["test", "test"];

//Array
let arr2: [string, number] = ['sss', 1];

//Complex object
type objectInof = {data: number[], output: (all: boolean) => number[]};
let complex: objectInof = {
    data: [1,2,3,4,5],
    output: function(all : boolean): number[]{
        return this.data
    }
}

let complex2: objectInof = {
    data: [2,3,4,5,5,5],
    output: function(all: boolean) : number[]{
        return this.data
    }
}

//union types
let myRealReaAge: number | string  = 27;
//myRealReaAge = '27';

if(typeof myRealReaAge == 'number') {
    console.log('my age is in numbers');
}

//never
function neverReturnFunction(): never {
    throw new Error('This function will never return');
}

neverReturnFunction();