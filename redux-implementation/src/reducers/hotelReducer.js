export default function hotelReducer(hotelStore = [], action) {
    if (action.type == "DELETE_ALL_HOTEL") {
        return []
    }
    
    if (action.type == "SAVE_HOTEL") {
        return action.payload
    }
    
    if (action.type == "DELETE_HOTEL") {
        var newArray = hotelStore.filter((hotel) => {
            return hotel.id != action.payload
        })
        
        return newArray;
    }
    
    return hotelStore;
}