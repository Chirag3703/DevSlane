import React, { useState } from "react";
import TableRow from "./TableRow";

function Table() {

    let [num, UpdateNum] = useState(2);
    let [upto, UpdateUpto] = useState(10);

    function NextTable() {
        UpdateNum(num + 1);
    }

    function HandleNumChange(event){
        const newNum= +event.target.value;
        UpdateNum(newNum);
    }

    function HandleUptoChange(event) {
        const newUpto = event.target.value;
        UpdateUpto(newUpto);
    }
    return (
        <div className="m-2">
            {num>20 ? <div className="border-2 border-green-400 p-5 mb-2 rounded-md bg-sky-400">
                Nice Job! {num} tak pahuch gaye</div>:
            <div className="border-2 border-green-400 p-5 mb-2 rounded-md bg-sky-400">
                Mehnat krlo bhai! bas {num} tak hi pahuche ho</div>}
            <div className="flex gap-2 mb-2">
            <input type="number" placeholder="Start" onChange={HandleNumChange} 
                className="border-2 border-black text-center w-20 rounded-md bg-slate-100" 
                value={num}/>
            <input type="number" placeholder="Upto" onChange={HandleUptoChange} 
                className="border-2 border-black text-center w-20 rounded-md bg-slate-100" 
                value={upto}/>
            </div>
            <button onClick={NextTable} class="border px-4 py-1 rounded-md bg-red-500
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