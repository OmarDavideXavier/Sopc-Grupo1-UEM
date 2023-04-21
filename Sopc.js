let correctas = [1, 3, 2, 4, 2, 1, 2, 4, 4, 1, 3, 1],
  respostaEscolhida = [],
  quantidade_Correctas = 0;
function resposta(a, b) {
  (respostaEscolhida[a] = b.value),
    (id = "p" + a),
    (labels = document.getElementById(id).childNodes),
    (labels[1].style.backgroundColor = "white"),
    (labels[5].style.backgroundColor = "white"),
    (labels[7].style.backgroundColor = "white"),
    (b.parentNode.style.backgroundColor = "cec0fc");
}
function validar() {
  for (quantidade_Correctas = 0, i = 0; i < correctas.length; i++)
    correctas[i] == respostaEscolhida[i] && quantidade_Correctas++;
  document.getElementById("resultado").innerHTML =
    quantidade_Correctas + " de 12.";
    document.getElementById("gabarito").innerHTML =" 1A 2C 3B 4D 5B 6A 7B 8D 9D 10A 11C 12A";
}
