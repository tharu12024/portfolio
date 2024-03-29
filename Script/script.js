let menuIcon = document.getElementById('menu-icon');
let navBar = document.querySelector('nav');
let header = document.querySelector('header');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active');
    header.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll  = () =>{

    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }

    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    navBar.classList.remove('active')
    menuIcon.classList.remove('bx-x')
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content h3, .home-btn .btn, .heading, .about-content .heading, .home-img img, .news-heading, .contact .heading', {origin: 'top'});
ScrollReveal().reveal('.home-content h1,.home-content p, .about-content p, .about-img img, .skills-box, .news-box, form, .news-btn', {origin: 'bottom'});
// ScrollReveal().reveal('', {origin: 'left'});
// ScrollReveal().reveal('.home-btn button', {origin: 'right'});



const typed = new Typed('.typed-txt' , {
    strings: ['Tharul Nimsara', 'Web developer', 'Youtuber', 'Pentester'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const country = document.getElementById('country');
const messege = document.getElementById('messege');

function sendEmail() {
    const bodyMessege = `Full Name: ${name.value}<br> Email: ${email.value}<br> subject: ${subject.value}<br> country: ${country.value}<br> messege: ${messege.value}<br>`;

    Email.send({
        Host : "",
        Username : "",
        Password : "",
        To : "",
        From : "",
        Subject : "This is the subject",
        Body : "And this is the body"

    }).then(
        messege => {
            if (messege == "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  })
            }
        }
    )
}

document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();

    sendEmail();
});
// function checkInputs(){
//     const items = document.querySelectorAll('input');

//     for(const item of items){
//         if(item.value == ""){
//             item.classList.add('error');
//             item.parentElement.classList.add('error');
//         }
//         item.addEventListener("keyup" ,() =>{
//             if(item.value != ""){
//                 item.classList.remove('error');
//                 item.parentElement.classList.remove('error');
//             }
//             else{
//                 item.classList.add('error');
//                 item.parentElement.classList.add('error');
//             }
//         })
//     }
// }

// checkInputs();



