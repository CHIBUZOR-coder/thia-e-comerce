// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useState } from "react";
// const FAQs = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleShow = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="px-4 md:px-28">
//       <div className="flex flex-col my-8 md:flex-row gap-20">
//         <div className="w-3/4">
//           <div className="">
//             <p className="text-3xl ">FAQs</p>
//           </div>

//           <div className="flex flex-col my-6 gap-10">
//             <div>
//               <div
//                 onClick={handleShow}
//                 className={`flex justify-between cursor-pointer  `}
//               >
//                 <span className="faq">ORDERS</span>
//                 {isMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//               </div>
//               <hr />
//               <div
//                 className={` w-10 h-10 dropp bg-blue-500  ${
//                   isMenuOpen ? "" : "hidden"
//                 }`}
//               ></div>
//             </div>

//             <div>
//               <div className="flex justify-between cursor-pointer">
//                 <span className="faq">PAYMENT</span>

//                 <IoIosArrowDown />
//               </div>
//               <hr />
//               <div className=" w-10 h-10 dropp bg-blue-500"></div>
//             </div>

//             <div>
//               <div className="flex justify-between cursor-pointer">
//                 <span className="faq">SHIPPING AND DELIVERY</span>
//                 <IoIosArrowDown />
//               </div>
//               <hr />
//               <div className=" w-10 h-10 dropp bg-blue-500"></div>
//             </div>

//             <div>
//               <div className="flex justify-between cursor-pointer">
//                 <span className="faq">RETURNS</span>
//                 <IoIosArrowDown />
//               </div>
//               <hr />
//               <div className="w-10 h-10 dropp bg-blue-500"></div>
//             </div>

//             <div>
//               <div className="flex justify-between  cursor-pointer">
//                 <span className="faq">MISCELLANEOUS</span>
//                 <IoIosArrowDown />
//               </div>
//               <hr />
//               <div className=" h-10 dropp bg-blue-500"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQs;



// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useState, useRef, useEffect } from "react";
// import PropTypes from "prop-types";

// const FAQs = () => {
//   const [openItems, setOpenItems] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);
//   const contentRefs = useRef([]);
//   const contentRef = useRef(null);

//   const handleShow = (index) => {
//     setOpenItems((prev) => {
//       const newOpenItems = [...prev];
//       newOpenItems[index] = !newOpenItems[index];
//       return newOpenItems;
//     });
//   };

//   useEffect(() => {
//     openItems.forEach((isOpen, index) => {
//       const contentEl = contentRefs.current[index];
//       if (contentEl) {
//         if (isOpen) {
//           contentEl.style.maxHeight = `${contentEl.scrollHeight}px`;
//         } else {
//           contentEl.style.maxHeight = "0px";
//         }
//       }
//     });
//   }, [openItems]);

//   const faqItems = [
//     {
//       title: "ORDERS",
//       content: (
//         <div className="font-semibold flex flex-col gap-4">
//           <div className="flex flex-col w-full">
//             <span className={`questions`}>
//               Do I need to create an account to order online?
//             </span>
//             <div className="w-full  ">
//               <span
//                 className={`bg-blue-500 w-ful h-6 Answers  transition-max-height duration-1000 ease-in-out `}
               
//               >
//                 Yes, creating an account is required.
//               </span>
//             </div>
//           </div>
//           <div className="flex flex-col w-full">
//             <span  className={`questions`}>
//               I have forgotten my password, how do I reset this?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers    `}>
//               Please use the "Forgot Password" link on the login page.
//             </span>
//           </div>

//           <div className="flex flex-col w-full">
//             <span  className={`questions`}>
//               How do I know my order has been placed successfully?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers   `}>
//               You will receive an email confirmation upon successful order
//               placement.
//             </span>
//           </div>
//           <div className="flex flex-col w-full">
//             <span className={`questions`}>
//               Can I make changes/amend my order once it has been placed?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers    `}>
//               Changes can be made within 24 hours of order placement.
//             </span>
//           </div>

