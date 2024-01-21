document.addEventListener('DOMContentLoaded', function () {
    const pagesContainer = document.getElementById('pages');
    const sliderContainer = document.getElementById('slider');
    const hammer = new Hammer(pagesContainer);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    let currentPage = 0;
    let sliderPages;
  
    hammer.on('swipeleft', function () {
      nextPage();
    });
  
    hammer.on('swiperight', function () {
      prevPage();
    });
  
    prevBtn.addEventListener('click', function () {
      prevPage();
    });
  
    nextBtn.addEventListener('click', function () {
      nextPage();
    });
  
    displayPage(currentPage);
  
    
  
    function displaySliderPage(sliderPageNumber) {
      if (!sliderPages) {
        sliderPages = document.querySelectorAll('.slider-page');
      }
  
      sliderPages.forEach((sliderPage, index) => {
        sliderPage.style.transform = `translateX(${(index - sliderPageNumber) * 100}%)`;
      });
    }
  
    function hideSliderPages() {
      if (sliderPages) {
        sliderPages.forEach((sliderPage) => {
          sliderPage.style.transform = 'translateX(0%)';
        });
      }
    }
  
    function nextPage() {
      if (currentPage < 120) {
        currentPage++;
        if (currentPage === 1) {
          displayPage(currentPage);
          hideSliderPages();
        } else {
          displaySliderPage(currentPage - 1);
        }
      }
    }
    function displayPage(pageNumber) {
        if (pageNumber === 0) {
          const pageContent = document.createElement('div');
          pageContent.className = 'page';
          pageContent.innerHTML = `
            <h1>Chapter ${pageNumber}</h1>
            <p>Content for page ${pageNumber}...</p>
          `;
      
          while (pagesContainer.firstChild) {
            pagesContainer.removeChild(pagesContainer.firstChild);
          }
          pagesContainer.appendChild(pageContent);
        }
      }
      
    function prevPage() {
      if (currentPage > 0) {
        currentPage--;
        if (currentPage === 0) {
          displayPage(currentPage);
          hideSliderPages();
        } else {
          displaySliderPage(currentPage - 1);
        }
      }
    }
  });
  