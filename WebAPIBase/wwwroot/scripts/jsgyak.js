window.onload = () => {
    console.log("betöltődött")
    for (var sorika = 0; sorika < 10; sorika++) {
        var ujDiv = document.createElement("div");
        ujDiv.classList.add("sor");

        var pascalDiv = document.getElementById("pascal");
        pascalDiv.appendChild(ujDiv);

        for (var oszlop = 0; oszlop <= sorika; oszlop++) {
            var ujElemDiv = document.createElement("div");
            ujElemDiv.classList.add("elem");
            ujElemDiv.innerText = faktoriális(sorika) / (faktoriális(oszlop) * faktoriális(sorika-oszlop));
            ujDiv.appendChild(ujElemDiv);
        }
    }
    
}


var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}