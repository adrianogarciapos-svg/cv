function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function initialsFrom(name) {
  return name
    .split(" ")
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function icon(name) {
  return `<span class="icon">${ICONS[name] ?? ""}</span>`;
}

function contactItem({ href, iconName, label, text, external = false }) {
  const rel = external ? ' rel="noopener noreferrer" target="_blank"' : "";
  return `
    <a class="contact-item" href="${escapeHtml(href)}"${rel}>
      <span class="contact-icon">${icon(iconName)}</span>
      <span class="contact-copy">
        <small>${escapeHtml(label)}</small>
        <strong>${escapeHtml(text)}</strong>
      </span>
    </a>
  `;
}

function displayLink(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function render() {
  document.title = `${CV.name} — Currículo`;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", `Currículo profissional de ${CV.name}, ${CV.title}.`);
  }

  const photo = CV.photo
    ? `<img class="avatar-img" src="${escapeHtml(CV.photo)}" alt="Foto de ${escapeHtml(CV.name)}">`
    : `<span class="avatar-initials">${escapeHtml(initialsFrom(CV.name))}</span>`;

  const skills = CV.skills
    .map(
      (skill) => `
        <div class="skill">
          <div class="skill-meta">
            <span>${escapeHtml(skill.name)}</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-bar" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${skill.level}" aria-label="${escapeHtml(skill.name)}">
            <span style="--level:${skill.level}%"></span>
          </div>
        </div>
      `
    )
    .join("");

  const languages = CV.languages
    .map(
      (lang) => `
        <div class="language">
          <div>
            <strong>${escapeHtml(lang.name)}</strong>
            <small>${escapeHtml(lang.level)}</small>
          </div>
          <div class="dots" aria-hidden="true">
            ${Array.from({ length: 5 }, (_, i) => `<i class="${i < lang.dots ? "on" : ""}"></i>`).join("")}
          </div>
        </div>
      `
    )
    .join("");

  const strengths = CV.strengths
    .map((item) => `<li>${icon("spark")}<span>${escapeHtml(item)}</span></li>`)
    .join("");

  const experience = CV.experience
    .map(
      (job) => `
        <article class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <header>
            <h3>${escapeHtml(job.role)}</h3>
            <span class="period">${escapeHtml(job.period)}</span>
          </header>
          <p class="place">${escapeHtml(job.company)} · ${escapeHtml(job.location)}</p>
          <ul>${job.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");

  const education = CV.education
    .map(
      (item) => `
        <article class="edu-card reveal">
          <h3>${escapeHtml(item.degree)}</h3>
          <p class="place">${escapeHtml(item.school)}</p>
          <span class="period">${escapeHtml(item.period)}</span>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `
    )
    .join("");

  const projects = CV.projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <header>
            <h3>${escapeHtml(project.name)}</h3>
            <a href="${escapeHtml(project.link)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${escapeHtml(project.name)}">
              ${icon("link")}
            </a>
          </header>
          <p>${escapeHtml(project.description)}</p>
          <ul class="tags">${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");

  const courses = CV.courses
    .map(
      (course) => `
        <li class="course-item reveal">
          <div>
            <strong>${escapeHtml(course.name)}</strong>
            <span>${escapeHtml(course.issuer)}</span>
          </div>
          <time>${escapeHtml(course.year)}</time>
        </li>
      `
    )
    .join("");

  document.getElementById("cv").innerHTML = `
    <aside class="sidebar">
      <div class="identity">
        <div class="avatar">${photo}</div>
        <p class="eyebrow">Currículo profissional</p>
        <h1>${escapeHtml(CV.name)}</h1>
        <p class="role">${escapeHtml(CV.title)}</p>
      </div>

      <section>
        <h2>${icon("pin")} Contato</h2>
        <div class="contact-list">
          ${contactItem({ href: `mailto:${CV.email}`, iconName: "mail", label: "E-mail", text: CV.email })}
          ${contactItem({ href: `tel:${CV.phone.replace(/\s/g, "")}`, iconName: "phone", label: "Telefone", text: CV.phone })}
          ${contactItem({ href: `https://wa.me/${CV.whatsapp}`, iconName: "whatsapp", label: "WhatsApp", text: CV.phone, external: true })}
          ${contactItem({ href: CV.linkedin, iconName: "linkedin", label: "LinkedIn", text: displayLink(CV.linkedin), external: true })}
          ${contactItem({ href: CV.github, iconName: "github", label: "GitHub", text: displayLink(CV.github), external: true })}
          ${contactItem({ href: CV.portfolio, iconName: "globe", label: "Portfólio", text: displayLink(CV.portfolio), external: true })}
          <div class="contact-item is-static">
            <span class="contact-icon">${icon("pin")}</span>
            <span class="contact-copy">
              <small>Endereço</small>
              <strong>${escapeHtml(CV.location)}</strong>
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2>${icon("spark")} Competências</h2>
        <div class="skills">${skills}</div>
      </section>

      <section>
        <h2>${icon("languages")} Idiomas</h2>
        <div class="languages">${languages}</div>
      </section>

      <section>
        <h2>${icon("user")} Diferenciais</h2>
        <ul class="strengths">${strengths}</ul>
      </section>
    </aside>

    <div class="main">
      <p class="lead">${escapeHtml(CV.tagline)}</p>

      <section>
        <h2>${icon("user")} Perfil</h2>
        <p class="about">${escapeHtml(CV.about)}</p>
      </section>

      <section>
        <h2>${icon("briefcase")} Experiência</h2>
        <div class="timeline">${experience}</div>
      </section>

      <section>
        <h2>${icon("graduation")} Formação</h2>
        <div class="edu-grid">${education}</div>
      </section>

      <section>
        <h2>${icon("folder")} Projetos</h2>
        <div class="project-grid">${projects}</div>
      </section>

      <section>
        <h2>${icon("book")} Cursos e certificações</h2>
        <ul class="courses">${courses}</ul>
      </section>
    </div>
  `;

  observeReveals();
  requestAnimationFrame(() => {
    document.querySelector(".sidebar")?.classList.add("is-ready");
  });
}

function observeReveals() {
  const nodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("cv-theme", theme);
  const button = document.getElementById("theme-toggle");
  const dark = theme === "dark";
  button.innerHTML = `${icon(dark ? "sun" : "moon")}<span>${dark ? "Claro" : "Escuro"}</span>`;
  button.setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
}

function initTools() {
  const saved = localStorage.getItem("cv-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(saved || preferred);

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  document.getElementById("print-btn").addEventListener("click", () => window.print());
}

document.addEventListener("DOMContentLoaded", () => {
  initTools();
  render();
});
