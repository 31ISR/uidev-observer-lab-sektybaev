console.log("Скрипт да");

const options = {
    threshold: 0.2,
    rootMargin: "0px 0px -80px 0px"
};


const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        if (el.classList.contains("stagger-item")) {
            const parent = el.parentElement;
            const group = parent.querySelectorAll(".stagger-item");

            group.forEach((item, index) => {
                setTimeout(() => item.classList.add("animate"), index * 200);
            });

            group.forEach((item) => observer.unobserve(item));
        } else {
            el.classList.add("animate");
            observer.unobserve(el);
        }
    });
}, options);


const animatedEls = document.querySelectorAll(
    ".animate-on-scroll, .slide-left, .slide-right, .scale-up, .fade-in, .stagger-item"
);
animatedEls.forEach((el) => revealObserver.observe(el));

const progressBar = document.querySelector(".scroll-progress");


window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    progressBar.style.width = percent + "%";
});


const particlesContainer = document.querySelector(".particles");


