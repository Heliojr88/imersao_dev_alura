//Função 
function Enviar() {

    var nome = document.getElementById("nome");
    var b1 = parseFloat(document.getElementById("b1").value);
    var b2 = parseFloat(document.getElementById("b2").value);
    var b3 = parseFloat(document.getElementById("b3").value);
    var b4 = parseFloat(document.getElementById("b4").value);

    // Calculo de média
    var medFinal = (b1 + b2 + b3 + b4)/4;

// Fixando em duas casas decimais
    var medFinal = medFinal.toFixed(2)

 // Aprovado ou Reprovado
    if (medFinal >= 7) {
        alert("Seja Bem Vindo " + nome.value + " - Sua nota de média final = " + medFinal + " - FOI APROVADO");
        
    }
    else
        alert("Seja Bem Vindo " + nome.value + " - Sua nota de média final = " + medFinal + " - FOI REPROVADO" )

}

