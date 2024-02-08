// https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI
// https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC 

import { useEffect, useState } from "react";
import axios from "axios";
import StockData from "./StockDataComponent";

export default function StockDataComponent() {
    
    var [stockList, setStockList] = useState([]);
    var [stockName, setStockName] = useState("AHSFjsf");
    
    function addStockToArray() {
        setStockList([...stockList, stockName])
    }
    
    function clearStockList(){
        setStockList([]);
        setStockName("");
    }

    return (
        <div>
            <input type="text" value={stockName} onChange={(event) => setStockName(event.target.value)} />
            <input type="button" value="Add Stock" onClick={addStockToArray} />
            <input type ="button" value="Clear Stock" onClick={clearStockList} />

            {stockList.map(stockUrl => {
                return (
                    <StockData url={stockUrl}></StockData>
                )
            })}
        </div>
    )
}

