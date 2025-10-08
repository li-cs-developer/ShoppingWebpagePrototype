
//for filter in shopping page 
function toggleFilter(id){
    const category = document.getElementById('filter-' + id);
    const arrow = category.previousElementSibling.querySelector('.toggle-arrow');
    category.classList.toggle('hidden');
    arrow.innerHTML = category.classList.contains('hidden') ? '&#9660;' : '&#9650;';
}

//for items in cart in checkout page 
document.addEventListener('DOMContentLoaded', ()=>{
    const itemName = document.querySelectorAll('.cart-item-header');

    itemName.forEach(header=>{
        header.addEventListener('click', ()=>{
            const item = header.parentElement;
            const cartDetail = item.querySelector('.cart-body');
            const arrow = header.querySelector('.toggle-arrow');
            cartDetail.classList.toggle('hidden');
            arrow.innerHTML = cartDetail.classList.contains('hidden') ? '&#9660;' : '&#9650;';
        });
    });
});



