import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Zunba?",
      answer: "Zunba is a [brief description of the platform/service].",
    },
    {
      question: "How can I sign up on Zunba?",
      answer: "You can sign up by visiting [signup link] and following the instructions.",
    },
    {
      question: "Is Zunba free to use?",
      answer: "Zunba offers both free and premium plans. Check our pricing page for details.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click on the “Forgot Password” option on the login page and follow the steps.",
    },
    {
      question: "Who can use Zunba?",
      answer: "Zunba is designed for [target audience].",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach out via [support email] or our contact page.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-black rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-medium py-2"
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
