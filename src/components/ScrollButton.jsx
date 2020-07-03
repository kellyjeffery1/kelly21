import React, { useEffect } from 'react';
import { useWindowScroll} from 'react-use';
import { useState } from 'react';

const ScrollButton = () => {
    const { y: pageYOffSet } = useWindowScroll();
    const [visible, setVisibilty] = useState(false);

    useEffect(() => {
        if (pageYOffSet > 400) {
            setVisibilty(true);
        } else {
            setVisibilty(false);
        }
    }, [pageYOffSet]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth'})
    
    if (!visible) {
        return false;
    }
    return (
        <ul className="contact-ul">
            <li className=" scroll-to-top contact-li" onClick={scrollToTop}> 
                    <span />
                    <span />
                    <span />
                    <span />
                    <span className="fa fa-arrow-up" />
            </li>
        </ul>	
           
	);
};
export default ScrollButton;