document.querySelector("button").addEventListener('click', function () { alert('button clicked') })

/////

document.querySelectorAll("button")[1].addEventListener('click', function () {
    document.querySelector("p").innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quod, deleniti aliquam.Nemo maiores velit aperiam facilis maxime.Error, a quis odio sit, natus maiores excepturi, cupiditate quia reprehenderit provident tenetur."
})


//////


document.querySelector("div").addEventListener("dblclick", function () {
    this.style.backgroundColor = "blue"
})

//////


document.querySelectorAll("div")[1].addEventListener("mouseenter", function () {
    document.querySelectorAll("div")[1].innerHTML = "mouse enter"
})
document.querySelectorAll("div")[1].addEventListener("mouseleave", function () {
    document.querySelectorAll("div")[1].innerHTML = "mouse left"
})


/////


document.querySelector("form").addEventListener('submit', function () {
    alert("Form not submitted")
})

/////


document.querySelector(".focus").addEventListener('focus', function () {
    this.style.border = "solid yellow"
})

/////


document.querySelector(".focus").addEventListener('blur', function () {
    this.style.border = "solid blue"
})

/////



document.addEventListener('keydown', function (e) {
    document.querySelector(".keydown").value += e.key
})

////


document.querySelector("#okok").addEventListener("click", function () {
    this.classList.toggle("appearance")
})


//////

let firstInput = document.querySelector('#input1').value
let secondInput = document.querySelector('#input2').value
document.querySelector
document.querySelector("#form2").addEventListener('submit', function () {
    alert('wrong input')
})

