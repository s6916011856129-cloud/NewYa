/**
 * Application Main Controller
 * Handles:
 * - Splash Screen sequence
 * - Loading Spinner for all interactions
 * - Tab switching across all 7 menus
 * - Dynamic data rendering & filtering
 * - Modal interactions (Resume Viewer, Item Details)
 * - Mobile responsive navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  currentTab: 'dashboard', // default or initial tab

  init() {
    this.runSplashScreen();
    this.bindEvents();
    this.renderAllData();
    this.switchTab('dashboard', false); // Start on dashboard
  },

  // 1. Splash Screen Lifecycle (on page load / refresh)
  runSplashScreen() {
    const splash = document.getElementById('splash-screen');
    const fill = document.getElementById('splash-progress-fill');
    const statusText = document.getElementById('splash-status-text');

    if (!splash || !fill) return;

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        if (statusText) statusText.textContent = "ระบบพร้อมใช้งาน (System Ready)";
        
        setTimeout(() => {
          splash.classList.add('fade-out');
          setTimeout(() => {
            splash.style.display = 'none';
          }, 800);
        }, 300);
      }
      fill.style.width = `${progress}%`;
    }, 120);
  },

  // 2. Global Loading Spinner for all processes
  showLoading(callback, duration = 300) {
    const spinner = document.getElementById('global-spinner');
    if (spinner) {
      spinner.classList.add('active');
    }

    setTimeout(() => {
      if (typeof callback === 'function') {
        callback();
      }
      setTimeout(() => {
        if (spinner) {
          spinner.classList.remove('active');
        }
      }, 100);
    }, duration);
  },

  // 3. Tab Switching
  switchTab(tabId, animate = true) {
    const action = () => {
      // Update Navigation Active State
      document.querySelectorAll('.nav-item').forEach(btn => {
        if (btn.dataset.tab === tabId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Update Mobile Bottom Nav Active State
      document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        if (btn.dataset.tab === tabId) {
          btn.classList.add('text-[#3BB489]', 'font-bold');
          btn.classList.remove('text-slate-500');
        } else {
          btn.classList.remove('text-[#3BB489]', 'font-bold');
          btn.classList.add('text-slate-500');
        }
      });

      // Update Tab Content Panels
      document.querySelectorAll('.tab-content').forEach(panel => {
        panel.classList.remove('active');
      });

      const targetPanel = document.getElementById(`tab-${tabId}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }

      this.currentTab = tabId;

      // If Dashboard is activated, re-render charts
      if (tabId === 'dashboard') {
        setTimeout(() => {
          AppCharts.initAll();
        }, 50);
      }

      // Close mobile sidebar if open
      this.closeMobileMenu();

      // Scroll smoothly to top of main content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (animate) {
      this.showLoading(action, 280);
    } else {
      action();
    }
  },

  // 4. Bind DOM Events
  bindEvents() {
    // Nav Items click (Sidebar & Topbar)
    document.querySelectorAll('[data-tab]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = el.dataset.tab;
        if (tab && tab !== this.currentTab) {
          this.switchTab(tab, true);
        }
      });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const mobileSidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');

    if (mobileMenuBtn && mobileSidebar && sidebarBackdrop) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileSidebar.classList.toggle('-translate-x-full');
        sidebarBackdrop.classList.toggle('hidden');
      });

      sidebarBackdrop.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    }

    // Modal Close buttons
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.dataset.modalClose;
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('hidden');
      });
    });

    // Resume Modal triggers
    const openResumeBtns = document.querySelectorAll('.open-resume-modal');
    openResumeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.showLoading(() => {
          const modal = document.getElementById('modal-resume');
          if (modal) modal.classList.remove('hidden');
        }, 200);
      });
    });

    // Contact Form Submit Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactSubmit();
      });
    }

    // Achievement Filter Buttons
    document.querySelectorAll('[data-achieve-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.dataset.achieveFilter;
        document.querySelectorAll('[data-achieve-filter]').forEach(b => {
          b.classList.remove('bg-[#3BB489]', 'text-white');
          b.classList.add('bg-white', 'text-slate-700');
        });
        btn.classList.remove('bg-white', 'text-slate-700');
        btn.classList.add('bg-[#3BB489]', 'text-white');

        this.showLoading(() => {
          this.filterAchievements(cat);
        }, 220);
      });
    });

    // Academic Search Input
    const acadSearch = document.getElementById('academic-search');
    if (acadSearch) {
      acadSearch.addEventListener('input', (e) => {
        this.searchAcademicWorks(e.target.value);
      });
    }
  },

  closeMobileMenu() {
    const mobileSidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    if (mobileSidebar && sidebarBackdrop) {
      mobileSidebar.classList.add('-translate-x-full');
      sidebarBackdrop.classList.add('hidden');
    }
  },

  // 5. Render All Modules
  renderAllData() {
    this.renderEducation();
    this.renderAchievements('all');
    this.renderAcademicWorks();
    this.renderResearchArticles();
    this.renderSpeakerEngagements();
    this.renderDashboardKPIs();
  },

  // Render 1: Education
  renderEducation() {
    const container = document.getElementById('education-timeline-container');
    if (!container) return;

    container.innerHTML = PortfolioData.education.map((edu, idx) => `
      <div class="relative pl-8 sm:pl-10 pb-8 border-l-2 border-[#76C58C]/40 last:border-l-0 last:pb-0">
        <!-- Timeline Marker -->
        <div class="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-4 border-[#3BB489] flex items-center justify-center shadow-md">
          <i class="fas fa-graduation-cap text-xs text-[#3BB489]"></i>
        </div>

        <!-- Content Card -->
        <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm card-hover">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${edu.badgeColor}">
              <i class="far fa-calendar-alt mr-1.5"></i> ${edu.period}
            </span>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              GPAX: ${edu.gpax}
            </span>
          </div>

          <h3 class="text-lg font-bold text-slate-800">${edu.degree}</h3>
          <p class="text-[#26A69A] font-semibold text-sm mb-1">${edu.institution}</p>
          <p class="text-slate-600 text-sm mb-3 font-medium">${edu.faculty} &bull; ${edu.major}</p>

          <div class="mt-4 pt-3 border-t border-slate-100">
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">จุดเด่นและการเรียนรู้สำคัญ:</h4>
            <ul class="space-y-1.5">
              ${edu.highlights.map(hl => `
                <li class="flex items-start text-xs sm:text-sm text-slate-600">
                  <i class="fas fa-check-circle text-[#3BB489] mt-1 mr-2 text-xs flex-shrink-0"></i>
                  <span>${hl}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `).join('');
  },

  // Render 3: Achievements
  renderAchievements(filterCat = 'all') {
    const container = document.getElementById('achievements-grid');
    if (!container) return;

    const filtered = filterCat === 'all' 
      ? PortfolioData.achievements 
      : PortfolioData.achievements.filter(a => a.category.includes(filterCat) || (filterCat === 'inter' && a.category.includes('นานาชาติ')));

    container.innerHTML = filtered.map(item => `
      <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm card-hover flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${item.badge}">
              ${item.category}
            </span>
            <span class="text-xs text-slate-400 font-semibold">${item.year}</span>
          </div>

          <div class="flex items-start space-x-3 mb-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 text-[#3BB489] flex items-center justify-center flex-shrink-0">
              <i class="fas ${item.icon} text-lg"></i>
            </div>
            <h3 class="font-bold text-slate-800 text-base leading-snug">${item.title}</h3>
          </div>

          <p class="text-xs font-semibold text-[#26A69A] mb-2">${item.organization}</p>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">${item.description}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span><i class="fas fa-check text-emerald-500 mr-1"></i> ตรวจสอบแล้ว</span>
          <button onclick="App.viewAchievementDetails('${item.id}')" class="text-[#3BB489] hover:text-[#26A69A] font-semibold hover:underline">
            รายละเอียด <i class="fas fa-chevron-right text-[10px] ml-0.5"></i>
          </button>
        </div>
      </div>
    `).join('');
  },

  filterAchievements(cat) {
    this.renderAchievements(cat);
  },

  // Render 4: Academic Works Table
  renderAcademicWorks(searchQuery = '') {
    const container = document.getElementById('academic-table-body');
    if (!container) return;

    let items = PortfolioData.academicWorks;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      items = items.filter(w => 
        w.title.toLowerCase().includes(q) || 
        w.category.toLowerCase().includes(q) || 
        w.advisor.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      container.innerHTML = `
        <tr>
          <td colspan="6" class="px-6 py-8 text-center text-slate-400">
            <i class="fas fa-search text-3xl mb-2 text-slate-300 block"></i>
            ไม่พบผลงานวิชาการที่ตรงกับคำค้นหา
          </td>
        </tr>
      `;
      return;
    }

    container.innerHTML = items.map((w, idx) => `
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="px-5 py-4 text-xs font-bold text-slate-400 text-center">${idx + 1}</td>
        <td class="px-5 py-4 text-xs font-semibold text-slate-600">${w.year}</td>
        <td class="px-5 py-4">
          <p class="font-bold text-slate-800 text-sm mb-1">${w.title}</p>
          <p class="text-xs text-slate-500">${w.course}</p>
        </td>
        <td class="px-5 py-4">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${w.badge}">
            ${w.category}
          </span>
        </td>
        <td class="px-5 py-4 text-xs text-slate-600 font-medium">${w.advisor}</td>
        <td class="px-5 py-4 text-center">
          <button onclick="App.viewAcademicDetails('${w.id}')" class="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-50 text-[#3BB489] hover:bg-[#3BB489] hover:text-white transition-all text-xs font-semibold">
            <i class="fas fa-info-circle mr-1"></i> บทคัดย่อ
          </button>
        </td>
      </tr>
    `).join('');
  },

  searchAcademicWorks(query) {
    this.showLoading(() => {
      this.renderAcademicWorks(query);
    }, 150);
  },

  // Render 5: Research Articles Table
  renderResearchArticles() {
    const container = document.getElementById('research-table-body');
    if (!container) return;

    container.innerHTML = PortfolioData.researchArticles.map((art, idx) => `
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="px-5 py-4 text-xs font-bold text-slate-400 text-center">${idx + 1}</td>
        <td class="px-5 py-4 text-xs font-semibold text-slate-600">${art.year}</td>
        <td class="px-5 py-4 max-w-md">
          <p class="font-bold text-slate-800 text-sm leading-snug mb-1">${art.title}</p>
          <p class="text-xs text-slate-500"><i class="fas fa-users text-slate-400 mr-1"></i> ${art.authors}</p>
        </td>
        <td class="px-5 py-4">
          <p class="text-xs font-semibold text-slate-700">${art.journal}</p>
          <span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 mt-1">
            ${art.index}
          </span>
        </td>
        <td class="px-5 py-4">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${art.badge}">
            ${art.status}
          </span>
          <p class="text-[11px] text-slate-400 font-mono mt-1">DOI: ${art.doi}</p>
        </td>
        <td class="px-5 py-4 text-center">
          <button onclick="App.viewResearchModal('${art.id}')" class="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-[#0288D1] hover:bg-[#0288D1] hover:text-white transition-all text-xs font-semibold">
            <i class="far fa-file-pdf mr-1"></i> เอกสาร
          </button>
        </td>
      </tr>
    `).join('');
  },

  // Render 6: Speaker Engagements
  renderSpeakerEngagements() {
    const container = document.getElementById('speaker-cards-container');
    const tableContainer = document.getElementById('speaker-table-body');
    if (!container || !tableContainer) return;

    // Render Cards
    container.innerHTML = PortfolioData.speakerEngagements.map(spk => `
      <div class="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm card-hover flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${spk.badge}">
              ${spk.event}
            </span>
            <span class="text-xs font-semibold text-slate-400">${spk.date}</span>
          </div>

          <h3 class="text-base font-bold text-slate-800 mb-2 leading-snug">${spk.topic}</h3>
          <p class="text-xs text-[#26A69A] font-semibold mb-2"><i class="fas fa-building mr-1"></i> ${spk.organizer}</p>
          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">${spk.summary}</p>
        </div>

        <div class="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs">
          <div class="bg-slate-50 p-2 rounded-xl">
            <p class="text-slate-400 text-[10px]">ผู้เข้าร่วม</p>
            <p class="font-bold text-slate-800 text-sm">${spk.attendees} คน</p>
          </div>
          <div class="bg-slate-50 p-2 rounded-xl">
            <p class="text-slate-400 text-[10px]">ระยะเวลา</p>
            <p class="font-bold text-[#3BB489] text-sm">${spk.hours} ชม.</p>
          </div>
        </div>
      </div>
    `).join('');

    // Render Table
    tableContainer.innerHTML = PortfolioData.speakerEngagements.map((spk, idx) => `
      <tr class="hover:bg-slate-50 transition-colors border-b border-slate-100">
        <td class="px-5 py-4 text-xs font-bold text-slate-400 text-center">${idx + 1}</td>
        <td class="px-5 py-4 text-xs font-semibold text-slate-600">${spk.date}</td>
        <td class="px-5 py-4">
          <p class="font-bold text-slate-800 text-sm mb-1">${spk.topic}</p>
          <p class="text-xs text-slate-500">${spk.organizer}</p>
        </td>
        <td class="px-5 py-4 text-xs text-slate-600 font-medium">${spk.audienceGroup}</td>
        <td class="px-5 py-4 text-center">
          <span class="font-bold text-slate-700 text-sm">${spk.attendees}</span>
        </td>
        <td class="px-5 py-4 text-center">
          <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#3BB489]">${spk.hours} ชม.</span>
        </td>
      </tr>
    `).join('');
  },

  // Render 7: Dashboard Stats
  renderDashboardKPIs() {
    const stats = PortfolioData.dashboardStats;
    const bindEl = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    bindEl('kpi-education', stats.totalEducationDegrees);
    bindEl('kpi-achievements', stats.totalAchievements);
    bindEl('kpi-academic', stats.totalAcademicWorks);
    bindEl('kpi-research', stats.totalResearchArticles);
    bindEl('kpi-speaker-events', stats.totalSpeakerEvents);
    bindEl('kpi-speaker-hours', `${stats.totalSpeakerHours} ชม.`);
    bindEl('kpi-attendees', `${stats.totalAttendees}+ คน`);
    bindEl('kpi-satisfaction', `${stats.satisfactionRate}%`);
  },

  // Contact Form Submission Handler
  handleContactSubmit() {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');

    if (!nameInput || !emailInput || !msgInput) return;

    if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนทุกช่อง");
      return;
    }

    this.showLoading(() => {
      alert(`ขอบคุณครับ คุณ${nameInput.value} ระบบได้ส่งข้อความของคุณไปยัง มณีกรานต์ บุญจง เรียบร้อยแล้ว`);
      nameInput.value = '';
      emailInput.value = '';
      msgInput.value = '';
    }, 600);
  },

  // Modal Detail Viewers
  viewAchievementDetails(id) {
    const item = PortfolioData.achievements.find(a => a.id === id);
    if (!item) return;

    this.showLoading(() => {
      const modal = document.getElementById('modal-generic');
      const title = document.getElementById('modal-generic-title');
      const body = document.getElementById('modal-generic-body');

      if (title && body && modal) {
        title.innerHTML = `<i class="fas ${item.icon} text-[#3BB489] mr-2"></i> ${item.title}`;
        body.innerHTML = `
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-semibold ${item.badge}">${item.category}</span>
              <span class="text-xs text-slate-500">ปีที่ได้รับ: ${item.year}</span>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">หน่วยงานที่มอบรางวัล / องค์กร:</p>
              <p class="font-semibold text-slate-800 text-sm">${item.organization}</p>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">รายละเอียดและผลงานที่โดดเด่น:</p>
              <p class="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">${item.description}</p>
            </div>
          </div>
        `;
        modal.classList.remove('hidden');
      }
    }, 200);
  },

  viewAcademicDetails(id) {
    const item = PortfolioData.academicWorks.find(w => w.id === id);
    if (!item) return;

    this.showLoading(() => {
      const modal = document.getElementById('modal-generic');
      const title = document.getElementById('modal-generic-title');
      const body = document.getElementById('modal-generic-body');

      if (title && body && modal) {
        title.innerHTML = `<i class="fas fa-book-open text-[#26A69A] mr-2"></i> รายละเอียดผลงานวิชาการ`;
        body.innerHTML = `
          <div class="space-y-4">
            <h4 class="text-base font-bold text-slate-800 leading-snug">${item.title}</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-semibold ${item.badge}">${item.category}</span>
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">ปีการศึกษา ${item.year}</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="bg-slate-50 p-3 rounded-xl">
                <span class="text-slate-400 block mb-0.5">อาจารย์ที่ปรึกษา</span>
                <span class="font-semibold text-slate-700">${item.advisor}</span>
              </div>
              <div class="bg-slate-50 p-3 rounded-xl">
                <span class="text-slate-400 block mb-0.5">รายวิชา / หลักสูตร</span>
                <span class="font-semibold text-slate-700">${item.course}</span>
              </div>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">บทคัดย่อและสาระสำคัญ:</p>
              <p class="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">${item.summary}</p>
            </div>
          </div>
        `;
        modal.classList.remove('hidden');
      }
    }, 200);
  },

  viewResearchModal(id) {
    const item = PortfolioData.researchArticles.find(r => r.id === id);
    if (!item) return;

    this.showLoading(() => {
      const modal = document.getElementById('modal-generic');
      const title = document.getElementById('modal-generic-title');
      const body = document.getElementById('modal-generic-body');

      if (title && body && modal) {
        title.innerHTML = `<i class="fas fa-flask text-[#0288D1] mr-2"></i> รายละเอียดบทความวิจัย`;
        body.innerHTML = `
          <div class="space-y-4">
            <h4 class="text-base font-bold text-slate-800 leading-snug">${item.title}</h4>
            <p class="text-xs text-slate-500"><i class="fas fa-user-edit mr-1"></i> ผู้เขียน: ${item.authors}</p>
            <div class="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-xs space-y-2">
              <p><strong class="text-slate-700">วารสาร / แหล่งเผยแพร่:</strong> ${item.journal}</p>
              <p><strong class="text-slate-700">การรับรองดัชนี:</strong> ${item.index}</p>
              <p><strong class="text-slate-700">สถานะ:</strong> <span class="text-emerald-600 font-semibold">${item.status}</span> (${item.pages})</p>
              <p><strong class="text-slate-700">DOI / รหัสอ้างอิง:</strong> <span class="font-mono">${item.doi}</span></p>
            </div>
            <div class="text-center pt-2">
              <button onclick="alert('จำลองการดาวน์โหลดบทความฉบับสมบูรณ์ (Full Paper PDF)')" class="px-5 py-2.5 rounded-xl bg-[#3BB489] text-white font-semibold text-xs hover:bg-[#26A69A] shadow-md shadow-emerald-500/20 transition-all inline-flex items-center">
                <i class="fas fa-download mr-1.5"></i> ดาวน์โหลดบทความฉบับเต็ม (Full Paper)
              </button>
            </div>
          </div>
        `;
        modal.classList.remove('hidden');
      }
    }, 200);
  }
};
