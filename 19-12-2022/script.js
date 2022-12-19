let numA = prompt("scegli un numero");
let numB = prompt("scegli un altro numero");
let operationType = prompt("che operazione vuoi eseguire con i tuoi numeri?");
let intNumA = parseInt(numA);
let intNumB = parseInt(numB);
intNumA < 0 ? alert("per favore inserisci un numero positivo") : true;
intNumB < 0 ? alert("per favore inserisci un numero positivo") : true;

if (operationType === "addizione") {
  console.log("la somma dei tuoi numeri è " + (intNumA + intNumB));
} else if (operationType === "sottrazione") {
  console.log("la differenza tra i tuoi numeri è " + (intNumA - intNumB));
} else if (operationType === "moltiplicazione") {
  console.log("il prodotto dei tuoi numeri è " + intNumA * intNumB);
} else if (operationType === "divisione") {
  console.log("il quozionte dei tuoi numeri è " + intNumA / intNumB);
} else {
  console.log("per favore specifica meglio che operazone vuoi eseguire");
}

switch (operationType) {
  case "addizione":
    console.log("la somma dei tuoi numeri è " + (intNumA + intNumB));
    break;
  case "sottrazione":
    console.log("la differenza tra i tuoi numeri è " + (intNumA - intNumB));
    break;
  case "moltiplicazione":
    console.log("il prodotto dei tuoi numeri è " + intNumA * intNumB);
    break;
  case "divisione":
    console.log("il quozionte dei tuoi numeri è " + intNumA / intNumB);
    break;
  default:
    console.log("per favore specifica meglio che operazone vuoi eseguire");
}
