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
    tbody.html("")
    //from html input class - activiy 9, par form filter
    // this comes from the html input class id, inputElement
    let inputElement = d3.select("#datetime")
    let inputValue = inputElement.property("value")  
    console.log(inputValue);
//repeat previous loop for filter data 
    let filteredData = tableData.filter(aliens =>  aliens.datetime === inputValue ||
    aliens.city=== inputValue ||
    aliens.state === inputValue ||
    aliens.country === inputValue ||
    aliens.shape === inputValue ||
    aliens.comments=== inputElement);

    filteredData.forEach(function(choice){
        let row = tbody.append("tr");
        Object.entries(choice).forEach(function([key,value]){
            let cell = row.append("td");
            cell.text(value);
        });
    });
 
});


