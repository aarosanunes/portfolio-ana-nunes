// Seleciona todos os links do portfólio
const portfolioLinks = document.querySelectorAll('main ul li a');

// Adiciona evento para abrir os links em nova aba (se quiser)
portfolioLinks.forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});

// Efeito simples de destaque ao passar o mouse
portfolioLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#6200ee';
    link.style.textDecoration = 'underline';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = '';
    link.style.textDecoration = 'none';
  });
});
