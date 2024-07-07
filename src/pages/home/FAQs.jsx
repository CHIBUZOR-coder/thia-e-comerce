
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
