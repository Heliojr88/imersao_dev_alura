
  
  //declarando a função que através do clique de um botão adiciona um clube
  function adicionarClube() {
    var novoClube = document.getElementById("nomeClube").value;
    var novoEscudo = document.getElementById("escudoClube").value;
  
    if (
      novoClube != "" &&
      isNaN(parseInt(novoClube)) &&
      (novoEscudo.endsWith(".png") ||
        novoEscudo.endsWith(".jpg") ||
        novoEscudo.endsWith(".gif"))
    ) {
      clubes.push({
        Escudo: novoEscudo,
        nome: novoClube,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
      });
      document.getElementById("nomeClube").value = "";
      document.getElementById("escudoClube").value = "";
    } else {
      alert(
        "Inválido. insira um Texto no campo <Nome do Clube> e/ou um endereço de imagem com final <.jpg>, <.png> ou <.gif>"
      );
      document.getElementById("nomeClube").value = "";
      document.getElementById("escudoClube").value = "";
    }
    exibirClubesTela(clubes);
  }
  
  var grêmio = {
    Escudo: "https://www.escudosfc.com.br/images/gremio.png",
    nome: "Grêmio",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
  };
  var palmeiras = {
    Escudo: "https://www.escudosfc.com.br/images/palmeiras.png",
    nome: "Palmeiras",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
  };
  var chapecoense = {
    Escudo: "https://www.escudosfc.com.br/images/chapeco.png",
    nome: "Chapecoense",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
  };
  
  function calcularPontos(clube) {
    var pontos = clube.vitorias * 3 + clube.empates * 1 - clube.derrotas - 1;
    return pontos;
  }
  
  grêmio.pontos = calcularPontos(grêmio);
  palmeiras.pontos = calcularPontos(palmeiras);
  chapecoense.pontos = calcularPontos(chapecoense);
  
  var clubes = [grêmio, palmeiras, chapecoense];
  
  function exibirClubesTela(clubes) {
    var elemento = "";
    for (var i = 0; i < clubes.length; i++) {
      elemento += "<tr><td>" + `<img src="${clubes[i].Escudo}">` + "</td>";
      elemento += "<td>" + clubes[i].nome + "</td>";
      elemento += "<td>" + clubes[i].vitorias + "</td>";
      elemento += "<td>" + clubes[i].empates + "</td>";
      elemento += "<td>" + clubes[i].derrotas + "</td>";
      elemento += "<td>" + clubes[i].pontos + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"; //botão vitória
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"; //botão empate
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"; //botão derrota
      elemento += "</tr>";
    }
  
    var tabelaClubes = document.getElementById("tabelaClubes");
    tabelaClubes.innerHTML = elemento;
  }
  
  exibirClubesTela(clubes);
  
  //declarando as funções que através do clique de um botão add pontos
  function adicionarVitoria(i) {
    var clube = clubes[i];
    clube.vitorias++;
    clube.pontos = calcularPontos(clube);
    exibirClubesTela(clubes);
  }
  
  function adicionarEmpate(i) {
    var clube = clubes[i];
    clube.empates++;
    clube.pontos = calcularPontos(clube);
    exibirClubesTela(clubes);
  }
  
  function adicionarDerrota(i) {
    var clube = clubes[i];
    clube.derrotas++;
    clube.pontos = calcularPontos(clube);
    exibirClubesTela(clubes);
  }
  
  //declarando a função que através do clique de um botão zera o placar de todos os clubes
  function limparPlacar(i) {
    for (var i = 0; i < clubes.length; i++) {
      clubes[i].vitorias = 0;
      clubes[i].empates = 0;
      clubes[i].derrotas = 0;
      clubes[i].pontos = 0;
      exibirClubesTela(clubes);
    }
  }