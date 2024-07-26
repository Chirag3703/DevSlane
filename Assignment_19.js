function Primes() {
    let start = document.getElementById("Start").value;
    let end = document.getElementById("End").value;
    let ans = document.getElementById("result");
    ans.innerHTML = "";

    if (isNaN(start) || isNaN(end)) {
        ans.innerHTML = `Invalid Input- Enter Number`;
        return;
    }
    if (start < end) {
        ans.innerHTML = `End should be greater than start`;
    }
    start = +start;
    end = +end;
    ans.innerHTML = " ";

    for (let i = start; i <= end; i++) {
        let count = 0;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                count++;
                break;
            }
        }
        if (count == 0 && i!=1)
            ans.innerHTML += `<p>${i}</p>`;
    }
}