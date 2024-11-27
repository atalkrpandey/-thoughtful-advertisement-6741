import navigation from "../P_ProductDetailsPage/navbar1.js"
let navbar = document.querySelector("#navigation").innerHTML = navigation();
  console.log('heloooo')

 


document.getElementById("Alogodiv").addEventListener("click",()=>{
    document.getElementById("Amenu").style.marginLeft="0px";
    document.getElementById("Amenu").style.transition="0.5s all ease-in-out";
   
    document.getElementById("Amenu").style.opacity="1";
    document.getElementById("Amenu").style.opacity="1";
    document.getElementById("blur-div").style.marginLeft="0px";
    document.getElementById("blur-div").style.transition="0.9s all ease-in-out";
    document.querySelector("body").style.overflow="hidden";
    
  })
  document.getElementById("Across").addEventListener("click",()=>{
    document.getElementById("Amenu").style.marginLeft="-1000px";
    document.getElementById("Amenu").style.transition="1s all ease-in-out";
    document.getElementById("Amenu").style.opacity="0";
    document.getElementById("blur-div").style.marginLeft="-2000px";
    document.getElementById("blur-div").style.transition="0.5s all ease-in-out";
    document.querySelector("body").style.overflow="scroll";
 
  })

  let searchProduct=async (event)=>{
    if(event.key=="Enter"){
       let query=document.getElementById("Asearch").value;
       let res= await fetch(`https://secure-waters-87632.herokuapp.com/api/${query}`);
       let data=await res.json();
       console.log(data)
      
    //    document.getElementById("Asearchbar").innerHTML="X";
    //    document.getElementById("Asearchbar").addEventListener("click",()=>{
    //     document.getElementById("Asearchdiv").style.visibility="hidden";
    //     document.getElementById("Asearch").value="";
    //     let img=document.createElement("img");
    //     img.id="Asearchlogo"
       
    //     document.getElementById("Asearchbar").innerText=null;
    //     document.getElementById("Asearchbar").append(img);
        
    //    })
    appendData(data);
    }
   
  }
  document.getElementById('Asearch').addEventListener("keypress",searchProduct);
//   document.getElementById("Asearchdiv").innerHTML=null;
  
  document.getElementById('Asearchbar').addEventListener("click",searchProduct);



  cartItemCount()
function cartItemCount(){
    
    let cartPlace = document.querySelector('#Aitemcount');
    let cartItem = JSON.parse(localStorage.getItem('products'));
    cartPlace.innerHTML = null
    cartPlace.innerHTML = cartItem.length
    
}
 

let appendData = (data) => {
 
  console.log(data)
 // document.getElementById("Asearchdiv").append(close);
 let container = document.querySelector('#Asearchdiv');
 console.log(container)
 container.innerHTML = null;
  data.forEach(({title,pricenew,image,priceold}) => {
      let div1=document.createElement("div");
     
      let h3=document.createElement("h3");
      h3.innerText=title
      let p=document.createElement("p");
      p.innerText=`Price:- ${pricenew}`;
      p.style.marginTop="30px"
      div1.append(h3,p)
      let img=document.createElement('img');
      img.src=image;
      let div=document.createElement('div');
      div.classList.add("AappendName")
      div.append(div1,img);
      div.addEventListener("click",()=>{
        localStorage.setItem("product",JSON.stringify({title,pricenew,image,priceold}))
      })
    console.log(div)
    container.append(div) 
  });
  document.getElementById("Asearchdiv").style.visibility="visible";
  document.getElementById("Asearchdiv").style.display="block";
}
