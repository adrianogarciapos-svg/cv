// ===== Dados do Currículo — Adriano Garcia do Nascimento =====
const cvData = {
  nome: "Adriano Garcia do Nascimento",
  titulo: "Especialista em Infraestrutura de TI",
  localizacao: "São Paulo, SP",
  resumo: "Profissional com mais de 16 anos de experiência em infraestrutura de TI, reestruturação de datacenters, redes, servidores e telefonia. Líder de projetos de infraestrutura com atuação em metodologias ágeis e gestão de equipes. Portador de visão monocular, sem necessidade de adaptação no ambiente de trabalho.",
  social: [
    { icon: "fab fa-linkedin-in", url: "https://linkedin.com", label: "LinkedIn" },
  ],
  contato: [
    { icon: "fas fa-phone", label: "Telefone", value: "(11) 98638-2132", link: "tel:+5511986382132" },
    { icon: "fas fa-envelope", label: "E-mail", value: "adriano.nascimento@gmail.com", link: "mailto:adriano.nascimento@gmail.com" },
    { icon: "fas fa-map-marker-alt", label: "Localização", value: "São Paulo, SP", link: null },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", value: "linkedin.com/in/", link: "https://linkedin.com" },
  ],
  idiomas: [
    { nome: "Português", nivel: 100 },
  ],
  competencias: [
    "Infraestrutura de TI",
    "Datacenter",
    "Redes e Cabeamento",
    "Servidores Windows / UNIX",
    "Telefonia e URA",
    "Gestão de Projetos",
    "Metodologias Ágeis",
    "ITIL V3",
    "Firewall e Segurança",
    "Backup & Restore",
  ],
  ferramentas: [
    "Windows Server",
    "UNIX / Linux",
    "VNC",
    "OSB",
    "Datacare",
    "GTEC",
    "Control Tower",
  ],
  formacao: [
    { curso: "Tecnologia em Redes de Computadores", instituicao: "Centro Universitário Sant'Anna", periodo: "2011", tipo: "Graduação" },
    { curso: "ITIL V3 Foundations", instituicao: "Spread Teleinformática", periodo: "2011", tipo: "Certificação" },
    { curso: "Configuração e Integração de Redes", instituicao: "Centro Universitário Sant'Anna", periodo: "2011", tipo: "Curso" },
    { curso: "Cabeamento e Tecnologias", instituicao: "Centro Universitário Sant'Anna", periodo: "2011", tipo: "Curso" },
    { curso: "Windows NT 4.0 Server", instituicao: "ACR Informática", periodo: "", tipo: "Curso" },
    { curso: "Visual Basic 6.0, HTML e ASP", instituicao: "ACR Informática", periodo: "", tipo: "Curso" },
    { curso: "Aprendendo a Empreender", instituicao: "Sebrae", periodo: "", tipo: "Curso" },
  ],
  experiencia: [
    {
      cargo: "Líder de Projetos de Infraestrutura",
      empresa: "Cielo S/A",
      periodo: "2014 — Atual",
      atividades: [
        "Ponto focal de Engenharia de Infraestrutura em frentes do projeto BoB",
        "Suporte às áreas de negócios e sistemas em demandas de infraestrutura",
        "Gerenciamento de projetos no modelo ágil",
        "Controle de recursos, licenças e cronogramas de entregas",
      ],
    },
    {
      cargo: "Analista de Suporte",
      empresa: "Atos Origin",
      periodo: "2012 — 2013",
      atividades: [
        "Suporte a usuários e manutenção de microcomputadores",
        "Resolução de incidentes em N1 e criação de contas de rede",
        "Criação de manuais de procedimentos técnicos",
      ],
    },
    {
      cargo: "Operador de Servidor",
      empresa: "Spread Teleinformática",
      periodo: "2010 — 2011",
      atividades: [
        "Monitoramento de servidores, backups, voz e e-mail",
        "Operação de backup: agentes, políticas, fitas e restore",
      ],
    },
    {
      cargo: "Auxiliar de Informática",
      empresa: "Breakfast Comercial",
      periodo: "2009 — 2010",
      atividades: [
        "Suporte por telefone, conexão remota e visita técnica",
        "Implantação de sistema de gestão online",
      ],
    },
  ],
  projetos: [
    { titulo: "Reestruturação do Control Tower", periodo: "2015 — 2016", descricao: "Reestruturação de infraestrutura do Control Tower em ambiente corporativo." },
    { titulo: "Implantação Datacare", periodo: "2016 — 2017", descricao: "Ferramenta de qualidade de dados para bases SEC e STAR." },
    { titulo: "Segregação OSB Batch-Online", periodo: "2017 — 2018", descricao: "Segregação do barramento OSB para maior estabilidade." },
    { titulo: "Ambiente GTEC — Release 4", periodo: "2018 — 2019", descricao: "Instalação do ambiente de TI do GTEC release 4." },
    { titulo: "Integração URA com STAR", periodo: "2019 — 2020", descricao: "Integração da URA com STAR nos releases 5 e 6." },
  ],
};

