let opcionesContainer = document.getElementById('languages_options_div');
let opcionesList = opcionesContainer.getElementsByTagName('input')
let spanList = opcionesContainer.getElementsByTagName('span');


let arrayDeInputs=[];
let arrayDeSpans=[];
for(let i=0;i<opcionesList.length;i++){
    if(opcionesList[i].type == 'radio'){
        console.log(opcionesList[i].value);
        arrayDeInputs.push(opcionesList[i].value);
    }
}


for(let i=0;i<spanList.length;i++){
    console.log('spanList', spanList[i].id)

    spanList[i].addEventListener('click', function(){
        let result = arrayDeInputs.find(element => element == spanList[i].id);

        if(result !== undefined){
            opcionesList.item

        }
    })
}


function optionBehavior(){
let caca = 'Inglés'
let popi ='ingles'

        console.log(caca, popi)
}
optionBehavior()