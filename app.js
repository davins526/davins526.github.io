const icons = {
  up: '<path d="M7 17 17 7M7 7h10v10"/>',
  down: '<path d="M12 5v14m-7-7 7 7 7-7"/>',
  github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 3v-3.1a2.7 2.7 0 0 0-.7-2.1c2.4-.3 4.9-1.1 4.9-5.4A4.2 4.2 0 0 0 18.1 5a4 4 0 0 0-.1-3s-1.2-.4-4 1.5a13.8 13.8 0 0 0-7 0C4.2 1.6 3 2 3 2a4 4 0 0 0-.1 3A4.2 4.2 0 0 0 1.8 8.4c0 4.3 2.5 5.1 4.9 5.4a2.7 2.7 0 0 0-.7 2.1V19" transform="translate(2 1) scale(.87)"/>',
  moon: '<path d="M20.7 13.2A9 9 0 0 1 10.8 3.3 9 9 0 1 0 20.7 13.2Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  check: '<path d="m20 6-11 11-5-5"/>',
  code: '<path d="m8 17-5-5 5-5m8 0 5 5-5 5m-3-14-2 18"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Zm-9 10 9 5 9-5M3 17l9 5 9-5"/>',
  top: '<path d="m18 15-6-6-6 6"/>',
}
function icon(name, size=18) { return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>` }
function sectionLabel(no, title, extra) { return `<div class="section-label"><span class="mono section-number">/${no}</span><span>${title}</span><span class="section-extra mono">${extra}</span></div>` }
function visual(type, index) {
  const start = `<div class="project-visual visual-${type}" aria-hidden="true"><div class="visual-top"><span>FIG. ${index} — SYSTEM OVERVIEW</span><span class="visual-cross">＋</span></div>`
  let content = ''
  if (type === 'exchange') content = `<div class="exchange-diagram"><div class="data-block block-a"><small>INPUT / .DBF</small><strong>ADDRESS</strong><i></i><i></i><i></i></div><div class="connection"><span></span><span class="connection-pulse"></span><span></span></div><div class="data-block block-b"><small>PROCESS / 1C</small><strong>MATCHING</strong><div class="mini-cells"><b></b><b></b><b></b><b></b></div></div><div class="connection"><span></span><span></span></div><div class="data-block block-c"><small>OUTPUT</small><strong>ACCOUNT_ID</strong><div class="output-code">✓ 0001842</div></div></div>`
  if (type === 'epd') content = `<div class="epd-diagram">${['A','L','I'].map((l,i)=>`<div class="epd-file"><span class="file-fold"></span><small>EXPORT / 0${i+1}</small><strong>${l}</strong><span class="file-lines">══════<br>════<br>══════</span><em>.TXT</em></div>`).join('')}<div class="epd-track"><span>WIN-1251</span><span>STRICT FORMAT</span></div></div>`
  if (type === 'mail') content = `<div class="mail-diagram"><div class="mail-window"><div class="mail-bar"><span></span><span></span><span></span><b>MESSAGE_PREVIEW.HTML</b></div><div class="mail-body"><small>КВИТАНЦИЯ / ПЕРСОНАЛИЗАЦИЯ</small><div class="mail-title"></div><div class="mail-line long"></div><div class="mail-line mid"></div><div class="mail-line"></div><div class="mail-statement"><span>ACCOUNT</span><b>•••• 1842</b></div><div class="mail-submit"></div></div></div><span class="floating-at">@</span></div>`
  if (type === 'web') content = `<div class="web-diagram"><div class="web-window"><div class="web-bar"><span></span><span></span><span></span><div>kv-plata.ru</div></div><div class="web-nav"><i></i><span></span><span></span><span></span></div><div class="web-hero"><div><i></i><b></b><b></b><span></span></div><aside><i></i><i></i><i></i></aside></div><div class="web-tiles"><i></i><i></i><i></i></div></div><div class="web-cursor">↗</div></div>`
  if (type === 'jester') content = `<div class="jester-diagram"><div class="jester-halo"></div><div class="jester-symbol">♜</div><div class="jester-caption">THE COURT IS WATCHING</div><div class="jester-stars">✳ &nbsp; · &nbsp; ✧ &nbsp; · &nbsp; ✳</div></div>`
  return `${start}${content}<div class="visual-bottom"><span>ENGINEERED WITH INTENTION</span><span>${index} / 05</span></div></div>`
}
function projectCard(p, wide) { return `<div class="reveal visible project-cell ${wide?'wide':''}"><button class="project-card" data-open-project="${p.id}" aria-label="Подробнее о проекте: ${p.name}">${visual(p.art,p.no)}<div class="project-info"><div class="project-meta"><span class="mono">${p.category.toUpperCase()}</span><span class="project-status"><i></i>${p.status}</span></div><div class="project-title-row"><h3>${p.name}</h3><span class="project-arrow">${icon('up',20)}</span></div><p>${p.intro}</p><div class="project-bottom"><div class="pill-list">${p.stack.slice(0,3).map(s=>`<span class="pill">${s}</span>`).join('')}</div><span class="mono">${p.year}</span></div></div></button></div>` }
function modal(p) { return `<div class="modal-backdrop" id="modal-backdrop"><section class="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" tabindex="-1"><div class="modal-head"><span class="mono eyebrow">PROJECT FILE / ${p.no}</span><button class="icon-button" id="close-modal" aria-label="Закрыть проект">${icon('close',19)}</button></div><div class="modal-hero"><div><span class="status-dot"></span>${p.status}<span class="modal-dash">/</span>${p.year}</div><h2 id="case-title">${p.name}</h2><p>${p.intro}</p></div><div class="modal-visual">${visual(p.art,p.no)}</div><div class="modal-content"><div class="modal-content-label mono">01 / ЗАДАЧА</div><div><p>${p.challenge}</p></div><div class="modal-content-label mono">02 / РЕАЛИЗАЦИЯ</div><div><ul>${p.solution.map(s=>`<li>${s}</li>`).join('')}</ul></div><div class="modal-content-label mono">03 / РЕЗУЛЬТАТ</div><div><p>${p.result}</p></div><div class="modal-content-label mono">СТЕК</div><div class="pill-list">${p.stack.map(s=>`<span class="pill">${s}</span>`).join('')}</div></div>${p.note?`<p class="modal-note">${p.note}</p>`:''}<div class="modal-footer"><span class="mono">D.G. / SELECTED WORK</span><button class="text-link" id="close-modal-bottom">Закрыть ${icon('close',16)}</button></div></section></div>` }
function renderStack() { document.getElementById('stack-list').innerHTML = stack.map(group=>`<div class="stack-group"><div class="stack-head"><span class="mono">/${group.index}</span><div><h3>${group.title}</h3><span>${group.text}</span></div>${icon('layers',19)}</div><div class="stack-tags">${group.items.map(i=>`<span>${i}</span>`).join('')}</div></div>`).join('') }
let activeFilter = 'Все'
function renderCards(){
  const current=projects.filter(p=>activeFilter==='Все'||p.category===activeFilter)
  document.getElementById('project-grid').innerHTML=current.map(p=>projectCard(p,p.size==='wide'&&activeFilter==='Все')).join('')
}
function renderFilters(){
  const options=['Все','1С / Интеграции','Web / Дизайн','Личные проекты']
  const el=document.getElementById('filters')
  el.innerHTML=options.map(f=>`<button class="filter ${f===activeFilter?'active':''}" data-filter="${f}" aria-pressed="${f===activeFilter}">${f}<span>${f==='Все'?projects.length:projects.filter(p=>p.category===f).length}</span></button>`).join('')
  el.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{ activeFilter=btn.dataset.filter;renderFilters();renderCards() }))
}
let previousFocus=null
function openModal(id){
  const p=projects.find(x=>x.id===id);if(!p)return
  previousFocus=document.activeElement
  document.getElementById('modal-root').innerHTML=modal(p)
  document.body.style.overflow='hidden'
  document.getElementById('close-modal').focus()
  document.getElementById('close-modal').addEventListener('click',closeModal)
  document.getElementById('close-modal-bottom').addEventListener('click',closeModal)
  document.getElementById('modal-backdrop').addEventListener('mousedown',e=>{if(e.target===e.currentTarget)closeModal()})
}
function closeModal(){document.getElementById('modal-root').innerHTML='';document.body.style.overflow='';previousFocus?.focus()}
document.addEventListener('click',e=>{const btn=e.target.closest('[data-open-project]');if(btn)openModal(btn.dataset.openProject)})
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(document.getElementById('modal-backdrop'))closeModal();else closeMenu()};if(e.key==='Tab'&&document.getElementById('modal-backdrop')){const buttons=[...document.querySelectorAll('#modal-backdrop button')];const first=buttons[0],last=buttons[buttons.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}})
function closeMenu(){document.getElementById('mobile-nav').hidden=true;document.getElementById('mobile-toggle').setAttribute('aria-expanded','false');document.getElementById('mobile-toggle').innerHTML=icon('menu',21)}
document.getElementById('mobile-toggle').addEventListener('click',()=>{const nav=document.getElementById('mobile-nav');nav.hidden=!nav.hidden;document.getElementById('mobile-toggle').setAttribute('aria-expanded',String(!nav.hidden));document.getElementById('mobile-toggle').innerHTML=icon(nav.hidden?'menu':'close',21)})
document.querySelectorAll('#mobile-nav a, .brand').forEach(a=>a.addEventListener('click',closeMenu))
let theme='dark';try{theme=localStorage.getItem('dg-theme')==='light'?'light':'dark'}catch{}
function updateTheme(){document.documentElement.dataset.theme=theme;document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#0b1015':'#f1f4f5';document.getElementById('theme-toggle').innerHTML=icon(theme==='dark'?'sun':'moon',18);document.getElementById('theme-toggle').setAttribute('aria-label',theme==='dark'?'Включить светлую тему':'Включить тёмную тему');try{localStorage.setItem('dg-theme',theme)}catch{}}
document.getElementById('theme-toggle').addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';updateTheme()})
document.getElementById('copy-github').addEventListener('click',async()=>{try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(profile.github)}else{const t=document.createElement('textarea');t.value=profile.github;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();const ok=document.execCommand('copy');t.remove();if(!ok)throw new Error('Clipboard unavailable')}const btn=document.getElementById('copy-github');btn.innerHTML=icon('check',17)+' Ссылка скопирована';setTimeout(()=>{btn.innerHTML=icon('copy',17)+' Скопировать ссылку на профиль'},1800)}catch{window.open(profile.github,'_blank','noopener,noreferrer')}})
function updateScroll(){const h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('scroll-progress').style.width=(h?window.scrollY/h*100:0)+'%'}
window.addEventListener('scroll',updateScroll,{passive:true});updateScroll()
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.07,rootMargin:'0px 0px -25px 0px'});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e))}else document.querySelectorAll('.reveal').forEach(e=>e.classList.add('visible'))
const contactLinks=document.getElementById('extra-contacts');if(profile.email)contactLinks.insertAdjacentHTML('beforeend',`<a class="contact-secondary" href="mailto:${profile.email}">Email ↗</a>`);if(profile.telegram)contactLinks.insertAdjacentHTML('beforeend',`<a class="contact-secondary" href="${profile.telegram}" target="_blank" rel="noreferrer">Telegram ↗</a>`)
document.querySelectorAll('[data-github]').forEach(a=>a.href=profile.github)
document.getElementById('year').textContent=new Date().getFullYear()
renderCards();renderFilters();renderStack();updateTheme()

document.querySelectorAll('[data-icon]').forEach(e=>{e.innerHTML=icon(e.dataset.icon,Number(e.dataset.size||18))})
