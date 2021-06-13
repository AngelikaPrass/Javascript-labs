import React, {useState} from 'react';
import { HiArrowUp } from "react-icons/hi";
import "./Scroll.scss";

const ScrollButton = () =>{  
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else{
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className="scrollUp" style={{display: visible ? "block" : "none"}} onClick={scrollToTop}> 
     <HiArrowUp />
    </button>
  );
}
  
export default ScrollButton;