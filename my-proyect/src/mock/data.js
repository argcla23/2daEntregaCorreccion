const list =[
    { img: "../public/img/kit liquidos.webp" , categoria: "limpieza" , stock: 5,  id: '01', name : "liquidos de limpieza", precio: 10000, descripcion : "Este kit incluye, shampoo, revividor de plastico, caucho, silicona con fragancia a eleccion" },
    { img: "../public/img/toxic.webp", categoria: "limpieza", stock: 5,  id: '02', name : "productos toxic", precio: 20000, descripcion : "Este kit incluye shampoo, humectante y protector de plasticos, caucho y un descontaminador"},
    { img: "../public/img/kit paños micro.webp" , categoria: "limpieza" ,stock: 10,  id: '03', name : "kit Paños", precio: 10000, descripcion: "Este kit incluye 5 paños de microfibra, esponja, cepillo de microfibra, y un pad aplicador"},
    { img: "../public/img/kit cepillos.webp" , categoria: "limpieza" , stock: 5,  id: '04', name : "kit Cepillos", precio : 20000, descripcion: "Este kit incluye un set de cepillos de mano, cepillo alfombra maquina, cepillo grande ext. maquina, pad y cepillos chicos" },
    { img:"../public/img/llaves.jpg" , categoria: "mantenimiento" ,  stock: 5,  id: '05' , name:"llaves combinadas", precio : 15000, descripcion: "juego de llaves milimetricas"}
    
]

export const getProduct = () => {
    return new Promise ((resolve, reject)=>{
            let error = false
            setTimeout(()=>{
                if (error){ reject ( 'no data' )}
                else{
                    resolve(list)
                }
            
            }, 2000)
            
            
        })
}

export const getItem =(id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
}