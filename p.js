var typed= new Typed(".text",{
	strings:["Advanced Billing System"],
	typeSpeed:100,
	backSpeed:100,
	backDelay:1000,
		loop:true
	});

function scrollToServices() {
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }