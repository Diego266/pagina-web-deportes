// MODAL

$(document).ready(function() {
    $('.modal').modal();
});

// DATA TABLE 
$(document).ready(function() {
    $('#table_id').DataTable();
});

fetch(

    "https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }
).then(response => response.json()).then(json => {
    let element = document.getElementById('tableData')
    element.innerHTML = ''
    for (let valor of json) {
        element.innerHTML =
            `<tr>
            <td>${valor.athlete}</td>
            <td>${valor.age}</td>
            <td>${valor.country}</td>
            <td>${valor.year}</td>
            <td>${valor.date}</td>
            <td>${valor.sport}</td>
            <td>${valor.gold}</td>
            <td>${valor.silver}</td>
            <td>${valor.bronze}</td>
            <td>${valor.total}</td>
        </tr>`
    }
    console.log(json)
}).catch(error => console.log(error))