// using the Readline package write a CLI tool that will ask the user for the following:

// 1) a string

// 2) a colour

// 3) a background color

// 4) text augmentations separated by spaces (italic, bold, strikethrough, underline)

// once all inputs have been received it should output the string with all the applied styles using chalk

const readline = require("readline")
const chalk = require("chalk")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let text = ""
let colour = ""
let bgColor = ""
let arguments = []

rl.question("What would you like to print? \n", (textInput) => {
    text = textInput;
    rl.question("What colour it should have? \n", (colourInput) => {
        colour = colourInput;
        rl.question("What should be the background colour? \n", (bgInput) => {
            bgColor = 'bg' + bgInput[0].toUpperCase() + bgInput.slice(1)
            rl.question("Type all arguments separated by space\n", (argumentsInput) => {
                arguments = argumentsInput.split(" ")
                rl.close();
                let chalkConfig = chalk[colour][bgColor]
                for(let argument of arguments){
                    chalkConfig = chalkConfig[argument]
                }
                console.log(chalkConfig(text))
            })
        })
    })
})