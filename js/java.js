const toggleBtn = document.querySelector('#toggle_btn')
const toggleBtnIcon = document.querySelector('#toggle_btn i')
const dropDownMenu = document.querySelector('#dropdown_menu')
toggleBtn.onclick = function (params){
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')
        
        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
        
}

window.addEventListener('scroll', function() {
        const Titulo = document.getElementsByClassName('t');
        const liks = document.getElementsByClassName('a');
        const dropdown_menu = document.getElementById('dropdown_menu');
        const link = document.getElementById('a');
        const header = document.getElementById('header');
        const navbar = document.getElementById('navbar');
        const logoimg = document.getElementById('logoimg');
        const toggle_btn = document.getElementById('toggle_btn');

        if(window.scrollY<=1){
                //transparente
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.151)';
                dropdown_menu.style.transform = 'translateY(0)';

                

                toggle_btn.style.color = '#fff';

                header.style.height = '';  // Vuelve al estilo original (si hay)
                header.style.paddingBottom = '';
                header.style.paddingTop = '';

                navbar.style.height = '';  // Vuelve al estilo original

                logoimg.style.marginTop = '';
                logoimg.style.width = '';  // Vuelve al estilo original
                header.classList.remove('scroll');
        }else{
                //blanco
                header.style.backgroundColor = 'rgba(237, 255, 253, 1)';
                dropdown_menu.style.transform = 'translateY(-65px)';

                link.style.color = '#c9b519';

                
                
                toggle_btn.style.color = '#000000';

                header.style.height = '7%';
                header.style.paddingBottom = '0px';
                header.style.paddingTop = '0px';

                navbar.style.height = 'auto';

                logoimg.style.marginTop = '10%';
                logoimg.style.width = '40px';
                header.classList.add('scroll');
        }
});     