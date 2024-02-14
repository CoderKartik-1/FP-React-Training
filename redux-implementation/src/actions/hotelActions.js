export function saveHotelList(hotelList) {
    return {
        type: "SAVE_HOTELS",
        payload: hotelList
    }
}

export function deleteAllHotels() {
    return {
        type: "DELETE_ALL_HOTELS"
    }
}

export function deleteHotels(hotelId) {
    return {
        type: "DELETE_HOTELS",
        payload: hotelId
    }
}