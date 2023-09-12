import React, { useEffect } from 'react';
import $ from 'jquery';

const ToTop = () => {
    useEffect(() => {
        const backtotop = document.getElementById("back-to-top");

        function scrollFunction() {
            const max_pixel_value = 100;
            if (document.body.scrollTop > max_pixel_value || document.documentElement.scrollTop > max_pixel_value) {
                backtotop.style.display = "block";
            } else {
                backtotop.style.display = "none";
            }
        }

        window.addEventListener('scroll', scrollFunction);

        return () => {
            // Cleanup: Remove the event listener when the component unmounts
            window.removeEventListener('scroll', scrollFunction);
        }
    }, []); // Empty dependency array ensures the effect runs once after initial render

    function topFunction() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    }

    return (
        <div id='back-to-top' onClick={topFunction}><img src="/scroll-to-top.png" alt="go-to-top" /></div>
    );
}

export default ToTop;
