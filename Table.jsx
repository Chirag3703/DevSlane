import React, { useState } from "react";
import TableRow from "./TableRow";

function Table() {

    let [num, UpdateNum] = useState(2);

    function NextTable() {
        UpdateNum(num + 1);
    }

    return (
        <div className="m-2">
            <button onClick={NextTable} class="border px-4 py-1 rounded-full bg-blue-500
             text-white">
                Next</button>
            <TableRow number={num} index={1}></TableRow>
            <TableRow number={num} index={2}></TableRow>
            <TableRow number={num} index={3}></TableRow>
            <TableRow number={num} index={4}></TableRow>
        </div>
    )
}

export default Table