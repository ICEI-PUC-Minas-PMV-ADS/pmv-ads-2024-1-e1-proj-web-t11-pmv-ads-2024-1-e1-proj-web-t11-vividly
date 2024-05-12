
function enviar() {
    var dataEscolhidaTexto = document.getElementById("calender");
    var dataPreechida = dataEscolhidaTexto. value != "";
   
    var dataEscolhida = new Date(dataEscolhidaTexto.value);
    var hoje = new Date();
    var maiorQueHoje = dataEscolhida > hoje;

    var fazBem = document.getElementById("good").value;
    var fazMal = document.getElementById("bad").value;
    var aprendeu = document.getElementById("learn").value;
    var dia = document.getElementById("day").value;
    if(fazBem != "" && fazMal !="" && aprendeu != "" && dia !="" && maiorQueHoje == false && dataPreechida == true){
        document.getElementById("validacao").textContent = "";
        alert("enviado") ;
        return true;

    }
    else{
        return false;
    }
    
}

function dataEscolhida(){
    var dataEscolhidaTexto = document.getElementById("calender");
    var dataPreechida = dataEscolhidaTexto. value != "";
    var dataEscolhida = new Date(dataEscolhidaTexto.value);
    var hoje = new Date();
    var maiorQueHoje = dataEscolhida > hoje;
   
    if (dataPreechida == false || maiorQueHoje == true) {
        document.getElementById("validacao").textContent = "Data inválida.";
    }
    else{
        document.getElementById("validacao").textContent = "";
    }

    if (dataPreechida == true && maiorQueHoje == false){
        document.getElementById("validacao").textContent = ""

    
}
}
