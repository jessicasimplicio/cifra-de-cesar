/*
Laboratoria - Final Product 1
Caesar Cipher Algorithm

Author: J Simplicio
06/07/2018
*/

function cipher() {
	var messageToBeCiphered = prompt(
		'Qual mensagem você quer cifrar? Essa mensagem não pode conter números ou ser vazia'
	);
	var numberFixed = 33;
	var numberEquation;
	var message = '';


	while (messageToBeCiphered === '') {
		messageToBeCiphered = prompt(
			'Por favor insira uma mensagem que não seja vazia ou que não contenha número '
		);
	}

	var lengthMessage = messageToBeCiphered.length;

	for (var i = 0; i < lengthMessage; i++) {

		//verifica se é maiúscula
		if (
			messageToBeCiphered.charAt(i) ===
			messageToBeCiphered.charAt(i).toUpperCase()
		) {
			//Trata maiuscula

			numberEquation = 65;
			var letter = messageToBeCiphered.charCodeAt(i) - numberEquation;
			var letterCiphered = String.fromCharCode(
				(letter + numberFixed) % 26 + numberEquation
			);
			message += letterCiphered;
		} else {
			//Trata minuscula
			numberEquation = 97;
			var letter = messageToBeCiphered.charCodeAt(i) - numberEquation;
			var letterCiphered = String.fromCharCode(
				(letter + numberFixed) % 26 + numberEquation
			);
			message += letterCiphered;
		}
	}
	alert(message);
}

function decipher() {
	var messageToBeDeciphered = prompt(
		'Qual mensagem você quer decifrar? Essa mensagem não pode conter números ou ser vazia'
	);
	var numberFixed = 33;
  var numberEquation;
	var message = '';

	while (messageToBeDeciphered === '') {
		messageToBeDeciphered = prompt(
			'Por favor insira uma mensagem que não seja vazia ou que não contenha número '
		);
	}

	var lengthMessage = messageToBeDeciphered.length;

	for (var i = 0; i < lengthMessage; i++) {
		//verifica se é maiúscula
		if (
			messageToBeDeciphered.charAt(i) ===
			messageToBeDeciphered.charAt(i).toUpperCase()
		) {
			//Trata maiuscula
      numberEquation = 65;
			var letter = messageToBeDeciphered.charCodeAt(i) - numberEquation;
			var letterCiphered = String.fromCharCode((letter  - (numberFixed - 26)) % 26 + numberEquation);
			message += letterCiphered;
		} else {
			//Trata minuscula
      numberEquation = 97;
			var letter = messageToBeDeciphered.charCodeAt(i) - numberEquation;
			var letterCiphered = String.fromCharCode( (letter - (numberFixed - 26)) % 26 + numberEquation );
      console.log(letterCiphered);
			message += letterCiphered;
		}
	}
	alert(message);
}

cipher();