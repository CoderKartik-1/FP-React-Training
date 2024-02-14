export function saveFlightList(flightList) {
    return {
        type: "SAVE_FLIGHT",
        payload: flightList
    }
}

export function deleteAllFlights() {
    return {
        type: "DELETE_ALL_FLIGHTS"
    }
}

export function deleteFlights(flightId) {
    return {
        type: "DELETE_FLIGHTS",
        payload: flightId
    }
}