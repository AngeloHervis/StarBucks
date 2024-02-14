let imagemCopo1 = document.querySelector(".copoGrande1")
let verde = document.querySelector(".verde")
let amarelo = document.querySelector(".amarelo")
let rosa = document.querySelector(".rosa")
let circulo = document.querySelector(".circulo")

verde.addEventListener("click", () => {
    imagemCopo1.src = "./img/img1.png"
    circulo.style.background = "#017143"
})
amarelo.addEventListener("click", () => {
    imagemCopo1.src = "./img/img2.png"
    circulo.style.background = "#eb7495"
})
rosa.addEventListener("click", () => {
    imagemCopo1.src = "./img/img3.png"
    circulo.style.background = "#d752b1"
})
