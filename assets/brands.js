document.querySelectorAll('.menu-toggle').forEach((button)=>{
  const nav=document.getElementById(button.getAttribute('aria-controls'));
  if(!nav)return;
  button.addEventListener('click',()=>{
    const open=button.getAttribute('aria-expanded')!=='true';
    button.setAttribute('aria-expanded',String(open));
    button.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');
    nav.classList.toggle('open',open);
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    button.setAttribute('aria-expanded','false');
    button.setAttribute('aria-label','메뉴 열기');
    nav.classList.remove('open');
  }));
});
