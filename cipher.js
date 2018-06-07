function cipher( messageToBeCiphered ) {
	//var caesarCipherTable = Object.entries(obj);
	var lengthMessage = messageToBeCiphered.length;
	var numberFixed = 33;

	// for ( var i = 0; i < lengthMessage; i++) {
	//   //verifica se é maiúscula
	//   if (messageToBeCiphered.charAt(i) === (messageToBeCiphered.charAt(i)).toUpperCase() ){

	//   } else {
	//     console.log('minuscula');
	//   }
	// }

	//MAUISCULA
	// for(var i = 0; i < lengthMessage; i++) {
	//   var letter = messageToBeCiphered.charCodeAt(i) - 65; //32 ok
	//   var letterCiphered = String.fromCharCode((letter + numberFixed) % 26 + 65);
	//   //console.log(letterASCIICiphered);
	// }

	var message = '';
	//MINUSCULA
	for (var i = 0; i < lengthMessage; i++) {
		var letter = messageToBeCiphered.charCodeAt(i) - 97;

		if (letter != -65) {
			//tratar espaco
			var letterCiphered = String.fromCharCode(
				(letter + numberFixed) % 26 + 97
			);
			message += letterCiphered;
		} else {
			message += ' ';
		}
	}
	console.log(message);
}

//usar tabela ASCII mesmo ao inves dessa criada abaixo
// tratar espaço;

var message = 'cade onde';
cipher(message);
