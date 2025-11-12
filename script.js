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
        let inputText = document.getElementById("input-text").value
        document.getElementById("resultado").innerHTML = inputText[0].toUpperCase() + inputText.slice(1).toLowerCase()
    })

    document.getElementById("btnLimpar").addEventListener("click", function () {
        let inputText = document.getElementById("input-text").value
        document.getElementById("resultado").innerHTML = ''
        document.getElementById("input-text").value = ''
    })
}) 