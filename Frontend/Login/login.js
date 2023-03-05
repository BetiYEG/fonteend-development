function validate(){
   var username=document.getElementById("username").Value
   var username=document.getElementById("password").Value
   if(username=="admin"&& password=="user"){
    alert("login succesfully");
    return false;
   }
  else{
    alert("login failed");
}

}
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
search.classList.toggle('home.html')
input.focus()
})