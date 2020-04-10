import React from "react";


const DataCard = (item) => {
console.log("these are props for DataCard", item)

return (
    <div className="dataCard">
        <h3>{item.item.name}</h3>
        <p>{item.item.country}</p>
        <p>Searches: {item.item.searches}</p>
    </div>
);

}

export default DataCard;