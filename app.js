<<<<<<< ours
document.querySelector('.questions').onclick = (event) => {
    event.stopPropagation();
 const li = event.target;
 
if(li.nodeName !== 'LI') return;

if(li.getAttribute('data') === '111'){
  li.classList.toggle('bg-orange');          
}else {
  li.classList.toggle('bg-blue');
}
}
=======
const t9 = (a,b) => Math.max(a,b);
>>>>>>> theirs
