//Holy cow this took time, but i did get a better way better grasp on array functions
//

import getInput2 from "./input";

const possibleCubes = new Map();

possibleCubes.set('red', 12);
possibleCubes.set('green', 13);
possibleCubes.set('blue', 14);

let ipt = getInput2();

let lines : string []  = ipt.trim().split('\n')

lines = lines.map((line) => line.split(": ")[1])
let sumOfIds : number = 0;

const games = lines.map((line) => {
       return line.split('; ').map((set) => {
        return set.split(', ').every((game) => {
            const [amount, color] =  game.split(" ")
            return possibleCubes.get(color) >= parseInt(amount);
        })
    })
})
let  gameId : number = 0;

games.forEach((game) => {
    const d = game.every((game) => {
            return game;
    })

    gameId++;
    if(d){
        sumOfIds += gameId;   
    }
})

console.log(sumOfIds)
