var request = new XMLHttpRequest();

 obtener = ()=>{
    usuario = document.querySelector('#user').value;
    pass = document.querySelector('#pass').value;
    var params = {
        user : usuario ,
        pass : pass
      }
      request.open('POST', 'http://localhost:8080/login');
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      request.onload = function() {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
         
            data.forEach(element => {
                console.log(element)
                if(Number(element.login) === 1){
                    document.cookie = "log="+usuario+"&"+pass;
                    location.href="http://localhost/clinica/buscador.html";
                }else{
                    alert('error de usuario');
                    location.href="http://localhost/clinica";
                }
            });
        } else {
          console.log('error')
        }
      }
    
    request.send(JSON.stringify(params))
}



