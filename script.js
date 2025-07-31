function gerarSumario() {
	const titulos = document.querySelectorAll('h2');
	const sumarioContainer = document.getElementById('sumario');
	const listaSumario = document.createElement('ul');

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

function setContinuosCounter() {
	document.addEventListener('DOMContentLoaded', () => {
		let globalCounter = 1;
		// Inicializa o contador global

		// Seleciona todas as listas com a classe 'continuous-counter'
		const lists = document.querySelectorAll('ol');

		lists.forEach(list => {
			const listItems = list.querySelectorAll('li');
			listItems.forEach(item => { // Adiciona um atributo de dados para armazenar o número
				item.dataset.counter = globalCounter;
				globalCounter++; // Incrementa para o próximo item
			});
		});

		// Opcional: Se quiser que o número apareça dinamicamente no JS sem depender 100% do CSS counter
		// Você pode modificar o conteúdo do item ou adicionar um span
		// No entanto, o método CSS 'counter-increment' e 'counter()' é mais elegante para exibir.
		// O JavaScript aqui garante que o 'counter-increment' resete corretamente
		// e mantém a lógica de contagem global.

		// Resetar e aplicar o counter-reset para cada lista usando o JS para simular a continuidade
		// Isso é mais robusto para garantir a continuidade em diferentes navegadores e cenários.
		let currentCount = 0;
		lists.forEach((list, index) => {
			// Define o valor do contador CSS para a próxima lista
			// Isso reinicia o contador para o valor desejado para a próxima lista
			list.style.counterReset = `item-counter ${currentCount}`;

			// Atualiza o contador global com base no número de itens desta lista
			currentCount += list.querySelectorAll('li').length;
		});
	});
}

setContinuosCounter();

function animacaoDeEntrada() {
	const elementoAnimados = document.querySelectorAll('div,h2,h3,ol');

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
			let elem = entry.target;
             elem.classList.add('observado');
			 // o tempo de timeout deve ser igual ao tempo da animação.
			 setTimeout(()=>{
				 elem.classList.remove('observado');
			 }, 500);
			 console.log('entrou');
            //  observer.unobserve(elem); // Para de observar após a animação iniciar
         }
     });
 }, {
     threshold: 0.5 // Dispara quando pelo menos 10% do elemento está visível
 });
 elementoAnimados.forEach(element => {
	 observer.observe(element);
 });
}

animacaoDeEntrada();