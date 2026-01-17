const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* script para formulario de solicitação */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-modal");
const form = document.getElementById("service-form");

let selectedService = "";

const serviceDescriptions = {
  "Consultoria em TI":
    "Análise técnica, diagnóstico e orientação para melhorar segurança e desempenho.",
  "Criação de Sites":
    "Desenvolvimento de sites profissionais, rápidos e responsivos.",
  Automações:
    "Integrações e automações para otimizar processos e reduzir trabalho manual.",
  Integrações: "APIs, formulários e sistemas conectados.",
  "Assistência Técnica": "Manutenção e suporte especializado em informática.",
  "Manutenção Preventiva": "Mais desempenho, menos falhas e maior vida útil.",
};

// Abrir modal
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    selectedService = card.dataset.service;
    modalTitle.textContent = selectedService;
    modalDescription.textContent = serviceDescriptions[selectedService] || "";
    modal.classList.add("active");
  });
});

// Fechar modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

// Enviar WhatsApp
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name =
    form.elements["name"]?.value || document.getElementById("name").value;
  const contact = form.querySelector("#contact").value;
  const message = form.querySelector("#message").value;

  const text = `
Serviço: ${selectedService}
Nome: ${name}
Contato: ${contact}

Mensagem:
${message}
  `;

  const url = `https://wa.me/5592993006936?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});

const portfolioCards = document.querySelectorAll(".portfolio-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

portfolioCards.forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  observer.observe(card);
});

// Exibe a mensagem assim que a página carrega
const continuar = window.confirm(
  "Este site ainda está em processo de desenvolvimento, quer conhecer mesmo assim?"
);

if (!continuar) {
  // Se o usuário clicar em 'Cancelar' (Não), redireciona para o Google ou outra página
  window.location.href = "https://www.google.com";
}
// Se clicar em 'OK' (Sim), ele continua no seu site normalmente
