/**
 * Created by M3ik Shizuka on 03.08.2019.
 * -----------------------------------------------
 * DebugMyDick｡　出れ！(ﾉ>_<)ﾉ
 * ----------------------------------------------- 
 **/

const lazyLoadInit = () => {
    // Lazy load
    var lazyLoadInstance = new LazyLoad({
        threshold: 200
    });
}

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (!isMobile) {
    let vColdDeathElem = null;
    let vCheckSizeElem = null;

    const windowResizeEvent = (event) => {
        vColdDeathElem.style.height = vCheckSizeElem.offsetHeight + "px";
        vColdDeathElem.style.marginBottom = vCheckSizeElem.offsetHeight * -1 + "px";
    };

    document.addEventListener("DOMContentLoaded", function() {
        coldDeath.load('coldDeath', 'https://m3ikshizuka.github.io/sscdn/js/coldDeath.json');
        vColdDeathElem = document.getElementById("coldDeath");
        vCheckSizeElem = document.getElementById("coldDeathCheckSize");

        if (vColdDeathElem && vCheckSizeElem) {
            windowResizeEvent();
        }

        lazyLoadInit();

        // 3D tilt
        let VanillaTilt = initVanillaTilt();

        let wow = new WOW();
        wow.init();

        const wowOffset = '150';
        const appear_left = document.querySelectorAll('.appear_left');
        appear_left.forEach((el) => {
            el.classList.add('wow', 'FadeInLeft');
            el.setAttribute('data-wow-offset', wowOffset);
        });

        const appear_right = document.querySelectorAll('.appear_right');
        appear_right.forEach((el) => {
            el.classList.add('wow', 'FadeInRight');
            el.setAttribute('data-wow-offset', wowOffset);
        });
    });

    window.addEventListener('resize', windowResizeEvent);

    // window.onload = () => {
    //     let aboutMeContent = document.getElementsByClassName("about_me_content")[0];
    //     let coldDeathElem = document.getElementById("coldDeath");
    //     coldDeathElem.appendChild(aboutMeContent);
    // }
} else {
    document.addEventListener("DOMContentLoaded", function() {
        lazyLoadInit();

        let vColdDeath = document.getElementById("coldDeath");
        vColdDeath.style.display = "none";
    });
}