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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./index.html">ГЛАВНАЯ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Pages/gallery.html">ГАЛЕРЕЯ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Pages/projects.html">ПРОЕКТЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Pages/certificate.html">СЕРТИФИКАТЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Pages/contacts.html">КОНТАКТЫ</a>
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
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/index.html">ГЛАВНАЯ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../Pages/gallery.html">ГАЛЕРЕЯ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../Pages/projects.html">ПРОЕКТЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../Pages/certificate.html">СЕРТИФИКАТЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../Pages/contacts.html">КОНТАКТЫ</a>
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

// change img
function changeImage() {
  console.log("working");
  var img = document.getElementById('myImage');
  img.src = 'https://picsum.photos/100/100';
}



  // validation form
  document.querySelector(".formSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    const username=document.getElementById("username").value;
    const phone=document.getElementById("phone").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    // const ConfirmPassword=document.getElementById("ConfirmPassword").value;
    
    const usernameRegex=/^[A-Za-z0-9 ]{4,20}$/;
    const phoneRegex=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    const emailRegex=/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
    const passwordRegex=/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;
    
    //clear previous error
    document.querySelectorAll(".error")
    .forEach((curElem)=>(curElem.textContent=""));
    
    let isvalid=true;
    
    //validate username
    if(!usernameRegex.test(username)){
        document.getElementById("usernameError").textContent="username is not valid";
        isvalid=false;
    }
    if(!phoneRegex.test(phone)){
        document.getElementById("phoneError").textContent="phone no. is not valid";
        isvalid=false;
    }
    if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent="please enter a valid email";
        isvalid=false;
    }
    if(!passwordRegex.test(password)){
        document.getElementById("passwordError").textContent="please enter a valid password";
        isvalid=false;
    }
    
    // if(!ConfirmPassword=== password){
    //     document.getElementById("confirmpasswordError").textContent="please enter a same password";
    //     isvalid=false;
    // }
    
    
    
    let userData=[];
    if(isvalid){
        let formClass=document.getElementsByClassName("form-control");
        Array.from(formClass).forEach((curElem)=>userData.push(curElem.value));
        Array.from(formClass).forEach((curElem)=>(curElem.value=""));
        console.log(userData);
        alert("registration successful");
    }
    
    });
    
    // Name and Password from the register-form
    var name = document.getElementById('username');
    var pw = document.getElementById('password');
    
    // storing input from register-form
    function store() {
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
    }
    
    // check if stored data from register-form is equal to entered data in the   login-form
    function check() {
    
        // stored data from the register-form
        var storedusername = localStorage.getItem('username');
        var storedpassword = localStorage.getItem('password');
    
        // entered data from the login-form
        var username = document.getElementById('username');
        var password = document.getElementById('password');
    
        // check if stored data from register-form is equal to data from login form
        if(username.value !== storedusername || password.value !== storedpassword) {
            alert('please enter correct userID and Password');
        }else {
            window.location.href = "profile.html";
            alert('You are successfully loged in.');
           
        }
    }
    
    function logout (){
        window.location.href="login.html";
      }