//           <div className="flex flex-col w-full">
//             <span  className={`questions`}>
//               Is it possible to cancel my order?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers    `}>
//               Orders can be canceled before they are shipped.
//             </span>
//           </div>

//           <div className="flex flex-col w-full">
//             <span className={`questions`}>
//               I have received my order but something is missing, what do I do?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers    `}>
//               Please contact our customer service for assistance.
//             </span>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "PAYMENT",
//       content: (
//         <div className="font-semibold flex flex-col gap-4">
//           <div className="flex flex-col w-full">
//             <span  className={`questions`}>
//               What payment methods do you accept?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               We accept Visa, MasterCard, and PayPal.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span className={`questions`}>
//               When will I be charged for my order?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers   `}>
//               You will be charged at the time of order placement.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span className={`questions`}>
//               Can I use my online credit on the website and over the phone?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               Yes, online credits can be used both online and over the phone.
//             </span>
//           </div>

//           <div className=" flex flex-col">
//             <span className={`questions`}>
//               any tax charges apply?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               Taxes may apply based on your location.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span  className={`questions`}>
//               Is it safe to shop with Thia's Apparel online?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               Yes, we use secure encryption for all transactions.
//             </span>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "SHIPPING AND DELIVERY",
//       content: (
//         <div className="font-semibold flex flex-col gap-4">
//           <div className="flex flex-col">
//             <span  className={`questions`}>
//               What delivery options do you provide?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers    `}>
//               We offer standard and expedited shipping options.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span className={`questions `}>
//               Which delivery provider do you use?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               We use USPS for domestic and DHL for international shipments.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span className={`questions `}>
//               Can you deliver to a PO box?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers   `}>
//               Yes, we can deliver to PO boxes.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span  className={`questions `}>
//               Do any tax charges apply?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               Taxes may apply based on your location.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span className={`questions `}>
//               Can I upgrade my delivery after I have placed my order?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               Upgrades can be requested before shipment processing.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span  className={`questions `}>
//               Can I track my order once it has been shipped?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers `}>
//               Yes, tracking information will be provided.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span className={`questions `}>
//               I have a problem with my delivery, what should I do?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               Please contact our customer service for assistance.
//             </span>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "RETURNS",

//       content: (
//         <div className="font-semibold flex flex-col gap-4">
//           <div className="flex flex-col">
//             <span className={`questions`}>
//               What is your returns policy?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               Yes, creating an account is required.
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <span  className={`questions`}>
//               How do I return my item?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               Please use the "Forgot Password" link on the login page.
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <span  className={`questions`}>
//               Exchanges - not applicable
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers  `}>
//               You will receive an email confirmation upon successful order
//               placement.
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <span  className={`questions`}>
//               When will I receive my refund?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers `}>
//               Changes can be made within 24 hours of order placement.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span  className={`questions`}>
//               I received my item more than 28 days ago, can I still return?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers `}>
//               Orders can be canceled before they are shipped.
//             </span>
//           </div>

//           <div className="flex flex-col">
//             <span  className={`questions`}>
//               What should I do if my item is faulty?
//             </span>
//             <span className={`bg-blue-500 w-ful h-6 Answers `}>
//               Please contact our customer service for assistance.
//             </span>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="px-4 md:px-28">
//       <div className="flex flex-col my-8 md:flex-row gap-20">
//         <div className="w-3/4">
//           <div>
//             <p className="text-3xl">FAQs</p>
//           </div>
//           <div className="flex flex-col my-6 gap-10">
//             {faqItems.map((item, index) => (
//               <div key={index}>
//                 <div
//                   onClick={() => handleShow(index)}
//                   className="flex justify-between cursor-pointer"
//                 >
//                   <span className="faq">{item.title}</span>
//                   {openItems[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
//                 </div>
//                 <hr />
//                 <div
//                   ref={(el) => (contentRefs.current[index] = el)}
//                   className="w-full overflow-hidden transition-max-height duration-1000 ease-in-out "
//                   style={{
//                     maxHeight: openItems[index]
//                       ? `${contentRefs.current[index]?.scrollHeight}px`
//                       : "0px",
//                   }}
//                 >
//                   <div onClick={handleShow} className="p-4 ">
//                     {item.content}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// FAQs.propTypes = {
//   handleAnswerShow2: PropTypes.func.isRequired,
//   IsQuestionOpen: PropTypes.bool.isRequired,
// };

