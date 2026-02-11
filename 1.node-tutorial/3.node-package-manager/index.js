

const lodash = require("lodash")

const name = ["amir", "sohail", "sajid"]

const capitalize = lodash.map(name, lodash.capitalize)


console.log(capitalize)