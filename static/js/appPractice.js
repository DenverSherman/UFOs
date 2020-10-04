// import data from data.js
const tableData = data;

// Reference the HTML table using d3
let tbody = d3.select("tbody");

// buildTable function defined
function buildTable(data) {
    //clear html table
    tbody.html("");
 
    // loop through each object in the data
    data.forEach((dataRow) => {
        //adds row to table
        let row = tbody.append("tr");
        //add each row value to a new cell as text    
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });// closing Object.values(dataRow)
    }); //closing data.forEach(dataRow)
} //closing buildTable
buildTable(tableData);

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
