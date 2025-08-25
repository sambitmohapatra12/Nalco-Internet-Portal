// tabs.js

const ITEMS_PER_PAGE = 3;

function showItems(container, startIndex) {
  const items = container.querySelectorAll('ul.tab-list li');
  items.forEach((item, idx) => {
    item.style.display = (idx >= startIndex && idx < startIndex + ITEMS_PER_PAGE) ? 'block' : 'none';
  });

  // Enable/Disable buttons based on range
  const prevBtn = container.querySelector('.prev-btn');
  const nextBtn = container.querySelector('.next-btn');

  prevBtn.disabled = startIndex === 0;
  nextBtn.disabled = startIndex + ITEMS_PER_PAGE >= items.length;

  container.setAttribute('data-start', startIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-box').forEach(tabBox => {
    showItems(tabBox, 0); // Show first page

    const nextBtn = tabBox.querySelector('.next-btn');
    const prevBtn = tabBox.querySelector('.prev-btn');
    const items = tabBox.querySelectorAll('ul.tab-list li');

    nextBtn.addEventListener('click', () => {
      let start = parseInt(tabBox.getAttribute('data-start') || '0');
      if (start + ITEMS_PER_PAGE < items.length) {
        start += ITEMS_PER_PAGE;
        showItems(tabBox, start);
      }
    });

    prevBtn.addEventListener('click', () => {
      let start = parseInt(tabBox.getAttribute('data-start') || '0');
      if (start - ITEMS_PER_PAGE >= 0) {
        start -= ITEMS_PER_PAGE;
        showItems(tabBox, start);
      }
    });
  });
});
