const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const btnCookie = document.querySelector('.btnCookie')
const btnReset = document.querySelector('.btnReset')
const phraseOpenedCookie = document.querySelector('.phraseOpenedCookie')
const phrasesList = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
]

btnCookie.addEventListener('click', showPhraseOpenedCookie)
btnReset.addEventListener('click', handleToggle)

function showPhraseOpenedCookie() {
  handleToggle()
  phraseOpenedCookie.innerText = phrasesList[Math.round(Math.random() * (phrasesList.length - 1))]
  console.log(phraseOpenedCookie.innerText)
}

function handleToggle() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}
