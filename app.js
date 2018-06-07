/*
Laboratoria - Final Product 1
Caesar Cipher Algorithm

Author: J Simplicio
06/07/2018
*/

function cipher() {

	var lengthMessage = messageToBeCiphered.length;
	var message = '';

	var numberFixed = 33;
	var numberX; //FIND A BETTER NAME!

	for (var i = 0; i < lengthMessage; i++) {

		//Trata letras
		//verifica se é diferente de espaco
		if (messageToBeCiphered.charCodeAt(i) != 32 ) { 

 			//verifica se é maiúscula
			if ( messageToBeCiphered.charAt(i) === messageToBeCiphered.charAt(i).toUpperCase()) { 	
				//Trata maiuscula
				numberX = 65;
				var letter = messageToBeCiphered.charCodeAt(i) - numberX; 
				var letterCiphered = String.fromCharCode(( letter + numberFixed ) % 26 + numberX );
				message += letterCiphered;

			} else {
				//Trata minuscula
				numberX = 97;
				var letter = messageToBeCiphered.charCodeAt(i) - numberX;
				var letterCiphered = String.fromCharCode((letter + numberFixed) % 26 + numberX);
				message += letterCiphered;				
			}
		} else { //Trata espaço
      		message += ' ';
    	}
	}
	console.log(message);


}

cipher();

