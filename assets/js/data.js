/**
 * Edite apenas este arquivo para personalizar o currículo.
 * Depois recarregue a página.
 */
const CV = {
  name: "Marina Costa Almeida",
  title: "Desenvolvedora Full Stack",
  tagline: "Ciência da Computação · Interfaces acessíveis · Sistemas bem pensados",
  about:
    "Estudante de Ciência da Computação com foco em desenvolvimento web e experiência prática em produtos digitais. Gosto de transformar requisitos em interfaces claras, código organizado e entregas que realmente funcionam. Busco oportunidades para crescer em times que valorizam qualidade, colaboração e impacto.",

  location: "São Paulo, SP — Brasil",
  email: "marina.almeida@email.com",
  phone: "+55 11 98765-4321",
  whatsapp: "5511987654321",
  linkedin: "https://www.linkedin.com/in/marinaalmeida",
  github: "https://github.com/marinaalmeida",
  portfolio: "https://marinaalmeida.dev",
  photo: "", // Ex.: "assets/img/foto.jpg"

  skills: [
    { name: "HTML, CSS e JavaScript", level: 92 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 74 },
    { name: "Python", level: 70 },
    { name: "SQL / PostgreSQL", level: 68 },
    { name: "Git e GitHub", level: 88 },
    { name: "UI / UX", level: 76 },
  ],

  strengths: [
    "Trabalho em equipe",
    "Comunicação clara",
    "Resolução de problemas",
    "Organização",
    "Aprendizado rápido",
  ],

  languages: [
    { name: "Português", level: "Nativo", dots: 5 },
    { name: "Inglês", level: "Avançado (C1)", dots: 4 },
    { name: "Espanhol", level: "Intermediário (B1)", dots: 3 },
  ],

  experience: [
    {
      role: "Desenvolvedora Front-end (estágio)",
      company: "Nimbus Digital",
      period: "Mar 2025 — atual",
      location: "São Paulo, SP",
      items: [
        "Desenvolvi e mantive páginas institucionais e dashboards em HTML, CSS e JavaScript, com layout responsivo.",
        "Colaborei com design para padronizar componentes, espaçamentos e estados de erro/vazio.",
        "Melhorei a acessibilidade de formulários e navegação por teclado em fluxos internos.",
      ],
    },
    {
      role: "Monitora de Programação Web",
      company: "Universidade Federal de São Paulo",
      period: "Ago 2024 — Dez 2024",
      location: "São Paulo, SP",
      items: [
        "Auxiliei turma de 40 alunos em HTML, CSS, JavaScript e boas práticas de versionamento.",
        "Revisei projetos e orientei refatorações de layout, responsividade e organização de código.",
      ],
    },
    {
      role: "Freelance — Landing pages",
      company: "Projetos independentes",
      period: "2023 — 2024",
      location: "Remoto",
      items: [
        "Criei sites institucionais para pequenos negócios, com foco em performance e mobile-first.",
        "Integrei formulários de contato e links de WhatsApp, LinkedIn e redes sociais.",
      ],
    },
  ],

  education: [
    {
      degree: "Bacharelado em Ciência da Computação",
      school: "Universidade Federal de São Paulo (UNIFESP)",
      period: "2023 — 2026 (em andamento)",
      detail: "Ênfase em engenharia de software, banco de dados e desenvolvimento web. CRA 8,7.",
    },
    {
      degree: "Técnico em Informática",
      school: "ETEC de São Paulo",
      period: "2020 — 2022",
      detail: "Fundamentos de lógica, redes, banco de dados e desenvolvimento de sistemas.",
    },
  ],

  projects: [
    {
      name: "Atlas Financeiro",
      description:
        "Dashboard web para controle de gastos pessoais, com gráficos, categorias e persistência local.",
      tags: ["JavaScript", "Chart.js", "CSS Grid"],
      link: "https://github.com/marinaalmeida/atlas-financeiro",
    },
    {
      name: "Campus Connect",
      description:
        "Plataforma acadêmica para divulgação de eventos, grupos de estudo e oportunidades de iniciação científica.",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "https://github.com/marinaalmeida/campus-connect",
    },
    {
      name: "AcessaForm",
      description:
        "Biblioteca de componentes de formulário com foco em acessibilidade, validação e estados visuais claros.",
      tags: ["HTML", "ARIA", "CSS"],
      link: "https://github.com/marinaalmeida/acessaform",
    },
  ],

  courses: [
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2025",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2024",
    },
    {
      name: "Git e GitHub do básico ao avançado",
      issuer: "Udemy",
      year: "2024",
    },
    {
      name: "Fundamentos de UI Design",
      issuer: "Coursera",
      year: "2023",
    },
  ],
};
