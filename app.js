// Configure marked with highlight.js
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true,
});

const navTree = document.getElementById('nav-tree');
const postEl  = document.getElementById('post');
const welcome = document.getElementById('welcome');
const siteTitle = document.getElementById('site-title');

let activeLink = null;

// ── Build sidebar from content.json ──────────────────────────────────────────
async function init() {
  let config;
  try {
    const res = await fetch('content.json');
    if (!res.ok) throw new Error('content.json not found');
    config = await res.json();
  } catch (e) {
    navTree.innerHTML = `<div class="error">Failed to load content.json</div>`;
    return;
  }

  if (config.title) siteTitle.textContent = '📝 ' + config.title;
  renderItems(config.items, navTree);

  // Handle URL hash on load
  if (location.hash) {
    const path = decodeURIComponent(location.hash.slice(1));
    const link = navTree.querySelector(`[data-path="${path}"]`);
    if (link) link.click();
  }
}

function renderItems(items, container) {
  items.forEach(item => {
    if (item.type === 'folder') {
      container.appendChild(makeFolder(item));
    } else if (item.type === 'file') {
      container.appendChild(makeFileLink(item));
    }
  });
}

function makeFolder(item) {
  const wrapper = document.createElement('div');
  wrapper.className = 'nav-folder';

  const label = document.createElement('div');
  label.className = 'folder-label';
  label.innerHTML = `<span class="arrow">▶</span><span>📁 ${item.name}</span>`;
  label.addEventListener('click', () => wrapper.classList.toggle('open'));

  const children = document.createElement('div');
  children.className = 'folder-children';
  renderItems(item.children || [], children);

  wrapper.appendChild(label);
  wrapper.appendChild(children);
  return wrapper;
}

function makeFileLink(item) {
  const a = document.createElement('a');
  a.className = 'nav-file';
  a.textContent = '📄 ' + item.name;
  a.dataset.path = item.path;
  a.addEventListener('click', (e) => {
    e.preventDefault();
    loadPost(item.path, a);
  });
  return a;
}

// ── Load & render a markdown file ─────────────────────────────────────────────
async function loadPost(path, linkEl) {
  // Update active state
  if (activeLink) activeLink.classList.remove('active');
  activeLink = linkEl;
  linkEl.classList.add('active');

  // Open parent folders
  let parent = linkEl.closest('.folder-children');
  while (parent) {
    parent.closest('.nav-folder')?.classList.add('open');
    parent = parent.parentElement?.closest('.folder-children');
  }

  // Update URL hash
  history.pushState(null, '', '#' + encodeURIComponent(path));

  // Show loading
  welcome.classList.add('hidden');
  postEl.classList.remove('hidden');
  postEl.innerHTML = '<p class="loading">Loading…</p>';

  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${path}`);
    const md = await res.text();
    postEl.innerHTML = marked.parse(md);
    postEl.scrollTop = 0;
    window.scrollTo(0, 0);
    // Re-run highlight on any code blocks marked didn't catch
    postEl.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
  } catch (e) {
    postEl.innerHTML = `<div class="error">⚠️ Could not load <code>${path}</code><br>${e.message}<br><br>Make sure the file exists in your repo.</div>`;
  }
}

init();
