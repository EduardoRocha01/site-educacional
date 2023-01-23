// Armazena a referência ao ícone de menu e os itens do menu
var menuIcon = document.getElementById("menu-icon");
var menuItems = document.querySelector(".menu-items");

// Adiciona um evento de clique ao ícone de menu
menuIcon.addEventListener("click", function() {
  // Alterna entre mostrar e esconder os itens do menu
  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
});

//escript de conteudo em janela

const paragrafos = document.querySelectorAll(".paragrafo");

paragrafos.forEach(function(paragrafo) {
  paragrafo.addEventListener("click", function() {
    const divId = `div${this.id.slice(-1)}`;
    const div = document.getElementById(divId);
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});


