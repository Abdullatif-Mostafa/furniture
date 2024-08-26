
var isBarsVisible = true;
var barsIcon = document.querySelector('.fa-bars');
var xxIcon = document.querySelector('.fa-xmark');

function showNavToggler(){

    if(isBarsVisible)
    {
        barsIcon.style.display = 'none';
        xxIcon.style.display = 'block';
    }
    else
    {
        barsIcon.style.display = 'block';
        xxIcon.style.display = 'none';
    }
    isBarsVisible = !isBarsVisible;
}
