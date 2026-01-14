const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
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
  Integrações:
    "APIs, formulários e sistemas conectados.",
  "Assistência Técnica":
    "Manutenção e suporte especializado em informática.",
  "Manutenção Preventiva":
    "Mais desempenho, menos falhas e maior vida útil.",
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

  const name = form.elements["name"]?.value || document.getElementById("name").value;
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
