
const projetos = [
    {
        titulo: "Sistema Liderança",
        descricao:
            "Sistema de gestão de pessoas com hierarquia, agenda, anexos, dashboard e histórico de ações, desenvolvido para organizar informações e rotinas de gestão.",
        tecnologias: ["Python", "React", "Supabase"],
        imagem: "src/imagens/sistemalideranca.png",
        demo: "",
        repositorio: ""
    },
    {
        titulo: "NutriTrack",
        descricao:
            "Aplicação para nutricionistas com cálculos automáticos e geração de planos alimentares, auxiliando na organização das informações e no atendimento profissional.",
        tecnologias: ["Python", "React", "Supabase"],
        imagem: "src/imagens/nutritrack.png",
        demo: "",
        repositorio: ""
    },
    {
        titulo: "Zero21 MultiMarcas",
        descricao:
            "Sistema de gestão comercial com controle de vendas, estoque, clientes, fornecedores, relatórios, registros de ações e backups.",
        tecnologias: ["Python", "SQLite"],
        imagem: "src/imagens/zero21.png",
        demo: "",
        repositorio: ""
    },
    {
        titulo: "PEX Gerenciador de Barbearia",
        descricao:
            "Aplicação web para barbearias com agendamento, estoque, contas a pagar, logs e relatórios.",
        tecnologias: ["Python", "FastAPI", "JavaScript"],
        imagem: "src/imagens/pexbarbearia.png",
        demo: "",
        repositorio: "https://github.com/GSantospy/PEXBarbearia"
    }
];

const section = document.getElementById("projetos");

function criarLink(url, texto, classe) {
    if (!url) {
        return `
            <span class="project-button ${classe} disabled"
                  aria-disabled="true">
                ${texto}
            </span>
        `;
    }

    return `
        <a class="project-button ${classe}"
           href="${url}"
           target="_blank"
           rel="noopener noreferrer">
            ${texto}
        </a>
    `;
}

function criarCapa(projeto) {
    if (projeto.imagem) {
        const imagem = document.createElement("img");
        imagem.src = projeto.imagem;
        imagem.alt = `Prévia do projeto ${projeto.titulo}`;
        imagem.loading = "lazy";
        imagem.decoding = "async";

        const capa = document.createElement("div");
        capa.className = "project-cover";
        capa.appendChild(imagem);

        return capa;
    }

    const capa = document.createElement("div");
    capa.className = "project-cover";

    const placeholder = document.createElement("div");
    placeholder.className = "cover-placeholder";

    const nome = document.createElement("strong");
    nome.textContent = projeto.titulo;

    const legenda = document.createElement("span");
    legenda.textContent = "Projeto de desenvolvimento";

    placeholder.append(nome, legenda);
    capa.appendChild(placeholder);

    return capa;
}

function criarProjeto(projeto) {
    const article = document.createElement("article");
    article.className = "project";

    article.appendChild(criarCapa(projeto));

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement("p");
    descricao.className = "project-description";
    descricao.textContent = projeto.descricao;

    const tecnologias = document.createElement("div");
    tecnologias.className = "project-tech";
    tecnologias.setAttribute("aria-label", "Tecnologias utilizadas");

    projeto.tecnologias.forEach(tecnologia => {
        const tag = document.createElement("span");
        tag.className = "tech-tag";
        tag.textContent = tecnologia;
        tecnologias.appendChild(tag);
    });

    const acoes = document.createElement("div");
    acoes.className = "project-actions";

    acoes.innerHTML =
        criarLink(projeto.demo, "ACESSAR", "demo") +
        criarLink(projeto.repositorio, "REPOSITÓRIO", "repository");

    article.append(titulo, descricao, tecnologias, acoes);

    return article;
}

projetos.forEach(projeto => {
    section.appendChild(criarProjeto(projeto));
});
