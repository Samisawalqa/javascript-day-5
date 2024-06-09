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

let firstInput = document.querySelector('#input1')
let secondInput = document.querySelector('#input2')
document.querySelector("#form2").addEventListener('submit', function () {
    if (firstInput.value != secondInput.value) {
        alert('wrong input')
    }
})

/////

document.querySelector('img').addEventListener('click', function () {
    this.setAttribute('src', 'https://cdn.theatlantic.com/thumbor/d8lh_KAZuOgBYslMOP4T0iu9Fks=/0x62:2000x1187/1600x900/media/img/mt/2018/03/AP_325360162607/original.jpg')
})

////

document.querySelector(".check").addEventListener('click', function () {
    let info = document.querySelector(".pass").attributes.getNamedItem('type').value
    if (info == 'password') {
        document.querySelector(".pass").setAttribute('type', 'text')
    } else {
        document.querySelector(".pass").setAttribute('type', 'password')
    }
})



////

let newColor = document.querySelector(".newbg")
document.querySelector(".changeBG").addEventListener('click', function () {
    document.querySelector(".divBG").style.backgroundColor = newColor.value;
})