// ===== Dados do Currículo — Adriano Garcia do Nascimento =====
const cvData = {
  nome: "Adriano Garcia do Nascimento",
  titulo: "Líder de Infraestrutura e Cloud",
  localizacao: "São Paulo, SP · Híbrido",
  tagline: "Lidero ambientes híbridos, cloud e plataformas de missão crítica — conectando operação, segurança e entrega contínua em empresas de alta escala.",
  resumo: "Profissional de infraestrutura com mais de 16 anos em ambientes corporativos de alta disponibilidade. Atua na fronteira entre datacenter, cloud e engenharia de plataformas: desenha arquiteturas híbridas, conduz migrações, automatiza operação e traduz demanda de negócio em capacidade confiável. Experiência em liderança de projetos ágeis, gestão de fornecedores e times multidisciplinares. Pessoa com deficiência (visão monocular), com atuação plena e sem necessidade de adaptação no ambiente de trabalho.",
  stats: [
    { valor: "16+", label: "Anos de experiência" },
    { valor: "12+", label: "Anos em ambientes críticos" },
    { valor: "Cloud", label: "Híbrida & multi-cloud" },
    { valor: "ITIL 4", label: "Operação e governança" },
  ],
  social: [
    { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/adrianogarcianascimento", label: "LinkedIn" },
  ],
  contato: [
    { icon: "fas fa-phone", label: "Telefone", value: "(11) 98638-2132", link: "tel:+5511986382132" },
    { icon: "fas fa-envelope", label: "E-mail", value: "adriano.nascimento@gmail.com", link: "mailto:adriano.nascimento@gmail.com" },
    { icon: "fas fa-map-marker-alt", label: "Localização", value: "São Paulo, SP", link: null },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", value: "linkedin.com/in/adrianogarcianascimento", link: "https://linkedin.com/in/adrianogarcianascimento" },
  ],
  idiomas: [
    { nome: "Português", nivel: 100, label: "Nativo" },
    { nome: "Inglês", nivel: 72, label: "Profissional (B2)" },
  ],
  competencias: [
    "Arquitetura híbrida e cloud",
    "Datacenter e alta disponibilidade",
    "Redes, firewall e Zero Trust",
    "Linux e Windows Server",
    "Automação e Infrastructure as Code",
    "Observabilidade e SRE",
    "Disaster Recovery e BCP",
    "Gestão de projetos ágeis",
    "ITIL 4 / governança de TI",
    "FinOps e gestão de capacidade",
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
    { curso: "Tecnologia em Redes de Computadores", instituicao: "Centro Universitário Sant'Anna", periodo: "2011", tipo: "Graduação" },
    { curso: "ITIL 4 Foundation", instituicao: "PeopleCert", periodo: "2023", tipo: "Certificação" },
    { curso: "Microsoft Azure Fundamentals (AZ-900)", instituicao: "Microsoft", periodo: "2022", tipo: "Certificação" },
    { curso: "AWS Cloud Practitioner", instituicao: "Amazon Web Services", periodo: "2024", tipo: "Certificação" },
  ],
  experiencia: [
    {
      cargo: "Líder de Engenharia de Infraestrutura",
      empresa: "Cielo S/A",
      periodo: "2020 — Atual",
      atividades: [
        "Lidero a estratégia de infraestrutura híbrida, conectando datacenter, Azure e AWS para plataformas de pagamentos de missão crítica.",
        "Conduzo programas de modernização, automação (IaC) e observabilidade, reduzindo tempo de provisionamento e aumentando previsibilidade operacional.",
        "Atuo como ponto focal de engenharia junto a negócios, segurança e fornecedores — priorizando backlog, capacidade, licenças e SLAs.",
        "Implanto práticas de ITIL 4, gestão de incidentes major e disaster recovery em ambientes 24×7.",
      ],
    },
    {
      cargo: "Especialista de Infraestrutura",
      empresa: "Cielo S/A",
      periodo: "2014 — 2020",
      atividades: [
        "Fui ponto focal de Engenharia de Infraestrutura em frentes estratégicas (incluindo BoB), alinhando sistemas, redes e capacidade.",
        "Participei da reestruturação de datacenter, segregação de ambientes críticos e integração de canais (URA, barramentos e bases transacionais).",
        "Gerenciei entregas no modelo ágil, com controle de cronograma, recursos e dependências entre squads.",
      ],
    },
    {
      cargo: "Analista de Infraestrutura e Suporte",
      empresa: "Atos",
      periodo: "2012 — 2013",
      atividades: [
        "Atendi incidentes e requisições em ambiente corporativo, com foco em estabilidade de estações, contas de rede e procedimentos padrão.",
        "Documentei runbooks técnicos e apoiei a transição de conhecimento entre operação e times de infraestrutura.",
      ],
    },
  ],
  projetos: [
    {
      titulo: "Jornada híbrida para a nuvem",
      periodo: "2021 — 2024",
      descricao: "Desenho e execução da migração gradual de cargas do datacenter para Azure e AWS, com landing zone, conectividade segura e governança de custos (FinOps).",
    },
    {
      titulo: "Observabilidade e operação 24×7",
      periodo: "2020 — 2022",
      descricao: "Implantação de stack de monitoramento (métricas, logs e alertas) para reduzir MTTR e dar visibilidade ponta a ponta das plataformas críticas.",
    },
    {
      titulo: "Automação de provisionamento",
      periodo: "2019 — 2021",
      descricao: "Padronização de ambientes com Terraform e Ansible, eliminando provisionamento manual e acelerando releases de infraestrutura.",
    },
    {
      titulo: "Resiliência de plataformas transacionais",
      periodo: "2017 — 2019",
      descricao: "Segregação de ambientes batch e online e reforço de alta disponibilidade em barramentos e bases de pagamento, com ganho de estabilidade em picos.",
    },
    {
      titulo: "Modernização do Control Tower",
      periodo: "2015 — 2017",
      descricao: "Reestruturação da infraestrutura de operação e qualidade de dados, elevando confiabilidade do monitoramento corporativo.",
    },
  ],
};

// ===== Renderização =====
function renderProfile() {
  document.getElementById("profileName").textContent = cvData.nome;
  document.getElementById("profileHeadline").textContent = cvData.titulo;
  document.getElementById("profileLocation").innerHTML =
    `<i class="fas fa-map-marker-alt"></i> ${cvData.localizacao}`;
  document.getElementById("heroTagline").textContent = cvData.tagline;
  document.getElementById("aboutText").textContent = cvData.resumo;
  document.getElementById("footerName").textContent = cvData.nome;
  document.getElementById("navName").textContent = cvData.nome.split(" ")[0];

  document.getElementById("heroActions").innerHTML = `
    <a href="#contato" class="btn btn-primary">
      <i class="fas fa-paper-plane"></i> Fale comigo
    </a>
    <a href="#experiencia" class="btn btn-ghost">
      <i class="fas fa-briefcase"></i> Experiência
    </a>
    ${cvData.social.map((s) =>
      `<a href="${s.url}" target="_blank" rel="noopener" class="btn btn-ghost">
        <i class="${s.icon}"></i> ${s.label}
      </a>`
    ).join("")}
  `;
}

function renderStats() {
  document.getElementById("statsBar").innerHTML = cvData.stats
    .map((s) => `
    <div class="stat-card">
      <div class="stat-card__value">${s.valor}</div>
      <div class="stat-card__label">${s.label}</div>
    </div>`)
    .join("");
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
        <span class="lang-pct">${l.label || l.nivel + "%"}</span>
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

// ===== Navegação & interatividade =====
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const mobile = document.getElementById("navMobile");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar--scrolled", window.scrollY > 40);
  });

  toggle.addEventListener("click", () => {
    const open = mobile.classList.toggle("navbar__mobile--open");
    toggle.setAttribute("aria-expanded", open);
    toggle.innerHTML = open
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  mobile.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobile.classList.remove("navbar__mobile--open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id], .hero-landing[id]");
  const navLinks = document.querySelectorAll(".nav-link, .bottom-nav__item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;

        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          const isActive = href === `#${id}`;
          link.classList.toggle("nav-link--active", isActive && link.classList.contains("nav-link"));
          link.classList.toggle("bottom-nav__item--active", isActive && link.classList.contains("bottom-nav__item"));
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderStats();
  renderContato();
  renderIdiomas();
  renderSkills();
  renderTools();
  renderExperiencia();
  renderFormacao();
  renderProjetos();
  initNavbar();
  initScrollSpy();
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
