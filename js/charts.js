/**
 * Chart.js configurations for Maneekran Boonjong Performance Dashboard
 * Strictly adhering to palette: #3BB489, #76C58C, #26A69A, #AED581, #FFCA28, #FF8A65, #EF5350, #4A2C6D, #D32F2F, #F57C00, #FBC02D, #0288D1
 */

const AppCharts = {
  instances: {},

  initAll() {
    this.initCategoryChart();
    this.initTimelineChart();
    this.initRadarChart();
    this.initSpeakerChart();
  },

  // 1. Doughnut Chart: สัดส่วนประเภทผลงานทั้งหมด
  initCategoryChart() {
    const ctx = document.getElementById('chartCategory');
    if (!ctx) return;

    if (this.instances.category) {
      this.instances.category.destroy();
    }

    this.instances.category = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['ผลงานวิชาการ', 'บทความวิจัย', 'งานวิทยากร', 'ผลงานโดดเด่น/รางวัล', 'การศึกษาแลกเปลี่ยน'],
        datasets: [{
          data: [4, 3, 4, 6, 3],
          backgroundColor: [
            '#3BB489', // Primary Mint
            '#0288D1', // Sky Blue
            '#FF8A65', // Coral Orange
            '#FFCA28', // Amber Gold
            '#4A2C6D'  // Deep Royal Purple
          ],
          borderColor: '#FFFFFF',
          borderWidth: 2,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { family: 'Sarabun', size: 12 },
              padding: 16,
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return ` ${context.label}: ${context.raw} รายการ`;
              }
            }
          }
        },
        cutout: '68%'
      }
    });
  },

  // 2. Bar Chart: สถิติการสะสมผลงานและกิจกรรมรายปี (2565 - 2569)
  initTimelineChart() {
    const ctx = document.getElementById('chartTimeline');
    if (!ctx) return;

    if (this.instances.timeline) {
      this.instances.timeline.destroy();
    }

    this.instances.timeline = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['ปี 2565', 'ปี 2566', 'ปี 2567', 'ปี 2568', 'ปี 2569 (ปัจจุบัน)'],
        datasets: [
          {
            label: 'ผลงานวิชาการ & วิจัย',
            data: [1, 1, 2, 2, 1],
            backgroundColor: '#3BB489',
            borderRadius: 6
          },
          {
            label: 'งานวิทยากร & กิจกรรม',
            data: [1, 2, 2, 3, 1],
            backgroundColor: '#76C58C',
            borderRadius: 6
          },
          {
            label: 'รางวัลและผลงานโดดเด่น',
            data: [1, 0, 1, 3, 1],
            backgroundColor: '#FFCA28',
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: false,
            grid: { display: false },
            ticks: { font: { family: 'Sarabun', size: 11 } }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              font: { family: 'Sarabun', size: 11 }
            },
            grid: { color: 'rgba(226, 232, 240, 0.6)' }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: { family: 'Sarabun', size: 12 },
              usePointStyle: true,
              boxWidth: 8
            }
          }
        }
      }
    });
  },

  // 3. Radar Chart: แผนผังทักษะและความสามารถรอบด้าน
  initRadarChart() {
    const ctx = document.getElementById('chartRadar');
    if (!ctx) return;

    if (this.instances.radar) {
      this.instances.radar.destroy();
    }

    this.instances.radar = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'การค้าระหว่างประเทศ & RCEP',
          'Telesales & ลูกค้าสัมพันธ์ (CRM)',
          'การเจรจาต่อรอง & ข้ามวัฒนธรรม',
          'ภาษาอังกฤษเชิงธุรกิจ',
          'ภาษาจีนเพื่อการค้า',
          'คณิตคิดเร็ว & การวิเคราะห์ข้อมูล',
          'การบริหารโซ่อุปทาน & เอกสาร'
        ],
        datasets: [{
          label: 'ระดับความเชี่ยวชาญ (%)',
          data: [92, 94, 90, 85, 75, 95, 90],
          fill: true,
          backgroundColor: 'rgba(59, 180, 137, 0.22)',
          borderColor: '#3BB489',
          pointBackgroundColor: '#4A2C6D',
          pointBorderColor: '#FFFFFF',
          pointHoverBackgroundColor: '#FFFFFF',
          pointHoverBorderColor: '#3BB489',
          borderWidth: 2,
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(226, 232, 240, 0.8)' },
            grid: { color: 'rgba(226, 232, 240, 0.8)' },
            pointLabels: {
              font: { family: 'Sarabun', size: 11, weight: '500' },
              color: '#334155'
            },
            suggestedMin: 50,
            suggestedMax: 100,
            ticks: {
              stepSize: 15,
              display: false
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  },

  // 4. Horizontal Bar Chart: จำนวนผู้เข้าร่วมฟังบรรยายในแต่ละกิจกรรม
  initSpeakerChart() {
    const ctx = document.getElementById('chartSpeaker');
    if (!ctx) return;

    if (this.instances.speaker) {
      this.instances.speaker.destroy();
    }

    this.instances.speaker = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'ม.กว่างซี (GXU Experience)',
          'เยาวชน RCEP (Young Exporters)',
          'Telesales B2B (การขายเชิงรุก)',
          'แนะแนวภาษาจีน HSK'
        ],
        datasets: [{
          label: 'จำนวนผู้เข้าร่วม (คน)',
          data: [180, 120, 95, 150],
          backgroundColor: [
            '#4A2C6D', // Purple
            '#3BB489', // Mint
            '#F57C00', // Vibrant Orange
            '#0288D1'  // Sky Blue
          ],
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: 'rgba(226, 232, 240, 0.6)' },
            ticks: { font: { family: 'Sarabun', size: 11 } }
          },
          y: {
            grid: { display: false },
            ticks: { font: { family: 'Sarabun', size: 11 } }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                return ` ผู้เข้าร่วม: ${context.raw} คน`;
              }
            }
          }
        }
      }
    });
  }
};
