import { combineReducers } from "redux";

import employeeReducer from "./employeeReducer";
import flightReducer from "./flightReducer";
import hotelReducer from "./hotelReducer";

const rootReducer = combineReducers({
    employees: employeeReducer,
    flights: flightReducer,
    hotels: hotelReducer
})

export default rootReducer;

//common object in the store
var store = {
    employee: [], flight: [], hotel: []
}