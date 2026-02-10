document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor Logic REMOVED
    /*
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
        cursor.style.background = 'var(--accent-color)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'transparent';
    });
    */

    // Funny Button Logic -> REMOVED. Navigates to shop.html now.
    // const shopBtn = document.querySelector('#shop-btn');
    // if (shopBtn) { ... }

    // const runBtn = document.querySelector('#shop-btn'); // REMOVED run logic on main button for now to allow clicking

    // Only run away sometimes (20% chance) to not be too annoying, 
    // or run away on the specific "BUY FOR YOUR SOUL" button.

    const soulBuyBtn = document.querySelectorAll('.buy-btn')[2]; // The 3rd button

    if (soulBuyBtn) {
        soulBuyBtn.addEventListener('mouseover', () => {
            const x = Math.random() * (window.innerWidth - soulBuyBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - soulBuyBtn.offsetHeight);

            // Just wiggle it a bit or make it "nervous"
            soulBuyBtn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 20 - 10}deg)`;
        });
    }

    const allBuyBtns = document.querySelectorAll('.buy-btn');
    allBuyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            alert("ERROR 404: WALLET NOT FOUND (Just kidding, we just don't want your money yet. Wait for the real launch!)");
        });
    });

    // Add some random "glitch" effect to titles occasionally
    setInterval(() => {
        const title = document.querySelector('h1 span');
        if (title && Math.random() > 0.9) {
            const originalText = title.getAttribute('data-text') || "LAJI STORES";
            title.textContent = "TRASH STORES";
            setTimeout(() => {
                title.textContent = originalText;
            }, 100);
        }
    }, 2000);

    // Modal Logic
    const modal = document.getElementById("cart-modal");
    const btn = document.getElementById("cart-btn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Cart Count Logic (Fake)
    let cartCount = 0;
    const cartBtnProp = document.getElementById('cart-btn');

    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            cartBtnProp.innerText = `Cart (${cartCount})`;
            // Funny feedback
            const originalText = btn.innerText;
            btn.innerText = "MISTAKE MADE!";
            setTimeout(() => btn.innerText = originalText, 1000);
        });
    });    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.querySelector('header nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});
