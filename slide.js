document.addEventListener("DOMContentLoaded", puzzles);

function puzzles() {
  document.getElementById('puzzle puzzle-box').addEventListener("click", clicks);
}

function clicks(event) {
  let celda_puzzle = event.target;
  let celda_id = celda_puzzle.id;
  seleccionada(Number(celda_id[1]), Number(celda_id[2]));
}

function cambioC(celda1,celda2) {
    var temp = document.getElementById(celda1).className;
    document.getElementById(celda1).className = document.getElementById(celda2).className;
    document.getElementById(celda2).className = temp;
}

function seleccionada(fila,columna) {
  var celda = document.getElementById("c"+fila+columna);
  var caja_puzzle = celda.className;
    if (columna<3) {
        if ( document.getElementById("c"+fila+(columna+1)).className=="fig-9") {
            cambioC("c"+fila+columna, "c"+fila+(columna+1));
            return;
      }
    }

    if (columna>1) {
        if ( document.getElementById("c"+fila+(columna-1)).className=="fig-9") {
            cambioC("c"+fila+columna,"c"+fila+(columna-1));
            return;
      }
    }

    if (fila>1) {
        if ( document.getElementById("c"+(fila-1)+columna).className=="fig-9") {
            cambioC("c"+fila+columna,"c"+(fila-1)+columna);
            return;
      }
    }

    if (fila<3) {
        if ( document.getElementById("c"+(fila+1)+columna).className=="fig-9") {
            cambioC("c"+fila+columna,"c"+(fila+1)+columna);
            return;
      }
    }
  
}

function revolver() {

  for (var fila=1;fila<=3;fila++) {
    for (var columna=1;columna<=3;columna++) {

      var fila2=Math.floor(Math.random()*3 + 1);
      var columna2=Math.floor(Math.random()*3 + 1);

      cambioC("c"+fila+columna,"c"+fila2+columna2);
    }
  }
}