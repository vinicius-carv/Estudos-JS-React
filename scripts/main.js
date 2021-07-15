//by:Vinícius Carvalho
function Login(){
    var login=document.getElementById("user").Value;
    var password=document.getElementById("password").Value;
    if (login=="admin" && password=="123"){
        window.location="home.html";
        return false;
    }else{
        alert("Dados incorretos")
    }
}