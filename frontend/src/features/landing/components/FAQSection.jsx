import { useEffect, useState } from "react";

import api from "@/api/axios";

import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


export default function FAQSection() {

  const [faqs, setFaqs] = useState([]);


  useEffect(() => {

    const fetchFAQs = async () => {

      try {

        const response = await api.get("/public/home");

        setFaqs(response.data.data.faqs);

      } catch (error) {

        console.log("FAQ fetch error:", error);

      }

    };


    fetchFAQs();

  }, []);



  return (

    <SectionContainer>

      <SectionHeading
        badge="Frequently Asked Questions"
        title="Everything You Need to Know"
        description="Have questions about SkillNova? Here are the answers to the most common ones."
      />


      <div className="mx-auto mt-12 max-w-4xl">

        <Accordion 
          type="single" 
          collapsible
          className="space-y-4"
        >

          {faqs.map((faq, index) => (

            <AccordionItem

              key={faq.id}

              value={`item-${index}`}

              className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"

            >

              <AccordionTrigger className="text-left text-lg font-semibold">

                {faq.question}

              </AccordionTrigger>


              <AccordionContent className="text-slate-600 leading-7">

                {faq.answer}

              </AccordionContent>


            </AccordionItem>

          ))}


        </Accordion>


      </div>


    </SectionContainer>

  );
}