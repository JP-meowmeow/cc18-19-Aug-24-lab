// import { sayGoodbye as farewell, whatup } from "./goodbye.js"
import * as say from "./goodbye.js"

import saywe from "./module2.js"

function sayHi(){
    console.log(`Hello modules`)
}

say.whatup()
say.sayGoodbye()
saywe()
console.log(say)