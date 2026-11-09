(function(){
  const pages=[['index.html','Início'],['acoes.html','Ações'],['projetos.html','Projetos'],['equipe.html','Equipe'],['historia.html','História']];
  const cur=location.pathname.split('/').pop()||'index.html';
  const links=pages.map(([h,t])=>`<li><a href="${h}"${h===cur?' aria-current="page"':''}>${t}</a></li>`).join('');
  document.getElementById('site-header').innerHTML=`<div class="wrap"><a class="brand" href="index.html" aria-label="LIAD - página inicial"><img src="assets/logo.png" alt="LIAD - Liga Acadêmica de Dados"></a><button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button><nav id="nav" aria-label="Principal"><ul>${links}</ul></nav></div>`;
  document.getElementById('site-footer').innerHTML=`<div class="wrap"><span>LIAD - Liga Acadêmica de Dados, UNINASSAU Boa Viagem</span><span>@liaduninassaubv</span></div>`;
  const b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
  b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
})();
