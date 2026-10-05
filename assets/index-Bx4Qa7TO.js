(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const v="bbr-send-demo",f="bbr-send-auth",u=500,y=[["Asha Mehra","9810000101"],["Rahul Sethi","9810000102"],["Neha Kapoor","9810000103"],["Imran Qureshi","9810000104"],["Priya Nair","9810000105"],["Vikram Joshi","9810000106"],["Sana Ali","9810000107"],["Dev Patel","9810000108"]];function S(){try{const t=JSON.parse(localStorage.getItem(v));if(t!=null&&t.contacts&&(t!=null&&t.campaigns))return t}catch{}return{used:180,contacts:y.map(([t,e])=>({name:t,phone:e})),campaigns:[{id:"weekend",title:"Weekend offer",kind:"promo",sent:180,delivered:171,read:120,failed:9,at:new Date(Date.now()-864e5*2).toISOString()}]}}let i=S(),l="";function b(){localStorage.setItem(v,JSON.stringify(i))}function d(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function c(t){return new Intl.NumberFormat("en-IN").format(t)}function w(t){return new Date(t).toLocaleString("en-IN",{day:"numeric",month:"short",hour:"numeric",minute:"2-digit"})}function g(){return(location.hash||"#/login").replace("#/","")||"login"}function p(){return Math.max(0,u-i.used)}function $(){return`<div class="brand">
    <img src="./brand/logo.png" alt="" />
    <div><strong>BBR Send</strong><span>BoostByRajat</span></div>
  </div>`}function k(){return`<main class="login">
    <form class="login-card" id="login-form">
      ${$()}
      <h1>Client desk</h1>
      <p>Demo for Sharma Stores. The screen works. WhatsApp pe message nahi jaata.</p>
      <label>Email<input name="email" value="sharma@store.com" autocomplete="username" /></label>
      <label>Password<input name="password" type="password" value="demo1234" autocomplete="current-password" /></label>
      <button class="btn" type="submit">Open demo</button>
      <p class="fine">₹3,000 / month includes 500 promo messages.</p>
    </form>
  </main>`}function m(t,e){const a=g(),o=(n,s)=>`<a href="#/${n}"${a===n?' aria-current="page"':""}>${s}</a>`;return`<div class="shell">
    <aside class="side" id="side">
      ${$()}
      <nav>
        ${o("dashboard","Dashboard")}
        ${o("contacts","Contacts")}
        ${o("campaign","Campaign")}
        ${o("report","Report")}
      </nav>
      <div class="plan">
        <div>Sharma Stores</div>
        <b>₹3,000 / month</b>
        <div>${c(p())} of ${u} promo left</div>
      </div>
    </aside>
    <section class="main">
      <header class="top">
        <h1>${t}</h1>
        <div style="display:flex;gap:8px">
          <button class="btn menu-btn" type="button" data-action="menu">Menu</button>
          <button class="btn ghost" type="button" data-action="logout">Log out</button>
        </div>
      </header>
      ${e}
    </section>
  </div>`}function D(){const t=i.campaigns[0],e=p(),a=Math.min(100,Math.round(i.used/u*100));return m("Dashboard",`<div class="note">Demo only. Send dabane se WhatsApp pe kuch nahi jaata. Client ko panel dikhane ke liye hai.</div>
    <div class="cards">
      <article class="card"><span>Plan</span><strong>₹${c(3e3)}</strong><em>per month</em></article>
      <article class="card"><span>Promo left</span><strong>${c(e)}</strong><em>of ${u} included</em></article>
      <article class="card"><span>Contacts</span><strong>${i.contacts.length}</strong><em>on this list</em></article>
      <article class="card"><span>Last read</span><strong>${t?t.read:0}</strong><em>${t?d(t.title):"No campaign yet"}</em></article>
    </div>
    <div class="grid-2">
      <section class="panel">
        <h2>Included messages</h2>
        <div class="bars"><div class="bar"><i style="width:${a}%"></i></div></div>
        <p class="fine">${c(i.used)} used · ${c(e)} left this month. Extra promo is ₹1.50. Booking updates are ₹0.30.</p>
      </section>
      <section class="panel">
        <h2>Latest campaign</h2>
        ${t?`<div class="row"><span>${d(t.title)}</span><span class="pill">${t.kind}</span></div>
               <div class="row"><span>Delivered</span><b class="ok">${t.delivered}</b></div>
               <div class="row"><span>Read</span><b>${t.read}</b></div>
               <div class="row"><span>Failed</span><b class="bad">${t.failed}</b></div>`:'<p class="muted">No campaign yet.</p>'}
      </section>
    </div>`)}function L(){const e=i.contacts.filter(a=>`${a.name} ${a.phone}`.toLowerCase().includes(l.toLowerCase())).map(a=>`<tr><td>${d(a.name)}</td><td>${d(a.phone)}</td><td>Customer</td></tr>`).join("");return m("Contacts",`<form class="add" id="add-contact">
      <input name="name" placeholder="Name" required />
      <input name="phone" placeholder="Phone" required />
      <button class="btn" type="submit">Add</button>
    </form>
    <div class="tools">
      <input id="filter" placeholder="Search name or phone" value="${d(l)}" />
    </div>
    <div class="panel">
      <table>
        <thead><tr><th>Name</th><th>Phone</th><th>Tag</th></tr></thead>
        <tbody>${e||'<tr><td colspan="3">No contact matches.</td></tr>'}</tbody>
      </table>
    </div>`)}function N(){const t=Math.max(0,i.contacts.length-p());return m("Campaign",`<div class="note">Yeh demo send hai. ${i.contacts.length} contacts select hain. WhatsApp connect nahi hai.</div>
    <form class="panel" id="campaign-form">
      <label>Title<input name="title" value="This week at the store" required /></label>
      <label>Type
        <select name="kind">
          <option value="promo">Promo · uses the 500 included</option>
          <option value="update">Booking or order update · ₹0.30</option>
        </select>
      </label>
      <label>Message<textarea name="message" required>Hello, Sharma Stores has a new offer this week. Reply YES and we will hold it for you.</textarea></label>
      <p class="fine">${t>0?`${t} promo messages would be extra at ₹1.50 if this list is bigger than the remaining quota.`:`${c(p())} promo messages are still inside the ₹3,000 plan.`}</p>
      <button class="btn" type="submit">Send demo</button>
    </form>`)}function I(){const t=i.campaigns.map(e=>`<tr>
        <td>${d(e.title)}<div class="fine">${w(e.at)}</div></td>
        <td>${e.kind}</td>
        <td>${e.sent}</td>
        <td class="ok">${e.delivered}</td>
        <td>${e.read}</td>
        <td class="bad">${e.failed}</td>
      </tr>`).join("");return m("Report",`<div class="panel">
      <table>
        <thead><tr><th>Campaign</th><th>Type</th><th>Sent</th><th>Delivered</th><th>Read</th><th>Failed</th></tr></thead>
        <tbody>${t||'<tr><td colspan="6">Send a demo campaign first.</td></tr>'}</tbody>
      </table>
    </div>`)}function h(){if(!sessionStorage.getItem(f)&&g()!=="login"){location.hash="#/login";return}const t=g(),e=t==="contacts"?L():t==="campaign"?N():t==="report"?I():t==="login"?k():D();document.querySelector("#app").innerHTML=e}function C(t){const e=t>4?1:0,a=t-e,o=Math.max(0,Math.round(a*.72));return{sent:t,delivered:a,read:o,failed:e}}function A(t){const e=t.target;if(e.id==="login-form"&&(t.preventDefault(),sessionStorage.setItem(f,"1"),location.hash="#/dashboard"),e.id==="add-contact"){t.preventDefault();const a=new FormData(e),o=String(a.get("name")||"").trim(),n=String(a.get("phone")||"").trim();o&&n&&(i.contacts.unshift({name:o,phone:n}),b(),l="",h())}if(e.id==="campaign-form"){t.preventDefault();const a=new FormData(e),o=String(a.get("title")||"").trim(),n=String(a.get("message")||"").trim(),s=String(a.get("kind")||"promo");if(!o||n.length<8)return;const r=C(i.contacts.length);s==="promo"&&(i.used+=r.sent),i.campaigns.unshift({id:`c${Date.now()}`,title:o,kind:s,...r,at:new Date().toISOString()}),b(),location.hash="#/report"}}function P(t){var a;const e=t.target.closest("[data-action]");e&&(e.dataset.action==="logout"&&(sessionStorage.removeItem(f),location.hash="#/login"),e.dataset.action==="menu"&&((a=document.querySelector("#side"))==null||a.classList.toggle("open")))}function q(t){if(t.target.id!=="filter")return;l=t.target.value,h();const e=document.querySelector("#filter");e&&(e.focus(),e.setSelectionRange(l.length,l.length))}document.addEventListener("submit",A);document.addEventListener("click",P);document.addEventListener("input",q);window.addEventListener("hashchange",h);location.hash?h():location.hash="#/login";
