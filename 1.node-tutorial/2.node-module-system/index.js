const firstmodule = require("./first-module")

console.log(firstmodule.add(4,6))


try {
    console.log("trying to divide by zero");
    let result = firstmodule.divide(0, 0);
    console.log(result, "result");
  } catch (error) {
    console.log("Caught an error", error.message);
  }