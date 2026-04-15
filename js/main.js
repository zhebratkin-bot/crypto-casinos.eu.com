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
        this.initBackToTop();
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

    initBackToTop() {
        const btn = document.createElement('button');
        btn.innerHTML = '↑';
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', 'Back to Top');
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => new SiteUI());
