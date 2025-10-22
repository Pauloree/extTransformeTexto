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
}) 