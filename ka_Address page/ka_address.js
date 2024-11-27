
  function addressd(p, fl, fo, t, b, a, l, c, n, mb) {
    this.pincode = p;
    this.flatno = fl;
    this.floorno = fo;
    this.towerno = t;
    this.building = b;
    this.address = a;
    this.landmark = l;
    this.city = c;
    this.name = n;
    this.mobile = mb;
  }
  let user = JSON.parse(localStorage.getItem("user")) || [];

  let submit = () => {
    let pincode = document.getElementById("pincode").value;
    let flatno = document.getElementById("flatno").value;
    let floorno = document.getElementById("floorno").value;
    let towerno = document.getElementById("towerno").value;
    let building = document.getElementById("building").value;
    let address = document.getElementById("address").value;
    let landmark = document.getElementById("landmark").value;
    let city = document.getElementById("city").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("number").value;
    let a1 = new addressd(
      pincode,
      flatno,
      floorno,
      towerno,
      building,
      address,
      landmark,
      city,
      name,
      mobile
    );
    user.push(a1);
    localStorage.setItem("user", JSON.stringify(user));
  };
  //  user=JSON.parse(localStorage.getItem("user"))||[];
  let append = () => {
    let ka_deliver_details = document.getElementById("ka_deliver_details");
    ka_deliver_details.innerHTML=null;
    user.forEach((el,index) => {
      let jola = document.createElement("div");
      jola.setAttribute("class", "ka_box");
      let h2 = document.createElement("h2");
      h2.innerText = el.name;
      let p1 = document.createElement("p");
      p1.innerText = el.flatno;
      let p2 = document.createElement("p");
      p2.innerText = el.floorno;
      let p3 = document.createElement("p");
      p3.innerText = el.building;
      let p4 = document.createElement("p");
      p4.innerText = el.address;
      let p5 = document.createElement("p");
      p5.innerText = el.landmark;
      let p6 = document.createElement("p");
      p6.innerText = el.city;
      let p7 = document.createElement("p");
      p7.innerText = `91-${el.mobile}`;
      let btn_set = document.createElement("button");
      btn_set.setAttribute("class", "btn_box");
      btn_set.innerText = "Set Default";
      let remove_btn=document.createElement("button");
      remove_btn.innerText="Remove"
      remove_btn.onclick=()=>{
        del(index);
      }

      jola.append(h2, p1, p2, p3, p4, p5, p6, p7, btn_set,remove_btn);

      ka_deliver_details.append(jola);
    });
  };
  append(user);
  document
    .querySelector("#ka_address_box")
    .addEventListener("click", function () {
      document.querySelector("#Adress_details").style.display = "block";
      //   document.querySelector(".c3").setAttribute("href","myaccount.html");
    });


   document.getElementById("close").addEventListener("click",function(){
    document.querySelector("#Adress_details").style.display = "none";

   })
   let del=(index)=>{
    user.splice(index,1);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.reload();

   }
   let items = JSON.parse(localStorage.getItem("items")) || [];
   let rendorDom=()=>{
    let ka_itemsfromCart=document.getElementById("ka_itemsfromCart")
    items.forEach((el)=>{
      let bag=document.createElement("div");
      bag.setAttribute("class","iteam_box");
      let img=document.createElement("img");
      img.setAttribute("class","ka_itemImage")
      img.src=el.image;
      let h3=document.createElement("h3");
      let p1=document.createElement("p")
      bag.append(img)
      ka_itemsfromCart.append(bag)
    })
    
   }
rendorDom(items)
