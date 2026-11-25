/* UMA PITADA DE TUDO
   Site ruim, mas funcional
   Projeto acadêmico de UI/UX
*/

// =====================================
// 1. BANCO DE RECEITAS
// =====================================

const receitas = [
    {
        id: 1,
        nome: "Bolo de Cenoura",
        categoria: "Bolos",
        emoji: "🥕",
        tempo: "50 minutos",
        porcoes: "10 fatias",
        ingredientes: [
            "3 cenouras médias picadas",
            "3 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 xícaras e meia de farinha de trigo",
            "1 colher de sopa de fermento químico"
        ],
        preparo: [
            "Preaqueça o forno a 180°C.",
            "Bata as cenouras, os ovos e o óleo no liquidificador.",
            "Misture o açúcar e a farinha em uma tigela.",
            "Acrescente a mistura do liquidificador e mexa bem.",
            "Adicione o fermento delicadamente.",
            "Coloque em uma forma untada e asse por aproximadamente 40 minutos, até passar no teste do palito."
        ]
    },
    {
        id: 2,
        nome: "Brigadeiro",
        categoria: "Doces",
        emoji: "🍫",
        tempo: "20 minutos",
        porcoes: "20 unidades",
        ingredientes: [
            "1 lata de leite condensado",
            "1 colher de sopa de manteiga",
            "3 colheres de sopa de chocolate em pó",
            "Granulado para decorar"
        ],
        preparo: [
            "Coloque o leite condensado, a manteiga e o chocolate em uma panela.",
            "Cozinhe em fogo baixo, mexendo constantemente.",
            "Quando desgrudar do fundo, desligue o fogo.",
            "Deixe esfriar completamente.",
            "Enrole e passe no granulado."
        ]
    },
    {
        id: 3,
        nome: "Coxinha de Frango",
        categoria: "Salgados",
        emoji: "🍗",
        tempo: "90 minutos",
        porcoes: "20 unidades",
        ingredientes: [
            "2 xícaras de caldo de frango",
            "2 xícaras de farinha de trigo",
            "1 colher de sopa de manteiga",
            "2 xícaras de frango cozido e desfiado",
            "1 cebola picada",
            "Sal e temperos a gosto",
            "2 ovos batidos",
            "Farinha de rosca para empanar",
            "Óleo para fritar"
        ],
        preparo: [
            "Refogue a cebola e o frango com os temperos.",
            "Ferva o caldo com a manteiga.",
            "Adicione a farinha de uma vez e mexa até formar uma massa que solte da panela.",
            "Deixe a massa amornar.",
            "Modele as coxinhas e recheie com o frango.",
            "Passe nos ovos e na farinha de rosca.",
            "Frite em óleo quente, com cuidado, até dourar."
        ]
    },
    {
        id: 4,
        nome: "Macarrão ao Molho de Tomate",
        categoria: "Massas",
        emoji: "🍝",
        tempo: "30 minutos",
        porcoes: "4 porções",
        ingredientes: [
            "400 g de macarrão",
            "2 xícaras de molho de tomate",
            "2 dentes de alho",
            "1 colher de sopa de azeite",
            "Sal a gosto",
            "Manjericão a gosto"
        ],
        preparo: [
            "Cozinhe o macarrão em água fervente com sal conforme a embalagem.",
            "Aqueça o azeite e refogue o alho.",
            "Adicione o molho de tomate e cozinhe por 10 minutos.",
            "Escorra o macarrão.",
            "Misture ao molho e finalize com manjericão."
        ]
    },
    {
        id: 5,
        nome: "Pudim de Leite Condensado",
        categoria: "Doces",
        emoji: "🍮",
        tempo: "90 minutos + geladeira",
        porcoes: "8 porções",
        ingredientes: [
            "1 lata de leite condensado",
            "A mesma medida da lata de leite",
            "3 ovos",
            "1 xícara de açúcar para a calda",
            "Meia xícara de água para a calda"
        ],
        preparo: [
            "Derreta o açúcar e acrescente a água cuidadosamente para fazer a calda.",
            "Espalhe a calda em uma forma de pudim.",
            "Bata o leite condensado, o leite e os ovos.",
            "Despeje na forma caramelizada.",
            "Asse em banho-maria a 180°C por cerca de 60 minutos, até firmar.",
            "Deixe esfriar e leve à geladeira por pelo menos 4 horas antes de desenformar."
        ]
    },
    {
        id: 6,
        nome: "Pão de Queijo",
        categoria: "Salgados",
        emoji: "🧀",
        tempo: "40 minutos",
        porcoes: "25 unidades",
        ingredientes: [
            "500 g de polvilho doce",
            "250 ml de leite",
            "100 ml de óleo",
            "2 ovos",
            "200 g de queijo ralado",
            "1 colher de chá de sal"
        ],
        preparo: [
            "Preaqueça o forno a 180°C.",
            "Aqueça o leite, o óleo e o sal até começar a ferver.",
            "Despeje sobre o polvilho e misture.",
            "Deixe amornar e acrescente os ovos e o queijo.",
            "Misture até formar uma massa modelável.",
            "Faça bolinhas e asse por aproximadamente 25 minutos, até dourar."
        ]
    },
    {
        id: 7,
        nome: "Lasanha à Bolonhesa",
        categoria: "Massas",
        emoji: "🍝",
        tempo: "60 minutos",
        porcoes: "6 porções",
        ingredientes: [
            "500 g de massa para lasanha",
            "500 g de carne moída",
            "3 xícaras de molho de tomate",
            "300 g de queijo muçarela",
            "1 cebola picada",
            "2 dentes de alho",
            "Sal e temperos a gosto"
        ],
        preparo: [
            "Refogue a cebola e o alho.",
            "Acrescente a carne moída e cozinhe completamente.",
            "Adicione o molho de tomate e os temperos.",
            "Em uma travessa, alterne molho, massa e queijo.",
            "Repita as camadas até terminar os ingredientes.",
            "Asse a 180°C conforme as instruções da massa, até ficar completamente cozida e gratinada."
        ]
    },
    {
        id: 8,
        nome: "Bolo de Chocolate",
        categoria: "Bolos",
        emoji: "🍰",
        tempo: "45 minutos",
        porcoes: "10 fatias",
        ingredientes: [
            "2 xícaras de farinha de trigo",
            "1 xícara de açúcar",
            "1 xícara de chocolate em pó",
            "3 ovos",
            "1 xícara de leite",
            "Meia xícara de óleo",
            "1 colher de sopa de fermento químico"
        ],
        preparo: [
            "Preaqueça o forno a 180°C.",
            "Misture os ovos, o leite, o óleo e o açúcar.",
            "Acrescente a farinha e o chocolate em pó.",
            "Misture até obter uma massa uniforme.",
            "Adicione o fermento.",
            "Despeje em forma untada e asse por cerca de 35 minutos, até passar no teste do palito."
        ]
    },
    {
        id: 9,
        nome: "Suco de Laranja",
        categoria: "Bebidas",
        emoji: "🍊",
        tempo: "10 minutos",
        porcoes: "2 copos",
        ingredientes: [
            "5 laranjas",
            "Gelo a gosto",
            "Água, se necessário"
        ],
        preparo: [
            "Lave as laranjas.",
            "Corte e esprema as frutas.",
            "Se desejar, adicione um pouco de água.",
            "Sirva com gelo."
        ]
    },
    {
        id: 10,
        nome: "Vitamina de Banana",
        categoria: "Bebidas",
        emoji: "🍌",
        tempo: "5 minutos",
        porcoes: "2 copos",
        ingredientes: [
            "2 bananas maduras",
            "400 ml de leite",
            "2 colheres de sopa de aveia",
            "Canela a gosto"
        ],
        preparo: [
            "Descasque e corte as bananas.",
            "Coloque todos os ingredientes no liquidificador.",
            "Bata até ficar cremoso.",
            "Sirva imediatamente."
        ]
    },
    {
        id: 11,
        nome: "Panqueca de Frango",
        categoria: "Massas",
        emoji: "🥞",
        tempo: "50 minutos",
        porcoes: "6 panquecas",
        ingredientes: [
            "1 xícara de leite",
            "1 xícara de farinha de trigo",
            "1 ovo",
            "1 colher de sopa de óleo",
            "2 xícaras de frango cozido e desfiado",
            "1 xícara de molho de tomate",
            "Sal e temperos a gosto"
        ],
        preparo: [
            "Bata o leite, a farinha, o ovo e o óleo.",
            "Faça discos de massa em uma frigideira antiaderente.",
            "Tempere o frango já cozido e desfiado.",
            "Recheie e enrole as panquecas.",
            "Cubra com molho de tomate.",
            "Leve ao forno por aproximadamente 15 minutos para aquecer."
        ]
    },
    {
        id: 12,
        nome: "Beijinho",
        categoria: "Doces",
        emoji: "🥥",
        tempo: "20 minutos",
        porcoes: "20 unidades",
        ingredientes: [
            "1 lata de leite condensado",
            "1 colher de sopa de manteiga",
            "100 g de coco ralado",
            "Coco ralado extra para decorar"
        ],
        preparo: [
            "Misture o leite condensado, a manteiga e o coco em uma panela.",
            "Cozinhe em fogo baixo, mexendo sempre.",
            "Quando a mistura desgrudar do fundo, desligue o fogo.",
            "Deixe esfriar completamente.",
            "Enrole e passe no coco ralado."
        ]
    }
];

