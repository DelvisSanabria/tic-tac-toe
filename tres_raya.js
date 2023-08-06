
let posicionesGanar = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
]
let boton = document.querySelectorAll(".option");
let primerTurno = true;
let contador = 0;
let winPage = document.getElementById("winScreen");
let Restartbtn = document.getElementById("Restart_game");
let Restartbtn2 = document.getElementById("New_game2");
let msg = document.getElementById("message");
let notification = document.getElementById("notificaciones");

const disablebtn = () => {
  boton.forEach((element) => (element.disabled = true))
  winPage.classList.remove("hidden")
}

const RestartGame = () => {
  boton.forEach(element => {
    element.innerText = "";
    element.disabled = false
  })
}

const newGame = () => {
  window.location.reload()
}

Restartbtn.addEventListener("click", ()=>{
  contador = 0
  RestartGame();
})

Restartbtn2.addEventListener("click", ()=>{
  contador = 0
  newGame();
})

const toWinFunction = (letter) =>{
  disablebtn();
  if(letter == "X"){
    msg.innerText ="¡Felicidades 'X' has Ganao' maquina!"
  } else{
    msg.innerText ="¡Felicidades 'O' has Ganao' maquina!"
  }
}

const paraGanar = () => {
  for(let i of posicionesGanar){
    let [element1, element2, element3] = [boton[i[0]].innerText, boton[i[1]].innerText, boton[i[2]].innerText];
    if(element1 != "" && (element2 != "") && (element3 != "")){
      if(element1 == element2 && element2 == element3){
        toWinFunction(element1);
      }
    }
  }
}

boton.forEach((element) => {
  element.addEventListener("click", ()=> {
    if(contador < 9){
      if(primerTurno){
        notification.innerText = "Turno Jugador 2";
        primerTurno = false;
        element.innerText = "X";
        element.disabled = true;
        contador++;
      } else {
        notification.innerText = "Turno Jugador 1";
        primerTurno = true;
        element.innerText = "O";
        element.disabled = true;
        contador++;
      }
      paraGanar();
    } else if(contador == 9){
      primerTurno = false;
    }
  })
})
