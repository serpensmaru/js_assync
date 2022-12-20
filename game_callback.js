const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num = Math.floor((Math.random() * 1000));
console.log(num);
let count = 0

function MyCallback() {
    rl.question("Введите число ", (answer) => {
        ++count
        if (answer == num) {
        console.log(`Вы угадали число c ${count} попытки`);
        console.log("Теперь загадно новое число, отгадайте какое");
        num = Math.floor((Math.random() * 1000));
        // console.log(num);
        } else {
            if (answer < num) {
                console.log(`Загаданное число больше, попытка № ${count}`);
            } else {
                console.log(`Загаданное число меньше, попытка № ${count}`);
            }
        }
        MyCallback()
    })}

MyCallback()

setInterval(() => console.log("!"), 2000)