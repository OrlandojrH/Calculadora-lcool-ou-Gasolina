

function calcular(event){
    event.preventDefault();

    let alcooInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");


    
    let calculo = (alcooInput / gasolinaInput);

    if(calculo < 0.7){
        
        textResult.innerHTML = "Compensa usar Álcoo";

    }else{

        textResult.innerHTML = "Compesa usar Gasolina";

    }

    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
    alcoolSpan.innerHTML = "Álcool R$ " + alcooInput;


    contentResult.classList.remove("hide");

}


