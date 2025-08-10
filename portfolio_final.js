 // Animate language progress bars on scroll into view
        function animateLangBars() {
            document.querySelectorAll('.lang-progress-bar').forEach(function (bar) {
                var pct = bar.getAttribute('data-pct');
                var progress = bar.querySelector('.skill-progress-bar');
                var pctText = bar.querySelector('.skill-pct');
                progress.style.width = pct + '%';
                pctText.textContent = pct + '%';
            });
        }
        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top < (window.innerHeight - 60) && rect.bottom > 0
            );
        }
        let langAnimated = false;
        window.addEventListener('scroll', function () {
            if (!langAnimated) {
                var langCol = document.querySelector('.skills-progress-col');
                if (langCol && isInViewport(langCol)) {
                    animateLangBars();
                    langAnimated = true;
                }
            }
        });
        window.addEventListener('DOMContentLoaded', function () {
            setTimeout(function () {
                var langCol = document.querySelector('.skills-progress-col');
                if (langCol && isInViewport(langCol)) {
                    animateLangBars();
                    langAnimated = true;
                }
            }, 300);
        });
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });