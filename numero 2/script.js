function impares() {
    var resultado = document.getElementById("resultado");
    var html ='';
    for (var contador = 150; contador <= 300; contador++) {
        if (contador % 2 != 0) {
            html += contador + "; "
        }
    }
    resultado.innerHTML += html;
}
impares();