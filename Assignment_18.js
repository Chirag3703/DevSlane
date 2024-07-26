
function Tables() {
    let Start = document.getElementById("Start").value;
    let End = document.getElementById("End").value;
    let From = document.getElementById("From").value;
    let Upto = document.getElementById("Upto").value;

    const tables = document.getElementById("result");
    let table = "";
    tables.innerHTML = "";
    if (isNaN(Start) || isNaN(End) || isNaN(From) || isNaN(Upto)) {
        tables.innerHTML = "Invalid Input: Enter numbers";
        return;
    }
    Start = +Start;
    End = +End;
    From = +From;
    Upto = +Upto;
    if (Start > End) {
        tables.innerHTML = "Start can not be greater than end";
        return;
    }
    if (From > Upto) {
        tables.innerHTML = "From should be less than upto"
        return;
    }

    for (let num = Start; num <= End; num++) {
        table = `<div class="bg-green-200"><h3 class="p-2 bg-indigo-400 text-2xl py-1">Table of ${num}</h3>`;
        for (let i = From; i <= Upto; i++) {
            table += `<p>${num} x ${i} = ${num * i}</p>`;
        }
        table += `<h3 class="p-2 bg-red-400 text-2xl py-1">End of Table of ${num}</h3></div>`;
        tables.innerHTML += table;
    }
}