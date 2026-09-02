/**
 * Single source of truth for the FAQs. The About page renders these and
 * StructuredData emits them as FAQPage schema, so the visible text and the
 * marked-up text can never disagree — which is what Google requires.
 */
export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What is integrative medicine?",
    answer:
      "Integrative medicine combines conventional medical care with evidence-based nutrition, lifestyle medicine, and targeted supplementation to treat the whole person—not just symptoms. The goal is to address root causes of chronic health concerns while supporting long-term wellness. It uses peer-reviewed research, clinical guidelines, and laboratory testing, alongside lifestyle and nutritional interventions to support safe and effective care.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "No. Pulse Whole Health is a cash-pay (direct-pay) practice and does not accept or bill insurance. Payment is due at the time of booking, and we accept major credit cards, debit cards, and HSA/FSA cards. Current pricing for every visit type and care package is listed on our booking page.",
  },
  {
    question: "What training do integrative medicine PAs have?",
    answer:
      "In addition to formal medical training and board certification, integrative PAs pursue advanced education in nutrition, hormone optimization, gut health, metabolic health, and longevity-focused care. Integrative PAs are able to order diagnostic testing, prescribe medications, and always work in conjunction with a collaborating physician.",
  },
  {
    question: "Can integrative medicine help with gut health issues?",
    answer:
      "Yes. Integrative medicine can help address bloating, IBS, reflux, food sensitivities, constipation, diarrhea, and chronic inflammation by identifying underlying contributors such as diet, microbiome imbalance, stress, or nutrient deficiencies.",
  },
  {
    question:
      "How is integrative weight loss different from traditional weight loss programs?",
    answer:
      "Integrative weight loss focuses on metabolic health, hormones, gut function, and inflammation rather than calorie restriction alone. The goal is sustainable fat loss and long-term health. When appropriate, FDA-approved weight loss medications may be prescribed as part of a comprehensive, medically supervised plan.",
  },
  {
    question: "Can integrative medicine help with hormone imbalance?",
    answer:
      "Yes. Hormone-related concerns such as fatigue, weight gain, low libido, mood changes, and sleep disruption may be evaluated using comprehensive lab testing and personalized treatment strategies. Treatment options may include lifestyle optimization, nutritional support, supplements, and prescription therapies when clinically appropriate, in collaboration with a supervising physician.",
  },
  {
    question: "Do you offer telemedicine visits in Pennsylvania?",
    answer:
      "Yes. Telemedicine appointments are available to patients located anywhere in Pennsylvania.",
  },
  {
    question: "Can lab work be done locally?",
    answer:
      "Yes. Lab testing can typically be completed at draw sites closest to you for convenience. Our labs are ordered through a third party company and you will be sent a lab draw kit that can be taken to any draw site for completion.",
  },
  {
    question: "What should I expect at my first integrative medicine visit?",
    answer:
      "Initial visits include a comprehensive review of symptoms, medical history, lifestyle factors, and goals. Appointments are longer than traditional care visits to allow for thorough evaluation and personalized planning.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Some patients notice improvements within several weeks, while others require several months depending on the condition and complexity.",
  },
];
