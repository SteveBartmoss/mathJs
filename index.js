import DataTable from "./mathjs/dataTable.js"

const tabla = new DataTable()

/*
tabla.readCsv('./customers-100.csv')
    .then((rows)=>{
        //console.log(rows)
        console.log(rows[0])
    })
    .catch((err)=>{
        console.log(err)
    })
*/

await tabla.buildTable('./iris.csv')

await console.log(tabla.information)