// =====================================
// 2. MOSTRAR RECEITAS
// =====================================

const dadosCartoesIncorretos = {
    1: { nome: "Bolo de Frango com Cenoura", categoria: "Bebidas", emoji: "🍗" },
    2: { nome: "Macarrão de Brigadeiro", categoria: "Massas", emoji: "🍝" },
    4: { nome: "Pudim ao Molho de Tomate", categoria: "Doces", emoji: "🍅" },
    8: { nome: "Suco de Chocolate", categoria: "Bolos", emoji: "🥤" }
};

function exibirReceitas(lista) {
    const container = document.getElementById("lista-receitas");

    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p>NENHUMA RECEITA ENCONTRADA!!!</p>";
        return;
    }

    lista.forEach(receita => {
        const card = document.createElement("div");
        card.className = "card-receita";
        const dadosCartao = dadosCartoesIncorretos[receita.id] || receita;

        card.innerHTML = `
            <div class="imagem-receita">
                ${dadosCartao.emoji}
            </div>

            <h3>${dadosCartao.nome}</h3>

            <p>CATEGORIA: ${dadosCartao.categoria}</p>

            <p>⏰ ${receita.tempo}</p>

            <button onclick="abrirReceita(${receita.id})">
                VER RECEITA!!!
            </button>
        `;

        container.appendChild(card);
    });
}

