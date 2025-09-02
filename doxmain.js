			// Header Section

		AOS.init({
			duration: 1000,
			once: true,
		});

		let lastScrollTop = 0;
		const header = document.getElementById('header');
		window.addEventListener('scroll', function() {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop && scrollTop > 100) {
				// Scroll Down
				header.classList.remove('sticky');
				header.classList.add('hidden');
			} else {
				// Scroll Up
				if (scrollTop > 100) {
					header.classList.add('sticky');
					header.classList.remove('hidden');
				} else {
					header.classList.remove('sticky', 'hidden');
				}
			}
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
		});
							// toggle Section

		const menuBtn = document.getElementById('menu-btn');
		const mobileMenu = document.getElementById('mobile-menu');
		menuBtn.addEventListener('click', () => {
			const isHidden = mobileMenu.classList.contains('hidden');
			if (isHidden) {
				mobileMenu.classList.remove('hidden');
				setTimeout(() => {
					mobileMenu.classList.remove('-translate-y-full');
				}, 10);
				menuBtn.innerHTML = '<span class="material-icons">close</span>';
			} else {
				mobileMenu.classList.add('-translate-y-full');
				setTimeout(() => {
					mobileMenu.classList.add('hidden');
				}, 300);
				menuBtn.innerHTML = '<span class="material-icons">menu</span>';
			}
		});


					// Header hijacking user scroll Section

		const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: { crossFade: true },
  allowTouchMove: false,  // stop Swiper from hijacking user scroll
});



   document.addEventListener('DOMContentLoaded', function () {
      // AOS
      AOS.init({ duration: 1000, once: true });

      // Swiper (gallery)
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        autoplay: { delay: 2500, disableOnInteraction: false },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }
      });

      // Counters
      function setupCounter(minusBtnId, plusBtnId, displayId, minValue) {
        const minusBtn = document.getElementById(minusBtnId);
        const plusBtn  = document.getElementById(plusBtnId);
        const display  = document.getElementById(displayId);

        const getVal = () => Number((display.textContent || "").trim()) || 0;
        const setVal = (v) => { display.textContent = v; };

        plusBtn.addEventListener('click', () => setVal(getVal() + 1));
        minusBtn.addEventListener('click', () => {
          const current = getVal();
          if (current > minValue) setVal(current - 1);
        });
      }

      setupCounter('adult-minus', 'adult-plus', 'adult-count', 1); // Adults ≥ 1
      setupCounter('child-minus', 'child-plus', 'child-count', 0); // Children ≥ 0 (change to 1 if you prefer)
    });




  // Accommodation Swiper (manual control only)
  const accomSwiper = new Swiper('.accom-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });
