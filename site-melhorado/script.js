/* ==========================================
   UMA PITADA DE TUDO - SITE MELHORADO
   Projeto acadêmico de UI/UX
========================================== */

// ==========================================
// 1. BANCO DE RECEITAS
// ==========================================

const receitas = [
    {
        id: 1,
        nome: "Bolo de Cenoura",
        categoria: "Bolos",
        pais: "Brasil",
        tempo: "50 min",
        porcoes: "10 fatias",
        imagem: "imagens/bolo-cenoura.jpg",
        ingredientes: [
            "3 cenouras médias",
            "3 ovos",
            "1 xícara de óleo",
            "2 xícaras de açúcar",
            "2 e 1/2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento químico"
        ],
        preparo: [
            "Preaqueça o forno a 180°C.",
            "Bata as cenouras, os ovos e o óleo no liquidificador.",
            "Misture o açúcar e a farinha em uma tigela.",
            "Acrescente a mistura do liquidificador.",
            "Adicione o fermento delicadamente.",
            "Coloque em uma forma untada e asse por cerca de 40 minutos, até passar no teste do palito."
        ],
        chaves: ["cenoura", "ovo", "oleo", "acucar", "farinha", "fermento"]
    },
    {
        id: 2,
        nome: "Brigadeiro",
        categoria: "Doces",
        pais: "Brasil",
        tempo: "20 min",
        porcoes: "20 unidades",
        imagem: "imagens/brigadeiro.jpg",
        ingredientes: [
            "1 lata de leite condensado",
            "1 colher de sopa de manteiga",
            "3 colheres de sopa de chocolate em pó",
            "Granulado para decorar"
        ],
        preparo: [
            "Misture o leite condensado, a manteiga e o chocolate em uma panela.",
            "Cozinhe em fogo baixo, mexendo constantemente.",
            "Desligue quando desgrudar do fundo da panela.",
            "Deixe esfriar completamente.",
            "Enrole e passe no granulado."
        ],
        chaves: ["leite condensado", "manteiga", "chocolate", "granulado"]
    },
    {
        id: 3,
        nome: "Coxinha de Frango",
        categoria: "Salgados",
        pais: "Brasil",
        tempo: "90 min",
        porcoes: "20 unidades",
        imagem: "imagens/coxinha-frango.jpg",
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
            "Ferva o caldo de frango com a manteiga.",
            "Acrescente a farinha e mexa até formar uma massa.",
            "Deixe amornar e modele as coxinhas com o recheio.",
            "Passe nos ovos e na farinha de rosca.",
            "Frite com cuidado em óleo quente até dourar."
        ],
        chaves: ["frango", "farinha", "manteiga", "cebola", "ovo", "farinha de rosca", "oleo"]
    },
    {
        id: 4,
        nome: "Macarrão ao Molho de Tomate",
        categoria: "Massas",
        pais: "Itália",
        tempo: "30 min",
        porcoes: "4 porções",
        imagem: "imagens/macarrao-tomate.jpg",
        ingredientes: [
            "400 g de macarrão",
            "2 xícaras de molho de tomate",
            "2 dentes de alho",
            "1 colher de sopa de azeite",
            "Sal a gosto",
            "Manjericão a gosto"
        ],
        preparo: [
            "Cozinhe o macarrão conforme as instruções da embalagem.",
            "Aqueça o azeite e refogue o alho.",
            "Adicione o molho de tomate e cozinhe por 10 minutos.",
            "Escorra o macarrão.",
            "Misture com o molho e finalize com manjericão."
        ],
        chaves: ["macarrao", "molho de tomate", "alho", "azeite", "manjericao"]
    },
    {
        id: 5,
        nome: "Pudim de Leite Condensado",
        categoria: "Doces",
        pais: "Brasil",
        tempo: "90 min + geladeira",
        porcoes: "8 porções",
        imagem: "imagens/pudim.jpg",
        ingredientes: [
            "1 lata de leite condensado",
            "A mesma medida de leite",
            "3 ovos",
            "1 xícara de açúcar",
            "1/2 xícara de água"
        ],
        preparo: [
            "Prepare uma calda com o açúcar e a água, tomando cuidado com o caramelo quente.",
            "Espalhe a calda na forma de pudim.",
            "Bata o leite condensado, o leite e os ovos.",
            "Despeje na forma.",
            "Asse em banho-maria a 180°C por aproximadamente 60 minutos, até firmar.",
            "Deixe esfriar e leve à geladeira por pelo menos 4 horas antes de desenformar."
        ],
        chaves: ["leite condensado", "leite", "ovo", "acucar", "agua"]
    },
    {
        id: 6,
        nome: "Pão de Queijo",
        categoria: "Salgados",
        pais: "Brasil",
        tempo: "40 min",
        porcoes: "25 unidades",
        imagem: "imagens/pao-queijo.jpg",
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
            "Modele bolinhas.",
            "Asse por aproximadamente 25 minutos, até dourar."
        ],
        chaves: ["polvilho", "leite", "oleo", "ovo", "queijo"]
    },
    {
        id: 7,
        nome: "Lasanha à Bolonhesa",
        categoria: "Massas",
        pais: "Itália",
        tempo: "60 min",
        porcoes: "6 porções",
        imagem: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=85",
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
            "Adicione a carne moída e cozinhe completamente.",
            "Acrescente o molho de tomate.",
            "Monte camadas de molho, massa e queijo.",
            "Repita as camadas até terminar.",
            "Asse a 180°C conforme as instruções da massa, até cozinhar e gratinar."
        ],
        chaves: ["massa de lasanha", "carne moida", "molho de tomate", "queijo", "cebola", "alho"]
    },
    {
        id: 8,
        nome: "Bolo de Chocolate",
        categoria: "Bolos",
        pais: "Brasil",
        tempo: "45 min",
        porcoes: "10 fatias",
        imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85",
        ingredientes: [
            "2 xícaras de farinha de trigo",
            "1 xícara de açúcar",
            "1 xícara de chocolate em pó",
            "3 ovos",
            "1 xícara de leite",
            "1/2 xícara de óleo",
            "1 colher de sopa de fermento químico"
        ],
        preparo: [
            "Preaqueça o forno a 180°C.",
            "Misture ovos, leite, óleo e açúcar.",
            "Adicione farinha e chocolate em pó.",
            "Mexa até obter uma massa uniforme.",
            "Acrescente o fermento.",
            "Asse em forma untada por cerca de 35 minutos, até passar no teste do palito."
        ],
        chaves: ["farinha", "acucar", "chocolate", "ovo", "leite", "oleo", "fermento"]
    },
    {
        id: 9,
        nome: "Suco de Laranja",
        categoria: "Bebidas",
        pais: "Brasil",
        tempo: "10 min",
        porcoes: "2 copos",
        imagem: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=85",
        ingredientes: [
            "5 laranjas",
            "Gelo a gosto",
            "Água, se necessário"
        ],
        preparo: [
            "Lave e corte as laranjas.",
            "Esprema o suco.",
            "Acrescente um pouco de água, se desejar.",
            "Sirva com gelo."
        ],
        chaves: ["laranja", "gelo"]
    },
    {
        id: 10,
        nome: "Vitamina de Banana",
        categoria: "Bebidas",
        pais: "Brasil",
        tempo: "5 min",
        porcoes: "2 copos",
        imagem: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=85",
        ingredientes: [
            "2 bananas maduras",
            "400 ml de leite",
            "2 colheres de sopa de aveia",
            "Canela a gosto"
        ],
        preparo: [
            "Descasque e corte as bananas.",
            "Coloque os ingredientes no liquidificador.",
            "Bata até ficar cremoso.",
            "Sirva imediatamente."
        ],
        chaves: ["banana", "leite", "aveia", "canela"]
    },
    {
        id: 11,
        nome: "Panqueca Americana",
        categoria: "Massas",
        pais: "Estados Unidos",
        tempo: "25 min",
        porcoes: "8 unidades",
        imagem: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=85",
        ingredientes: [
            "1 xícara de farinha de trigo",
            "1 ovo",
            "3/4 de xícara de leite",
            "1 colher de sopa de açúcar",
            "1 colher de sopa de manteiga derretida",
            "1 colher de chá de fermento químico"
        ],
        preparo: [
            "Misture a farinha, o açúcar e o fermento.",
            "Adicione o ovo, o leite e a manteiga.",
            "Misture até formar uma massa homogênea.",
            "Aqueça uma frigideira antiaderente.",
            "Coloque pequenas porções de massa.",
            "Vire quando surgirem bolhas e cozinhe o outro lado até dourar."
        ],
        chaves: ["farinha", "ovo", "leite", "acucar", "manteiga", "fermento"]
    },
    {
        id: 12,
        nome: "Crepe Francês",
        categoria: "Massas",
        pais: "França",
        tempo: "30 min",
        porcoes: "6 unidades",
        imagem: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=85",
        ingredientes: [
            "1 xícara de farinha de trigo",
            "2 ovos",
            "1 xícara de leite",
            "1 colher de sopa de manteiga derretida",
            "1 pitada de sal"
        ],
        preparo: [
            "Bata a farinha, os ovos, o leite, a manteiga e o sal.",
            "Deixe a massa descansar por 10 minutos.",
            "Aqueça uma frigideira antiaderente.",
            "Espalhe uma camada fina de massa.",
            "Doure dos dois lados.",
            "Sirva com o recheio de sua preferência."
        ],
        chaves: ["farinha", "ovo", "leite", "manteiga"]
    }
];

// ==========================================
// 2. ELEMENTOS DO HTML
// ==========================================

const gradeReceitas = document.getElementById("grade-receitas");
const resultadoBusca = document.getElementById("resultado-busca");

const modalReceita = document.getElementById("modal-receita");
const detalhesReceita = document.getElementById("detalhes-receita");
const fecharReceita = document.getElementById("fechar-receita");
const voltarReceitas = document.getElementById("voltar-receitas");

const campoBusca = document.getElementById("campo-busca");
const formBusca = document.getElementById("form-busca");

const listaIngredientes = document.getElementById("lista-ingredientes");
const resultadoIngredientes = document.getElementById("resultado-ingredientes");

let ultimoFoco = null;

// ==========================================
// 3. MOSTRAR CARDS DAS RECEITAS
// ==========================================

function mostrarReceitas(lista, mensagem = "") {
    gradeReceitas.innerHTML = "";

    resultadoBusca.textContent = mensagem;

    if (lista.length === 0) {
        gradeReceitas.innerHTML = `
            <p class="mensagem-vazia">
                Nenhuma receita encontrada. Tente outra pesquisa. 🍃
            </p>
        `;
        return;
    }

    lista.forEach(receita => {
        const card = document.createElement("article");
        card.className = "receita-card";

        card.innerHTML = `
            <img
                src="${receita.imagem}"
                alt="Imagem da receita ${receita.nome}"
                loading="lazy"
            >

            <div class="receita-card-conteudo">

                <span class="receita-categoria">
                    ${receita.categoria}
                </span>

                <h3>${receita.nome}</h3>

                <div class="receita-informacoes">
                    <span>⏱ ${receita.tempo}</span>
                    <span>🍽 ${receita.porcoes}</span>
                </div>

                <button type="button" data-receita="${receita.id}">
                    Ver receita →
                </button>

            </div>
        `;

        gradeReceitas.appendChild(card);
    });
}

// ==========================================
// 4. ABRIR DETALHES DE UMA RECEITA
// ==========================================

function abrirReceita(id) {
    const receita = receitas.find(item => item.id === id);

    if (!receita) return;

    ultimoFoco = document.activeElement;

    const ingredientesHTML = receita.ingredientes
        .map(item => `<li>${item}</li>`)
        .join("");

    const preparoHTML = receita.preparo
        .map(item => `<li>${item}</li>`)
        .join("");

    detalhesReceita.innerHTML = `
        <img
            class="modal-imagem"
            src="${receita.imagem}"
            alt="Imagem de ${receita.nome}"
        >

        <div class="modal-corpo">

            <span class="receita-categoria">
                ${receita.categoria} • ${receita.pais}
            </span>

            <h2 id="modal-titulo">${receita.nome}</h2>

            <div class="modal-meta">
                <span>⏱ ${receita.tempo}</span>
                <span>🍽 ${receita.porcoes}</span>
            </div>

            <h3>Ingredientes</h3>
            <ul>${ingredientesHTML}</ul>

            <h3>Modo de preparo</h3>
            <ol>${preparoHTML}</ol>

        </div>
    `;

    modalReceita.classList.remove("escondido");
    document.body.style.overflow = "hidden";

    fecharReceita.focus();
}

function fecharModal() {
    modalReceita.classList.add("escondido");
    document.body.style.overflow = "";

    if (ultimoFoco && ultimoFoco.isConnected) {
        ultimoFoco.focus();
    }
}

fecharReceita.addEventListener("click", fecharModal);
voltarReceitas.addEventListener("click", fecharModal);

modalReceita.addEventListener("click", event => {
    if (event.target === modalReceita) {
        fecharModal();
    }
});