// export default FAQs;



// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useState, useRef, useEffect } from "react";

// const FAQs = () => {
//   const [openItems, setOpenItems] = useState([false, false, false, false]);
//   const contentRefs = useRef([]);

//   const handleShow = (index) => {
//     setOpenItems((prev) => {
//       const newOpenItems = [...prev];
//       newOpenItems[index] = !newOpenItems[index];
//       return newOpenItems;
//     });
//   };

//   useEffect(() => {
//     openItems.forEach((isOpen, index) => {
//       const contentEl = contentRefs.current[index];
//       if (contentEl) {
//         if (isOpen) {
//           contentEl.style.maxHeight = `${contentEl.scrollHeight}px`;
//         } else {
//           contentEl.style.maxHeight = "0px";
//         }
//       }
//     });
//   }, [openItems]);

//   const faqItems = [
//     {
//       title: "ORDERS",
//       content: (
//         <div className="font-semibold flex flex-col gap-4">
         

//           <div className="flex flex-col w-full">
//             <span className="questions" onClick={() => handleShow(1)}>
//               Do I need to create an account to order online?
//             </span>
//             <span
//               ref={(el) => (contentRefs.current[1] = el)}
//               className="bg-blue-500 w-full h-6 Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
//               style={{
//                 maxHeight: openItems[1]
//                   ? `${contentRefs.current[1]?.scrollHeight}px`
//                   : "0px",
//               }}
//             >
//               Yes, creating an account is required.
//             </span>
//           </div>

//           <div className="flex flex-col w-full">
//             <span className="questions" onClick={() => handleShow(2)}>
//               I have forgotten my password, how do I reset this?
//             </span>
//             <span
//               ref={(el) => (contentRefs.current[2] = el)}
//               className="bg-blue-500 w-full h-6 Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
//               style={{
//                 maxHeight: openItems[2]
//                   ? `${contentRefs.current[2]?.scrollHeight}px`
//                   : "0px",
//               }}
//             >
//               Please use the "Forgot Password" link on the login page.
//             </span>
//           </div>

