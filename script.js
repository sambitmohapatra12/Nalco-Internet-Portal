
  // ========== SLIDESHOW FUNCTION ==========
  let currentSlide = 0;
  let paused = false;
  const slides = ["nalcoimage.jpg","sl5.jpg","sl8.jpg","sl6.jpg"];
  const slideshowContainer = document.querySelector(".slider-img");
  const slideBtns = document.querySelectorAll(".slide-btn");
  const pauseBtn = document.querySelector(".pause-btn");

  function showSlide(index) {
    if (slideshowContainer) {
      slideshowContainer.src = slides[index];
      
    }
  }

  function startSlideshow() {
    showSlide(currentSlide);
    setInterval(() => {
      if (!paused) {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
    }, 4000);

    slideBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
      });
    });

    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        paused = !paused;
        pauseBtn.textContent = paused ? "Play" : "Pause";
      });
    }
  }

  // ========== ACCORDION FUNCTION ==========
  function setupAccordion() {
    const detailsList = document.querySelectorAll(".right-box details");
    detailsList.forEach((details) => {
      details.addEventListener("toggle", () => {
        if (details.open) {
          detailsList.forEach((other) => {
            if (other !== details) other.open = false;
          });
        }
      });
    });
  }

  // ========== FORCE FULLPAGE NO SCROLL ==========
  function enforceFullPageLayout() {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    const mainWrapper = document.querySelector(".main-wrapper");
    if (mainWrapper) {
      mainWrapper.style.height = "100vh";
      mainWrapper.style.overflow = "hidden";
    }
  }

  // ========== CALENDAR ==========
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let currentDate = new Date();

  function renderCalendar() {
    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('month-year');
    calendarBody.innerHTML = '';

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYear.innerText = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = '<table class="calendar">';
    html += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = '<tr>';
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row += '<td></td>';
        } else if (date > daysInMonth) {
          row += '<td></td>';
        } else {
          row += `<td>${date}</td>`;
          date++;
        }
      }
      row += '</tr>';
      html += row;
      if (date > daysInMonth) break;
    }

    html += '</table>';
    calendarBody.innerHTML = html;
  }

  function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  }

  function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  }

  // ========== BIRTHDAY SCROLLER ==========
  const birthdays = [
    {
      name: 'Mr. Akash Kumar',
      designation: 'General Manager',
      date: 'May 3',
      img: 'Akash.jpg'
    },
    {
      name: 'Mrs. Ahana Pradhan',
      designation: 'Assistant Manager',
      date: 'May 10',
      img: 'Ahana.jpg'
    },
    
  ];

  function initBirthdays() {
    const birthdayWrapper = document.getElementById('birthdayWrapper');

    birthdays.forEach(person => {
      const item = document.createElement('div');
      item.classList.add('birthday-item');
      item.innerHTML = `
        <img src="${person.img}" alt="${person.name}">
        <div class="birthday-info">
          <div class="name">${person.name}</div>
          <div class="designation">${person.designation}</div>
          <div class="date">Birthday: ${person.date}</div>
        </div>
      `;
      birthdayWrapper.appendChild(item);
    });

    let birthdayIndex = 0;
    setInterval(() => {
      birthdayIndex = (birthdayIndex + 1) % birthdays.length;
      const offset = birthdayIndex * 150;
      birthdayWrapper.style.transform = `translateY(-${offset}px)`;
    }, 3000);
  }

  // ========== SUPERANNUATING SCROLLER ==========
  function initSuperannuating() {
    const superannuating = [
      {
        name: 'Mr. Atish Kumar',
        designation: 'HRD-TRG CORPORATE',
        img: 'Atish.jpg'
      },
      {
        name: 'Mrs. Riba Paikray',
        designation: 'ELECTRICL MINES',
        img: 'Riba.jpg'
      },
      
    ];

    const superannuatingWrapper = document.getElementById('superannuating-Wrapper');

    superannuating.forEach(person => {
      const item = document.createElement('div');
      item.classList.add('superannuating-item');
      item.innerHTML = `
        <img src="${person.img}" alt="${person.name}">
        <div class="superannuating-info">
          <div class="name">${person.name}</div>
          <div class="designation">${person.designation}</div>
        </div>
      `;
      superannuatingWrapper.appendChild(item);
    });

    let superIndex = 0;
    setInterval(() => {
      superIndex = (superIndex + 1) % superannuating.length;
      const offset = superIndex * 150;
      superannuatingWrapper.style.transform = `translateY(-${offset}px)`;
    }, 3000);
  }

  // ========== INITIALIZE ALL ==========
  document.addEventListener("DOMContentLoaded", () => {
    startSlideshow();
    setupAccordion();
    renderCalendar();
    enforceFullPageLayout();
    initBirthdays();
    initSuperannuating();
  });

