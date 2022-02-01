import React, {useRef, useEffect} from  "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/styles.scss';

import useWindowSize from "../hooks/useWindowSize";

function Layout({children}) {

  // https://youtu.be/Dz6Sg630I8M
  // Video tutorial I followed for the smooth scrolling

  //Hook
  const size = useWindowSize();
  //Ref
  const layout = useRef();
  const scrollContainer = useRef();

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);


  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
  
  
    //Variables
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference /size.width
    const velocity = +acceleration;
    const skew = velocity * 7.5;


    //
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`

    requestAnimationFrame(() => skewScrolling())

  };


  
  return(
    <div ref={layout} className="Layout">
      <div ref={scrollContainer} className="scroll">
        <>
          <Header />
          {children}
          <Footer />
        </>
      </div>
    </div>
  )
}

export default Layout