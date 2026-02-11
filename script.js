//fetch the menu from menu.html and add into placeholder
fetch('./menu.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('menu-placeholder').innerHTML = html;

    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.toc ul');

    if (!toggle || !menu) {
      console.error('Menu elements not found');
      return;
    }

    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  });


