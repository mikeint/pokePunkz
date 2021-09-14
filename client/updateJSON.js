const fs = require("fs")

let file = fs.readFileSync("./src/layout/files/masterJSON.json")

JSON.parse(file).forEach((data, i) => {
        fs.writeFileSync("./metadata/"+(i+1), JSON.stringify(data))
    }
)