//           <div className="flex flex-col w-full ">
//             <span className="questions" onClick={() => handleShow(3)}>
//               How do I know my order has been placed successfully?
//             </span>
//             <span
//               ref={(el) => (contentRefs.current[3] = el)}
//               className="bg-blue-500 w-full h-6 Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
//               style={{
//                 maxHeight: openItems[3]
//                   ? `${contentRefs.current[3]?.scrollHeight}px`
//                   : "0px",
//               }}
//             >
//               You will receive an email confirmation upon successful order
//               placement.
//             </span>
//           </div>
//           <div className="flex flex-col w-full ">
//             <span className="questions" onClick={() => handleShow(4)}>
//               Can I make changes/amend my order once it has been placed?
//             </span>
//             <span
//               ref={(el) => (contentRefs.current[4] = el)}
//               className="bg-blue-500 w-full h-6 Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
//               style={{
//                 maxHeight: openItems[4]
//                   ? `${contentRefs.current[4]?.scrollHeight}px`
//                   : "0px",
//               }}
//             >
//               Changes can be made within 24 hours of order placement.
//             </span>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "PAYMENT",
//       content: (
//         <div className="font-semibold flex flex-col gap-4">
//           <div className="flex flex-col w-full">
//             <span className="questions" onClick={() => handleShow(5)}>
//               What payment methods do you accept?
//             </span>
//             <span
//               ref={(el) => (contentRefs.current[5] = el)}
//               className="bg-blue-500 w-full h-6 Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
//               style={{
//                 maxHeight: openItems[5]
//                   ? `${contentRefs.current[5]?.scrollHeight}px`
//                   : "0px",
//               }}
//             >
//               We accept Visa, MasterCard, and PayPal.
//             </span>
//           </div>
//           <div className="flex flex-col w-full">
//             <span className="questions" onClick={() => handleShow(6)}>
//               When will I be charged for my order?
//             </span>
//             <span
//               ref={(el) => (contentRefs.current[6] = el)}
//               className="bg-blue-500 w-full h-6 Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
//               style={{
//                 maxHeight: openItems[6]
//                   ? `${contentRefs.current[6]?.scrollHeight}px`
//                   : "0px",
//               }}
//             >
//               You will be charged at the time of order placement.
//             </span>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "SHIPPING AND DELIVERY",
//       content: (
//         <div className="font-semibold flex flex-col gap-4">
//           <div className="flex flex-col w-full">
//             <span className="questions" onClick={() => handleShow(7)}>
//               What delivery options do you provide?
//             </span>
//             <span
//               ref={(el) => (contentRefs.current[7] = el)}
//               className="bg-blue-500 w-full h-6 Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
//               style={{
//                 maxHeight: openItems[7]
//                   ? `${contentRefs.current[7]?.scrollHeight}px`
//                   : "0px",
//               }}
//             >
//               We offer standard and expedited shipping options.
//             </span>
//           </div>
//           <div className="flex flex-col w-full">
//             <span className="questions" onClick={() => handleShow(8)}>
//               Which delivery provider do you use?
//             </span>
//             <span
//               ref={(el) => (contentRefs.current[8] = el)}
//               className="bg-blue-500 w-full h-6 Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
//               style={{
//                 maxHeight: openItems[8]
//                   ? `${contentRefs.current[8]?.scrollHeight}px`
//                   : "0px",
//               }}
//             >
//               We use USPS for domestic and DHL for international shipments.
//             </span>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="px-4 md:px-28">
//       <div className="flex flex-col my-8 md:flex-row gap-20">
//         <div className="w-3/4">
//           <div>
//             <p className="text-3xl">FAQs</p>
//           </div>
//           <div className="flex flex-col my-6 gap-10">
//             {faqItems.map((item, index) => (
//               <div key={index}>
//                 <div
//                   onClick={() => handleShow(index)}
//                   className="flex justify-between cursor-pointer"
//                 >
//                   <span className="faq">{item.title}</span>
//                   {openItems[index] ? <IoIosArrowUp /> : <IoIosArrowDown />}
//                 </div>
//                 <hr />
//                 <div
//                   ref={(el) => (contentRefs.current[index] = el)}
//                   className="w-full overflow-hidden transition-max-height duration-1000 ease-in-out"
//                   style={{
//                     maxHeight: openItems[index]
//                       ? `${contentRefs.current[index]?.scrollHeight}px`
//                       : "0px",
//                   }}
//                 >
//                   <div className="p-4">{item.content}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQs;



import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

