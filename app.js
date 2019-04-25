// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to update each cell's text with
// ufo data

  function createTable (pleasework){
    pleasework.forEach(function(ufoGet) {
    //console.log(ufoGet);
    var row = tbody.append("tr");
    Object.entries(ufoGet).forEach(function([key, value]) {
     
      //console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

createTable(tableData);
  
  //Get the filter running 
  // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  d3.event.preventDefault();
  
  myDeleteFunction();
  

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime").node().value;

  // Get the value property of the input element
  //var inputValue = inputElement.property("value");
  console.log(inputElement);
  console.log(data);

  //filter to get the datetime to match
  var filteredData = tableData.filter(ans => ans.datetime === inputElement);

  //add the filtered data to the html table 
  console.log(filteredData); 

  filteredTable(filteredData);
});

//delete the table we have now 
function myDeleteFunction(){
  var table = document.getElementById("ufo-table");
  for (var i = table.rows.length-1; i>0; i--){
    table.deleteRow(i);
    console.log(i);
  }
};

//filter function
function filteredTable (theta){
  theta.forEach(function(x) {
    //console.log(ufoGet);
    var row = tbody.append("tr");
    Object.entries(x).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      var cell = tbody.append("td");
      cell.text(value);
    });
  }); 
};