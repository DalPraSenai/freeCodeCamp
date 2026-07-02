const comando = "X";

switch (comando) {
    case "atacar":
        console.log("Você atacou!");
    break;

    case "fugir":
        console.log("Você correu!");
    break;

    case "defender":
        console.log("Você defendeu!");
    break;

    case "inventario":
        console.log("Você abriu o inventario");
    break;

    default:
    console.log("Comando desconhecido.");
}

