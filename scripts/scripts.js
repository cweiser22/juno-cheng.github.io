$(document).ready(function(){

	

$('.scroll').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
	var scroll = $(window).scrollTop();
	if(scroll > 90) {
		$('html, body').animate({ scrollTop: -n }, 750);
	}
	else {
		$('html, body').animate({ scrollTop: n }, 750);
	}
    
});

$(window).scroll(function(){
	
	var scroll = $(window).scrollTop();
	
	if(scroll > 90) {
		$('.txt').addClass('scrolled');
		$('.txt').text('');
		$('.scroll').addClass('scrolled2');
	}
	else {
		$('.txt').removeClass('scrolled');
		$('.txt').text('SCROLL DOWN');
		$('.scroll').removeClass('scrolled2');
	}
});

document.getElementById('sidebarToggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0px';
    } else {
        sidebar.style.left = '-250px';
    }
});
const projectBoxes = document.querySelectorAll('.project-box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Calculate delay based on the box's position
            const delay = index * 1.5; // Increment delay for each box
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add('animate');
        } else {
            entry.target.style.transitionDelay = '0s';
            entry.target.classList.remove('animate');
        }
    });
}, { threshold: 0.6 });

projectBoxes.forEach(el => observer.observe(el));


});

function checkBrowser() {
    var userAgent = navigator.userAgent;

    // Checking if the browser is Safari
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome') && !userAgent.includes('Edge')) {
        alert("Our website is currently not available on Safari. Please use a different browser.");
        // You can also redirect to another page or perform other actions here
    }
}

// Call the function when the page loads
window.onload = checkBrowser;
