(()=>{const q=s=>[...document.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if('IntersectionObserver'in window&&!rm){
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
q('.rows a,.sec h2,.ticks li,.quote,.stats>div,.tbl-wrap,.faq h3').forEach(e=>{e.classList.add('rv');io.observe(e)});
const co=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const el=x.target,n=+el.dataset.count;let t0;const f=t=>{t0=t0||t;const p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*p);if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f);co.unobserve(el)}}),{threshold:.6});
q('[data-count]').forEach(e=>co.observe(e))}
const s=document.getElementById('faqsearch');
if(s){const d=q('.faq details'),c=document.getElementById('faqcount');
s.addEventListener('input',()=>{const v=s.value.trim().toLowerCase();let n=0;d.forEach(e=>{const m=!v||e.textContent.toLowerCase().includes(v);e.hidden=!m;n+=m});c.textContent=n+' of '+d.length+' questions'})}})();
