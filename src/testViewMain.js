import {TestView} from "./testView/TestView.js";
import {API} from "./API.js";


const api = new API();
const testView = new TestView();

testView.renderTest(api.getTest(1));
