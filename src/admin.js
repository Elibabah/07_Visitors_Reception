console.log("Estoy conectado")
const btnLogIn = document.getElementById('btn-login')
const btnComeBack = document.getElementById('btn-comeBack')

btnLogIn.addEventListener('click', () => {
  window.location.href = "./dashBoard.html"
})
btnComeBack.addEventListener('click', () => {
  window.location.href = "./index.html"
})