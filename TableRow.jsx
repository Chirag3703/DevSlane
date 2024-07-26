import React from "react";

function TableRow({number, index}){
    return(
        <div className="text-indigo-500 text-xl">
            {number} x {index} = {number*index}
        </div>
    )
}

export default TableRow