const FAQs = () => {
  const [openFaqItems, setOpenFaqItems] = useState([false, false, false]);
  const [openQuestions, setOpenQuestions] = useState({});
  const contentRefs = useRef([]);

  const handleShowFaq = (index) => {
    setOpenFaqItems((prev) => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  const handleShowQuestion = (faqIndex, questionIndex) => {
    setOpenQuestions((prev) => {
      const newOpenQuestions = { ...prev };
      const key = `${faqIndex}-${questionIndex}`;
      newOpenQuestions[key] = !newOpenQuestions[key];
      return newOpenQuestions;
    });
  };

  useEffect(() => {
    openFaqItems.forEach((isOpen, index) => {
      const contentEl = contentRefs.current[index];
      if (contentEl) {
        if (isOpen) {
          contentEl.style.maxHeight = `${contentEl.scrollHeight}px`;
        } else {
          contentEl.style.maxHeight = "0px";
        }
      }
    });
  }, [openFaqItems]);

  useEffect(() => {
    Object.keys(openQuestions).forEach((key) => {
      const [faqIndex, questionIndex] = key.split("-").map(Number);
      const contentEl = contentRefs.current[`${faqIndex}-${questionIndex}`];
      if (contentEl) {
        if (openQuestions[key]) {
          contentEl.style.maxHeight = `${contentEl.scrollHeight}px`;
        } else {
          contentEl.style.maxHeight = "0px";
        }
      }
    });
  }, [openQuestions]);

  const faqItems = [
    {
      title: "ORDERS",
      questions: [
        {
          q: "Do I need to create an account to order online?",
          a: "Yes, creating an account is required.",
        },
        {
          q: "I have forgotten my password, how do I reset this?",
          a: 'Please use the "Forgot Password" link on the login page.',
        },
        {
          q: "How do I know my order has been placed successfully?",
          a: "You will receive an email confirmation upon successful order placement.",
        },
        {
          q: "Can I make changes/amend my order once it has been placed?",
          a: "Changes can be made within 24 hours of order placement.",
        },
      ],
    },
    {
      title: "PAYMENT",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept Visa, MasterCard, and PayPal.",
        },
        {
          q: "When will I be charged for my order?",
          a: "You will be charged at the time of order placement.",
        },
      ],
    },
    {
      title: "SHIPPING AND DELIVERY",
      questions: [
        {
          q: "What delivery options do you provide?",
          a: "We offer standard and expedited shipping options.",
        },
        {
          q: "Which delivery provider do you use?",
          a: "We use USPS for domestic and DHL for international shipments.",
        },
      ],
    },
  ];

  return (
    <div className="px-4 md:px-28">
      <div className="flex flex-col my-8 md:flex-row gap-20">
        <div className="w-3/4">
          <div>
            <p className="text-3xl">FAQs</p>
          </div>
          <div className="flex flex-col my-6 gap-10">
            {faqItems.map((item, faqIndex) => (
              <div key={faqIndex}>
                <div
                  onClick={() => handleShowFaq(faqIndex)}
                  className="flex justify-between cursor-pointer"
                >
                  <span className="faq">{item.title}</span>
                  {openFaqItems[faqIndex] ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                <hr />
                <div
                  ref={(el) => (contentRefs.current[faqIndex] = el)}
                  className="w-full overflow-hidden transition-max-height duration-1000 ease-in-out"
                  style={{
                    maxHeight: openFaqItems[faqIndex]
                      ? `${contentRefs.current[faqIndex]?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <div className="p-4">
                    <div className="font-semibold flex flex-col gap-4">
                      {item.questions.map((q, questionIndex) => (
                        <div
                          className="flex flex-col w-full"
                          key={questionIndex}
                        >
                          <span
                            className="questions cursor-pointer"
                            onClick={() =>
                              handleShowQuestion(faqIndex, questionIndex)
                            }
                          >
                            {q.q}
                          </span>
                          <span
                            ref={(el) =>
                              (contentRefs.current[
                                `${faqIndex}-${questionIndex}`
                              ] = el)
                            }
                            className="bg-blue-500 w-full h-auto Answers overflow-hidden transition-max-height duration-1000 ease-in-out"
                            style={{
                              maxHeight: openQuestions[
                                `${faqIndex}-${questionIndex}`
                              ]
                                ? `${
                                    contentRefs.current[
                                      `${faqIndex}-${questionIndex}`
                                    ]?.scrollHeight
                                  }px`
                                : "0px",
                            }}
                          >
                            {q.a}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
