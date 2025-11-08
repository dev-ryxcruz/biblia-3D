// --- 1. Lista de Versículos (Atualizada) ---
const versiculos = [
    // Versículos que já tínhamos:
    "Posso todas as coisas naquele que me fortalece. (Filipenses 4:13)",
    "O Senhor é o meu pastor; nada me faltará. (Salmos 23:1)",
    "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais. (Jeremias 29:11)",
    "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. (Provérbios 3:5)",
    "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei. (Mateus 11:28)",
    "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça. (Isaías 41:10)",
    "Tudo sofre, tudo crê, tudo espera, tudo suporta. (1 Coríntios 13:7)",
    "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão. (Isaías 40:31)",
    "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará. (Salmos 37:5)",
    "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. (Salmos 46:1)",
    "O coração alegre é bom remédio, mas o espírito abatido faz secar os ossos. (Provérbios 17:22)",
    "Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu. (Eclesiastes 3:1)",
    "Porque a seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos. (Salmos 91:11)",
    "Não estejais inquietos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus, pela oração e súplicas, com ação de graças. (Filipenses 4:6)"
];

// --- 2. Selecionando os Elementos do HTML ---
const botao = document.getElementById('botao-versiculo');
const biblia = document.getElementById('biblia');
const paginaDoVersiculo = document.getElementById('versiculo-texto');

// NOVOS Elementos
const overlay = document.getElementById('overlay');
const cena = document.getElementById('cena'); // A cena 3D


// --- 3. As Funções de Abrir e Fechar ---

function abrirLivro() {
    // 1. Escolher e mostrar o versículo (apenas se estiver fechado)
    if (!biblia.classList.contains('aberto')) {
        const indiceAleatorio = Math.floor(Math.random() * versiculos.length);
        const versiculoEscolhido = versiculos[indiceAleatorio];
        paginaDoVersiculo.textContent = versiculoEscolhido;
    }

    // 2. Abrir o livro e ativar os efeitos
    biblia.classList.add('aberto');    // Gira a capa
    overlay.classList.add('ativo');    // Mostra o fundo escuro
    cena.classList.add('foco');        // Traz o livro para frente
}

function fecharLivro() {
    biblia.classList.remove('aberto');  // Fecha a capa
    overlay.classList.remove('ativo');  // Esconde o fundo escuro
    cena.classList.remove('foco');      // Devolve o livro à posição normal
}

// --- 4. Eventos de Clique ---

// O botão agora vai "alternar" (abrir ou fechar)
botao.addEventListener('click', function() {
    // Verifica se o livro já está aberto
    const estaAberto = biblia.classList.contains('aberto');

    if (estaAberto) {
        fecharLivro();
    } else {
        abrirLivro();
    }
});

// NOVO: Evento para fechar o livro ao clicar no fundo escuro
overlay.addEventListener('click', function() {
    fecharLivro();
});
