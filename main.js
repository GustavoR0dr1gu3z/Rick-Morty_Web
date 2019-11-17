//Constant
const URL =  "https://rickandmortyapi.com/api/character/" 
const URLL = "https://rickandmortyapi.com/api/character/?page=2"
let height = 0
let arr =[]

//Selectors
let ignition = document.querySelector('#ignition')
let container = document.querySelector('.container')

//Functions
function getData(){ //Funcion para traer los datos
    fetch(URL) //Fetch ahora sabe de donde pedir la data
        .then(result => { //Una vez terminado fetch, le dare el resultado, y llega a la funcion
            return result.json() //Cuando hago un return y result.json toma mucho tiempo, es una promesa; por tanto retorna una promesa
        })
        .then(data => {
            //console.log(data)

            for (let datos of data.results){ //A la variable datos se le van a agregar todos los datos de results
                arr.push(datos)
            }

            //Ciclo 
           /* for(let per of data.results){ //Declarar variable per, que viene desde data.results (results es un array)            
                displayData(per.name,per.image) //Accede al nombre y a la imagen
            }*/            
            return fetch(URLL)
        })
        .then(result => result.json())
        .then(data => { /*Como en el .then anterior regresó fetch(URL), se cargaran nuevamente los datos, pero de la otra URL*/
            for(let datoss of data.results){
                arr.push(datoss)
            }

            for(let per of arr){ //En la variable per, colocar todos los datos de arr -> per
            displayData(per.name,per.image) //Accede al nombre y a la imagen y los coloca en el método
        }
    })                                          
}

function displayData(name, image){ //Dibujarla en HTML
//1.- Vamos a crear un nodo nuevo
let div = document.createElement('div')
div.className = "character"
div.innerHTML = `<img src="${image}"/> <p>${name}</p>` //Las comillas raras (backtics: Permite mezclar strings con variables sin usar el +) y el ${} saca el contenido y lo coloca se llama interpolacion

//2.- Vamos a manipular al padre
//3.- Vamos a insertar al nodo en el padre
container.appendChild(div) 
div.addEventListener('click', e=>{  
    height = height + 454
    
    if(height>18155) height = 0
    container.style.transition = `all .8s cubic-bezier(0,-0.69,.99,-0.23)`
    container.style.transform = `translateY(-${height}px)`
    console.log(height)
} )
}

//Listener
ignition.addEventListener('click', getData)
getData()



