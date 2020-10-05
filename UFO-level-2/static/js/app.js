// from data.js
let tableData = data;
console.log(tableData);


//get reference to the table body
var tbody = d3.select("tbody");

//loop through data and get each column's value
tableData.forEach(function(sighting){
    console.log (sighting)
    let row= tbody.append("tr")
    //unpack data
    Object.entries(sighting).forEach(function([key,value]){
        console.log(value)
        let cell = row.append("td")
        cell.text(value)
    })
})

//listener

let button = d3.select ("#filter-btn")
button.on("click", function(){
    tbody.html("");
})
