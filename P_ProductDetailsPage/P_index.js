let data = {
    "image": "https://www.jiomart.com/images/product/330x410/rvxfwfpfyt/aadi-men-s-black-synthetic-leather-daily-casual-slider-product-images-rvxfwfpfyt-0-202205312236.jpg",
    "title": "Aadi Men's Black Synthetic Leather Daily Casual Slider",
    "priceold": 999,
    "pricenew": 229,
}
localStorage.setItem("product", JSON.stringify(data));
// -------------------------------------------------------------------------//

let products = JSON.parse(localStorage.getItem("product"));
console.log(products)

let append = () => {
        let save=products.priceold-products.pricenew;
       document.getElementById("P_container1").innerHTML=
       `
       <div id="div1">
        <div id="div11">
            <div id="div111">
                <img src="${products.image}" alt="">
            </div>
            <div id="div111">
                <img src="${products.image}" alt="">
            </div>
            <div id="div111">
                <img src="${products.image}" alt="">
            </div>
            <div id="div111">
                <img src="${products.image}" alt="">
            </div>
        </div>

        <div id="div12">
            <img src="${products.image}" alt="">
        </div>
    </div>
    <div id="div2">
        <h3>${products.title}</h3>

        <p style="font-size: 18px; font-weight: 600;margin-bottom: 20px; margin-top: 30px;">₹ ${products.pricenew}.00 <span style="font-size: 15px; font-weight: 100;">M.R.P</span> <span id="oldPrice" style="font-size: 16px; font-weight: 600;"> ₹ ${products.priceold}.00 <hr style="width: 70px;margin-left: 115px; margin-top: -32px; height: 0.5px; background-color: black;"></span> </p>
        <div style="width: 100%; height: 10px;"></div>
        <p style="color: gray; margin-top: 20px;">You Save: <span style="color: green;font-weight:600;">₹ ${save}</span> Inclusive all taxes</p>
        <h3 style="color: green; margin-top: 10px;">In Stock</h3>

        <p style="color: gray; margin-top: 20px;">Inaugural Offer <span style="color: black; font-weight: 600;">Free Shipping</span></p>

       <div id="P_btn" style="margin-top: 20px;"><button style="width:25% ; padding: 8px; border: none; border-radius: 2px; font-weight: 600;" id="P_cart">Add to Cart</button> <button style="width:25% ; padding: 8px; background-color:blue ; color: white; border: none; border-radius: 2px; font-weight: 600;" id="P_buyNow">Buy Now</button></div> 

        <p style="margin-top: 20px; font-weight: 600;">Delivery</p>
        <div id="P_pin" style="margin-top: 8px;margin-bottom: 20px;"> <i class="fa-solid fa-location-dot" style="position: absolute; font-size: 20px; padding: 8px;"></i> <input type="number" id="P_pinCode" placeholder="110068" style="width: 80%; padding: 10px; padding-left: 25px ; border: none; outline: none;box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;"> <span style="margin-left:-80px ; color: red; font-size: 14px; font-weight: 600;" id="P_check">CHECK</span> </div>

        <p id="P_deliveryAvl" style="font-size:12px; color:green; margin-top:-10px; margin-bottom:10px;">Delivery Between 29th Aug to 30th Aug</p>


     <div style="display: flex; justify-content: space-around; width: 30%; margin-bottom: 8px;">Available Offer <div style=" width: 20px; border-radius: 50%; background-color: rgb(231, 222, 222); color: rgb(52, 48, 48); padding: 5px;display: flex; justify-content: center; align-items: center;">2</div></div> 
       <!-- ----------------------Offers------------------------------- -->
     <div id="offers" style="display: flex; width: 90%; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; padding: 10px;">


     <div id="offer1" style="padding: 10px; width: 25%; text-align: left; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; padding: 10px;">
        <div class="offerType" style="border:1px solid green ; color: green; border-radius: 50px; width: 100%; text-align: center; font-size: 14px; margin-bottom: 5px; " >BANK OFFERS</div>
        <p style="margin-left: 5px; font-size: 13px; height: 60%;">SBI Offers</p>

        <p style="margin:0px 0 0 5px ; font-size: 13px; color: gray;">View 1 offer</p>
     </div>
     <div id="offer2" style="padding: 10px; width: 25%; text-align: left; display: flex; flex-direction: column; height: 120px; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; padding: 10px;">
        <div class="offerType" style="border:1px solid green ; color: green; border-radius: 50px; width: 100%;text-align: center; font-size: 14px; margin-bottom: 5px;">COUPONS </div>
        <p style="margin-left: 5px; font-size: 13px; height: 60%;">Flat Rs. 1000 OFF on Mobiles & Electronics</p>
        <p style="margin:0px 0 0 5px ; font-size: 13px; color: gray;">View 1 offer</p>
     </div>


    </div>

    <div id="P_social" style="display: flex; width: 20%; justify-content: space-between; text-align: center; margin-left: 3%; margin-top: 4%; margin-bottom:10px; ">

   <a href="https://twitter.com/intent/tweet?text=TXOR%20STORM%20M5,%20Smart%20Watch%20Fitness%20Band%2035%20mm%20Black%20Color%20Touch%20Screen%20for%20ANDROID%20and%20IOS,%20Black%20Strap%20-%20JioMart&url=https%3A%2F%2Fwww.jiomart.com%2Fp%2Felectronics%2Ftxor-storm-m5-smart-watch-fitness-band-35-mm-black-color-touch-screen-for-android-and-ios-black-strap%2F591301931&related=">   <div id="P_twitter" style="background-color: rgb(6, 164, 226); padding: 6px; color: white; height: 30px;">  <i class="fa-brands fa-twitter" ></i> </div> </a>
    <a href="https://www.facebook.com/dialog/share?app_id=140586622674265&display=popup&href=https%3A%2F%2Fwww.jiomart.com%2Fp%2Felectronics%2Ftxor-storm-m5-smart-watch-fitness-band-35-mm-black-color-touch-screen-for-android-and-ios-black-strap%2F591301931&redirect_uri=http%3A%2F%2Fs7.addthis.com%2Fstatic%2Fthankyou.html">  <div id="P_facebook" style="background-color: blue; padding: 9px; color: white; height: 30px;"> <i class="fa-brands fa-facebook-f"></i> </div> </a>
   <a href="https://api.whatsapp.com/send?text=TXOR%20STORM%20M5%2C%20Smart%20Watch%20Fitness%20Band%2035%20mm%20Black%20Color%20Touch%20Screen%20for%20ANDROID%20and%20IOS%2C%20Black%20Strap%20-%20JioMart%20https%3A%2F%2Fwww.jiomart.com%2Fp%2Felectronics%2Ftxor-storm-m5-smart-watch-fitness-band-35-mm-black-color-touch-screen-for-android-and-ios-black-strap%2F591301931">  <div id="P_whatsapp" style="background-color: green; padding: 6px; color: white;height: 30px; text-align: center;"> <i class="fa-brands fa-whatsapp"></i> </div> </a> 

    </div>
       `;
}

