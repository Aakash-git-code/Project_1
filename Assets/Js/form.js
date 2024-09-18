document.querySelector(".formSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    const phone=document.getElementById("phone").value;
    const email=document.getElementById("email").value;
    
  
    const phoneRegex=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    const emailRegex=/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;

    
    //clear previous error
    document.querySelectorAll(".error")
    .forEach((curElem)=>(curElem.textContent=""));
    
    let isvalid=true;
    
    if(!phoneRegex.test(phone)){
        document.getElementById("phoneError").textContent="please enter valid mobile.no";
        isvalid=false;
    }
    if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent="please enter a valid email address";
        isvalid=false;
    }
  
    
    
    let userData=[];
    if(isvalid){
        let formClass=document.getElementsByClassName("form-control");
        Array.from(formClass).forEach((curElem)=>userData.push(curElem.value));
        Array.from(formClass).forEach((curElem)=>(curElem.value=""));
        console.log(userData);
        alert("registration successful");
    }
    
    });
    
    // storing input from register-form
    function store() {
        localStorage.setItem('username', username.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('product', product.value);
        localStorage.setItem('msg', msg.value);
    }