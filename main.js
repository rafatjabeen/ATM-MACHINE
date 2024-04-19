#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollars
//myBalance -= 6000
//console.log(myBalance)
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
//12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
}
else {
    console.log("incorrect pin number");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "fast cash", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("insufficient balance");
    }
    // =, -=, +=
    else {
        myBalance -= amountAns.amount;
        console.log("your remaining balance is:" + myBalance);
        // we can write it template literals like this (`your remaining balance is ${myBalance}`)
    }
}
else if (operationAns.operation === "fast cash") {
    let fast = await inquirer.prompt([
        {
            name: "fastcash",
            message: "select the amount which you withdraw",
            type: "list",
            choices: [1000, 2000, 5000, 10000]
        }
    ]);
    myBalance -= fast.fastcash;
    console.log(`you have successfully withdrawl ${fast.fastcash},\n your remaining balance is ${myBalance}`);
}
//we use '\n' tobreak line
else if (operationAns.operation === "check balance") {
    console.log("your balance is:" + myBalance);
}
