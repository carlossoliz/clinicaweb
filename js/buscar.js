
if (leerCookie('log').length > 0) {
var request = new XMLHttpRequest()
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const webservice =() =>{
    
    const texto =   formulario.value.toUpperCase();
   if (texto.trim().length > 4) {
    request.open('POST', 'http://localhost:8080/asegurados', true);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        
    request.onload = function() {
        var data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                resultado.innerHTML = '';
                data.forEach(usuario => {
                    resultado.innerHTML += `<tr>
                    <td class="column1">${usuario["CARNET ID"]}</td>
                    <td class="column2">${usuario.AP_PATERNO}</td>
                    <td class="column3">${usuario.AP_MATERNO}</td>
                    <td class="column4">${usuario.NOMBRES}</td>
                    <td class="column5">${String(usuario.FECHA_NAC).split("T")[0]}</td>
                    <td class="column6">${usuario["CAJA "]}</td>
                    </tr>`
                })
            } else {
                    console.log('error')
                }
            }
            
        request.send(JSON.stringify({dato : texto , user : leerCookie('log').split('&')[0],pass : leerCookie('log').split('&')[1]}))
   }else{
       alert('datos no validos')
   }
 }



     boton.addEventListener('click',webservice);
} else {
    alert('ocurrio un error');
    location.href="http://localhost/clinica/";
}


function leerCookie(nombre) {
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if (busca > -1) {micookie=lista[i]}
        }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual+1);
    return valor;
}
