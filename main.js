const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle ')
for (const element of toggle) {
	element.addEventListener('click', () => {
		nav.classList.toggle('show')
	})
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
	link.addEventListener('click', () => {
		nav.classList.remove('show')
	})
}

// ============HEADER SHADOW=====

function changeHeaderWhenScroll(){
	const header = document.querySelector('#header')
	const navHeight = header.offsetHeight
	if (window.scrollY >= navHeight) {
		header.classList.add('scroll')
	} else {
		header.classList.remove('scroll')
	}
}


//========== TESTIMONIALS CARROSSEL===============

const swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination'
	},
	mousewheel: true,
	keyboard: true,
	breakpoints:{
		767:{
			slidesPerView:2,
			setWrapperSize:true,
		}
	}
})

// ===========SCROLL REVEAL==========
const scrollReveal = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 700,
	reset: true
})

scrollReveal.reveal(
	`
#home .image, #home .text, 
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact.text, #contact .links,
footer .brand, footer .social 
`,
	{ interval: 100 }
)
//  ============BOTÃO VOLTAR AO TOPO===========
const backToTopButton = document.querySelector('.back-to-top')
function backToTop(){
if (window.scrollY >= 2000) {
	backToTopButton.classList.add('show')
} else {
	backToTopButton.classList.remove('show')
}
}
// ========WHEN SCROLL========
window.addEventListener('scroll',()=>{
	changeHeaderWhenScroll()
	backToTop()
})











