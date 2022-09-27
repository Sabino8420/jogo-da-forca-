function recargar(){
  location.reload();
}

function customer(){
console.log("resultado" + document.getElementById("txtPalabra").value);
nuevaP = document.getElementById("txtPalabra").value;

if(nuevaP != ""){
   cargarJuego(nuevaP);
   document.getElementById("txtPalabra").value = "";
  var boton = document.getElementById("guardarJugar");
  boton.disabled = true;

}else{
  alert("Por favor ingrese una palabra para comenzar a jugar");
}


}

function cargarJuego(nuevaPalabra){
  let palabras = Array(
    "colombia", "italia", "superman",
    "farmacia", "Brinquedo", "computador",
    "usa", "peru", "brasil",
    "ecuador", "argentina", "venezuela",
    "india", "china", "ucrania",
    "africa", "america", "espana",
    "mexico", "australia", "batman",
    "bolivia", "tarzan", "antartida",
    "canada", "cuba", "nicaragua", "islandia");
 var palabraOc ="";
 var palabraAdi = "";
 var palabraNoAdi = "";
 var contador = 0;
 var aciertos = 0;
 var nuevaP = nuevaPalabra; 
 iniciar();
 
 function iniciar(){
  
  if(nuevaP == null){
    palabraOc = palabras[Math.floor(Math.random()*palabras.length)]
  }else{
    palabraOc = nuevaP;
  }

   
   for(var i = 0; i < palabraOc.length;i++){
     palabraAdi=palabraAdi+ "_ ";  
     palabraNoAdi=palabraNoAdi+ "  ";
     }
   console.log("letras: " + palabraOc.length);
 
   document.getElementById("frase").innerHTML=palabraAdi;
   
   document.getElementById("fraseIncorrecta").innerHTML=palabraNoAdi;
 
 }
 
 function comprobar(letra){
   
   var verificador = true;
  letra.toUpperCase();
  palabraOc = palabraOc.toUpperCase();
  var nuevo = "";
  var nuevoError = "";
  var error = true;
  for(var i = 0; i < palabraOc.length; i++){
 
   
   if(letra == palabraOc[i]){
     verificador = false;
     nuevo = nuevo + letra + " ";
     error = false;
     aciertos++;

   }else {   
     aciertos = aciertos;
   nuevo = nuevo + palabraAdi[i*2] + " ";
  }
  }
 
   for(var i = 0; i < palabraOc.length; i++){
     if(letra == palabraOc[i]){   
       error = false; 
     }else {   
    }
      if(error == false){
       letra = "";
       nuevoError = palabraNoAdi + letra + " ";  
         }else{
           nuevoError = palabraNoAdi + letra + " ";    
         }
     
   }
  
 
 
  
  if(verificador == true){

   contador++;
  }
  
  palabraAdi = nuevo;
  palabraNoAdi = nuevoError;
  document.getElementById("frase").innerHTML=palabraAdi;
  document.getElementById("fraseIncorrecta").innerHTML=palabraNoAdi;
  posicionDibulo();
  if(aciertos == palabraOc.length){
   document.getElementById("mensaje").innerHTML= "Ganador!";
  
  }

 }
 
 function dibujaVertical(iniX, iniY, color){
 var tela = document.querySelector('canvas');
 var pincel = tela.getContext('2d');
 
 var  inicioX= iniX;
 var inicioY = iniY;
 
 
 
 var anchor = inicioX + 20;
 var largura = inicioY - 150;
 
 
  
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.moveTo(inicioX, inicioY);
  pincel.lineTo(anchor,inicioY);
  pincel.lineTo(anchor,largura);
  pincel.lineTo(inicioX,largura);
  pincel.fill();
  //pincel.stroke( );
 }
 function dibujaHorizontal(iniHorX, iniHorY, color){
   var tela = document.querySelector('canvas');
   var pincel = tela.getContext('2d');
   var  inicioX= iniHorX;
 var inicioY = iniHorY;
 
 var anchor = inicioX + 150;
 var largura = inicioY - 20;
  
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.moveTo(inicioX, inicioY);
  pincel.lineTo(anchor,inicioY);
  pincel.lineTo(anchor,largura);
  pincel.lineTo(inicioX,largura);
  pincel.fill();
  //pincel.stroke( );
 
 }
 
 function dibujaCirculo(pX, pY, color){
   var tela = document.querySelector('canvas');
   var pincel = tela.getContext('2d');
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(pX, pY, 30, 0, 2* Math.PI);
  pincel.fill();
 
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.moveTo(510, 180);
  pincel.lineTo(490, 300);
  pincel.lineTo(530, 300);
  pincel.fill();
 
 }
 
 function posicionDibulo(){
  // contador++;
   var color ="green";
   var iniX;
   var iniY;
 
   var iniHorX;
   var iniHorY;
 if(contador == 1){
 iniX = 50;
 iniY = 350;
 }else if(contador == 2){
   iniX = 50;
   iniY = 200;
 }else if(contador == 3){
   color = "orange";
   iniHorX = 50;
   iniHorY = 50;
 }else if(contador == 4){
   color = "orange";
   iniHorX = 200;
   iniHorY = 50;
 }else if(contador == 5){
   color = "red";
   iniHorX = 350;
   iniHorY = 50;
 }else if(contador == 6){
   color = "red";
   iniX = 500;
   iniY = 150;
 }else if(contador == 7){
   color = "blue";
   dibujaCirculo(510, 150, color);
   document.getElementById("mensaje").innerHTML= "Perdió. La palabra era: ( " + palabraOc + " ).";
  }
 
 else{}  
 dibujaVertical(iniX, iniY, color);
 dibujaHorizontal(iniHorX, iniHorY, color);
 }
 
 document.onkeydown = proceso;
 
 function proceso(evento){
 
 if(contador < 7 && aciertos < palabraOc.length  ){
   //puede jugar
   letras(evento);
 }else{
   //detener
   alert("Por favor inicie un nuevo juego para continuar");
 }
 }
 
 function letras(evento){
   var letra;
 var codigoLetra = evento.keyCode;
  
 switch(codigoLetra){
   case 65:
   letra = "A";
     break;
     case 66:
       letra = "B";
         break;
         case 67:
           letra = "C";
             break;
             case 68:
               letra = "D";
                 break;
                 case 69:
                   letra = "E";
                     break;
                     case 70:
                       letra = "F";
                         break;
                         case 71:
                           letra = "G";
                             break;
                             case 72:
                               letra = "H";
                                 break;
                                 case 73:
                                   letra = "I";
                                     break;
                                     case 74:
                                       letra = "J";
                                         break;
                                         case 75:
                                           letra = "K";
                                             break;
                                             case 76:
                                               letra = "L";
                                                 break;
                                                 case 77:
                                                   letra = "M";
                                                     break;
                                                      case 78:
                                                     letra = "N";
                                                       break; 
                                                       case 79:
                                                       letra = "O";
                                                         break;
                                                          case 80:
                                                         letra = "P";
                                                           break; 
                                                           case 81:
                                                           letra = "Q";
                                                             break;
                                                             case 82:
                                                               letra = "R";
                                                                 break;
                                                                 case 83:
                                                                   letra = "S";
                                                                     break;
                                                                     case 84:
                                                                       letra = "T";
                                                                         break;
                                                                         case 85:
                                                                           letra = "U";
                                                                             break;
                                                                             case 86:
                                                                               letra = "V";
                                                                                 break;
                                                                                 case 87:
                                                                                   letra = "W";
                                                                                     break;
                                                                                     case 88:
                                                                                       letra = "X";
                                                                                         break;
                                                                                         case 89:
                                                                                           letra = "Y";
                                                                                             break;
                                                                                             case 90:
                                                                                               letra = "Z";
                                                                                                 break;
                                                                                                                    
 
 
 
 
     default: "";
   }
  comprobar(letra);
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*//Math.floor(Math.random()*10) 
 var boton = document.getElementById("botonComenzar");
 
 const listaPalabras = [
     "hamburgessa", "arroz", "pan", "sancocho","vaca", "solidaridad",
     ]; 
     var palabraEscogida =  listaPalabras[Math.floor(Math.random()*listaPalabras.length)];
 
 function carga() {
     var input = document.getElementById("searchInput");
     var campos = document.getElementById("campos");
     input.value = palabraEscogida;
     
   for(i = 0; i<5; i++){
     var trazos = "*";
     trazos++;
 
   }
   campos.value = trazos;
     
     var valor = input.value;
  };
 
 
 
 //lista de palabras
 
 var palabraEscogida = "";
  
 function laPablara() {
  
   
  return palabraEscogida;
     
   }*/
  


}