document.addEventListener("keydown", event => {
    if (modalReceita.classList.contains("escondido")) return;

    if (event.key === "Escape") {
        fecharModal();
    }

    if (event.key === "Tab") {
        const botoes = modalReceita.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled])'
        );

        if (!botoes.length) return;

        const primeiro = botoes[0];
        const ultimo = botoes[botoes.length - 1];

        if (event.shiftKey && document.activeElement === primeiro) {
            event.preventDefault();
            ultimo.focus();
        } else if (!event.shiftKey && document.activeElement === ultimo) {
            event.preventDefault();
            primeiro.focus();
        }
    }
});

// Botões criados dinamicamente
gradeReceitas.addEventListener("click", event => {
    const botao = event.target.closest("[data-receita]");

    if (botao) {
        abrirReceita(Number(botao.dataset.receita));
    }
});

// ==========================================
// 5. FILTRAR RECEITAS POR CATEGORIA
// ==========================================

function marcarFiltro(categoria) {
    document.querySelectorAll(".filtro").forEach(botao => {
        const ativo = botao.dataset.filtro === categoria;

        botao.classList.toggle("ativo", ativo);
        botao.setAttribute("aria-pressed", String(ativo));
    });
}

function filtrarCategoria(categoria) {
    const lista = categoria === "Todas"
        ? receitas
        : receitas.filter(receita => receita.categoria === categoria);

    campoBusca.value = "";
    marcarFiltro(categoria);

    const mensagem = categoria === "Todas"
        ? `${lista.length} receitas disponíveis`
        : `${lista.length} receitas na categoria ${categoria}`;

    mostrarReceitas(lista, mensagem);

    document.getElementById("receitas").scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelectorAll(".filtro").forEach(botao => {
    botao.addEventListener("click", () => {
        filtrarCategoria(botao.dataset.filtro);
    });
});

document.querySelectorAll(".categoria-card").forEach(botao => {
    botao.addEventListener("click", () => {
        filtrarCategoria(botao.dataset.categoria);
    });
});

document.getElementById("ver-todas").addEventListener("click", () => {
    filtrarCategoria("Todas");
});

// ==========================================
// 6. PESQUISAR PELO NOME
// ==========================================

function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

formBusca.addEventListener("submit", event => {
    event.preventDefault();

    const termo = normalizar(campoBusca.value);

    const encontradas = receitas.filter(receita =>
        normalizar(receita.nome).includes(termo) ||
        normalizar(receita.categoria).includes(termo) ||
        normalizar(receita.pais).includes(termo)
    );

    document.querySelectorAll(".filtro").forEach(botao => {
        botao.classList.remove("ativo");
        botao.setAttribute("aria-pressed", "false");
    });

    mostrarReceitas(
        encontradas,
        `${encontradas.length} resultado(s) encontrado(s)`
    );

    document.getElementById("receitas").scrollIntoView({
        behavior: "smooth"
    });
});

// ==========================================
// 7. RECEITAS POR PAÍS
// ==========================================

document.querySelectorAll(".pais-card").forEach(botao => {
    botao.addEventListener("click", () => {
        const pais = botao.dataset.pais;

        const encontradas = receitas.filter(
            receita => receita.pais === pais
        );

        marcarFiltro("");
        campoBusca.value = "";

        mostrarReceitas(
            encontradas,
            `${encontradas.length} receita(s) de ${pais}`
        );

        document.getElementById("receitas").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ==========================================
// 8. INGREDIENTES DISPONÍVEIS
// ==========================================

const ingredientesDisponiveis = [
    { chave: "ovo", nome: "🥚 Ovos" },
    { chave: "leite", nome: "🥛 Leite" },
    { chave: "farinha", nome: "🌾 Farinha de trigo" },
    { chave: "acucar", nome: "🍬 Açúcar" },
    { chave: "manteiga", nome: "🧈 Manteiga" },
    { chave: "queijo", nome: "🧀 Queijo" },
    { chave: "frango", nome: "🍗 Frango" },
    { chave: "cenoura", nome: "🥕 Cenoura" },
    { chave: "chocolate", nome: "🍫 Chocolate" },
    { chave: "banana", nome: "🍌 Banana" },
    { chave: "laranja", nome: "🍊 Laranja" },
    { chave: "macarrao", nome: "🍝 Macarrão" },
    { chave: "molho de tomate", nome: "🍅 Molho de tomate" },
    { chave: "leite condensado", nome: "🥫 Leite condensado" },
    { chave: "fermento", nome: "🥣 Fermento" },
    { chave: "oleo", nome: "🫒 Óleo" },
    { chave: "alho", nome: "🧄 Alho" },
    { chave: "cebola", nome: "🧅 Cebola" },
    { chave: "polvilho", nome: "🌾 Polvilho" },
    { chave: "aveia", nome: "🥣 Aveia" },
    { chave: "canela", nome: "🌿 Canela" },
    { chave: "granulado", nome: "🍫 Granulado" },
    { chave: "agua", nome: "💧 Água" },
    { chave: "gelo", nome: "🧊 Gelo" },
    { chave: "azeite", nome: "🫒 Azeite" },
    { chave: "manjericao", nome: "🌿 Manjericão" },
    { chave: "carne moida", nome: "🥩 Carne moída" },
    { chave: "massa de lasanha", nome: "🍝 Massa de lasanha" },
    { chave: "farinha de rosca", nome: "🍞 Farinha de rosca" }
];

const selecionados = new Set();

ingredientesDisponiveis.forEach(ingrediente => {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "ingrediente-opcao";
    botao.textContent = ingrediente.nome;
    botao.setAttribute("aria-pressed", "false");

    botao.addEventListener("click", () => {
        if (selecionados.has(ingrediente.chave)) {
            selecionados.delete(ingrediente.chave);
        } else {
            selecionados.add(ingrediente.chave);
        }

        const ativo = selecionados.has(ingrediente.chave);

        botao.classList.toggle("selecionado", ativo);
        botao.setAttribute("aria-pressed", String(ativo));
    });

    listaIngredientes.appendChild(botao);
});

// ==========================================
// 9. ENCONTRAR RECEITAS POR INGREDIENTES
// ==========================================

function nomeIngrediente(chave) {
    const ingrediente = ingredientesDisponiveis.find(
        item => item.chave === chave
    );

    return ingrediente
        ? ingrediente.nome.replace(/^[^\p{L}\p{N}]+/u, "").trim()
        : chave;
}

document.getElementById("buscar-ingredientes").addEventListener(
    "click",
    () => {
        resultadoIngredientes.innerHTML = "";

        if (selecionados.size === 0) {
            resultadoIngredientes.innerHTML = `
                <p>Selecione pelo menos um ingrediente para começar. 🌿</p>
            `;
            return;
        }

        const resultados = receitas.map(receita => {
            const encontrados = receita.chaves.filter(
                chave => selecionados.has(chave)
            );

            const faltantes = receita.chaves.filter(
                chave => !selecionados.has(chave)
            );

            return {
                receita,
                encontrados,
                faltantes,
                porcentagem: Math.round(
                    (encontrados.length / receita.chaves.length) * 100
                )
            };
        })
        .filter(item => item.encontrados.length > 0)
        .sort((a, b) =>
            b.porcentagem - a.porcentagem ||
            a.faltantes.length - b.faltantes.length
        );

        if (resultados.length === 0) {
            resultadoIngredientes.innerHTML = `
                <p>Não encontramos receitas com esses ingredientes.
                Experimente selecionar outros.</p>
            `;
            return;
        }

        const titulo = document.createElement("h4");
        titulo.textContent = "Receitas que combinam com sua cozinha:";
        resultadoIngredientes.appendChild(titulo);

        resultados.slice(0, 5).forEach(item => {
            const div = document.createElement("div");
            div.className = "sugestao-receita";

            const faltantes = item.faltantes.map(nomeIngrediente);

            const descricao = faltantes.length === 0
                ? "Você tem todos os ingredientes principais cadastrados! 🎉"
                : `Ainda faltam: ${faltantes.join(", ")}.`;

            div.innerHTML = `
                <strong>${item.receita.nome}</strong>

                <p>
                    ${item.porcentagem}% dos ingredientes principais disponíveis.
                    ${descricao}
                </p>

                <button type="button">
                    Ver receita →
                </button>
            `;

            div.querySelector("button").addEventListener("click", () => {
                abrirReceita(item.receita.id);
            });

            resultadoIngredientes.appendChild(div);
        });

        const observacao = document.createElement("p");
        observacao.textContent =
            "A comparação considera os ingredientes principais cadastrados. " +
            "Confira a lista completa da receita antes de cozinhar.";

        resultadoIngredientes.appendChild(observacao);
    }
);

// ==========================================
// 10. MENU RESPONSIVO
// ==========================================

const botaoMenu = document.getElementById("botao-menu");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
    botaoMenu.textContent = aberto ? "✕" : "☰";
});

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.textContent = "☰";
    });
});

// ==========================================
// 11. INICIAR SITE
// ==========================================

marcarFiltro("Todas");
mostrarReceitas(receitas, `${receitas.length} receitas disponíveis`);