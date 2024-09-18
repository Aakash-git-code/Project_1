class NavbarComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="container-fluid navbar navbar-expand-lg ">
    <div class="logo_img1"><img src="./Assets/Images/logo_img.png" class="logo_img1"></div>
      <div class=" nav_sec1">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse Nav_Sec2" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link " id="link1" aria-current="page" href="./index.html">ГЛАВНАЯ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " id="link2" href="./Pages/gallery.html">ГАЛЕРЕЯ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " id="link3" href="./Pages/projects.html">ПРОЕКТЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " id="link4" href="./Pages/certificate.html">СЕРТИФИКАТЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " id="link5" href="./Pages/contacts.html">КОНТАКТЫ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
    }
  }
  
  class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="sec_footer">
              <div class="container-fluid footer_sec">
                <div class="row sec_footer_body">
                  <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <img src="./Assets/Images/footer_img.png" class="footer_img" alt="...">
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <ul class="list-group">
                      <li class="list_title">Информация</li>
                      <li class="">Главная</li>
                      <li class="">Галерея</li>
                      <li class="">Проекты</li>
                      <li class="">Сертификаты</li>
                      <li class="">Контакты</li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <ul class="list-group">
                      <li class="list_title">Контакты</li>
                      <li class="list_title_location"><i class="fa-solid fa-location-dot"></i> <div>
                        100000, Республика  Казахстан, 
                        г. Караганда, ул. Телевизионная 10
                      </div></li>
                      <li class="list_title_location"><i class="fa-solid fa-phone"></i>+7 (701) 77 76 811</li>
                      <li class="list_title_location"><i class="fa-regular fa-envelope"></i> Galym.sultanov@mail.ru</li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="list_title">
                      Социальные сети
                    </div>
                    <div class="list_title_icon">
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-linkedin"></i>
                      <i class="fa-brands fa-pinterest"></i>
                    </div>
                  </div>
                </div><hr>
                <div class="text-center"><p>© 2019 Digital Project. Все права защищены.</p></div>
              </div>
             </footer>
      `;
    }
  }
  
  customElements.define('navbar-component', NavbarComponent);
  customElements.define('footer-component', FooterComponent);
  
  class NavbarComponentpage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
         <nav class="container-fluid navbar navbar-expand-lg ">
    <div class="logo_img1"><img src="../Assets/Images/logo_img.png" class="logo_img1"></div>
      <div class=" nav_sec1">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse Nav_Sec2" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link " id="link1" aria-current="page" href="../index.html">ГЛАВНАЯ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " id="link2" href="../Pages/gallery.html">ГАЛЕРЕЯ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " id="link3" href="../Pages/projects.html">ПРОЕКТЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " id="link4" href="../Pages/certificate.html">СЕРТИФИКАТЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " id="link5" href="../Pages/contacts.html">КОНТАКТЫ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      `;
    }
  }
  
  class FooterComponentpage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="sec_footer">
              <div class="container-fluid footer_sec">
                <div class="row sec_footer_body">
                  <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <img src="../Assets/Images/footer_img.png" class="footer_img" alt="...">
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <ul class="list-group">
                      <li class="list_title">Информация</li>
                      <li class="">Главная</li>
                      <li class="">Галерея</li>
                      <li class="">Проекты</li>
                      <li class="">Сертификаты</li>
                      <li class="">Контакты</li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <ul class="list-group">
                      <li class="list_title">Контакты</li>
                      <li class="list_title_location"><i class="fa-solid fa-location-dot"></i> <div>
                        100000, Республика  Казахстан, 
                        г. Караганда, ул. Телевизионная 10
                      </div></li>
                      <li class="list_title_location"><i class="fa-solid fa-phone"></i>+7 (701) 77 76 811</li>
                      <li class="list_title_location"><i class="fa-regular fa-envelope"></i> Galym.sultanov@mail.ru</li>
                    </ul>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-6">
                    <div class="list_title">
                      Социальные сети
                    </div>
                    <div class="list_title_icon">
                      <i class="fa-brands fa-facebook"></i>
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-linkedin"></i>
                      <i class="fa-brands fa-pinterest"></i>
                    </div>
                  </div>
                </div><hr>
                <div class="text-center"><p>© 2019 Digital Project. Все права защищены.</p></div>
              </div>
             </footer>
      `;
    }
  }
  
  customElements.define('navbar-component-page', NavbarComponentpage);
  customElements.define('footer-component-page', FooterComponentpage);


// document.addEventListener('DOMContentLoaded', function() {
//   var links = document.querySelectorAll('.Nav_Sec2_header');
//   var defaultLinkId = 'link1';

//   // Function to set the active link from local storage
//   function setActiveLinkFromLocalStorage() {
//     var activeLinkId = localStorage.getItem('activeLinkId');
//     if (activeLinkId) {
//       var activeLink = document.getElementById(activeLinkId);
//       if (activeLink) {
//         activeLink.classList.add('active');
       
//       }
//     }
//   }

//   // Set the active link when the page loads
//   setActiveLinkFromLocalStorage();
  

//   links.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       // Prevent default link behavior
//       console.log('Link clicked:', this);

//       // Remove 'active' class from all links
//       links.forEach(function(link) {
//         link.classList.remove('active');
//       });

//       // Add 'active' class to the clicked link
//       this.classList.add('active');

//       // Save the clicked link's ID to local storage
//       localStorage.setItem('activeLinkId', this.id);
      
    
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var links = document.querySelectorAll('.Nav_Sec2_header');
//   var defaultLinkId = 'link1'; 

//   // Function to set the active link from local storage
//   function setActiveLinkFromLocalStorage() {
//     var activeLinkId = localStorage.getItem('activeLinkId');
//     if (activeLinkId) {
//       var activeLink = document.getElementById(activeLinkId);
//       if (activeLink) {
//         activeLink.classList.add('active');
//       }else {
//         // If the saved link ID is not found, apply the default link ID
//         setDefaultActiveLink();
//       }
//     }
//   }

//   function setDefaultActiveLink() {
//     var defaultLink = document.getElementById(defaultLinkId);
//     if (defaultLink) {
//       defaultLink.classList.add('active');
//       // Optionally save the default link ID to local storage
//       localStorage.setItem('activeLinkId', defaultLinkId);
//     }
//   }
//   // Function to clear the active link from local storage
//   function clearActiveLinkFromLocalStorage() {
//     localStorage.removeItem('activeLinkId');
//   }

//   // Set the active link when the page loads
//   setActiveLinkFromLocalStorage();

//   // Add event listener to clear local storage on page unload
//   window.addEventListener('beforeunload', function() {
//     clearActiveLinkFromLocalStorage();
//   });

//   links.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       // Prevent default link behavior
//       event.preventDefault(); // Added to prevent default action if needed

//       // Remove 'active' class from all links
//       links.forEach(function(link) {
//         link.classList.remove('active');
//       });

//       // Add 'active' class to the clicked link
//       this.classList.add('active');

//       // Save the clicked link's ID to local storage
//       localStorage.setItem('activeLinkId', this.id);
//     });
//   });
// });


// ---------------




// document.addEventListener('DOMContentLoaded', function() {
//   const totalPages = 5; // Total number of pages
//   let currentPage = 1;  // Current active page
//   const baseUrl = '/Pages/page'; // Base URL for pagination links

//   const paginationControls = document.getElementById('pagination-controls');
//   const prevBtn = document.getElementById('prev-btn');
//   const nextBtn = document.getElementById('next-btn');
//   const pageNumberElem = document.getElementById('page-number');

//   // Generate pagination links
//   function renderPagination() {
//     paginationControls.innerHTML = '';

//     for (let i = 1; i <= totalPages; i++) {
//       const li = document.createElement('li');
//       li.className = `page-item ${i === currentPage ? 'active' : ''}`;
//       const a = document.createElement('a');
//       a.className = 'page-link';
//       a.href = `${baseUrl}${i}.html`; // Construct the URL for each page
//       a.textContent = i;
//       a.dataset.page = i;
//       li.appendChild(a);
//       paginationControls.appendChild(li);
//     }
//   }

//   // Update page number display
//   function updatePageNumber() {
//     pageNumberElem.innerHTML = `${String(currentPage).padStart(2, '0')}<span> / </span> ${String(totalPages).padStart(2, '0')}`;
//   }

//   // Handle page link click
//   function handlePageClick(event) {
//     event.preventDefault();
//     const page = parseInt(event.target.dataset.page);
//     if (page !== currentPage) {
//       currentPage = page;
//       renderPagination();
//       updatePageNumber();
//       updateButtons();
//     }
//   }

//   // Handle arrow button clicks
//   function handleArrowClick(isNext) {
//     if (isNext && currentPage < totalPages) {
//       currentPage++;
//     } else if (!isNext && currentPage > 1) {
//       currentPage--;
//     }
//     renderPagination();
//     updatePageNumber();
//     updateButtons();
//   }

//   // Update state of arrow buttons
//   function updateButtons() {
//     prevBtn.disabled = currentPage === 1;
//     nextBtn.disabled = currentPage === totalPages;
//   }

//   // Initialize pagination
//   renderPagination();
//   updatePageNumber();
//   updateButtons();

//   // Event listeners
//   paginationControls.addEventListener('click', handlePageClick);
//   prevBtn.addEventListener('click', () => handleArrowClick(false));
//   nextBtn.addEventListener('click', () => handleArrowClick(true));
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const totalPages = 5; // Total number of pages
//   let currentPage = 1;  // Current active page

//   // Define URLs for specific pages
//   const pageUrls = {
//       1: '../Pages/projects1.html',
//       2: '../Pages/projects2.html',
//       3: '../Pages/projects3.html'
//   };

//   const paginationControls = document.getElementById('pagination-controls');
//   const prevBtn = document.getElementById('prev-btn');
//   const nextBtn = document.getElementById('next-btn');
//   const pageNumberElem = document.getElementById('page-number');

//   // Generate pagination links
//   function renderPagination() {
//       paginationControls.innerHTML = '';

//       for (let i = 1; i <= totalPages; i++) {
//           const li = document.createElement('li');
//           li.className = `page-item ${i === currentPage ? 'active' : ''}`;
//           const a = document.createElement('a');
//           a.className = 'page-link';

//           // Use the URL for the specific page or default to a constructed URL
//           a.href = pageUrls[i] || `/Pages/page${i}.html`;
//           a.textContent = i;
//           a.dataset.page = i;
//           li.appendChild(a);
//           paginationControls.appendChild(li);
//       }
//   }

//   // Update page number display
//   function updatePageNumber() {
//       pageNumberElem.innerHTML = `${String(currentPage).padStart(2, '0')}<span> / </span> ${String(totalPages).padStart(2, '0')}`;
//   }

//   // Handle page link click
//   function handlePageClick(event) {
//       event.preventDefault();
//       const page = parseInt(event.target.dataset.page);
//       if (page !== currentPage) {
//           currentPage = page;
//           renderPagination();
//           updatePageNumber();
//           updateButtons();
//       }
//   }

//   // Handle arrow button clicks
//   function handleArrowClick(isNext) {
//       if (isNext && currentPage < totalPages) {
//           currentPage++;
//       } else if (!isNext && currentPage > 1) {
//           currentPage--;
//       }
//       renderPagination();
//       updatePageNumber();
//       updateButtons();
//   }

//   // Update state of arrow buttons
//   function updateButtons() {
//       prevBtn.disabled = currentPage === 1;
//       nextBtn.disabled = currentPage === totalPages;
//   }

//   // Initialize pagination
//   renderPagination();
//   updatePageNumber();
//   updateButtons();

//   // Event listeners
//   paginationControls.addEventListener('click', handlePageClick);
//   prevBtn.addEventListener('click', () => handleArrowClick(false));
//   nextBtn.addEventListener('click', () => handleArrowClick(true));
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const totalPages = 5; // Total number of pages
//   let currentPage = 1;  // Current active page

//   // Define URLs for specific pages
//   const pageUrls = {
//       1: '../Pages/projects1.html',
//       2: '../Pages/projects2.html',
//       3: '../Pages/projects3.html',
//       4: '../Pages/projects1.html',
//       5: '../Pages/projects2.html'
//   };

//   const paginationControls = document.getElementById('pagination-controls');
//   const prevBtn = document.getElementById('prev-btn');
//   const nextBtn = document.getElementById('next-btn');
//   const pageNumberElem = document.getElementById('page-number');

//   // Generate pagination links
//   function renderPagination() {
//       paginationControls.innerHTML = '';

//       for (let i = 1; i <= totalPages; i++) {
//           const li = document.createElement('li');
//           li.className = `page-item ${i === currentPage ? 'active' : ''}`;
//           const a = document.createElement('a');
//           a.className = 'page-link';

//           // Set href based on the defined URLs
//           a.href = pageUrls[i] || `/Pages/page${i}.html`; // Fallback to default URL if not defined
//           a.textContent = i;
//           a.dataset.page = i;

//           // Append the link to the list item
//           li.appendChild(a);
//           paginationControls.appendChild(li);
//       }
//   }

//   // Update page number display
//   function updatePageNumber() {
//       pageNumberElem.innerHTML = `${String(currentPage).padStart(2, '0')}<span> / </span> ${String(totalPages).padStart(2, '0')}`;
//   }

//   // Handle page link click
//   function handlePageClick(event) {
//       // Ensure the event target is a link
//       if (event.target.tagName === 'A') {
//           event.preventDefault(); // Prevent default navigation

//           const page = parseInt(event.target.dataset.page);
//           if (page !== currentPage) {
//               currentPage = page;
//               renderPagination();
//               updatePageNumber();
//               updateButtons();
//           }

//           // Navigate to the page
//           window.location.href = event.target.href;
//       }
//   }

//   // Handle arrow button clicks
//   function handleArrowClick(isNext) {
//       if (isNext && currentPage < totalPages) {
//           currentPage++;
//       } else if (!isNext && currentPage > 1) {
//           currentPage--;
//       }
//       renderPagination();
//       updatePageNumber();
//       updateButtons();
//       // Navigate to the new page
//       window.location.href = pageUrls[currentPage] || `/Pages/page${currentPage}.html`;
//   }

//   // Update state of arrow buttons
//   function updateButtons() {
//       prevBtn.disabled = currentPage === 1;
//       nextBtn.disabled = currentPage === totalPages;
//   }

//   // Initialize pagination
//   renderPagination();
//   updatePageNumber();
//   updateButtons();

//   // Event listeners
//   paginationControls.addEventListener('click', handlePageClick);
//   prevBtn.addEventListener('click', () => handleArrowClick(false));
//   nextBtn.addEventListener('click', () => handleArrowClick(true));
// });



// change img

function changeImage() {
  console.log("working");
  var img = document.getElementById('myImage');
  img.src = 'https://picsum.photos/100/100';
  
  
}

//carousel gallery numbering
function searchId() {
  
  var totalItems = $('.item').length;
var currentIndex = $('div.active').index() + 1;
$('#carouselExampleControls').on('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('.num').html(currentIndex + ' <span> / </span> ' + totalItems);  
    console.log('hello');
    
});
}






//slide gallery
// function changeImagenext() {
//   console.log("working");
//   // var img = document.getElementById('myImage1');
//   // img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage2');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage3');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage4');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage5');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage6');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage7');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage8');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage9');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage10');
//   img.src = '../Assets/Images/gallery_img2.png';
// }
// function changeImagepre() {
//   console.log("working");
//   // var img = document.getElementById('myImage1');
//   // img.src = '../Assets/Images/gallery_img1.png';
//   var img = document.getElementById('myImage2');
//   img.src = '../Assets/Images/gallery_img2.png';
//   var img = document.getElementById('myImage3');
//   img.src = '../Assets/Images/gallery_img3.png';
//   var img = document.getElementById('myImage4');
//   img.src = '../Assets/Images/gallery_img4.png';
//   var img = document.getElementById('myImage5');
//   img.src = '../Assets/Images/gallery_img5.png';
//   var img = document.getElementById('myImage6');
//   img.src = '../Assets/Images/gallery_img6.png';
//   var img = document.getElementById('myImage7');
//   img.src = '../Assets/Images/gallery_img7.png';
//   var img = document.getElementById('myImage8');
//   img.src = '../Assets/Images/gallery_img8.png';
//   var img = document.getElementById('myImage9');
//   img.src = '../Assets/Images/gallery_img9.png';
//   var img = document.getElementById('myImage10');
//   img.src = '../Assets/Images/gallery_img10.png';
// }

  // validation form
 