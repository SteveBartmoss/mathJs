class Calulator{


    plusMatrix(matrix1,matrix2){
        const rows1 = matrix1.length
        const columns1 = matrix1[0].length

        const rows2 = matrix2.length
        const columns2 = matrix2[0].length

        if(rows1 !== rows2 || columns1 !== columns2){
            throw new Error("Matrices have different dimensions")
        }

        let result = new Array(rows1).fill(0).map(()=> new Array(columns1).fill(0))

        for(let iteX = 0; iteX<=rows1; iteX++){
            for(let iteY = 0; iteY<=columns1; iteY++){
                result[iteX][iteY] = matrix1[iteX][iteY] + matrix2[iteX][iteY]
            }
        }

        return result
    }

    mutiplyMatrix(matrix1,matrix2){
        const rows1 = matrix1.length
        const columns1 = matrix1[0].length
        const rows2 = matrix2.length
        const columns2 = matrix2[0].length

        if(columns1 !== rows2){
            throw new Error("Matrices have different dimensions")
        }

        let result = new Array(rows1).fill(0).map(()=> new Array(columns2).fill(0))
        

        for(let iteX=0;iteX<rows1;iteX ++){
            for(let iteY=0;iteY<columns2;iteY++){

                let plusHelper = 0

                for(let aux=0; aux<columns1;aux++){
                    plusHelper+= matrix1[iteX][k] * matrix2[k][iteY]
                }

                result[iteX][iteY]=plusHelper
                
            }
        }
        
        return result
    }

}