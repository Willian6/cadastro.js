//Parte 1 data do evento 
let dataDoEvento = new Date('2021-09-02')
let dataDeHoje = new Date 

if (dataDoEvento > dataDeHoje) {
    console.log("Evento permitido favor informa a idade ")
}   else { 
    console.log("Evento não permitido")

}

//Parte 2 cadastro de idade 
const participantes = ["Paulo","Maria","jose"]
let idadePaulo = 18;
let idadeMaria = 15;
let idadeJose = 40;

if (idadeMaria >= 18) {
    console.log("Cadastro Permitido")
}else {
    console.log("Cadastro não permitido pela idade menor de 18 anos ")

}

// Verificação de Participantes 
if (participantes.length < 100){
    console.log("Cadastro finalizado")
}else {
    console.log("Numero de participantes execido o limite de 100")
}




    


