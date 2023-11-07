
function scroll_to_top() {
    const smoothscroll = () => {
        const currentScroll = 
        document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll));
        }
    };
    smoothscroll();  
}