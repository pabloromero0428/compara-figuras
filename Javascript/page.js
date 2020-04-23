var calcularTriangulo = document.getElementById("calcularTriangulo");


function isTriangle(lado1, lado2, lado3) {

    //Validaciones para triangulo
    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    lado3 = parseInt(lado3);
    
    //la suma de dos de sus lados debe ser mayor al tercer lado, se debe cumplir para las tres combinaciones

    if ((lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1) {
        if (lado1 == lado2 && lado2 == lado3) {
            return ("El triangulo es equilatero");
        } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
            return ("El triangulo es isosceles");
        } else if (lado1 != lado2 && lado2 != lado3) {
            return ("El triangulo es escaleno");
        }
    } else {
        return ("No es posible formar un triángulo con los valores ingresados");
    }
}

function isCuadrilatero(lado1, lado2, lado3, lado4) {

    //Validaciones para cuadrilarero
    if (lado1 == 0 || lado2 == 0 || lado3 == 0 || lado4 == 0) {
        return ("Ingresaste un número 0 lo que quiere decir que no tienes valores correctos para la figura");
    } else if (lado1 == lado2 && lado1 == lado3 && lado1 == lado4) {
        return ("La figura es un cuadrado");
    } else if ((lado1 == lado2 && lado3 == lado4 && lado1 != lado3) ||
        (lado1 == lado3 && lado2 == lado4 && lado1 != lado2) ||
        (lado1 == lado4 && lado3 == lado2 && lado1 != lado3)) {
        return ("La figura es un rectangulo");
    } else if ((lado1 == lado2 && (lado3 > lado4 || lado4 > lado3)) ||
        (lado1 == lado3 && (lado2 > lado4 || lado4 > lado2)) ||
        (lado1 == lado4 && (lado3 > lado2 || lado2 > lado3)) ||
        (lado2 == lado3 && (lado1 > lado4 || lado4 > lado1)) ||
        (lado2 == lado4 && (lado1 > lado3 || lado3 > lado1)) ||
        (lado3 == lado4 && (lado1 > lado2 || lado2 > lado1))) {
        return ("La figura es un trapecio");
    }
    
}

calcularTriangulo.addEventListener("click", function() {
    var ladoT1 = document.getElementById("ladoT1").value;
    var ladoT2 = document.getElementById("ladoT2").value;
    var ladoT3 = document.getElementById("ladoT3").value;
    if (ladoT1 == "" || ladoT2 == "" || ladoT3 == "") {
        alert("No se aceptan compos vacios");
        return false
    } else {
        var triangulo = isTriangle(ladoT1, ladoT2, ladoT3);
        document.getElementById("ResultadoTriangulo").innerHTML = triangulo.toString();
    }
});

calcularCuadrilatero.addEventListener("click", function() {
    var ladoC1 = document.getElementById("ladoC1").value;
    var ladoC2 = document.getElementById("ladoC2").value;
    var ladoC3 = document.getElementById("ladoC3").value;
    var ladoC4 = document.getElementById("ladoC4").value;
    if (ladoC1 == "" || ladoC2 == "" || ladoC3 == "" || ladoC4 == "") {
        alert("No se aceptan compos vacios");
        return false
    } else {
        var cuadrilatero = isCuadrilatero(ladoC1, ladoC2, ladoC3, ladoC4);
        document.getElementById("ResultadoCuadrilatero").innerHTML = cuadrilatero.toString();
    }
});

function limpiarT() {
    var res = "";
    document.getElementById("ladoT1").value = res.toString();
    document.getElementById("ladoT2").value = res.toString();
    document.getElementById("ladoT3").value = res.toString();
    document.getElementById("ResultadoTriangulo").innerHTML = res.toString();
}

function limpiarC() {
    var res = "";
    document.getElementById("ladoC1").value = res.toString();
    document.getElementById("ladoC2").value = res.toString();
    document.getElementById("ladoC3").value = res.toString();
    document.getElementById("ladoC4").value = res.toString();
    document.getElementById("ResultadoCuadrilatero").innerHTML = res.toString();

}


resetT.addEventListener("click", function() {
    limpiarT();

});


resetC.addEventListener("click", function() {
    limpiarC();

});




function soloNumero(evt) {
    if (window.event) {
        keynum = evt.keyCode;
    } else {
        keynum = evt.which;
    }
    if (keynum > 47 && keynum < 58 || keynum == 8 || keynum == 13) {
        return true;
    } else {
        return false;
    }

}