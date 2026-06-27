// Agni Club — interactions
(function(){
  // Mobile menu
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  if(toggle && menu){
    toggle.addEventListener('click',()=>{
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded',menu.classList.contains('open'));
    });
    document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
  }
  // Mark active nav item
  const path = location.pathname.replace(/\/index\.html$/,'/').replace(/\/$/,'')||'/';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = a.getAttribute('href').replace(/\/index\.html$/,'/').replace(/\/$/,'')||'/';
    if(href === path) a.classList.add('active');
  });
  // Year
  const y = document.querySelector('[data-year]');
  if(y) y.textContent = new Date().getFullYear();
  // Lazy-load fade
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    },{rootMargin:'80px'});
    document.querySelectorAll('.feature,.related-card,.bonus-grid figure').forEach(el=>io.observe(el));
  }
  // Demo guide buttons (login/register/etc) - just shake to indicate placeholder
  document.querySelectorAll('[data-demo]').forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      e.preventDefault();
      btn.animate(
        [{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(0)'}],
        {duration:300}
      );
      const note = btn.parentElement.querySelector('.demo-note');
      if(note) note.style.display='block';
    });
  });
})();
