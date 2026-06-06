const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-links');


// navLinks.forEach(Link => {
//     Link.addEventListener('click', () => {
//         navMenu.classList.add('hidden');
//     })
// });

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
    });
})

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
});

navClose.addEventListener('click', () => {
    navMenu.classList.add('hidden');
})


//-------------- Tabs

const tabs = document.querySelectorAll('.tabs-warp ul li');
const all = document.querySelectorAll('.items_warp');
const food = document.querySelectorAll('.food');
const snack = document.querySelectorAll('.snack');
const beverage = document.querySelectorAll('.beverage');
// tabs.forEach(tab => {
//     tab.addEventListener('click',() => {
//         tabs.forEach(item => {
//             item.classList.remove('active');
//         })
//         tab.classList.add('active');
//     })
    
// });


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => {
            item.classList.remove('active');
             
        });
        tab.classList.add('active');




        const tabContent = tab.getAttribute('data-tabs');

        all.forEach(item => {
            item.style.display = 'none';
        });

        if (tabContent == 'food') {
            food.forEach(item => {
                item.style.display = 'block';
            });
        }

        else if (tabContent == 'snack') {
            snack.forEach(item => {
                item.style.display = 'block';
            });
        }

        else if (tabContent == 'beverage') {
            beverage.forEach(item => {
                item.style.display = 'block';
            });
        }

        else {all.forEach(item => {
            item.style.display = 'none';
        });}
    });
});