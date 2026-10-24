/**
 * RuangPulih - Main UI/UX Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initViewSwitcher();
  initMoodTracker();
  initRefleksiStepper();
  initChecklist();
  initModals();
  initProgramFilters();
  initCounselorSearch();
  initMobileMenu();
});

/* ==========================================================================
   View Navigation (Sidebar & URL Hash)
   ========================================================================== */
function initViewSwitcher() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link[data-view]');
  const topbarLinks = document.querySelectorAll('.topbar-nav a[data-view]');
  const views = document.querySelectorAll('.app-view');

  function switchView(targetViewId) {
    if (!targetViewId) return;

    // Hide all views
    views.forEach(v => v.classList.remove('active-view'));

    // Show target view
    const targetElement = document.getElementById(`view-${targetViewId}`);
    if (targetElement) {
      targetElement.classList.add('active-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active states on sidebar
    sidebarLinks.forEach(link => {
      if (link.getAttribute('data-view') === targetViewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update active states on topbar
    topbarLinks.forEach(link => {
      if (link.getAttribute('data-view') === targetViewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update demo switcher banner if present
    const demoChips = document.querySelectorAll('.demo-link-chip[data-view]');
    demoChips.forEach(chip => {
      if (chip.getAttribute('data-view') === targetViewId) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    // Update URL hash without jumping
    if (history.pushState) {
      history.pushState(null, null, `#${targetViewId}`);
    } else {
      location.hash = targetViewId;
    }
  }

  // Sidebar link clicks
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = link.getAttribute('data-view');
      switchView(viewId);
      // Close mobile sidebar if open
      const sidebar = document.querySelector('.app-sidebar');
      if (sidebar) sidebar.classList.remove('mobile-open');
    });
  });

  // Topbar link clicks
  topbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = link.getAttribute('data-view');
      switchView(viewId);
    });
  });

  // Demo banner links
  const demoChips = document.querySelectorAll('.demo-link-chip[data-view]');
  demoChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = chip.getAttribute('data-view');
      switchView(viewId);
    });
  });

  // General jump buttons with data-target-view
  const jumpBtns = document.querySelectorAll('[data-target-view]');
  jumpBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = btn.getAttribute('data-target-view');
      switchView(viewId);
    });
  });

  // Check initial hash on load
  const currentHash = window.location.hash.replace('#', '');
  if (currentHash && document.getElementById(`view-${currentHash}`)) {
    switchView(currentHash);
  }
}

/* ==========================================================================
   Mood Tracker on Dashboard
   ========================================================================== */
function initMoodTracker() {
  const moodBtns = document.querySelectorAll('.mood-btn');
  const toast = document.querySelector('.mood-feedback-toast');

  const moodMessages = {
    'sangat-baik': '🌱 Hebat! Energinya terpancar. Terus nikmati dan bagikan aura positifmu hari ini.',
    'baik': '🌿 Senang mendengarnya! Pertahankan ritme kerja yang nyaman dan teratur.',
    'cukup': '🍃 Hari yang stabil. Jangan lupa luangkan jeda singkat untuk istirahat dan minum air.',
    'kurang-baik': '🍂 Tidak apa-apa merasa lelah. Tarik nafas perlahan dan jangan ragu ambil jeda sejenak.',
    'buruk': '🤍 Peluk hangat untukmu. Kamu tidak sendirian. Pertimbangkan untuk refleksi atau mengobrol dengan konselor.'
  };

  moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      moodBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      const mood = btn.getAttribute('data-mood');
      if (toast && moodMessages[mood]) {
        toast.innerHTML = moodMessages[mood];
        toast.style.display = 'block';
        toast.classList.add('fadeIn');
      }
    });
  });
}

/* ==========================================================================
   Refleksi Mandiri Stepper & Journal
   ========================================================================== */
