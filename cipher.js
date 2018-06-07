function cipher(messageToBeCiphered) {
	//var caesarCipherTable = Object.entries(obj);
	var lengthMessage = messageToBeCiphered.length;
	var message = '';

	var numberFixed = 33;
	var numberX; //FIND A BETTER NAME!

	for (var i = 0; i < lengthMessage; i++) {
		//trata espaco

		if (messageToBeCiphered.charCodeAt(i) != 32) { //verifica se é espaco
      //console.log(messageToBeCiphered.charCodeAt(i));

 			//verifica se é maiúscula

			if (
				messageToBeCiphered.charAt(i) ===
				messageToBeCiphered.charAt(i).toUpperCase()
			) { 	//Trata maiuscula

				numberX = 65;
				var letter = messageToBeCiphered.charCodeAt(i) - numberX; 
				var letterCiphered = String.fromCharCode(
					(letter + numberFixed) % 26 + numberX
				);
				message += letterCiphered;

			} else {
				//Trata minuscula
				numberX = 97;
				var letter = messageToBeCiphered.charCodeAt(i) - numberX;
				var letterCiphered = String.fromCharCode(
					(letter + numberFixed) % 26 + numberX
				);
				message += letterCiphered;
				
			}
		} else {
      message += ' ';
    }
	}
	console.log(message);


}

// Falta:
// -alert() para pedir mensagem
// -mensagem de erro se inserir numero ou mensagem em branco
var message = 'A a';
cipher(message);

