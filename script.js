function gerarSumario() {
	const titulos = document.querySelectorAll('h2');
	const sumarioContainer = document.getElementById('sumario');
	const listaSumario = document.createElement('ol');

	titulos.forEach((titulo, index) => {
		const textoTitulo = titulo.textContent;
		const anchorId = `titulo-${index}`;
		titulo.id = anchorId;

		const itemLista = document.createElement('li');
		const link = document.createElement('a');
		link.href = `#${anchorId}`;
		link.textContent = textoTitulo;
		itemLista.appendChild(link);
		listaSumario.appendChild(itemLista);
	});

	sumarioContainer.appendChild(listaSumario);
}
gerarSumario();