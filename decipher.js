function decipher() {
	var messageToBeDeciphered = prompt(
		'Qual mensagem você quer decifrar? Essa mensagem não pode conter números ou ser vazia'
	);
	var numberFixed = 33;
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
			var letter = messageToBeDeciphered.charCodeAt(i);
			var letterCiphered = String.fromCharCode(
				(letter + numberFixed) % 26;
			);
			message += letterCiphered;
		} else {
			//Trata minuscula
			var letter = messageToBeDeciphered.charCodeAt(i);
			var letterCiphered = String.fromCharCode(
				(letter + numberFixed) % 26
			);
			message += letterCiphered;
		}
	}
	alert(message);
}

decipher();