// =====================================
// 3. FILTRAR POR CATEGORIA
// =====================================

function filtrarCategoria(categoria) {
    const filtradas = receitas.filter(
        receita => receita.categoria === categoria
    );

    document.getElementById("receitas").classList.remove("escondido");
    document.getElementById("detalhes-receita").classList.add("escondido");

    exibirReceitas(filtradas);
}

// =====================================
// 4. PESQUISAR RECEITAS
// =====================================

function pesquisarReceitas() {
    const termo = document.getElementById("busca")
        .value
        .toLowerCase()
        .trim();

    const resultados = receitas.filter(receita =>
        receita.nome.toLowerCase().includes(termo)
    );

    document.getElementById("receitas").classList.remove("escondido");
    document.getElementById("detalhes-receita").classList.add("escondido");

    exibirReceitas(resultados);

    document.getElementById("receitas").scrollIntoView({
        behavior: "smooth"
    });
}

// Permite pesquisar pressionando Enter
document.getElementById("busca").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        pesquisarReceitas();
    }
});

// =====================================
// 5. ABRIR UMA RECEITA
// =====================================

function abrirReceita(id) {
    const receita = receitas.find(item => item.id === id);

    if (!receita) {
        return;
    }

    const ingredientesHTML = receita.ingredientes
        .map(ingrediente => `<li>${ingrediente}</li>`)
        .join("");

    const preparoHTML = receita.preparo
        .map(passo => `<li>${passo}</li>`)
        .join("");

    document.getElementById("conteudo-receita").innerHTML = `
        <h2>${receita.emoji} ${receita.nome}</h2>

        <p>CATEGORIA: ${receita.categoria}</p>
        <p>TEMPO: ${receita.tempo}</p>
        <p>RENDIMENTO: ${receita.porcoes}</p>

        <h3>INGREDIENTES!!!</h3>
        <ul>${ingredientesHTML}</ul>

        <h3>MODO DE PREPARO!!!</h3>
        <ol>${preparoHTML}</ol>
    `;

    document.getElementById("receitas").classList.add("escondido");
    document.getElementById("detalhes-receita").classList.remove("escondido");

    document.getElementById("detalhes-receita").scrollIntoView({
        behavior: "smooth"
    });
}

