import { renderNavbar, requireAuth, getCurrentUser, getCollection, saveCollection } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('#student-name-display')) return;

  // 1. Check karein ki user logged in hai ya nahi
  requireAuth('student');
  renderNavbar();

  // 2. Safe User Check (Line 12 Fix)
  const currentUser = getCurrentUser();

  if (currentUser && currentUser.name) {
    document.getElementById('student-name-display').textContent = currentUser.name;
  } else {
    // Agar name nahi milta toh email ya default text dikhayein crash hone ke bajaye
    document.getElementById('student-name-display').textContent = currentUser?.email || "Student";
    console.warn("User name not found, using fallback.");
  }

  // Baaki ka code (Tabs, LoadData, etc.) same rahega...
  const tabs = document.querySelectorAll('.sidebar-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  function loadData() {
    // Current user check loadData ke andar bhi zaroori hai
    if (!currentUser) return;

    const users = getCollection('users') || { teachers: [] };
    const appointments = getCollection('appointments') || [];

    const myApps = appointments.filter(a => a.studentId === currentUser.id);
    const tbody = document.getElementById('my-appointments-body');
    if (tbody) {
      tbody.innerHTML = myApps.map(app => {
        const teacher = users.teachers.find(t => t.id === app.teacherId) || { name: 'Unknown' };
        const badge = app.status === 'approved' ? 'badge-approved' : (app.status === 'pending' ? 'badge-pending' : 'badge-rejected');
        return `<tr style="border-bottom: 1px solid var(--border-color);"><td class="p-4 font-bold text-primary">${teacher.name}</td><td class="p-4">${app.date} at ${app.time}</td><td class="p-4 text-muted">${app.description}</td><td class="p-4"><span class="badge ${badge}">${app.status}</span></td></tr>`;
      }).join('');
    }

    renderTeachers(users.teachers);

    renderTeachers(users.teachers);
  }

  // ... (Baaki functions jaise renderTeachers, openBooking, etc. same raheinge)

  function renderTeachers(teachers) {
    const grid = document.getElementById('teachers-grid');
    if (!grid) return;
    const searchEl = document.getElementById('teacher-search-input');
    const search = (searchEl?.value || '').toLowerCase();
    const filtered = teachers.filter(t =>
      (t.name || '').toLowerCase().includes(search) ||
      (t.department || '').toLowerCase().includes(search) ||
      (t.subject || '').toLowerCase().includes(search)
    );

    grid.innerHTML = filtered.map(t => `
      <div class="teacher-card flex flex-col items-center">
        <div style="width: 60px; height: 60px; background: var(--primary-light); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; margin-bottom: 1rem;">${(t.name || 'T').charAt(0)}</div>
        <h3 class="font-bold text-lg">${t.name}</h3>
        <p class="text-muted">${t.department} - ${t.subject}</p>
        <button class="btn btn-primary mt-4 w-full" data-book-id="${t.id}" data-book-name="${t.name}">Book Appointment</button>
      </div>
    `).join('');

    grid.querySelectorAll('button[data-book-id]').forEach(btn => {
      btn.addEventListener('click', () => openBooking(btn.getAttribute('data-book-id'), btn.getAttribute('data-book-name')));
    });
  }

  loadData();
});