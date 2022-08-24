var tope = 10;
var cont = 0;

function tabla() {
  let ini = document.getElementById("ini").value;
  let end = document.getElementById("end").value;

  document.getElementById("contador").innerHTML = "";
  if (ini > end) {
    document.getElementById("contador").innerHTML =
      "El ini es mas grande q el end";
  }
  for (let i = ini; i <= end; i++) {
    let j = 1;
    document.getElementById("contador").innerHTML =
      document.getElementById("contador").innerHTML + "tabla del " + i + "<p>";
    do {
      document.getElementById("contador").innerHTML =
        document.getElementById("contador").innerHTML +
        i +
        "*" +
        j +
        "=" +
        i * j +
        "<p>";
      j++;
    } while (j <= 10);
  }
}

function contar() {
  cont++;
  if (cont <= tope) {
    document.getElementById("contador").innerHTML = cont;
  } else {
    //desabilito el boton
    document.getElementById("contar").setAttribute("disabled", "disabled");
  }
}
