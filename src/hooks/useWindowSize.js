// LOOK INTO ADDING DEBOUNCE FUNCTION
// https://youtu.be/Dz6Sg630I8M
// Video tutorial followed for this code
import { useState, useEffect } from "react";

// export default function useWindowSize() {
  
//   // Possible fix, at some point may need to get rid of this useEffect
//   useEffect(() => {
//     function getSize() {
//       return {
//         width: window.innerWidth,
//         height: window.innerHeight
//       };
//     }
//   }, []);

//   const [windowSize, setWindowSize] = useState(getSize);

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize(getSize());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowSize;
// }



export default function useWindowSize() {
  const isClient = typeof window === "object"
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
