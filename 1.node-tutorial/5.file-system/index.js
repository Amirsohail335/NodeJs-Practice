const fs = require('fs')

const path = require("path")

const dataFolder = path.join(__dirname, "data")


if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("Data Folder Created")
}

const filePath = path.join(dataFolder, "example.txt")

fs.writeFileSync(filePath,"Hello from node js")

console.log("file created successfully")

const readContentFromFile = fs.readFileSync(filePath, "utf8")
console.log("File content:",readContentFromFile)