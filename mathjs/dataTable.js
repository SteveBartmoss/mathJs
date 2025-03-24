import fs from 'fs'

export default class DataTable{

    headers=null
    information = []

    setHeaders(listHeaders){
        this.headers = listHeaders
    }

    readCsv(ruta){
        return new Promise((resolve,reject)=>{
            fs.readFile(ruta,'utf8',(err,data)=>{
                if(err){
                    console.log('Error reading the file:',err)
                    reject(err)
                    return
                }
                const rows = data.split('\n')
                // data.split('\n').map(row => row.trim()).filter(row => row.length > 0);
                resolve(rows)
            })
        })

    }

    buildTable(ruta){
        return new Promise((resolve,reject)=>{

            fs.readFile(ruta,'utf8',(err,data)=>{
                if(err){
                    console.log('Error reading the file:'.err)
                    reject(err)
                    return
                }

                let rows = data.split('\n').map(row => row.trim()).filter(row => row.length > 0)
                this.headers = rows[0].split(',')

                rows.shift()

                this.information = rows.map(row => {
                    let values = row.split(',')
                    let obj = {}

                    this.headers.forEach((header, index) => {
                        obj[header] = values[index]?.trim() || null
                    })

                    return obj
                })

                resolve(this.information)

            })
        })
    }

}