// =====================================
// 6. VOLTAR PARA AS RECEITAS
// =====================================

function voltarReceitas() {
    document.getElementById("detalhes-receita").classList.add("escondido");
    document.getElementById("receitas").classList.remove("escondido");

    document.getElementById("receitas").scrollIntoView({
        behavior: "smooth"
    });
}

// =====================================
// 7. MOSTRAR TODAS
// =====================================

function mostrarTodas() {
    document.getElementById("busca").value = "";

    document.getElementById("detalhes-receita").classList.add("escondido");
    document.getElementById("receitas").classList.remove("escondido");

    exibirReceitas(receitas);
}

// =====================================
// 8. POP-UP
// =====================================

function fecharPopup() {
    document.getElementById("popup").classList.add("escondido");
}

const anunciosPopup = [
    {
        titulo: "ATENÇÃO!!!",
        destaque: "GANHE R$500!!!",
        texto: "CADASTRE-SE AGORA E RECEBA NOSSAS OFERTAS!!!"
    },
    {
        titulo: "OFERTA RELÂMPAGO!!!",
        destaque: "RECEITAS DE GRAÇA!!!",
        texto: "CLIQUE AGORA E CONFIRA AS MELHORES RECEITAS!!!"
    },
    {
        titulo: "SUPER PROMOÇÃO!!!",
        destaque: "VOCÊ FOI SELECIONADO!!!",
        texto: "CADASTRE-SE HOJE E NÃO PERCA ESTA CHANCE!!!"
    }
];

let indiceAnuncioPopup = 0;

function mostrarPopup() {
    const popup = document.getElementById("popup");
    const cadastro = document.getElementById("modal-cadastro");

    if (!cadastro.classList.contains("escondido")) {
        return;
    }

    const anuncio = anunciosPopup[indiceAnuncioPopup];
    document.getElementById("titulo-anuncio-popup").textContent = anuncio.titulo;
    document.getElementById("destaque-anuncio-popup").textContent = anuncio.destaque;
    document.getElementById("texto-anuncio-popup").textContent = anuncio.texto;

    popup.classList.remove("escondido");
    indiceAnuncioPopup = (indiceAnuncioPopup + 1) % anunciosPopup.length;
}

function abrirCadastro() {
    fecharPopup();

    document.getElementById("modal-cadastro")
        .classList.remove("escondido");
}

function fecharCadastro() {
    document.getElementById("modal-cadastro")
        .classList.add("escondido");
}

// =====================================
// 9. CADASTRO DEMONSTRATIVO
// =====================================

document.getElementById("form-cadastro").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        alert("CADASTRO REALIZADO!!! (SIMULAÇÃO)");

        document.getElementById("form-cadastro").reset();

        fecharCadastro();
    }
);

// =====================================
// 10. INICIALIZAÇÃO
// =====================================

mostrarTodas();

setInterval(mostrarPopup, 5000);