// Website Content - Easy to edit text
const websiteContent = {
    // Hero Section
    hero: {
        subtitle: "Personalized, gender-affirming style support and in-person shopping guidance to help you express your authentic self",
        ctaButton: "Let's Shop Together"
    },

    // About Section
    about: {
        title: "About Me",
        intro: {
            title: "Hello, I'm Emily",
            text: "I'm here to help make the journey of finding gender-affirming clothing a little bit easier and a lot more fun. I have lived in Seattle for 16 years, coming here out of college as a Software Engineer and eventually moving into Management. I have two young children and an old, cuddly dog."
        },
        story: {
            title: "Our Journey Together",
            text1: "My partner of 16 years, Erin, came out as a trans woman in the spring of 2024, and since then, we've been navigating the many changes that come with embracing one's true self. One of the challenges she encountered early in the transition was finding clothing that reflects her identity and makes her feel confident and feminine.",
            text2: "Changing your wardrobe to align with your identity can be daunting. How do you discover what style fits you best? Where do you shop? And how do you build the confidence to explore new looks in stores or online? Erin and I faced these questions together. With my love for shopping, I helped Erin try out different styles in the comfort of our home and supported her as she ventured into stores, turning shopping into an exciting and affirming experience."
        },
        mission: {
            title: "Why I'm Here",
            text1: "One of my skills is my knack for skimming clothing racks and finding those hidden gems that you might overlook. I've always enjoyed picking out outfits for people, helping them discover clothing that suits their style and personality.",
            text2: "Through this process with Erin, I've realized that not everyone has the support they need during such a significant transition. That's why I'm reaching out to offer help to others who are on a similar journey."
        }
    },

    // Services Section
    services: {
        title: "What I Offer",
        cards: [
            {
                icon: "🛍️",
                title: "In-Person Shopping",
                description: "Personal shopping support in the Greater Seattle area, helping you discover styles that reflect your authentic self.  I'll also select stores that suit your needs and comfort level."
            },
            {
                icon: "💝",
                title: "Style Discovery",
                description: "From picking out clothes from crowded racks to suggesting new styles, I'll help you find your perfect look."
            },
            {
                icon: "🤝",
                title: "Companionship",
                description: "Be your shopping companion, offering encouragement and support as you explore your style."
            },
            {
                icon: "✨",
                title: "Completely Free",
                description: "This support is currently offered at no cost. Let's transform shopping into an empowering experience together!"
            }
        ]
    },

    // How It Works Section
    howItWorks: {
        title: "How It Works",
        steps: [
            {
                number: "1",
                title: "Let's Get to Know Each Other",
                description: "We'll start with a video chat, where we can get to know each other and discuss your style interests, what you're looking for, and any questions you may have. This helps me understand your preferences and comfort level."
            },
            {
                number: "2", 
                title: "Plan Your Shopping Adventure",
                description: "Once we've connected, we'll schedule a time that works for both of us to go shopping together. I'll make sure we have plenty of time to explore and try things on without feeling rushed."
            },
            {
                number: "3",
                title: "I'll Do the Research", 
                description: "Based on our conversation, I'll research stores and locations that match your style preferences and comfort level. I'll send you a list of places to review, and we can discuss which ones feel right for you."
            },
            {
                number: "4",
                title: "Time to Shop!",
                description: "We'll meet up and have a fun, supportive shopping experience together. I'll be there to help you find pieces that make you feel confident and authentic, offering encouragement every step of the way."
            }
        ]
    },

    // CTA Section
    cta: {
        title: "Ready to Build Your Confidence Shopping?",
        text: "Fill out the form below to share your style preferences, budget, and a bit about yourself. Let's have some fun shopping together!"
    },

    // Footer
    footer: {
        copyright: "© 2025 True Self. All rights reserved.",
        contact: "Contact: emily@trueself.style",
        instagram: "Follow me on Instagram: @mytrueself.style"
    }
};

// Function to populate content
function populateContent() {
    // Hero section
    document.querySelector('.hero-subtitle').textContent = websiteContent.hero.subtitle;
    document.querySelector('.cta-button').textContent = websiteContent.hero.ctaButton;

    // About section
    document.querySelector('.about-section .section-header h2').textContent = websiteContent.about.title;
    document.querySelector('.intro-text h3').textContent = websiteContent.about.intro.title;
    document.querySelector('.intro-text p').textContent = websiteContent.about.intro.text;
    document.querySelector('.story-text h3').textContent = websiteContent.about.story.title;
    document.querySelectorAll('.story-text p')[0].textContent = websiteContent.about.story.text1;
    document.querySelectorAll('.story-text p')[1].textContent = websiteContent.about.story.text2;
    document.querySelector('.mission-text h3').textContent = websiteContent.about.mission.title;
    document.querySelectorAll('.mission-text p')[0].textContent = websiteContent.about.mission.text1;
    document.querySelectorAll('.mission-text p')[1].textContent = websiteContent.about.mission.text2;

    // Services section
    document.querySelector('.services-section .section-header h2').textContent = websiteContent.services.title;
    
    const serviceCards = document.querySelectorAll('.service-card');
    websiteContent.services.cards.forEach((card, index) => {
        if (serviceCards[index]) {
            serviceCards[index].querySelector('.service-icon').textContent = card.icon;
            serviceCards[index].querySelector('h3').textContent = card.title;
            serviceCards[index].querySelector('p').textContent = card.description;
        }
    });

    // How It Works section
    document.querySelector('.how-it-works-section .section-header h2').textContent = websiteContent.howItWorks.title;
    
    const steps = document.querySelectorAll('.step');
    websiteContent.howItWorks.steps.forEach((step, index) => {
        if (steps[index]) {
            steps[index].querySelector('.step-number').textContent = step.number;
            steps[index].querySelector('.step-content h3').textContent = step.title;
            steps[index].querySelector('.step-content p').textContent = step.description;
        }
    });

    // CTA section
    document.querySelector('.cta-content h2').textContent = websiteContent.cta.title;
    document.querySelector('.cta-content p').textContent = websiteContent.cta.text;

    // Footer
    document.querySelectorAll('.footer-content p')[0].textContent = websiteContent.footer.copyright;
    document.querySelectorAll('.footer-content p')[1].innerHTML = websiteContent.footer.contact.replace('emily@trueself.style', '<a href="mailto:emily@trueself.style">emily@trueself.style</a>');
    document.querySelectorAll('.footer-content p')[2].innerHTML = websiteContent.footer.instagram.replace('@mytrueself.style', '<a href="https://www.instagram.com/mytrueself.style/" target="_blank" rel="noopener noreferrer">@mytrueself.style</a>');
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', populateContent); 