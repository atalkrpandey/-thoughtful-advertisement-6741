let signup=JSON.parse(localStorage.getItem("signup"));

document.getElementById("circlrArrow").addEventListener("click", function(){
    let SignInNumber=document.getElementById("P_number_input").value;

    let alreadySignedUp=false;

    for(let i=0; signup && i<signup.length; i++){
            if(signup[i].UserNumber==SignInNumber){
                alreadySignedUp=true;
            }
        }

    let data={
        number:SignInNumber,
    }
   

    if(SignInNumber){
       if(alreadySignedUp){
       localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("login",JSON.stringify(data));
        document.getElementById("popup").style.display="block";
        document.getElementById("P_form").style.display="none";
        document.getElementById("login_successful").play();



        setTimeout(()=>{
        document.getElementById("popup").style.display="none";
        document.getElementById("P_form").style.display="block";
        },3000)
        
       }else{
        alert("Please Signup first!");
        localStorage.setItem("login",JSON.stringify(data));
        localStorage.setItem("isLoggedIn", "false");
        window.location.replace("../P_Signup/P_index.html");
       }
       
    }
})