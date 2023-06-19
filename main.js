// Variaveis da aplicação
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', resetScreenWithEnter)

// funções ou métodos *callback*
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão, é o que diz a função
  
  const inputNumber = document.querySelector("#inputNumber")
  
  // Validações da aplicação
  if (inputNumber.value == "") {
    alert('ERROR!\nDigite um número entre 1 e 10')
    return;
  } 
  else if (Number(inputNumber.value) <= 0) {
    alert('ERROR!\nDigite um número entre 1 e 10')
    return;
  } 
  else if (Number(inputNumber.value) > 10) {
    alert('ERROR!\nDigite um número entre 1 e 10')
    return;
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    document.querySelector(".screenTwo h2").innerText = `Você acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""

  xAttempts++
  
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

function resetScreenWithEnter(e) {
  if (e.key == 'Enter' && screenOne.classList.contains('hide')) {
    handleResetClick()
  }

}
