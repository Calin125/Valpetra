// Code to update the header on scroll - start

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

// Code to update the header on scroll - start

// Code to toggle the visibility of the navbar menu - start

function toggleMobileMenuDisplay(){
    if(document.getElementById('navbarMenu').style.display == 'block'){
        document.getElementById('navbarMenu').style.display = 'none';
    }else{
        document.getElementById('navbarMenu').style.display = 'block'
    }
}

document.getElementById('close-btn').addEventListener('click', toggleMobileMenuDisplay)
document.getElementById('open-btn').addEventListener('click', toggleMobileMenuDisplay)

// Code to toggle the visibility of the navbar menu - end

//Code to toggle the layout content - start

var buttons = document.querySelectorAll('.layout-tab-buttons');
var contents = document.querySelectorAll('.new-layout-toggled-text');
var images =document.querySelectorAll('.new-layout-img-container')

buttons.forEach((button,index)=>{
    button.addEventListener('click',(e)=>{
        buttons.forEach(button=>{button.classList.remove('layout-active-btn')});
        button.classList.add('layout-active-btn');
        
        images.forEach(image=>{image.classList.remove('layout-active-img')})
        images[index].classList.add('layout-active-img')

        contents.forEach(content=>{content.classList.remove('layout-content-active')})
        contents[index].classList.add('layout-content-active')
    })

})

//Code to toggle the layout content - end

// Code for versatility animation - start

window.addEventListener('scroll', ()=>{
    var pageY = window.pageYOffset;
    var versatility = document.getElementById('versatilitySlider');
    // versatility.style.left = 
})

// Code for versatility animation - end