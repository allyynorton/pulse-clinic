import LegalPage, {
  LegalSection,
  LegalSubsection,
  LegalText,
  LegalList,
  LegalSignature,
} from "@/components/LegalPage";

const PREAMBLE =
  "This document is posted for public review. Patients will be provided with, and asked to sign, an executed copy of this document as part of the intake process at Pulse Whole Health.";

export default function TelehealthDisclosure() {
  return (
    <LegalPage
      title="Telehealth Informed Consent"
      subtitle="Pulse Whole Health I, P.C. — A Pennsylvania Professional Corporation"
      effectiveDate="09/24/2026"
      preamble={PREAMBLE}
      banner="Please read this consent carefully before your first telehealth visit. Your signature confirms your understanding of and agreement to the terms set out in this document."
    >
      <LegalSection heading="1. Introduction">
        <LegalText>
          Pulse Whole Health I, P.C. (&ldquo;the Practice,&rdquo; doing business as Pulse Whole Health) provides integrative medicine, metabolic health, and weight management services to patients in the Commonwealth of Pennsylvania exclusively via telehealth. Care is provided by Allyson L. Norton, PA-C (PA license MA065203) under the supervision of David G. Marx, M.D. (PA license MD044360L).
        </LegalText>
        <LegalText>
          This document explains what telehealth is, the benefits and limitations of receiving care via telehealth, the technology and security measures we use, and your rights and responsibilities as a telehealth patient. Your signed consent is required before your first visit.
        </LegalText>
      </LegalSection>

      <LegalSection heading="2. What Is Telehealth">
        <LegalText>
          Telehealth (also called telemedicine) is the delivery of healthcare services using electronic communications technologies that allow real-time, two-way audio and video interaction between you and your provider, even when you are in different locations. At Pulse Whole Health, telehealth services include:
        </LegalText>
        <LegalList
          items={[
            "Initial consultations and comprehensive health assessments",
            "Follow-up visits and ongoing care for chronic conditions",
            "Review and interpretation of laboratory results",
            "Prescription of FDA-approved brand-name medications, including weight management medications such as GLP-1 receptor agonists (e.g., Wegovy, Zepbound) where clinically appropriate. The Practice does not prescribe compounded GLP-1 medications.",
            "Nutrition, lifestyle, and behavioral health counseling",
            "Recommendations for nutritional supplements and functional medicine protocols",
            "Secure messaging through the patient portal between visits",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Provider Licensure and Jurisdiction">
        <LegalText>
          Healthcare providers are required by law to be licensed in the state where the patient is physically located at the time services are rendered. The Practice provides telehealth services only to patients physically located in the Commonwealth of Pennsylvania.
        </LegalText>
        <LegalText>
          At the start of each telehealth visit, you will be asked to verify your physical location. If you are outside Pennsylvania at the time of a scheduled visit, the visit cannot proceed and will need to be rescheduled.
        </LegalText>
      </LegalSection>

      <LegalSection heading="4. Benefits of Telehealth">
        <LegalText>Telehealth offers several potential benefits:</LegalText>
        <LegalList
          items={[
            "Improved access to integrative medicine care without the need to travel",
            "Convenience and scheduling flexibility, including evening and weekend appointments",
            "Reduced exposure to contagious illnesses common in clinic waiting rooms",
            "Ability to receive care from a comfortable, private environment",
            "Easier coordination of care for patients with mobility, transportation, or scheduling barriers",
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Risks and Limitations of Telehealth">
        <LegalText>
          Telehealth has limitations that you should consider before consenting to care:
        </LegalText>

        <LegalSubsection heading="5.1 Technology Risks">
          <LegalList
            items={[
              "Internet connection issues, software failures, or equipment malfunctions may interrupt or delay a visit.",
              "Poor video or audio quality may reduce the quality of clinical assessment.",
              "Despite encryption and security measures, no electronic communication system is completely free from the risk of unauthorized access.",
            ]}
          />
          <LegalText>
            If a telehealth visit is interrupted by technology failure and cannot be re-established within 15 minutes, your provider will contact you by phone or through the patient portal to reschedule or complete the visit by phone at their clinical discretion. If the visit cannot be completed due to technology issues on the Practice&rsquo;s end, you will not be charged for the visit.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="5.2 Clinical Limitations">
          <LegalList
            items={[
              "Telehealth does not include hands-on physical examination. Some conditions cannot be adequately evaluated without an in-person physical exam.",
              "Vital signs (blood pressure, heart rate, temperature, weight) may need to be self-reported by you using your own home equipment.",
              "Some diagnoses, treatments, or procedures cannot be provided via telehealth and may require referral to an in-person provider.",
              "Telehealth is not appropriate for all medical conditions. Your provider may determine that an in-person visit or referral is necessary, and you may be advised to seek care elsewhere.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection heading="5.3 Prescribing Limitations">
          <LegalList
            items={[
              "Federal law and Drug Enforcement Administration (DEA) regulations limit the prescription of certain controlled substances via telehealth. Some controlled substances cannot be prescribed without a prior in-person evaluation.",
              "Your provider will use clinical judgment to determine whether a particular medication is appropriate to prescribe via telehealth and may decline to prescribe medications when in-person evaluation is required.",
              "The Practice does not prescribe compounded GLP-1 medications or FDA Category 2 peptides (such as BPC-157, TB-500, or Epitalon). The Practice prescribes only FDA-approved medications and compliant compounded medications from licensed 503A compounding pharmacies where clinically appropriate.",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection heading="5.4 Emergency Limitations">
          <LegalList
            items={[
              "Telehealth is not appropriate for medical emergencies.",
              "In an emergency, telehealth cannot provide immediate physical intervention.",
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="6. Emergency Protocols">
        <div
          className="rounded-lg p-5 font-bold leading-relaxed"
          style={{ backgroundColor: "rgba(163, 52, 31, 0.08)", color: "#a3341f" }}
        >
          IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, DO NOT CONTACT US FIRST. CALL 911 OR GO TO YOUR NEAREST EMERGENCY ROOM IMMEDIATELY.
        </div>
        <LegalText>
          Examples of medical emergencies include, but are not limited to: chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, severe allergic reaction, thoughts of harming yourself or others, severe abdominal pain, signs of overdose, and sudden severe pain or trauma.
        </LegalText>
        <LegalText>
          If you experience a mental health crisis or are having thoughts of suicide, call or text 988 (the Suicide &amp; Crisis Lifeline) or go to your nearest emergency room.
        </LegalText>

        <LegalSubsection heading="6.1 Location Verification and Emergency Contact">
          <LegalText>
            At the start of each telehealth visit, you will be asked to verify your physical location and to provide a local emergency contact. Your emergency contact should be a person physically able to reach you or coordinate emergency response during your visit — typically a family member, roommate, close friend, or trusted neighbor. This information allows us to direct emergency services to your location if a medical emergency develops during the visit.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="7. Technology and Security">
        <LegalText>
          The Practice uses HIPAA-compliant, encrypted technology platforms for all telehealth visits and communications:
        </LegalText>
        <LegalList
          items={[
            "Patient portal and telehealth video sessions are conducted through Practice Better, an electronic health record platform that is bound by a Business Associate Agreement with the Practice and uses industry-standard encryption.",
            "Secure text messaging and voice communications with the Practice are conducted through Spruce Health, also bound by a Business Associate Agreement.",
            "Laboratory test ordering and results are processed through Rupa Health, also under a Business Associate Agreement.",
            "Email communications regarding scheduling, billing, and general administrative matters use a HIPAA-compliant email platform bound by a Business Associate Agreement.",
          ]}
        />
        <LegalText>To protect your privacy during a telehealth visit, you should:</LegalText>
        <LegalList
          items={[
            "Join the visit from a private location where you cannot be overheard.",
            "Use a secure, password-protected internet connection (avoid public Wi-Fi).",
            "Inform your provider at the start of the visit if anyone else is present in the room with you.",
            "Use headphones or earbuds when possible to maintain audio privacy.",
            "Avoid using shared or public computers for the patient portal.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="8. Recording">
        <LegalText>
          The Practice does not record telehealth visits as a routine practice. If a visit will be recorded for clinical, training, or quality improvement purposes, you will be asked for separate written consent before the recording begins, and you may decline.
        </LegalText>
        <LegalText>
          You may not record any portion of a telehealth visit without the prior written consent of the provider. Recording without consent may violate Pennsylvania wiretapping and surveillance laws.
        </LegalText>
      </LegalSection>

      <LegalSection heading="9. Privacy and Confidentiality">
        <LegalText>
          Your health information is protected by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and applicable Pennsylvania law. The Practice&rsquo;s Notice of Privacy Practices describes in detail how your protected health information may be used and disclosed and your rights regarding your health information.
        </LegalText>
        <LegalText>
          You will receive a copy of the Notice of Privacy Practices at the time of your first visit. You may also request a copy at any time by contacting the Privacy Officer at contact@pulsewholehealth.com, or view it on the Practice&rsquo;s website.
        </LegalText>
        <LegalText>
          Telehealth involves the electronic transmission of your health information. While the Practice uses HIPAA-compliant platforms with strong encryption, no electronic communication system is completely secure. By consenting to telehealth, you acknowledge and accept the small but inherent risk of electronic communications.
        </LegalText>
      </LegalSection>

      <LegalSection heading="10. Integrative Medicine Disclosures">
        <LegalText>
          The Practice provides integrative medicine, which combines conventional medical care with evidence-informed complementary approaches such as nutrition, lifestyle counseling, supplements, and functional medicine. The following disclosures apply:
        </LegalText>
        <LegalList
          items={[
            "Some of the approaches discussed and recommended may not have been evaluated or approved by the U.S. Food and Drug Administration.",
            "Nutritional supplements are not intended to diagnose, treat, cure, or prevent any disease.",
            "Integrative medicine is intended to complement, not replace, conventional medical care. You are encouraged to maintain a relationship with a primary care provider and any specialists involved in your care.",
            "You have the right to seek conventional or alternative treatment at any time.",
            "Individual results vary. The Practice makes no guarantees about specific outcomes from any treatment, supplement, lifestyle change, or protocol recommended.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="11. Patient Responsibilities">
        <LegalText>By consenting to telehealth services, you agree to:</LegalText>
        <LegalList
          items={[
            "Provide accurate, complete, and truthful information about your health history, current symptoms, medications, and supplements.",
            "Promptly inform your provider of any changes in your health status, medications, or treatment.",
            "Verify your physical location at the start of each visit.",
            "Provide a local emergency contact when requested.",
            "Use appropriate, private technology and a stable internet connection during visits.",
            "Take responsibility for the security of your patient portal credentials and not share them with others.",
            "Seek emergency care when appropriate — do not rely on telehealth in a medical emergency.",
            "Maintain a relationship with a primary care provider for comprehensive medical care.",
            "Pay for services in accordance with the Practice's fee schedule and Cancellation Policy.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="12. Right to Refuse or Withdraw Consent">
        <LegalText>
          You have the right to decline telehealth services at any time and to receive care from another provider. You may withdraw your consent to telehealth at any time by notifying the Practice in writing at contact@pulsewholehealth.com. Withdrawal of consent will not affect any care provided before withdrawal and will not affect your right to receive a copy of your medical records.
        </LegalText>
        <LegalText>
          If you refuse telehealth or withdraw consent, the Practice may not be able to continue providing services to you. You will be assisted in identifying alternative care options.
        </LegalText>
      </LegalSection>

      <LegalSection heading="13. Fees and Payment">
        <LegalText>
          The Practice operates as a cash-pay model. Fees are due at the time of service and are paid through the patient portal. The Practice does not bill insurance directly, but can provide a superbill at your request that you may submit to your insurance for possible reimbursement. Reimbursement is not guaranteed and depends on your individual insurance benefits.
        </LegalText>
        <LegalText>
          The Practice&rsquo;s current fees, cancellation policy, and other financial terms are described in the Cash Pay Financial Policy, Terms and Conditions, and Cancellation Policy documents that you will receive and acknowledge.
        </LegalText>
      </LegalSection>

      <LegalSection heading="14. Patient Consent">
        <LegalText>By signing below, I acknowledge and agree to the following:</LegalText>
        <LegalList
          items={[
            "I have read and understand this Telehealth Informed Consent.",
            "I understand the nature of telehealth, including its benefits, risks, and limitations.",
            "I understand that telehealth is not appropriate for emergencies and that in an emergency I should call 911 or go to the nearest emergency room.",
            "I understand that I must verify my physical location at the start of each visit and provide a local emergency contact.",
            "I understand that the Practice provides telehealth services only to patients physically located in Pennsylvania.",
            "I understand the integrative medicine disclosures set out in Section 10, including that the Practice does not prescribe compounded GLP-1 medications or FDA Category 2 peptides.",
            "I understand how my health information will be used and disclosed (more fully described in the Notice of Privacy Practices).",
            "I consent to receive care via telehealth from Pulse Whole Health I, P.C., understanding that I may withdraw consent at any time.",
            "I accept financial responsibility for the services I receive.",
            "I have had an opportunity to ask questions and have my questions answered to my satisfaction.",
          ]}
        />

        <LegalSignature
          heading="Patient Signature"
          lines={[
            "Patient Name (printed): ____________________________________________________",
            "Date of Birth: __________________________",
            "Patient Signature: ___________________________________  Date: _______________",
          ]}
        />

        <LegalSignature
          heading="If Patient Is a Minor or Has a Legal Representative"
          lines={[
            "If the patient is under 18 years of age or has a legal representative authorized to make healthcare decisions on the patient's behalf, the parent, legal guardian, or representative must sign below.",
            "Representative Name (printed): ___________________________________________",
            "Relationship to Patient: ____________________________________________________",
            "Representative Signature: _____________________________  Date: _______________",
          ]}
          note="Retain a signed copy in the patient's medical record. This consent remains in effect until withdrawn in writing by the patient or representative."
        />
      </LegalSection>
    </LegalPage>
  );
}
