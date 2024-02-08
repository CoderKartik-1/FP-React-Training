import { useEffect, useState } from "react";
import axios from "axios";

export default function StockData(props) {
    var [stockDetails, setStockDetails] = useState(0);
    var [stockColor, setStockColor] = useState("");
    
    useEffect(() => {
        setInterval(() => {
            axios.get(props.url).then((response) => {
                setStockDetails((oldPrice) => {
                    setStockColor(oldPrice.pricecurrent > response.data.data.pricecurrent ? "red" : "green");
                    return response.data.data
                });
            })
        }, 2000);
    }, []);
    
    return (
        <div style={{ border: "1px solid red", height: "150px", margin: "10px", padding: "10px" }}>
            <h1 style={{color: stockColor}}>Stock Price for { stockDetails.company } is { stockDetails.pricecurrent }</h1>
            <h2>Previous Stock Price for {stockDetails.company} is { stockDetails.priceprevclose }</h2>
        </div>
    )
}