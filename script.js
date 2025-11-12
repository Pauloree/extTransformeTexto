/* Programa para manipular o DOM */


window.document.addEventListener( "DOMContentLoaded", function () {
    document.getElementById("btnMaiuscula").addEventListener("click", function () {
        let inputText = document.getElementById("input-text").value
        document.getElementById("resultado").innerHTML = inputText.toUpperCase()
    })

    document.getElementById("btnMinuscula").addEventListener("click", function () {
        let inputText = document.getElementById("input-text").value
        document.getElementById("resultado").innerHTML = inputText.toLowerCase()
    })

    document.getElementById("btnPrimeira").addEventListener("click", function () {
        let inputText = document.getElementById("input-text").value;

        let lowerText = inputText.toLowerCase();

        let resultText = lowerText.replace(/(^|\. *)([a-z])/g, function(match, p1, p2) {
        return p1 + p2.toUpperCase();
        });

        document.getElementById("resultado").innerHTML = resultText;
    })

    document.getElementById("btnLimpar").addEventListener("click", function () {
        let inputText = document.getElementById("input-text").value
        document.getElementById("resultado").innerHTML = ''
        document.getElementById("input-text").value = ''
    })

    document.getElementById("btnCont").addEventListener("click", function () {
        let inputText = document.getElementById("input-text").value
        document.getElementById("resultado").innerHTML = `O texto possui ${inputText.length} caracteres.`
    })
}) 