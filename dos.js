/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var respuesta = true;
  var marca;
  var precio;
  var pesoKilogramos;
  var tipo;
  var pesoTotalCompra = 0;
  var banderaLiquido = true;
  var precioLiquidoMasCaro;
  var marcaLiquidoMasCaro;
  var pesoMasLivianoSolidos;
  var marcaMasLivianoSolidos;
  var banderaSolido = true;
  


  while(respuesta)
  {
    do{
      marca = prompt("Ingrese marca");
    }while(!(isNaN(marca)));

    do{
      precio = prompt("Ingrese precio");
      precio = parseInt(precio);
    }while(isNaN(precio));

    do{
      pesoKilogramos = prompt("Ingrese peso en kilogramos");
      pesoKilogramos = parseInt(pesoKilogramos);
    }while(isNaN(pesoKilogramos));

    do{
      tipo = prompt("Ingrese tipo solido o liquido");
    }while(tipo != "solido" && tipo != "liquido");

    //a)informar el peso total de la compra.

    pesoTotalCompra+= pesoKilogramos;

    //b)la marca del más caro de los líquidos

    if(tipo == "liquido" && banderaLiquido){
      precioLiquidoMasCaro = precio;
      marcaLiquidoMasCaro = marca;
      banderaLiquido = false;
    }else if(precio > precioLiquidoMasCaro){
      precioLiquidoMasCaro = precio;
      marcaLiquidoMasCaro = marca;
    }
    if(tipo == "liquido"){
      console.log("La marca del liquido mas caro " + marcaLiquidoMasCaro);
    }

    //c)la marca del más liviano de los sólidos

    if(tipo == "solido" && banderaSolido){
      pesoMasLivianoSolidos = pesoKilogramos;
      marcaMasLivianoSolidos = marca;
      banderaSolido = false;
    }else if(pesoKilogramos < pesoMasLivianoSolidos){
      pesoMasLivianoSolidos = pesoKilogramos;
      marcaMasLivianoSolidos = marca;
    }
    if(tipo == "solido"){
      console.log("La marca del solido mas liviano es " + marcaMasLivianoSolidos);
    }




    respuesta = confirm("Desea ingresar otro?");
  }//fin de while

  //a
  console.log("El peso total de la compra es " + pesoTotalCompra);



}