append();
let ProductsArr=[];
document.getElementById("P_cart").addEventListener("click", function(){
    ProductsArr.push(products);
localStorage.setItem("products", JSON.stringify(ProductsArr));
// window.location.replace("#")
});

document.getElementById("P_buyNow").addEventListener("click", function(){
    ProductsArr.push(products);
localStorage.setItem("products", JSON.stringify(ProductsArr));
// window.location.replace("#")
})

document.getElementById("P_check").addEventListener("click", function(){
    document.getElementById("P_deliveryAvl").style.display="none";

    if(document.getElementById("P_pinCode").value.trim().length==6){
        document.getElementById("P_deliveryAvl").style.display="block";
    }
  
   else{
        document.getElementById("P_deliveryAvl").innerText="Please enter a valid pincode";
        document.getElementById("P_deliveryAvl").style.color="red";
        document.getElementById("P_deliveryAvl").style.display="block";

    }
  
})


let solid1=document.getElementById("solid1");
let solid2=document.getElementById("solid2");
let solid3=document.getElementById("solid3");
let solid4=document.getElementById("solid4");
let solid5=document.getElementById("solid5");

function starFunc1(){
    document.getElementById("empty1").style.display="none";
    solid1.style.display="block";
    solid1.style.color="red";
}
function starFunc2(){
    document.getElementById("empty1").style.display="none";
    document.getElementById("empty2").style.display="none";
    solid1.style.display="block";
    solid2.style.display="block";

    solid1.style.color="red";
    solid2.style.color="red";
}
function starFunc3(){
    document.getElementById("empty1").style.display="none";
    document.getElementById("empty2").style.display="none";
    document.getElementById("empty3").style.display="none";
    solid1.style.display="block";
    solid2.style.display="block";
    solid3.style.display="block";

    solid1.style.color="yellow";
    solid2.style.color="yellow";
    solid3.style.color="yellow";
}
function starFunc4(){
    document.getElementById("empty1").style.display="none";
    document.getElementById("empty2").style.display="none";
    document.getElementById("empty3").style.display="none";
    document.getElementById("empty4").style.display="none";
    solid1.style.display="block";
    solid2.style.display="block";
    solid3.style.display="block";
    solid4.style.display="block";

    solid1.style.color="green";
    solid2.style.color="green";
    solid3.style.color="green";
    solid4.style.color="green";
}
function starFunc5(){
    document.getElementById("empty1").style.display="none";
    document.getElementById("empty2").style.display="none";
    document.getElementById("empty3").style.display="none";
    document.getElementById("empty4").style.display="none";
    document.getElementById("empty5").style.display="none";
    solid1.style.display="block";
    solid2.style.display="block";
    solid3.style.display="block";
    solid4.style.display="block";
    solid5.style.display="block";

    solid1.style.color="green";
    solid2.style.color="green";
    solid3.style.color="green";
    solid4.style.color="green";
    solid5.style.color="green";
}

let value=0;
function reviewFunc(){
    // let login=JSON.parse(localStorage.getItem("login"));
    login="true";
    if(login=="true" && value==0){
        document.getElementById("review").style.display="block";
        value=1;
    }else if(login=="true" && value==1){
        document.getElementById("review").style.display="none";
        setTimeout(()=>{
            alert("Thanks for your feedback!");
        },0)
       
        value=0;
    }
    
    else{
        window.location.replace("../P_SignIn/P_index.html");
    }
    let feedback=document.getElementById("reviewInput").value;

   localStorage.setItem("review", JSON.stringify(feedback));
    }