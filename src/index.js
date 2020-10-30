import { API } from './API.js'
import { Test } from './Model/Test.js'


const api = new API()

// api.addTest(new Test())
console.log(api.getTest(1))
