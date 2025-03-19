import file from 'fs'

export default class DataTable{

    headers=null
    information = null

    setHeaders(listHeaders){
        this.headers = listHeaders
    }

    readCsv(ruta){
        return new Promise((resolve,reject)=>{
            file.readFile(ruta,'utf8',(err,data)=>{
                if(err){
                    console.log('Error reading the file:',err)
                    return
                }
                const rows = data.split('\n')
                resolve(rows)
            })
        })

    }

    buildTable(ruta){
        return new Promise((resolve,reject)=>{
            file.readFile(ruta,'utf8',(err,data)=>{
                if(err){
                    console.log('Error reading the file:'.err)
                }
                const rows = data.split('\n')
                this.headers = rows[0].split(',')
            })
        })
    }


}