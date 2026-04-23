const navbar = document.getElementById('navbar');
const navbarContainer = document.getElementById('navbar-container');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > 100) {
    navbar.classList.add('bg-slate-950/80', 'backdrop-blur-xl', 'border-slate-800', 'shadow-2xl');
    navbar.classList.remove('border-transparent');
    
    navbarContainer.classList.add('h-16');
    navbarContainer.classList.remove('h-20');
    
    if (lastScrollTop <= 100) {
      navbar.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        navbar.style.transform = 'translateY(0)';
      }, 10);
    }
  } else {
    navbar.classList.remove('bg-slate-950/80', 'backdrop-blur-xl', 'border-slate-800', 'shadow-2xl');
    navbar.classList.add('border-transparent');
    
    navbarContainer.classList.add('h-20');
    navbarContainer.classList.remove('h-16');
    
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});
