import LegalPage, {
  LegalSection,
  LegalSubsection,
  LegalText,
  LegalList,
  LegalAddress,
  LegalSignature,
} from "@/components/LegalPage";

const PREAMBLE =
  "This document is posted for public review. Patients will be provided with, and asked to sign, an executed copy of this document as part of the intake process at Pulse Whole Health.";

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms and Conditions"
      subtitle="Pulse Whole Health I, P.C."
      effectiveDate="09/24/2026"
      preamble={PREAMBLE}
    >
      <LegalSection heading="Introduction">
        <LegalText>
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of telehealth services provided by Pulse Whole Health I, P.C., a Pennsylvania professional corporation doing business as Pulse Whole Health (&ldquo;the Practice,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). By scheduling an appointment, completing intake forms, or participating in telehealth visits, you agree to these Terms. Please read carefully.
        </LegalText>
      </LegalSection>

      <LegalSection heading="1. Acceptance of Terms">
        <LegalText>
          By scheduling an appointment, completing intake forms, or participating in telehealth visits with the Practice, you agree to be bound by:
        </LegalText>
        <LegalList
          items={[
            "These Terms and Conditions;",
            "The Telehealth Informed Consent;",
            "The Notice of Privacy Practices;",
            "The Cancellation Policy; and",
            "Any other policies referenced in these Terms or otherwise communicated to you in writing.",
          ]}
        />
        <LegalText>
          If you do not agree with any part of these Terms or the related documents above, please do not use the services.
        </LegalText>
      </LegalSection>

      <LegalSection heading="2. Services Provided">
        <LegalText>
          The Practice provides the following telehealth-based integrative medicine services:
        </LegalText>
        <LegalList
          items={[
            "Initial consultations and comprehensive health assessments",
            "Follow-up consultations and ongoing care for chronic conditions",
            "Integrative and functional medicine recommendations",
            "Nutrition, lifestyle, and behavioral health counseling",
            "Laboratory test ordering and interpretation",
            "Recommendations for supplements and functional medicine protocols",
            "Weight management and metabolic health, including GLP-1 receptor agonist therapy where clinically appropriate",
            "Health coaching and wellness support between visits via secure messaging",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Scope of Practice and Limitations">
        <LegalText>
          The following services are <strong>NOT</strong> provided by the Practice:
        </LegalText>
        <LegalList
          items={[
            "Emergency medical care",
            "Care for conditions that require physical examination or in-person procedures",
            "Acute illness requiring immediate in-person care",
            "Mental health crisis intervention",
            "Prescription of controlled substances that require an in-person evaluation under federal or Pennsylvania law",
            "Care for patients located outside the Commonwealth of Pennsylvania at the time of service",
          ]}
        />
        <LegalText>
          Our services complement, but do not replace, primary care. We recommend that you maintain a relationship with a primary care provider for comprehensive medical care.
        </LegalText>
      </LegalSection>

      <LegalSection heading="4. Eligibility and Jurisdiction">
        <LegalList
          items={[
            "Services are available only to patients physically located in the Commonwealth of Pennsylvania at the time of service. You must verify your physical location at the start of each visit.",
            "You must be 18 years of age or older, or have a parent or legal guardian provide consent on your behalf.",
            "You must be capable of providing informed consent, or have a legal representative authorized to do so.",
            "The Practice reserves the right to decline service to any prospective patient whose clinical needs are outside the Practice's scope or that cannot appropriately be addressed through telehealth.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Patient Responsibilities">
        <LegalText>As a patient of the Practice, you agree to:</LegalText>
        <LegalList
          items={[
            "Provide complete, accurate, and truthful health information.",
            "Promptly update the Practice about changes in your health, medications, or supplements.",
            "Follow the Practice's clinical recommendations or inform the Practice if you choose not to.",
            "Attend scheduled appointments or cancel with adequate notice in accordance with the Cancellation Policy.",
            "Verify your physical location and provide an emergency contact at the start of each telehealth visit.",
            "Seek emergency care from emergency services or a hospital when appropriate — do not rely on telehealth in an emergency.",
            "Maintain reliable, secure, private technology suitable for telehealth visits.",
            "Treat the Practice's staff and providers with respect.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="6. Fees, Payment, and Refunds">
        <LegalSubsection heading="6.1 Payment">
          <LegalText>
            Payment is due at the time of service. The Practice accepts credit cards, debit cards, and HSA/FSA cards through Practice Better. All fees must be paid before scheduling future appointments.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="6.2 Insurance">
          <LegalText>
            The Practice operates as a cash-pay model. The Practice does not bill insurance directly. The Practice can provide a superbill on request, which you may submit to your insurance company for possible reimbursement; however, reimbursement is not guaranteed. You are responsible for verifying benefits with your insurance company. Cancellation, no-show, and late fees are not billable to insurance and are your responsibility.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="6.3 Refunds">
          <LegalText>
            All sales are final. Refunds are not provided for completed consultations except in cases where the Practice cancels the appointment or is unable to provide services. Refund requests must be submitted in writing to contact@pulsewholehealth.com within seven (7) days. Approved refunds will be processed to the original payment method.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="6.4 Supplements, Labs, and Other Products">
          <LegalText>
            Nutritional supplements, functional laboratory tests, and other third-party products ordered through the Practice or its laboratory partners (such as Rupa Health) are billed separately by the supplier or lab. Once an order is placed, these items are non-refundable except as expressly permitted by the supplier or lab.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="7. Cancellation and No-Show Policy">
        <LegalText>
          The Practice requires advance notice for cancellations and reschedules in accordance with the Cancellation Policy. The current policy provides:
        </LegalText>
        <LegalList
          items={[
            "48 hours' notice for initial consultations and longer follow-ups",
            "24 hours' notice for follow-ups of 30 minutes or less",
            "$75 fee for late cancellations (less than 48 hours' notice)",
            "Full appointment fee for no-shows",
          ]}
        />
        <LegalText>Please refer to the separate Cancellation Policy for complete details.</LegalText>
      </LegalSection>

      <LegalSection heading="8. Medical Information and Advice">
        <LegalSubsection heading="8.1 Not for Emergencies">
          <LegalText>
            Information provided during consultations is for educational and treatment purposes for the individual patient receiving the consultation. It does not constitute emergency medical advice. In a medical emergency, call 911 or go to your nearest emergency room.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="8.2 Individual Results">
          <LegalText>
            Outcomes vary among individuals. The Practice makes no guarantees about specific results, cure, or prevention of any condition. Health improvements depend on many factors, including adherence to clinical recommendations and lifestyle factors outside the Practice&rsquo;s control.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="8.3 Prescription Medications">
          <LegalText>
            Prescriptions are based on the information you provide. You are responsible for informing the Practice of all medications, supplements, allergies, and health conditions to avoid contraindications. The Practice may decline to prescribe a medication if clinical judgment indicates that telehealth is not appropriate for the prescription, that an in-person evaluation is required, or that the medication is otherwise inappropriate.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="9. Integrative Medicine Disclaimer">
        <LegalText>
          Statements regarding nutritional supplements, herbs, and functional medicine approaches recommended by the Practice have not been evaluated by the U.S. Food and Drug Administration. Such products are not intended to diagnose, treat, cure, or prevent any disease. Some recommendations may include approaches that are evidence-informed but not yet conclusively recognized by all conventional medical authorities. You are encouraged to make informed decisions and to maintain open communication with all of your healthcare providers.
        </LegalText>
      </LegalSection>

      <LegalSection heading="10. Privacy and Confidentiality">
        <LegalText>
          The Practice complies with the Health Insurance Portability and Accountability Act (HIPAA) and applicable Pennsylvania law. The Practice&rsquo;s Notice of Privacy Practices describes how your protected health information may be used and disclosed and your rights regarding your information. The Practice uses encrypted, HIPAA-compliant platforms for all telehealth communications. You are responsible for maintaining the privacy of your patient portal credentials and joining sessions from a private location.
        </LegalText>
      </LegalSection>

      <LegalSection heading="11. Communication">
        <LegalText>
          By providing your contact information, you consent to receive the following communications from the Practice:
        </LegalText>
        <LegalList
          items={[
            "Appointment reminders by email, text, or phone",
            "Treatment recommendations and clinical follow-up",
            "Billing and payment communications",
            "General Practice updates and occasional educational content",
          ]}
        />
        <LegalText>
          You may opt out of non-essential communications at any time by notifying the Practice. Appointment reminders and billing communications are necessary for the delivery of services and may continue regardless of opt-out.
        </LegalText>
      </LegalSection>

      <LegalSection heading="12. Limitation of Liability">
        <LegalText>
          To the fullest extent permitted by law, the Practice and its officers, employees, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the services. The Practice&rsquo;s total liability for any claim shall not exceed the amount you paid for the specific service giving rise to the claim. This includes but is not limited to technology failures, delays in response, or outcomes from following recommendations. Nothing in this section limits liability for claims that cannot be limited by law, such as those arising from professional malpractice.
        </LegalText>
      </LegalSection>

      <LegalSection heading="13. Termination of Services">
        <LegalText>
          The Practice reserves the right to terminate the patient relationship if:
        </LegalText>
        <LegalList
          items={[
            "You fail to provide accurate information.",
            "You engage in abusive, threatening, or harassing behavior toward the Practice's staff or providers.",
            "You repeatedly miss appointments without adequate notice.",
            "Outstanding balances remain unpaid.",
            "Your clinical needs are beyond the scope of telehealth or beyond the Practice's services.",
            "Continuing the relationship would, in the Practice's reasonable clinical judgment, be inconsistent with appropriate care.",
          ]}
        />
        <LegalText>
          You may discontinue services at any time. Upon termination by either party, the Practice will provide reasonable continuity-of-care assistance, including access to your medical records and referrals as appropriate, in accordance with applicable law and ethical standards.
        </LegalText>
      </LegalSection>

      <LegalSection heading="14. Intellectual Property">
        <LegalText>
          All content provided during consultations, educational materials, treatment protocols, and the Practice&rsquo;s website content are the proprietary property of the Practice or its licensors. You may use this information for your personal health purposes. You may not reproduce, distribute, or share this content commercially without the Practice&rsquo;s written permission.
        </LegalText>
      </LegalSection>

      <LegalSection heading="15. Changes to These Terms">
        <LegalText>
          The Practice reserves the right to modify these Terms at any time. Material changes will be communicated to active patients by email or secure message and will be posted in Practice Better and on the Practice&rsquo;s website with an updated effective date. Your continued use of the services after changes take effect constitutes acceptance of the modified Terms.
        </LegalText>
      </LegalSection>

      <LegalSection heading="16. Dispute Resolution and Governing Law">
        <LegalSubsection heading="16.1 Good-Faith Negotiation">
          <LegalText>
            Any dispute arising out of these Terms or the services shall first be addressed through good-faith negotiation between the Practice and the patient. The patient should contact the Privacy Officer at contact@pulsewholehealth.com to initiate this process.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="16.2 Governing Law">
          <LegalText>
            These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to its conflict-of-law provisions.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="16.3 Venue">
          <LegalText>
            Any dispute that is not resolved through good-faith negotiation shall be brought exclusively in the state or federal courts located in Northampton County, Pennsylvania, and the parties consent to the personal jurisdiction of such courts. Nothing in this section limits any claim or remedy that cannot be limited by law (including claims of professional malpractice, which remain governed by the procedures established under Pennsylvania law).
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="17. Severability">
        <LegalText>
          If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms shall otherwise remain in full force and effect.
        </LegalText>
      </LegalSection>

      <LegalSection heading="18. Entire Agreement">
        <LegalText>
          These Terms, together with the Telehealth Informed Consent, the Notice of Privacy Practices, the Cancellation Policy, and any patient intake forms or authorizations executed by you, constitute the entire agreement between you and the Practice regarding the services.
        </LegalText>
      </LegalSection>

      <LegalSection heading="19. Contact Information">
        <LegalText>If you have questions about these Terms, please contact:</LegalText>
        <LegalAddress
          lines={[
            "Pulse Whole Health I, P.C.",
            "Allyson L. Norton, PA-C, Privacy Officer",
            "523 West Lafayette Street",
            "Easton, PA 18042",
            "Email: contact@pulsewholehealth.com",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Acknowledgment">
        <LegalText>
          By signing below, I acknowledge that I have read, understood, and agree to these Terms and Conditions.
        </LegalText>
        <LegalSignature
          lines={[
            "Patient Name (printed): ____________________________________________________",
            "Patient Signature: ___________________________________  Date: _______________",
          ]}
        />
        <LegalSignature
          heading="If signed by personal representative:"
          lines={[
            "Representative Name: _______________________________________",
            "Relationship: ____________________________________________",
            "Representative Signature: _____________________________  Date: _______________",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}
