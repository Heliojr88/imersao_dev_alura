function ConverterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5.24;
    var elementoValorConvertido = document.getElementById("valorConvertidoDolar");
    var valorConvertidoDolar = "O Valor é U$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertidoDolar;
}

function ConverterEuro(){
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    var valorEmReal = valorEmDolarNumerico * 5.19
    var elementoValorConvertido = document.getElementById("valorConvertidoEuro")
    var valorConvertidoEuro = "O Valor é U$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertidoEuro
}

function ConverterOuro(){
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    var valorEmReal = valorEmDolarNumerico * 285.83
    var elementoValorConvertido = document.getElementById("valorConvertidoOuro")
    var valorConvertidoOuro = "O Valor é U$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertidoOuro
}

function ConverterBitcoin(){
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)

    // var valorElementoBitcoin = document.getElementById("valorBitcoin");
    // var valorBitcoin = valorElementoBitcoin.value;
    // var valorEmBitcoinNumerico = parseFloat(valorBitcoin);

    var valorEmReal = valorEmDolarNumerico * 100961.53

    var elementoValorConvertido = document.getElementById("valorConvertidoBitcoin")
    var valorConvertidoBitcoin = "O Valor é U$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertidoBitcoin
}