// ===== Renderização =====
function renderProfile() {
  document.getElementById("profileName").textContent = cvData.nome;
  document.getElementById("profileHeadline").textContent = cvData.titulo;
  document.getElementById("profileLocation").innerHTML =
    `<i class="fas fa-map-marker-alt"></i> ${cvData.localizacao}`;
  document.getElementById("aboutText").textContent = cvData.resumo;
  document.getElementById("footerName").textContent = cvData.nome;

  document.getElementById("heroActions").innerHTML = `
    <a href="mailto:adriano.nascimento@gmail.com" class="btn btn-primary">
      <i class="fas fa-envelope"></i> Contato
    </a>
    ${cvData.social.map((s) =>
      `<a href="${s.url}" target="_blank" rel="noopener" class="btn btn-ghost">
        <i class="${s.icon}"></i> ${s.label}
      </a>`
    ).join("")}
  `;
}

function renderContato() {
  document.getElementById("contatoList").innerHTML = cvData.contato
    .map((c) => `
    <li>
      <div class="contact-field">
        <label><i class="${c.icon}"></i> ${c.label}</label>
        ${c.link
          ? `<a href="${c.link}"${c.link.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${c.value}</a>`
          : `<span>${c.value}</span>`}
      </div>
    </li>`)
    .join("");
}

function renderIdiomas() {
  document.getElementById("idiomasList").innerHTML = cvData.idiomas
    .map((l) => `
    <div class="lang-item">
      <div class="lang-header">
        <span class="lang-name">${l.nome}</span>
        <span class="lang-pct">${l.nivel}%</span>
      </div>
      <div class="lang-bar">
        <div class="lang-bar-fill" style="width: ${l.nivel}%"></div>
      </div>
    </div>`)
    .join("");
}

function renderSkills() {
  document.getElementById("skillsList").innerHTML = cvData.competencias
    .map((s) => `<span class="badge">${s}</span>`)
    .join("");
}

function renderTools() {
  document.getElementById("toolsList").innerHTML = cvData.ferramentas
    .map((s) => `<span class="badge">${s}</span>`)
    .join("");
}

function renderExperiencia() {
  document.getElementById("experienciaList").innerHTML = cvData.experiencia
    .map((e) => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="entry-title">${e.cargo}</div>
        <div class="entry-sub">${e.empresa}</div>
        <span class="entry-date label-sm">${e.periodo}</span>
        <ul>${e.atividades.map((a) => `<li>${a}</li>`).join("")}</ul>
      </div>
    </div>`)
    .join("");
}

function renderFormacao() {
  document.getElementById("formacaoList").innerHTML = cvData.formacao
    .map((f) => `
    <div class="entry">
      <div class="entry-header">
        <div>
          <div class="entry-title">${f.curso}</div>
          <div class="entry-sub">${f.instituicao}</div>
        </div>
        ${f.periodo ? `<span class="entry-date">${f.periodo}</span>` : ""}
      </div>
    </div>`)
    .join("");
}

function renderProjetos() {
  document.getElementById("projetosList").innerHTML = cvData.projetos
    .map((p) => `
    <div class="project-card">
      <h3>${p.titulo}</h3>
      <span class="entry-date">${p.periodo}</span>
      <p>${p.descricao}</p>
    </div>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderContato();
  renderIdiomas();
  renderSkills();
  renderTools();
  renderExperiencia();
  renderFormacao();
  renderProjetos();
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
