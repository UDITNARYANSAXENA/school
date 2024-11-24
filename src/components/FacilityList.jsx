import React from 'react'
import { facilities } from '../constants'

const FacilityList = () => {
  return (
    <div className='facilities'>
        {facilities.map(fac => (
            <div className='facility' key={fac.id}>
                <h3>{fac.title}</h3>
                <img src={fac.image} alt={fac.title} />
                <p>{fac.text}</p>
            </div>
        ))}
    </div>
  )
}

export default FacilityList

// import React, { useState, useEffect } from 'react'
// import { testimonials } from '../constants'
// // import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

// const FacilityList = () => {
//   const [people] = useState(testimonials);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const lastIndex = people.length - 1;
//     if (index < 0) {
//       setIndex(lastIndex);
//     }
//     if (index > lastIndex) {
//       setIndex(0)
//     }
//   }, [index, people])
  
//   useEffect(() => {
//     let slider = setInterval(() => {
//       setIndex(index + 1);
//     }, 5000);
//     return () => (
//       clearInterval(slider)
//     )
//   }, [index])
  

//   return (
//     <div className="content">
//       <h1>Facilities</h1>
//       <div className="facilities">
//         {testimonials.map((test, indexTest) => {
//           const { id, icon, image, name, testimonial } = test;
//           let position = "nextSlide";
//           if (indexTest === index) {
//             position = "activeSlide";
//           }
//           if (indexTest === index - 1 || (index === 0 && indexTest === people.length - 1)) {
//             position = "lastslide";
//           }
//           return (
//             <article className={position} key={id}>
//               <img src={image} />
//               <h3>{name}</h3>
//               <p>{testimonial}</p>
//               <div className="icon">
//                 {icon}
//               </div>
//             </article>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default FacilityList;