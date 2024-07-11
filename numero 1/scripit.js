function maiorEmenor() {
    var maior = 0;
    var menor = 0;
    for (var i = 1; i <= 20; i++) {
        var numero = parseInt(prompt("digite um numero"));
        if (numero > maior) {
            maior = numero;
        }
        else if (numero < menor) {
            menor = numero;
        }
    }
    alert("O maior é: " + maior + "\n" + "O menor é: " + menor);
}