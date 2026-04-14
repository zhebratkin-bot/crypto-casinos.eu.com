/**
 * CRYPTO CASINOS IRELAND - MAIN SCRIPT (Simplified for Monolithic)
 * Handles basic UI interactions
 */

class SiteUI {
    constructor() {
        this.init();
    }

    init() {
        this.initMobileMenu();
        this.initSmoothScroll();
        this.initFAQ();
    }

    initMobileMenu() {
        const toggle = document.getElementById('mobile-toggle');
        const nav = document.querySelector('.nav');
        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                toggle.classList.toggle('open');
            });
        }
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    initFAQ() {
        document.addEventListener('click', (e) => {
            const q = e.target.closest('.faq-question');
            if (q) {
                const item = q.parentElement;
                item.classList.toggle('active');
            }
        });
    }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => new SiteUI());