function initRefleksiStepper() {
  const steps = document.querySelectorAll('.stepper-step');
  const textarea = document.querySelector('.journal-textarea');
  const charCounter = document.querySelector('.char-counter');
  const nextBtn = document.querySelector('.refleksi-next-btn');
  const emotionBtns = document.querySelectorAll('.emotion-card-btn');

  // Char counter
  if (textarea && charCounter) {
    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      charCounter.textContent = `${len}/500`;
      if (len > 500) {
        charCounter.style.color = '#e11d48';
      } else {
        charCounter.style.color = '';
      }
    });
  }

  // Emotion selector in Refleksi
  emotionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      emotionBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Stepper clicks & next button
  let currentStep = 1;
  const totalSteps = 5;

  function updateStep(stepIndex) {
    currentStep = stepIndex;
    steps.forEach((step, idx) => {
      const sNum = idx + 1;
      step.classList.remove('active');
      if (sNum === currentStep) {
        step.classList.add('active');
      } else if (sNum < currentStep) {
        step.classList.add('completed');
      } else {
        step.classList.remove('completed');
      }
    });

    const questionTitle = document.querySelector('.refleksi-question-title');
    const questionSub = document.querySelector('.refleksi-question-sub');

    if (currentStep === 1) {
      if (questionTitle) questionTitle.textContent = 'Apa yang paling kamu rasakan saat ini?';
      if (questionSub) questionSub.textContent = 'Ceritakan lebih lanjut (opsional)';
    } else if (currentStep === 2) {
      if (questionTitle) questionTitle.textContent = 'Pahami Situasimu';
      if (questionSub) questionSub.textContent = 'Faktor apa yang paling memicu perasaan ini dalam pekerjaanmu?';
    } else if (currentStep === 3) {
      if (questionTitle) questionTitle.textContent = 'Temukan Makna';
      if (questionSub) questionSub.textContent = 'Pelajaran atau kebutuhan apa yang ingin kamu utamakan saat ini?';
    } else if (currentStep === 4) {
      if (questionTitle) questionTitle.textContent = 'Rencanakan Langkah Kecil';
      if (questionSub) questionSub.textContent = 'Satu hal kecil yang bisa kamu lakukan hari ini untuk dirimu?';
    } else if (currentStep === 5) {
      if (questionTitle) questionTitle.textContent = 'Ringkasan & Simpan Refleksi';
      if (questionSub) questionSub.textContent = 'Refleksimu tersimpan aman dan privat di profilmu.';
      if (nextBtn) nextBtn.textContent = 'Simpan Refleksi Selesai ✓';
    }

    if (currentStep < 5 && nextBtn) {
      nextBtn.innerHTML = 'Lanjutkan &rarr;';
    }
  }

  steps.forEach(step => {
    step.addEventListener('click', () => {
      const stepNum = parseInt(step.getAttribute('data-step') || '1', 10);
      updateStep(stepNum);
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        updateStep(currentStep + 1);
      } else {
        alert('Refleksi harianmu telah berhasil disimpan! Terima kasih sudah meluangkan waktu untuk dirimu.');
        updateStep(1);
        if (textarea) textarea.value = '';
        if (charCounter) charCounter.textContent = '0/500';
      }
    });
  }
}

/* ==========================================================================
   Rencana Tindakan Checklist
   ========================================================================== */
