(function(){
    btn.addEventListener("click", function (){
        const btn = document.querySelector("#btn");
        const name = document.querySelector("#name").value;
        const heigth = document.querySelector("#heigth").value;
        const weigth = document.querySelector("#weigth").value;
        const result = document.querySelector("h2")
        const classification = document.querySelector("h3")
        
        if(heigth !== '' && weigth !== "" && name !== ""){
            var calc = weigth/(heigth*heigth)
            result.textContent = name + ' seu IMC é ' + calc.toFixed(2)
        }else{
            alert("Campos em branco")
        }
        
            if(calc < 18.5){
                classification.textContent = "Abaixo do peso"
            }
            else if(calc < 24.9){
                classification.textContent = "Peso ideal (Parabéns)"
            }
            else if(calc < 29.9){
                classification.textContent = "Levemente acima do peso"
            }
            else if(calc < 34.9){
                classification.textContent = "Obesidade Grau |"
            }
            else if(calc < 39.9){
                classification.textContent = "Obesidade Grau || (Severa)"
            }
            else if(calc < 40){
                classification.textContent = "Obesidade Grau ||| (Mórbida)"
            }       
    })  
})()