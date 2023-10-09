import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import pose from "../../assets/pose1.png";
import faq from '../../assets/faq2.png'
import qmark from '../../assets/qmark.png'
import qmark2 from '../../assets/qmark2.png'
const faqData = [
  {
    question: "What is a checking account?",
    answer:
      "A checking account is a type of bank account that allows you to deposit and withdraw money easily. It is often used for everyday expenses, and you can write checks or use a debit card to make payments and withdrawals.",
  },
  {
    question: "How do I open a savings account?",
    answer:
      "To open a savings account, visit your nearest bank branch or apply online. You will need to provide identification and complete some paperwork. Once your account is open, you can start saving money and earning interest.",
  },
  {
    question: "What is the minimum balance requirement for a savings account?",
    answer:
      "Minimum balance requirements vary depending on the bank and the type of savings account. Some accounts may have no minimum balance, while others may require a certain amount to avoid fees. It's best to check with your bank for specific details.",
  },
  {
    question: "How can I protect my account from fraud?",
    answer:
      "To protect your account from fraud, regularly monitor your account statements, use strong and unique passwords, enable two-factor authentication, and be cautious of phishing emails and scams. Report any suspicious activity to your bank immediately.",
  },
  {
    question: "What is the interest rate on a certificate of deposit (CD)?",
    answer:
      "The interest rate on a CD can vary depending on the term and the current market conditions. Typically, longer-term CDs offer higher interest rates. It's a safe way to save money with a fixed interest rate for a set period.",
  },
  {
    question: "How can I apply for a credit card?",
    answer:
      "You can apply for a credit card online through the bank's website or by visiting a bank branch. You'll need to provide your personal and financial information for the application. Approval is based on your credit history and income.",
  },
  {
    question: "What should I do if my credit card is lost or stolen?",
    answer:
      "If your credit card is lost or stolen, immediately contact your bank's customer service or use their online portal to report it. They will help you deactivate the card and issue a replacement to prevent unauthorized use.",
  },
  
];

function HomeAccordion() {
  return (
    <main className="flex flex-col  items-center justify-evenly w-full h-screen">
      {/* FAQ Section */}
      <h1 className="uppercase tracking-wider font-bold text-zinc-50 text-4xl mb-6">
        FAQ's
      </h1>
      <div className="flex items-center mx-auto justify-around w-[90%]">
        {/* Image Section */}
        <div className="w-[30%] relative  p-6">
          <img
            src={pose} // Replace with your image URL
            alt="Illustration"
            className="w-full h-auto contrast-150"
          />
      <img src={faq} className="w-[30%] top-10 absolute h-auto contrast-150"/>
    

      <img src={qmark2} className="w-[18%] top-[8%] right-[22%] absolute h-auto contrast-150"/>
        </div>
        <div className="w-1/2 p-6  text-white">
          <Accordion type="single" collapsible>
            {faqData.map((item, index) => (
              <AccordionItem value={index + 1}  key={index}>
            <AccordionTrigger className="text-xl hover:no-underline text-start">{item.question}</AccordionTrigger>
            <AccordionContent className="text-lg text-slate-400 text-start">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}

export default HomeAccordion;
