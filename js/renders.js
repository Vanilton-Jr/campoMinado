function renderCampo() {
  for (let i = 1; i <= 25; i++) {
    const area = document.createElement("div")
    area.classList.add("area")
    area.setAttribute('id', `area${i}`)
    area.setAttribute('onclick', `revelarNum(${i})`)
    area.setAttribute('oncontextmenu', `bandeira(${i})`)


    if (i % 2 == 0) {
      area.style.backgroundColor = 'rgb(0, 191, 73)'
    }
    else if (i % 2 != 0) {
      area.style.backgroundColor = 'rgb(3, 121, 48)'
    }
    area.addEventListener('contextmenu', (ev) => {
      ev.preventDefault(); // this will prevent browser default behavior 
    });
    document.getElementById("campo-container").appendChild(area)
  }
}

renderCampo()

var cont = 0;

function renderMinas() {
  var num = []
  if (cont == 1) {
    for (let i = 0; i <= 5; i++) {
      var n = Math.floor(Math.random() * 25) + 1;
      var area = document.querySelector(`#area${n}`)

      //   esconder minas
      area.removeAttribute('onclick', `revelarNum(${i})`)
      area.setAttribute('onclick', 'fimDeJogo()')

      area.classList.add("minado")
    }
  }

}
renderMinas()

renderMinas()  