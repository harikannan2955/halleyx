const PRODUCTS = [
  { id:1, category:"Electronics", name:"Smartphone ", desc:"Latest smartphone", price:1000.99, stock:100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQSwWDcu5oZ7hJHAsHyZoGSXTTH4LWAZ4cBu6Jh9A3ZhSLbc5u9vhB8-dLszqKYFNks0&usqp=CAU", createdAt:"2025‑07‑01", updatedAt:"2025‑07‑01" },
  { id:2, category:"Electronics", name:"Wireless Headphones", desc:"Noise‑canceling", price:199.50, stock:100, image:"https://www.leafstudios.in/cdn/shop/files/1_a43c5e0b-3a47-497d-acec-b4764259b10e_1024x1024.png?v=1750486829", createdAt:"2025‑07‑02", updatedAt:"2025‑07‑02" },
  { id:3, category:"Home Appliances", name:"Air Fryer", desc:"Healthy frying", price:89.00, stock:100, image:"https://cdn.accentuate.io/605666443568/-1695035269432/3-v1695036808948.png?800x800", createdAt:"2025‑07‑03", updatedAt:"2025‑07‑03" },
  { id:4, category:"Home Appliances", name:"Robot Vacuum", desc:"Automatic cleaning", price:299.99, stock:100, image:"https://www.livemint.com/lm-img/img/2024/01/24/1600x900/best_robotic_vacuum_cleaner_1706094429597_1706094429964.jpg", createdAt:"2025‑07‑04", updatedAt:"2025‑07‑04" },
  { id:5, category:"Electronics", name:"Smartwatch Pro", desc:"portable device", price:149.99, stock:100, image:"https://m.media-amazon.com/images/I/71PllgqLw-L.jpg", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },
  { id:6, category:"Furniture", name:"Chair", desc:"seat", price:120.00, stock:100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnb39Wv8Io78__b-KqmejJv9ABBTeXost-g&s", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },
  { id:7, category:"Electronics", name:"Air conditioner ", desc:"cooling", price:699.99, stock:100, image:"https://aws-obg-image-lb-2.tcl.com/content/dam/brandsite/global/images-for-blog/ac-maintenance-for-lasting-system-pc.jpg", createdAt:"2025‑07‑01", updatedAt:"2025‑07‑01" },
  { id:8, category:"Electronics", name:"Microwave Oven", desc:"heating", price:199.50, stock:100, image:"https://www.electrolux.in/globalassets/support/faq/microwave-faq-640x640.jpg?width=464", createdAt:"2025‑07‑02", updatedAt:"2025‑07‑02" },
  { id:9, category:"Home Appliances", name:"Toaster", desc:"Healthy frying", price:89.00, stock:100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMLZVv2dvbd5fljyEVz4X0cR54PMpRcEAqw&s", createdAt:"2025‑07‑03", updatedAt:"2025‑07‑03" },
  { id:10, category:"Home Appliances", name:"Fans", desc:"", price:299.99, stock:100, image:"https://lastudio.co.in/wp-content/uploads/2024/11/Whimberl-Black.jpg", createdAt:"2025‑07‑04", updatedAt:"2025‑07‑04" },
  { id:11, category:"Electronics", name:"Refrigerator", desc:"Double door", price:149.99, stock:100, image:"https://www.livemint.com/lm-img/img/2024/06/13/1600x900/buying_guide_refrigerators_1718271407693_1718271420203.jpg", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },
  { id:12, category:"Furniture", name:"sofa", desc:"Comfort seating", price:120.00, stock:100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnb39Wv8Io78__b-KqmejJv9ABBTeXost-g&s", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },
  { id:13, category:"Electronics", name:"Television ", desc:"4K Ultra HD", price:699.99, stock:100, image:"https://5.imimg.com/data5/AL/SG/EA/SELLER-86610723/oscar-24xl23-24-inch-500x500.jpg", createdAt:"2025‑07‑01", updatedAt:"2025‑07‑01" },
  { id:14, category:"Electronics", name:"ceiling fan", desc:"Energy efficient", price:199.50, stock:100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKTltkbpSXbBdxKASoDpBZ7KxoSmAmZE-Jw&s", createdAt:"2025‑07‑02", updatedAt:"2025‑07‑02" },
  { id:15, category:"Home Appliances", name:"Iron", desc:"Steam iron", price:89.00, stock:100, image:"https://www.sencor.com/Sencor/media/content/main%20picture/41012747.jpg", createdAt:"2025‑07‑03", updatedAt:"2025‑07‑03" },
  { id:16, category:"Home Appliances", name:"Lamp", desc:"Lighting", price:299.99, stock:100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6l5iWk8nSTRhpNMspl8RP7a0g1zaRUnHRg&s", createdAt:"2025‑07‑04", updatedAt:"2025‑07‑04" },
  { id:17, category:"Electronics", name:"Vacuum cleaner", desc:"Powerful suction", price:149.99, stock:100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMM2okB38E-IomZdNk2xXcBWdg_QpS94fFRw&s", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },
  { id:18, category:"Furniture", name:"Table", desc:"Dining table", price:120.00, stock:100, image:"https://damroimages.blob.core.windows.net/damroimages/7719.jpg", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },
  { id:19, category:"Electronics", name:"Washing Machine", desc:"Front load", price:699.99, stock:100, image:"https://whirlpoolindia.vtexassets.com/arquivos/ids/164350-800-auto?v=638731268849000000&width=800&height=auto&aspect=true", createdAt:"2025‑07‑01", updatedAt:"2025‑07‑01" },
  { id:20, category:"Electronics", name:"Wireless Headphones", desc:"Noise‑canceling", price:199.50, stock:100, image:"https://www.leafstudios.in/cdn/shop/files/1_a43c5e0b-3a47-497d-acec-b4764259b10e_1024x1024.png?v=1750486829", createdAt:"2025‑07‑02", updatedAt:"2025‑07‑02" },
  { id:21, category:"Home Appliances", name:"Air Fryer", desc:"Healthy frying", price:89.00, stock:100, image:"https://cdn.accentuate.io/605666443568/-1695035269432/3-v1695036808948.png?800x800", createdAt:"2025‑07‑03", updatedAt:"2025‑07‑03" },
  { id:22, category:"Home Appliances", name:"Robot Vacuum", desc:"Automatic cleaning", price:299.99, stock:100, image:"https://www.livemint.com/lm-img/img/2024/01/24/1600x900/best_robotic_vacuum_cleaner_1706094429597_1706094429964.jpg", createdAt:"2025‑07‑04", updatedAt:"2025‑07‑04" },
  { id:23, category:"Electronics", name:"Smartwatch Pro", desc:"Fitness and notifications", price:149.99, stock:100, image:"https://m.media-amazon.com/images/I/71PllgqLw-L.jpg", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },
  { id:24, category:"Furniture", name:"Tray", desc:"Used to carry", price:120.00, stock:100, image:"https://m.media-amazon.com/images/I/71IBmim3usL._UF894,1000_QL80_.jpg", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },
  { id:25, category:"Furniture", name:"Desk", desc:"Comfortable", price:120.00, stock:100, image:"https://images-cdn.ubuy.co.in/6660b3e03e6cef6c97464be8-eureka-ergonomic-standing-desk.jpg", createdAt:"2025‑07‑05", updatedAt:"2025‑07‑05" },

];

const CUSTOMERS = [
  { id:1, firstName:"Alice", lastName:"Smith", email:"alice@mail.com", password:"pass1", blocked:false },
  { id:2, firstName:"John", lastName:"Doe", email:"john@mail.com", password:"pass2", blocked:false }
];

const ORDERS = [
  { id:"ORD001", customerId:1, items:[{productId:1, qty:1},{productId:3, qty:1}], status:"PENDING", date:"2025‑07‑20" }
];

//--------------------------------------
// State
//-------------------------------
let currentUser=null, currentRole=null, impersonated=null, cart=[];

//--------------------------------------
// Utilities
//--------------------------------------
function $(s){return document.querySelector(s);}
function el(tag,html='',attr={}){const e=document.createElement(tag);e.innerHTML=html;Object.entries(attr).forEach(([k,v])=>(k==='onclick'?e.onclick=v:e.setAttribute(k,v)));return e;}
function navLink(label,fn){const a=el('a',label);a.onclick=fn;return a;}

//--------------------------------------
// UI
//--------------------------------------
function renderWelcome(){
  const root=$("#root");
  root.innerHTML=`
    <h1>Welcome to Halleyx</h1>
    <p><button id="custBtn">Customer Portal</button></p>
    <p><button id="adminBtn">Admin Portal</button></p>`;
  $("#custBtn").onclick=renderCustomerAuth;
  $("#adminBtn").onclick=renderAdminLogin;
}

// Customer Auth
function renderCustomerAuth(){
  const root=$("#root");
  root.innerHTML=`
    <h2>Customer Login</h2>
    <input id="ce" type="email" placeholder="Email"><input id="cp" type="password" placeholder="Password">
    <button id="custLogin">Login</button><div id="cerr" class="error"></div>
    <p>No account? <a id="toReg">Register</a></p>
    <div id="regForm" class="hidden">
      <h2>Register</h2>
      <input id="fn" placeholder="First Name"><input id="ln" placeholder="Last Name">
      <input id="re" type="email" placeholder="Email"><input id="rp" type="password" placeholder="Password">
      <button id="custReg">Register</button><div id="rerr" class="error"></div>
    </div>
    <p><a onclick="renderWelcome()">← Back</a></p>`;
  $("#custLogin").onclick=customerLogin;
  $("#toReg").onclick=()=>{$("#regForm").classList.remove("hidden");};
  $("#custReg").onclick=customerRegister;
}

function customerLogin(){
  const e=$("#ce").value.trim(), p=$("#cp").value;
  const u=CUSTOMERS.find(c=>c.email===e && c.password===p);
  if(!u) return $("#cerr").innerText="Invalid credentials";
  if(u.blocked) return $("#cerr").innerText="Access blocked";
  currentUser=u; currentRole="CUSTOMER"; cart=[]; renderCustomerApp();
}
function customerRegister(){
  const fn=$("#fn").value.trim(), ln=$("#ln").value.trim(), e=$("#re").value.trim(), p=$("#rp").value;
  if(!fn||!ln||!e||!p) return $("#rerr").innerText="All fields required";
  if(CUSTOMERS.some(c=>c.email===e)) return $("#rerr").innerText="Email exists";
  CUSTOMERS.push({id:CUSTOMERS.length+1, firstName:fn, lastName:ln, email:e, password:p, blocked:false});
  alert("Registered! Please login");
  renderCustomerAuth();
}

function renderCustomerApp(){
  const root=$("#root");
  root.innerHTML='';
  const nav=el('nav');
  nav.append(el('span',`Hello, ${currentUser.firstName}`),
    navLink("Browse Products",viewProducts),
    navLink(`Cart (${cart.length})`,viewCart),
    navLink("My Orders",viewOrders),
    navLink("Profile",viewProfile),
    navLink("Logout",customerLogout));
  root.append(nav, el('div','',{id:'content'}));
  viewProducts();
}

function customerLogout(){currentUser=null;currentRole=null;impersonated=null;renderWelcome();}

// Customer Views
function viewProducts(){
  const cont=$("#content");
  cont.innerHTML="<h3>Products</h3><div id='pg'></div>";
  const grid=el('div','',{class:'product-grid'});
  PRODUCTS.forEach(p=>{
    const card=el('div','',{class:'product-card'});
    card.innerHTML=`
      <img src="${p.image}" alt="${p.name}">
      <div class="info">
        <h3>${p.name}</h3><p>${p.desc}</p><p><strong>$${p.price.toFixed(2)}</strong></p>`;
    if(p.stock>0) card.querySelector('.info').innerHTML+=`<button onclick="addToCart(${p.id})">Add to Cart</button>`;
    else card.querySelector('.info').innerHTML+=`<button disabled>Out of Stock</button>`;
    card.querySelector('.info').innerHTML+=`</div>`;
    grid.append(card);
  });
  cont.append(grid);
}
function addToCart(id){
  const p=PRODUCTS.find(x=>x.id===id), exist=cart.find(i=>i.productId===id);
  if(exist){ if(exist.qty<p.stock) exist.qty++; else return alert("No more stock"); }
  else cart.push({productId:id, qty:1});
  viewProducts();
}

function viewCart(){
  const cont=$("#content");
  cont.innerHTML="<h3>Your Cart</h3>";
  if(cart.length===0) return cont.append(el('p',"Cart is empty"));
  const table=el('table','',{class:'table'});
  table.innerHTML="<tr><th>Product</th><th>Qty</th><th>Subtotal</th><th>Actions</th></tr>";
  let total=0;
  cart.forEach(i=>{
    const p=PRODUCTS.find(x=>x.id===i.productId);
    const sub=p.price*i.qty; total+=sub;
    const tr=el('tr'); tr.innerHTML=`<td>${p.name}</td><td>${i.qty}</td><td>$${sub.toFixed(2)}</td>`;
    const td=el('td');
    td.append(el('button','-',{onclick:()=>updateCart(i.productId,-1)}),
              el('button','+',{onclick:()=>updateCart(i.productId,1)}));
    tr.append(td); table.append(tr);
  });
  cont.append(table, el('p',`Total: $${total.toFixed(2)}`), el('button','Checkout',{onclick:checkout}));
}
function updateCart(pid,delta){
  const it=cart.find(i=>i.productId===pid), p=PRODUCTS.find(x=>x.id===pid);
  if(it.qty+delta<=0) cart=cart.filter(i=>i.productId!==pid);
  else if(it.qty+delta<=p.stock) it.qty+=delta;
  else return alert("Stock exceeded");
  viewCart();
}
function checkout(){
  const oid=`ORD${(ORDERS.length+1).toString().padStart(3,'0')}`;
  ORDERS.push({id:oid,customerId:currentUser.id,items:JSON.parse(JSON.stringify(cart)),status:"PENDING",date:new Date().toISOString().split('T')[0]});
  alert("Order placed"); cart=[]; viewOrders();
}

function viewOrders(){
  const cont=$("#content");
  cont.innerHTML="<h3>My Orders</h3>";
  const mine=ORDERS.filter(o=>o.customerId===currentUser.id);
  if(mine.length===0) return cont.append(el('p',"No orders yet"));
  const table=el('table','',{class:'table'});
  table.innerHTML="<tr><th>ID</th><th>Date</th><th>Status</th><th>Total</th></tr>";
  mine.forEach(o=>{
    const total=o.items.reduce((s,i)=>{const p=PRODUCTS.find(x=>x.id===i.productId);return s + p.price*i.qty;},0);
    const tr=el('tr'); tr.innerHTML=`<td>${o.id}</td><td>${o.date}</td><td>${o.status}</td><td>$${total.toFixed(2)}</td>`;
    table.append(tr);
  });
  cont.append(table);
}

function viewProfile(){
  const cont=$("#content");
  cont.innerHTML="<h3>My Profile</h3>";
  cont.append(el('p',`Name: ${currentUser.firstName} ${currentUser.lastName}`));
  cont.append(el('p',`Email: ${currentUser.email}`));
}

//--------------------------------------
// Admin Portal
//--------------------------------------
function renderAdminLogin(){
  const root=$("#root");
  root.innerHTML=`
    <h2>Admin Login</h2>
    <input id="ae" type="email" placeholder="admin@example.com"><input id="ap" type="password" placeholder="admin123">
    <button id="adminLogin">Login</button><div id="aerr" class="error"></div>
    <p><a onclick="renderWelcome()">← Back</a></p>`;
  $("#adminLogin").onclick=adminLogin;
}

function adminLogin(){
  const e=$("#ae").value.trim(), p=$("#ap").value;
  if(e==="admin@example.com"&&p==="admin123"){currentRole="ADMIN";renderAdminApp();}
  else $("#aerr").innerText="Invalid credentials";
}

function renderAdminApp(){
  const root=$("#root"); root.innerHTML='';
  if(impersonated) root.append(el('div','',{'class':'banner'}), el('div','',{id:'adminNav'}));
  else root.append(el('nav','',{id:'adminNav'}));
  const nav=$("#adminNav");
  nav.append(navLink("Dashboard",viewAdminDashboard),
             navLink("Products",viewAdminProducts),
             navLink("Customers",viewAdminCustomers),
             navLink("Orders",viewAdminOrders),
             navLink("Logout",adminLogout));
  if(impersonated){
    const b=$("#root .banner"); b.innerHTML=`Impersonating ${impersonated.firstName} (${impersonated.email}) `; 
    const btn=el('button','Exit Impersonation'); btn.onclick=exitImpersonation; b.append(btn);
  }
  root.append(el('div','',{id:'adminContent'}));
  viewAdminDashboard();
}

function adminLogout(){currentRole=null;impersonated=null;renderWelcome();}

function viewAdminDashboard(){
  const c=$("#adminContent");
  const totalP=PRODUCTS.length, totalC=CUSTOMERS.length;
  const byStat=ORDERS.reduce((a,o)=>(a[o.status]=(a[o.status]||0)+1,a),{});
  let html=`<h3>Dashboard</h3><p>Total products: ${totalP}</p><p>Total customers: ${totalC}</p><p>Orders by status:</p>`;
  for(const s in byStat) html+=`<p>${s}: ${byStat[s]}</p>`;
  c.innerHTML=html;
}

function viewAdminCustomers(){
  const c=$("#adminContent");
  let html=`<h3>Customers</h3><table class="table"><tr><th>Name</th><th>Email</th><th>Status</th><th>Actions</th></tr>`;
  CUSTOMERS.forEach(u=>{
    html+=`<tr><td>${u.firstName} ${u.lastName}</td><td>${u.email}</td><td>${u.blocked?"Blocked":"Active"}</td><td>`;
    html+=`<button onclick="toggleBlock(${u.id})">${u.blocked?"Unblock":"Block"}</button> `;
    html+=`<button onclick="startImpersonation(${u.id})">Impersonate</button></td></tr>`;
  });
  html+="</table>";
  c.innerHTML=html;
}
function toggleBlock(id){ const u=CUSTOMERS.find(c=>c.id===id); u.blocked=!u.blocked; viewAdminCustomers(); }
function startImpersonation(id){ impersonated=CUSTOMERS.find(c=>c.id===id); renderCustomerApp(); }

function exitImpersonation(){ impersonated=null; renderAdminApp(); }

function viewAdminProducts(){ $("#adminContent").innerHTML="<h3>Product Management dashboard</h3><p>(Add/Edit/Delete simulation would go here in a real app.)</p>"; }
function viewAdminOrders(){ $("#adminContent").innerHTML="<h3>Order Management dashboard</h3><p>(Filter by status/customer/Product simulated here.)</p>"; }

//--------------------------------------
// Start
//--------------------------------------
renderWelcome();
function renderWelcome(){
  const root = $("#root");
  root.innerHTML = `
    <div style="text-align: center; font-family: 'Times New Roman', serif;">
      <h1 style="font-size: 3em; color: #333;">Halleyx</h1>
      <p style="font-size: 1.2em; font-style: italic; margin-bottom: 2em;">
        "Innovating the future, one product at a time."
      </p>
      
      <div style="margin-bottom: 30px;">
        <button id="custBtn" style="font-family: 'Times New Roman', serif; padding: 10px 20px; margin: 10px; font-size: 1em;">Customer Portal</button>
        <button id="adminBtn" style="font-family: 'Times New Roman', serif; padding: 10px 20px; margin: 10px; font-size: 1em;">Admin Portal</button>
      </div>
      
      <div style="max-width: 700px; margin: 0 auto; font-size: 1em; line-height: 1.5;">
        <h3>About Halleyx</h3>
        <p>
          Halleyx is a forward-thinking company revolutionizing the way people shop and interact with smart products.
          With a focus on innovation, convenience, and customer satisfaction, we strive to bring cutting-edge
          technology and top-tier services to your doorstep.
        </p>
      </div>
    </div>
  `;
  $("#custBtn").onclick = renderCustomerAuth;
  $("#adminBtn").onclick = renderAdminLogin;
}
function renderWelcome() {
  const root = $("#root");
  root.innerHTML = `
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #1e3c72, #2268e1ff);
        background-attachment: fixed;
        color: #fff;
      }

      .welcome-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 60px 20px;
        min-height: 100vh;
        backdrop-filter: blur(6px);
      }

      .welcome-title {
        font-size: 64px;
        font-weight: 800;
        background: linear-gradient(90deg, #00d2ff, #3a7bd5);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 20px 0;
        animation: titleFade 1.8s ease-in-out;
      }

      @keyframes titleFade {
        0% { opacity: 0; transform: translateY(-30px); }
        100% { opacity: 1; transform: translateY(0); }
      }

      .quote {
        font-size: 20px;
        font-style: italic;
        color: #7ca7d8ff;
        margin: 10px 0 30px;
      }

      .portal-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 25px;
        margin: 40px 0;
      }

      .portal-buttons button {
        font-size: 18px;
        padding: 14px 28px;
        background: rgba(16, 181, 210, 0.92);
        border: 2px solid rgba(39, 237, 217, 0.2);
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }

      .portal-buttons button:hover {
        background: rgba(19, 225, 167, 0.89);
        transform: translateY(-3px);
        color: #000;
      }

      .company-info {
        max-width: 800px;
        margin: 40px auto;
        font-size: 17px;
        line-height: 1.8;
        color: #15aadbff;
        background: rgba(3, 43, 143, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.15);
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
      }

      @media (max-width: 600px) {
        .welcome-title {
          font-size: 42px;
        }
        .portal-buttons {
          flex-direction: column;
          gap: 20px;
        }
        .company-info {
          font-size: 15px;
          padding: 20px;
        }
      }
    </style>

    <div class="welcome-container">
      <div class="quote">“Innovation meets simplicity – Welcome to Halleyx”</div>
      <div class="welcome-title">Halleyx</div>
      <div class="quote">“Your one-stop digital store for everything home & tech.”</div>

      <div class="portal-buttons">
        <button id="custBtn">Customer Portal</button>
        <button id="adminBtn">Admin Portal</button>
      </div>

      <div class="company-info">
        <p><strong>About Us:</strong> At Halleyx, we bridge technology and lifestyle. Explore a curated collection of high-quality gadgets, home essentials, and smart solutions — all from the comfort of your home. We’re redefining convenience with a sleek digital experience and dependable service, one product at a time.</p>
      </div>
    </div>
  `;

  $("#custBtn").onclick = renderCustomerAuth;
  $("#adminBtn").onclick = renderAdminLogin;
}
