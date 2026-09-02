const cvData = {
  nome: "Adriano Garcia do Nascimento",
  titulo: "Líder de Infraestrutura e Cloud",
  localizacao: "São Paulo, SP",
  tagline:
    "Infraestrutura híbrida e cloud para ambientes de alta escala.",
  resumo: [
    "Mais de 16 anos em infraestrutura corporativa — da operação de datacenter à cloud híbrida, com foco em disponibilidade e entrega.",
    "Lidera programas de modernização, automação e operação 24×7. Pessoa com deficiência (visão monocular), com atuação plena e sem necessidade de adaptação.",
  ],
  contato: [
    { icon: "fa-solid fa-phone", label: "Telefone", value: "(11) 98638-2132", link: "tel:+5511986382132" },
    { icon: "fa-solid fa-envelope", label: "E-mail", value: "adriano.nascimento@gmail.com", link: "mailto:adriano.nascimento@gmail.com" },
    { icon: "fa-solid fa-location-dot", label: "Localização", value: "São Paulo, SP", link: null },
    {
      icon: "fa-brands fa-linkedin-in",
      label: "LinkedIn",
      value: "linkedin.com/in/adrianogarcianascimento",
      link: "https://linkedin.com/in/adrianogarcianascimento",
    },
  ],
  idiomas: [
    { nome: "Português", label: "Nativo" },
    { nome: "Inglês", label: "Profissional (B2)" },
  ],
  competencias: [
    "Cloud híbrida",
    "Datacenter",
    "Redes e segurança",
    "Linux / Windows Server",
    "Automação (IaC)",
    "Observabilidade",
    "Disaster Recovery",
    "ITIL 4",
    "FinOps",
  ],
  ferramentas: [
    "Microsoft Azure",
    "AWS",
    "Terraform",
    "Ansible",
    "Kubernetes",
    "VMware",
    "Grafana / Prometheus",
    "Zabbix",
    "ServiceNow",
    "Microsoft 365",
  ],
  formacao: [
    {
      curso: "Tecnologia em Redes de Computadores",
      instituicao: "Centro Universitário Sant'Anna",
      periodo: "2011",
    },
    { curso: "ITIL 4 Foundation", instituicao: "PeopleCert", periodo: "2023" },
    { curso: "Microsoft Azure Fundamentals (AZ-900)", instituicao: "Microsoft", periodo: "2022" },
    { curso: "AWS Cloud Practitioner", instituicao: "Amazon Web Services", periodo: "2024" },
  ],
  experiencia: [
    {
      cargo: "Líder de Engenharia de Infraestrutura",
      empresa: "Cielo S/A",
      periodo: "2020 — Atual",
      atividades: [
        "Estratégia híbrida (datacenter, Azure e AWS) para plataformas de pagamentos.",
        "Modernização, automação (IaC) e observabilidade, com operação 24×7 e ITIL 4.",
        "Interface com negócios, segurança e fornecedores — capacidade, licenças e SLAs.",
      ],
    },
    {
      cargo: "Especialista de Infraestrutura",
      empresa: "Cielo S/A",
      periodo: "2014 — 2020",
      atividades: [
        "Ponto focal de infraestrutura em frentes estratégicas, alinhando redes, sistemas e capacidade.",
        "Reestruturação de datacenter e entregas em modelo ágil.",
      ],
    },
    {
      cargo: "Analista de Infraestrutura e Suporte",
      empresa: "Atos",
      periodo: "2012 — 2013",
      atividades: [
        "Incidentes e requisições em ambiente corporativo, com padronização de procedimentos.",
      ],
    },
  ],
  projetos: [
    {
      titulo: "Jornada híbrida para a nuvem",
      periodo: "2021 — 2024",
      descricao:
        "Migração gradual para Azure e AWS, com landing zone e governança de custos.",
    },
    {
      titulo: "Observabilidade e operação 24×7",
      periodo: "2020 — 2022",
      descricao:
        "Monitoramento ponta a ponta para reduzir MTTR em plataformas críticas.",
    },
    {
      titulo: "Automação de provisionamento",
      periodo: "2019 — 2021",
      descricao:
        "Ambientes padronizados com Terraform e Ansible.",
    },
    {
      titulo: "Resiliência de plataformas transacionais",
      periodo: "2017 — 2019",
      descricao:
        "Alta disponibilidade em picos de pagamento, com ambientes batch e online segregados.",
    },
    {
      titulo: "Modernização do Control Tower",
      periodo: "2015 — 2017",
      descricao:
        "Infraestrutura de operação e qualidade de dados do monitoramento corporativo.",
    },
  ],
};

function renderProfile() {
  document.getElementById("profileName").textContent = cvData.nome;
  document.getElementById("profileHeadline").textContent = cvData.titulo;
  document.getElementById("heroTagline").textContent = cvData.tagline;
  document.getElementById("aboutText").innerHTML = cvData.resumo
    .map((p) => `<p>${p}</p>`)
    .join("");
  document.getElementById("footerName").textContent = cvData.nome;
}

function renderContato() {
  document.getElementById("contatoList").innerHTML = cvData.contato
    .map((c) => {
      const content = c.link
        ? `<a href="${c.link}"${c.link.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${c.value}</a>`
        : `<span>${c.value}</span>`;
      return `<li><i class="${c.icon}" aria-hidden="true"></i> ${content}</li>`;
    })
    .join("");
}

function renderIdiomas() {
  document.getElementById("idiomasList").innerHTML = cvData.idiomas
    .map(
      (l) => `
      <li class="lang-row">
        <span>${l.nome}</span>
        <span>${l.label}</span>
      </li>`
    )
    .join("");
}

function renderSkills() {
  document.getElementById("skillsList").innerHTML = cvData.competencias
    .map((s) => `<li>${s}</li>`)
    .join("");
}

function renderTools() {
  document.getElementById("toolsList").innerHTML = cvData.ferramentas
    .map((s) => `<li>${s}</li>`)
    .join("");
}

function renderExperiencia() {
  document.getElementById("experienciaList").innerHTML = cvData.experiencia
    .map(
      (e) => `
      <article class="role">
        <div class="role__head">
          <h3 class="role__title">${e.cargo}</h3>
          <span class="role__dates"><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${e.periodo}</span>
        </div>
        <p class="role__org"><i class="fa-solid fa-building" aria-hidden="true"></i> ${e.empresa}</p>
        <ul>${e.atividades.map((a) => `<li>${a}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
}

function renderFormacao() {
  document.getElementById("formacaoList").innerHTML = cvData.formacao
    .map(
      (f) => `
      <div class="edu-item">
        <div class="edu-item__course">${f.curso}</div>
        <div class="edu-item__meta"><i class="fa-solid fa-building-columns" aria-hidden="true"></i> ${f.instituicao}${f.periodo ? ` · ${f.periodo}` : ""}</div>
      </div>`
    )
    .join("");
}

function renderProjetos() {
  document.getElementById("projetosList").innerHTML = cvData.projetos
    .map(
      (p) => `
      <article class="program">
        <h3 class="program__title">${p.titulo}</h3>
        <span class="program__dates"><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${p.periodo}</span>
        <p class="program__desc">${p.descricao}</p>
      </article>`
    )
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
