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