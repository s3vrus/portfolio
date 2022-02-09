import React, {useRef, useEffect} from  "react";
import Header from "./header";
import Footer from "./footer";
import '../styles/styles.scss';

import useWindowSize from "../hooks/useWindowSize";

function Layout({children, location}) {

  // https://youtu.be/Dz6Sg630I8M
  // Video tutorial I followed for the smooth scrolling

  const size = useWindowSize();
  
  const app = useRef();
  const scrollContainer = useRef();

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };

  // useEffect(() => {
  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`;
  // }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
  }

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
  
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference /size.width;
    const velocity = +acceleration;
    // original is * 7.5    \/
    const skew = velocity * 10;

    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScrolling());

  };

  useEffect(() => {
    setBodyHeight()
  }, [size, location])

  
  return(
    <>
      <div ref={app} className="app">
        <div ref={scrollContainer} className="scroll">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
