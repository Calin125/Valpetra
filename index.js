function updateHeader(){
    var scrollValue = window.scrollY;
    var header = document.getElementById('header');
    var verbier = document.getElementById('verbier');
    var line = document.getElementById('line');
    var download = document.getElementById('download');  
    var lines = document.querySelectorAll('.menu-btn-lines');

    if(scrollValue<500){
        header.classList.remove('header-background-change');
        verbier.classList.remove('header-background-change');
        line.classList.remove('header-background-color-change');
        download.classList.remove('header-border-color-change');
        lines.forEach(line => {
            line.classList.remove('header-background-color-change');
        });
    }else{
        header.classList.add('header-background-change');
        verbier.classList.add('header-background-change');
        line.classList.add('header-background-color-change');
        download.classList.add('header-border-color-change');
        lines.forEach(line => {
            line.classList.add('header-background-color-change');
        });
    }

}

window.addEventListener('scroll', updateHeader);

function toggleMobileMenuDisplay(){
    if(document.getElementById('navbarMenu').style.display == 'block'){
        document.getElementById('navbarMenu').style.display = 'none';
    }else{
        document.getElementById('navbarMenu').style.display = 'block'
    }
}

document.getElementById('close-btn').addEventListener('click', toggleMobileMenuDisplay)
document.getElementById('open-btn').addEventListener('click', toggleMobileMenuDisplay)