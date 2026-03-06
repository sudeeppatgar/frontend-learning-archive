function validate(e){
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    let email=document.getElementById("email").value
    
    if(username=="sudeep" && password=="sudeep" && email=="patgarsudeep430@gmail.com"){
        alert("Login Successfull")
    }else{
        alert("Invalid Credentials")
    }
    e.preventDefault
}
