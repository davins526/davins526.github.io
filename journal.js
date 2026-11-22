(() => {
  'use strict'
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))
  const art = (type, index) => {
    const meta = `<span class="visual-meta">ARCHIVE / ${String(index).padStart(2,'0')}</span><span class="corner-dots">· · ·</span>`
    let drawing = ''
    if (type === 'exchange') drawing = `<div class="exchange-art" aria-hidden="true"><div><small>DATA / DBF</small><b>IN</b><small>Адреса</small></div><span class="connector"></span><div><small>PROCESS / 1C</small><b>1С</b><small>Поиск и сверка</small></div><span class="connector"></span><div><small>RESULT</small><b>OK</b><small>Счета</small></div></div>`
    else if (type === 'epd') drawing = `<div class="export-art" aria-hidden="true">${['A','L','I'].map(letter => `<div class="file-art"><b>${letter}</b><i></i><i></i><i></i></div>`).join('')}</div>`
    else if (type === 'mail') drawing = `<div class="mail-art" aria-hidden="true"><span>you've got mail.</span></div>`
    else if (type === 'web') drawing = `<div class="web-art" aria-hidden="true"><div class="web-art-bar"></div><div class="web-art-content"><div></div><div></div></div></div>`
    else drawing = `<div class="jester-art" aria-hidden="true">♜</div><div class="visual-script">a story in progress.</div>`
    return `<div class="project-visual">${meta}${drawing}</div>`
  }
  const wall = document.getElementById('project-wall')
  if (wall && typeof projects !== 'undefined') {
    const captions = ['work / done & tested','documents, data & details','careful changes','making things clearer','after hours / another world']
    wall.innerHTML = projects.map((project,index) => `<button class="project-item" type="button" data-project-id="${escapeHTML(project.id)}" aria-label="Открыть описание проекта ${escapeHTML(project.name)}"><span class="project-paper"><span class="project-sticker">${['case no. 01','look closer ↗','note to self','redesign','little world'][index] || 'project'}</span>${art(project.art,index+1)}<span class="project-title">${escapeHTML(project.name)}</span><span class="project-desc">${escapeHTML(project.intro)}</span><span class="project-foot"><span>${escapeHTML(project.category)} / ${escapeHTML(project.year)}</span><i>open ↗</i></span></span></button>`).join('')
  }
  let previouslyFocused = null
  const root = document.getElementById('modal-root')
  const closeModal = () => {
    root.innerHTML = ''
    document.body.style.overflow = ''
    previouslyFocused?.focus()
  }
  const openModal = id => {
    const project = typeof projects === 'undefined' ? null : projects.find(item => item.id === id)
    if (!project || !root) return
    previouslyFocused = document.activeElement
    root.innerHTML = `<div class="modal-backdrop" id="modal-backdrop"><section class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1"><div class="modal-header"><span>PROJECT FILE / ${escapeHTML(project.no)} / ${escapeHTML(project.year)}</span><button class="close-modal" type="button" aria-label="Закрыть подробности проекта">×</button></div><h2 id="modal-title">${escapeHTML(project.name)}</h2><p class="modal-intro">${escapeHTML(project.intro)}</p><h3>Задача</h3><p>${escapeHTML(project.challenge)}</p><h3>Что сделано / как устроено</h3><ul>${(project.solution || []).map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ul><h3>Результат</h3><p>${escapeHTML(project.result)}</p>${project.note?`<p class="modal-note">${escapeHTML(project.note)}</p>`:''}<div class="modal-tags">${(project.stack || []).map(item=>`<span>${escapeHTML(item)}</span>`).join('')}</div><span class="modal-date">status: ${escapeHTML(project.status)}</span></section></div>`
    document.body.style.overflow = 'hidden'
    root.querySelector('.close-modal').focus()
  }
  document.addEventListener('click', event => {
    const card = event.target.closest('[data-project-id]')
    if (card) openModal(card.dataset.projectId)
    if (event.target.matches('#modal-backdrop, .close-modal')) closeModal()
  })
  document.addEventListener('keydown', event => {
    const dialog = root?.querySelector('.modal-dialog')
    if (event.key === 'Escape' && dialog) { closeModal(); return }
    if (event.key === 'Tab' && dialog) {
      const focusable = [...dialog.querySelectorAll('button, a[href]')]
      if (!focusable.length) {event.preventDefault();dialog.focus();return}
      const first=focusable[0], last=focusable[focusable.length-1]
      if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus()}
    }
  })
  const menuButton=document.getElementById('menu-toggle')
  const nav=document.getElementById('main-nav')
  if(menuButton&&nav){
    menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?'Открыть меню':'Закрыть меню');nav.classList.toggle('open',!expanded)})
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Открыть меню');nav.classList.remove('open')}))
  }
  document.getElementById('copyright-year').textContent = new Date().getFullYear()
})()