// import { useState, useRef, useEffect } from "react"

// const useElementOnScreen = (options) => {
//   const containerRef = useRef(null)
//   const [toggleList, setToggleList] = useState("#")

//   const callbackFunction = (entries) => {
//     const [entry] = entries
//     setToggleList(entry.isIntersecting)
//   }

//   useEffect(() => {

//     const observer = new IntersectionObserver(callbackFunction, options)
//     if (containerRef.current) observer.observe(containerRef.current)

//     return () => {
//       if (containerRef.current) observer.unobserve(containerRef.current)
//     }
//   }, [containerRef, options])

//   return [containerRef, toggleList]
// }

// export default useElementOnScreen