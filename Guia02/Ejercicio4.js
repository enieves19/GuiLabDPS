const interface = require('readline-sync');
//suma, resta, division,multiplicacion,salir
let response="";
do{ 

    console.log("1-Suma");
    console.log("2-Resta");
    console.log("3-Multiplicacion");
    console.log("4-Division");
    console.log("5-Salir");
    response= interface.question("Que Operacion desea realizar , escriba el numero: ");
    if(response !="5"){
        const firstNumber = interface.question("Digite el primer numero: ");
        const  secondNumber = interface.question("Digite el segundo numero: ");
        switch(response){
            case "1":
                var result = parseInt(firstNumber)+parseInt(secondNumber);
                console.log("El resultado es:"+result);
                break; 
            case "2":
                var result = parseInt(firstNumber)-parseInt(secondNumber);
                console.log("El resultado es:"+result);
                break; 
            case "3":
                var result = parseInt(firstNumber)*parseInt(secondNumber);
                console.log("El resultado es:"+result);
                break;    
            case "4":
                var result = parseInt(firstNumber)/parseInt(secondNumber);
                console.log("El resultado es:"+result);
                break;
            default:
                break; 
            }
        interface.question("Presiona Enter para continuar");
    }
}while(response !="5");