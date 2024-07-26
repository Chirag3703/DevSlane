function Converter() {
    const num = document.getElementById("Distance").value;
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    const inMM = {
        Killometer: 1000000,
        Meter: 1000,
        Centimeter: 10,
        Millimeter: 1
    }
    const newValue = num * (inMM[fromUnit] / inMM[toUnit]);

    console.log(toUnit, fromUnit, newValue, num);

    document.getElementById("result").innerHTML = `<p class="text-3xl text-green-500 my-6 ">${num} ${fromUnit} is ${newValue} ${toUnit}</p>`
}