let menuBurger = document.querySelector('.header_menu');
let menuBtn = document.querySelector('.header_burger');


menuBtn.addEventListener('click', function () {
    menuBurger.classList.toggle('active');
    menuBtn.classList.toggle('active');
})



//Скрол до вибраного пункту меню бургера
//ANCHORS
let menuItems = document.querySelectorAll('.menu_item')

for (let item of menuItems) {
    item.addEventListener('click', (e) => {


       
        const blockID = item.querySelector('a').getAttribute('href')
    
        if (blockID[0] == '#') {
            e.preventDefault();
            const offsetConst = 65;
            let topPos = document.querySelector(blockID).offsetTop - offsetConst; 
    
            console.log(topPos)
            menuBtn.classList.remove('active');
            menuBurger.classList.remove('active');
    
            window.scrollTo({
                top: topPos,
                behavior: "smooth"
            });
        }

       
    });
}

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('header_menu') && !e.target.closest('.header_menu') && !e.target.classList.contains('header_burger') && !e.target.closest('.header_burger')) {
        menuBtn.classList.remove('active');
        menuBurger.classList.remove('active');
    }
})

document.addEventListener('scroll', (e) => {
    console.log('scroll close menu')
    menuBtn.classList.remove('active');
    menuBurger.classList.remove('active');
})




let rusBtn = document.querySelector('.button_rus');
let engBtn = document.querySelector('.button_eng');


rusBtn.addEventListener('click', function () {
    rusBtn.classList.add('active');
    engBtn.classList.remove('active');
})
engBtn.addEventListener('click', function () {
    engBtn.classList.add('active');
    rusBtn.classList.remove('active');
})



//Закриваєм якщо нажали не по області
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && document.querySelector('.dropdown__list').classList.contains('active')) {
        document.querySelector('.dropdown__list').classList.remove('active');
    }
})

//вибираєм dropdown_item -зберігаєм текст- записуємо в dropdown_value і скриваєм dropdown_list
//для мобільної версії
    document.querySelector('.dropdown__value').addEventListener('click', function () {
    document.querySelector('.dropdown__list').classList.toggle('active');
})

for (i = 0; i < document.querySelectorAll('.dropdown__item').length; i++) {
    let myEl = document.querySelectorAll('.dropdown__item')[i];
    myEl.addEventListener('click', (e) => {
        document.querySelector('.dropdown__value').textContent = myEl.textContent;
        document.querySelector('.dropdown__list').classList.remove('active');
    })
}






new Splide('.products__splide', {
    type: 'loop',
    perPage: 4,
    width: '90%',
    gap: '20px',
    breakpoints: {
        1000: {
         perPage: 3,          
        },
        768: {
            perPage: 2,
            width: '80%',
        },
        575: {
            padding: "15%",
            perPage: 1,
            width: "100%",
            gap: "10px"
        },

      }
}).mount();

new Splide('.diets__splide', {
    type: 'loop',
    perPage: 4,
    width: '90%',
    gap: '30px',
    breakpoints: {
        1200: {
            perPage: 3,          
        },
        1000: {
            perPage: 2,
        },
        768: {
            perPage: 1,
            width: "50%",
        },
        575: {
            padding: "15%",
            perPage: 1,
            width: "100%",
            gap: "35px"
        },

      }
}).mount();

new Splide( '.comments__splide', {
    type: 'loop',
    perPage: 2,
    width: '90%',
    gap: '10px',
    breakpoints: {
        1024: {
            perPage: 1,
            width: "80%",
        },
        575: {
            width: "100%",
            gap: "35px"
        },
      }
}).mount();

new Splide( '.label__splide', {
    type: 'loop',
    perPage: 4,
    width: '90%',
    breakpoints: {
        1200: {
         perPage: 3,          
        },
        1000: {
            perPage: 2,
        },
        768: {
            perPage: 1,
            width: "60%"
        }
      }
}).mount();

new Splide( '.different__splide', {
    type: 'loop',
    perPage: 1,
    width: '60%',
    gap: '30px',
    pagination: false,
    breakpoints: {
        // 768: {
        //     width: "40%",
        // }
    }
}).mount();