function initChecklist() {
  const checklistCards = document.querySelectorAll('.checklist-card');
  const actionTabs = document.querySelectorAll('.action-tab');

  checklistCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Toggle checked state
      card.classList.toggle('checked');
      const checkbox = card.querySelector('.custom-checkbox');
      if (card.classList.contains('checked')) {
        checkbox.innerHTML = '✓';
      } else {
        checkbox.innerHTML = '';
      }
    });
  });

  actionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      actionTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-status');
      checklistCards.forEach(card => {
        if (filter === 'semua' || filter === 'dalam-proses') {
          card.style.display = 'flex';
        } else if (filter === 'selesai') {
          card.style.display = card.classList.contains('checked') ? 'flex' : 'none';
        } else if (filter === 'arsip') {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Program & Artikel Filters
   ========================================================================== */
function initProgramFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab[data-category]');
  const programCards = document.querySelectorAll('.program-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Find siblings in same container
      const parent = tab.parentElement;
      parent.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.getAttribute('data-category');
      programCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'semua' || cardCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Counselor Search Filter
   ========================================================================== */
function initCounselorSearch() {
  const searchInput = document.querySelector('.counselor-search-input');
  const counselorCards = document.querySelectorAll('.counselor-card');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      counselorCards.forEach(card => {
        const name = card.querySelector('h4').textContent.toLowerCase();
        const tags = card.querySelector('.counselor-tags').textContent.toLowerCase();
        if (name.includes(query) || tags.includes(query)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
}

/* ==========================================================================
   Modals (Counselor Profile & New Action Plan)
   ========================================================================== */
function initModals() {
  const modalOverlay = document.getElementById('general-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function openModal(title, htmlContent) {
    if (!modalOverlay) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = htmlContent;
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('active');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Trigger for "Lihat Profil" in counselors
  const counselorBtns = document.querySelectorAll('.btn-counselor-profile');
  counselorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name') || 'Konselor Profesional';
      const role = btn.getAttribute('data-role') || 'Psikolog Klinis Dewasa';
      const spec = btn.getAttribute('data-spec') || 'Stres Kerja, Burnout';

      openModal(`Profil ${name}`, `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <div style="display:flex; align-items:center; gap:16px;">
            <div style="width:64px; height:64px; border-radius:50%; background:#e2f0e8; display:flex; align-items:center; justify-content:center; font-size:1.4rem;">👩‍⚕️</div>
            <div>
              <h4 style="font-size:1.1rem; color:var(--color-primary-dark);">${name}</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">${role}</p>
              <div style="font-size:0.8rem; color:#f59e0b; margin-top:2px;">★★★★★ 4.9 (120+ sesi berhasil)</div>
            </div>
          </div>
          <div style="background:var(--bg-subtle); padding:14px; border-radius:12px; font-size:0.88rem; line-height:1.5;">
            <strong>Spesialisasi:</strong> ${spec}<br/>
            <strong>Pendidikan:</strong> Magister Psikologi Profesi Universitas Indonesia<br/>
            <strong>Pengalaman:</strong> 7+ tahun mendampingi profesional dan pekerja korporat dalam menghadapi tekanan karir dan regulasi emosi.
          </div>
          <div>
            <label style="font-size:0.88rem; font-weight:600; display:block; margin-bottom:8px;">Pilih Jadwal Konsultasi Terdekat:</label>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
              <button class="btn btn-outline btn-sm" style="font-size:0.82rem; justify-content:flex-start;">📅 Senin, 10:00 WIB</button>
              <button class="btn btn-outline btn-sm" style="font-size:0.82rem; justify-content:flex-start;">📅 Rabu, 14:00 WIB</button>
              <button class="btn btn-outline btn-sm" style="font-size:0.82rem; justify-content:flex-start;">📅 Kamis, 16:00 WIB</button>
              <button class="btn btn-outline btn-sm" style="font-size:0.82rem; justify-content:flex-start;">📅 Sabtu, 09:30 WIB</button>
            </div>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
            <button class="btn btn-outline btn-sm" onclick="document.getElementById('general-modal').classList.remove('active')">Tutup</button>
            <button class="btn btn-primary btn-sm" onclick="alert('Jadwal konsultasi berhasil dipesan! Notifikasi konfirmasi telah dikirim ke email kamu.'); document.getElementById('general-modal').classList.remove('active');">Konfirmasi Jadwal</button>
          </div>
        </div>
      `);
    });
  });

  // Trigger for "+ Tambah Rencana"
  const addPlanBtn = document.querySelector('.btn-add-plan');
  if (addPlanBtn) {
    addPlanBtn.addEventListener('click', () => {
      openModal('Tambah Rencana Tindakan Baru', `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <div>
            <label style="font-size:0.88rem; font-weight:600; display:block; margin-bottom:6px;">Langkah Kecil yang Ingin Kamu Lakukan:</label>
            <input type="text" id="new-plan-input" placeholder="Misal: Jalan kaki 10 menit setelah jam kerja..." style="width:100%; padding:12px; border-radius:10px; border:1.5px solid var(--border-subtle); font-size:0.9rem;" />
          </div>
          <div>
            <label style="font-size:0.88rem; font-weight:600; display:block; margin-bottom:6px;">Target Waktu:</label>
            <select id="new-plan-time" style="width:100%; padding:12px; border-radius:10px; border:1.5px solid var(--border-subtle); font-size:0.9rem; background:#fff;">
              <option value="Hari ini">Hari ini</option>
              <option value="Minggu ini" selected>Minggu ini</option>
              <option value="Akhir bulan">Akhir bulan</option>
            </select>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
            <button class="btn btn-outline btn-sm" onclick="document.getElementById('general-modal').classList.remove('active')">Batal</button>
            <button class="btn btn-primary btn-sm" id="btn-save-plan">Simpan Rencana</button>
          </div>
        </div>
      `);

      setTimeout(() => {
        const saveBtn = document.getElementById('btn-save-plan');
        const planInput = document.getElementById('new-plan-input');
        const planTime = document.getElementById('new-plan-time');
        if (saveBtn && planInput) {
          saveBtn.addEventListener('click', () => {
            const val = planInput.value.trim();
            if (!val) {
              alert('Silakan tuliskan rencana tindakanmu.');
              return;
            }
            const timeVal = planTime ? planTime.value : 'Minggu ini';
            const checklistContainer = document.querySelector('.action-checklist');
            if (checklistContainer) {
              const newCard = document.createElement('div');
              newCard.className = 'checklist-card';
              newCard.innerHTML = `
                <div class="checklist-left">
                  <div class="custom-checkbox"></div>
                  <span class="checklist-title">${val}</span>
                </div>
                <div class="checklist-right">
                  <span>${timeVal} &gt;</span>
                </div>
              `;
              newCard.addEventListener('click', () => {
                newCard.classList.toggle('checked');
                const cb = newCard.querySelector('.custom-checkbox');
                cb.innerHTML = newCard.classList.contains('checked') ? '✓' : '';
              });
              checklistContainer.insertBefore(newCard, checklistContainer.firstChild);
            }
            closeModal();
          });
        }
      }, 50);
    });
  }
}

/* ==========================================================================
   Mobile Sidebar Toggle
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-btn');
  const closeBtn = document.getElementById('sidebar-close-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  const sidebar = document.querySelector('.app-sidebar');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (backdrop) backdrop.addEventListener('click', closeSidebar);

  // Close on sidebar link clicks
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
}
