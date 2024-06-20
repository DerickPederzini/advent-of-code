//This is My first Advent Of Code Ever!
//This is also my first time using TypeScript
//
//Re/lly fun solution to came up with honestly, enjoyed it a lot
//
//I know this code is insanelly ugly, i need to refactor it tomorrow!

import getInput1 from "./input";

let input : string = getInput1();

let sum1 : number = 0;

let begPointer : number = -1;
let endPointer : number = 0;
let clos : boolean = false;
let closEnd : boolean = false;

for(let i = endPointer; i < input.length; i++){
    
    if(input[i] == '\n'){
        if(closEnd){
            let s : string = input[begPointer]+input[endPointer];
            sum1 += parseInt(s);
        }
         if(!closEnd){
            let s : string = input[begPointer]+input[begPointer];
            sum1 += parseInt(s);
        }
        begPointer = endPointer - 1;
        clos = false;
        closEnd = false;
    }
    else if(input[i] >= '0' && input[i] <= '9' && !clos ){
        begPointer = i;
        clos = true;
       
    }else if(input[i] <= '9' && input[i] >= '0'){
        endPointer = i;
        closEnd = true;
      
    }


}

console.log(sum1);


