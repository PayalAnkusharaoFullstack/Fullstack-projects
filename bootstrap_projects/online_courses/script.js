let isloggedin = false;

const loginForm=document.getElementById('loginForm');
const subscribeBtn=document.getElementById('subscribeBtn');

loginForm.addEventListener('submit',function (e){
    e.preventDefault();
    isloggedin=true;
    alert('Thank you for logging in!');
    subscribeBtn.disabled=false;
    loginForm.reset();
});

subscribeBtn.addEventListener('click',function(){
    if(!isloggedin){
        alert('Please log in first to subscribe.');
    }else{
        alert('subscribed successfully')
    }
});