import LegalPage, {
  LegalSection,
  LegalSubsection,
  LegalText,
  LegalList,
  LegalAddress,
} from "@/components/LegalPage";

export default function NoticeOfPrivacyPractices() {
  return (
    <LegalPage
      title="Notice of Privacy Practices"
      effectiveDate="09/24/2026"
      banner="THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY."
    >
      <LegalSection heading="Our Commitment to Your Privacy">
        <LegalText>
          Pulse Whole Health I, P.C., doing business as Pulse Whole Health (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), is committed to protecting the privacy of your Protected Health Information (&ldquo;PHI&rdquo;). This Notice of Privacy Practices (&ldquo;Notice&rdquo;) describes how we may use and disclose your PHI, and how you can access this information.
        </LegalText>
        <LegalText>
          We are required by the Health Insurance Portability and Accountability Act of 1996, as amended (&ldquo;HIPAA&rdquo;), and other applicable federal and state laws to:
        </LegalText>
        <LegalList
          items={[
            "Maintain the privacy and security of your PHI",
            "Provide you with this Notice of our legal duties and privacy practices with respect to your PHI",
            "Follow the terms of this Notice currently in effect",
            "Notify you if a breach occurs that may have compromised the privacy or security of your PHI",
          ]}
        />
      </LegalSection>

      <LegalSection heading="How We May Use and Disclose Your Protected Health Information">
        <LegalText>
          The following categories describe the ways we may use and disclose your PHI without your written authorization. Not every use or disclosure will be listed; however, all permitted uses and disclosures fall within one of the categories below.
        </LegalText>

        <LegalSubsection heading="1. Treatment">
          <LegalText>
            We may use and disclose your PHI to provide, coordinate, or manage your healthcare and related services. This includes sharing information with other healthcare providers involved in your care, such as your primary care physician, specialists, laboratories (e.g., RUPA Health, LabCorp, Quest, HNL), pharmacies, and compounding pharmacies. For example, if we order laboratory testing, we will share necessary information with the laboratory.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="2. Payment">
          <LegalText>
            Pulse Whole Health is a cash-pay practice and does not bill health insurance for our services. However, we may use and disclose your PHI in connection with payment for services, including sending invoices, processing payments through our secure payment platform, and providing superbills you may submit to your insurance for reimbursement of out-of-network services.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="3. Healthcare Operations">
          <LegalText>
            We may use and disclose your PHI for operations necessary to run our practice, including quality assessment and improvement, provider training and evaluation, licensing and credentialing, business planning, customer service, and legal and regulatory compliance.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="4. Business Associates">
          <LegalText>
            We share PHI with third-party Business Associates who perform services on our behalf, under signed Business Associate Agreements requiring them to protect your information. Our Business Associates include:
          </LegalText>
          <LegalList
            items={[
              "Practice Better (electronic health record and patient portal)",
              "Spruce Health (secure patient communication)",
              "Fullscript (supplement dispensary and recommendations)",
              "RUPA Health (laboratory testing platform)",
              "Cloud storage and email providers that have executed Business Associate Agreements",
              "Billing and accounting service providers",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection heading="5. Appointment Reminders and Health-Related Information">
          <LegalText>
            We may contact you to remind you about appointments, follow-up care, or health-related information relevant to your care. We may contact you by phone, text message, email, or through our secure patient portal.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="6. As Required by Law">
          <LegalText>
            We may use and disclose your PHI when required by federal, state, or local law, including reporting of certain communicable diseases, child abuse or neglect, elder abuse, and responding to court orders, subpoenas, or other legal processes.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="7. Public Health Activities">
          <LegalText>
            We may disclose your PHI for public health activities, such as reporting births, deaths, communicable diseases, adverse drug events, or product recalls.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="8. Health Oversight Activities">
          <LegalText>
            We may disclose your PHI to health oversight agencies for activities including audits, investigations, inspections, and licensure.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="9. Serious Threat to Health or Safety">
          <LegalText>
            We may disclose your PHI to prevent or lessen a serious and imminent threat to your health or safety, or to the health or safety of others.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="10. Workers' Compensation">
          <LegalText>
            We may disclose your PHI as authorized by and to the extent necessary to comply with workers&rsquo; compensation and similar laws.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="11. Law Enforcement">
          <LegalText>
            We may disclose your PHI to law enforcement officials for purposes such as responding to a court order, subpoena, or warrant; identifying or locating a suspect, fugitive, or missing person; or reporting certain crimes.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="12. Coroners, Medical Examiners, and Funeral Directors">
          <LegalText>
            We may disclose your PHI to coroners, medical examiners, and funeral directors as necessary for them to carry out their duties.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="Uses and Disclosures Requiring Your Written Authorization">
        <LegalText>
          The following uses and disclosures require your specific written authorization. You may revoke your authorization at any time in writing.
        </LegalText>
        <LegalList
          items={[
            <><strong>Marketing:</strong> Most uses and disclosures for marketing purposes</>,
            <><strong>Sale of PHI:</strong> Any sale of your PHI</>,
            <><strong>Psychotherapy Notes:</strong> Most uses and disclosures of psychotherapy notes (not applicable to our current services)</>,
            <><strong>Other Uses:</strong> Any other uses and disclosures not described in this Notice</>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="Special Categories of Information">
        <LegalText>
          Certain categories of PHI receive additional legal protection. These include information related to HIV/AIDS, mental health, substance abuse treatment, genetic information, and reproductive health. We follow both federal and Pennsylvania law when handling these categories, which typically require additional consent for disclosure.
        </LegalText>
      </LegalSection>

      <LegalSection heading="Your Rights Regarding Your Protected Health Information">
        <LegalSubsection heading="1. Right to Access and Copy">
          <LegalText>
            You have the right to inspect and obtain a copy of your PHI in our designated record set. Requests must be made in writing. We may charge a reasonable fee for copies. We will respond to your request within 30 days (or 60 days if the records are stored off-site).
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="2. Right to Request Amendment">
          <LegalText>
            You have the right to request that we amend PHI you believe is inaccurate or incomplete. Requests must be made in writing and include a reason. We may deny your request in certain circumstances but will provide a written explanation.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="3. Right to Request Restrictions">
          <LegalText>
            You have the right to request restrictions on how we use or disclose your PHI for treatment, payment, or healthcare operations. We are not required to agree to your request, except in limited circumstances (such as when you pay in full for a service and request that we not disclose the PHI to your health plan).
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="4. Right to Confidential Communications">
          <LegalText>
            You have the right to request that we communicate with you in a specific way or at a specific location (for example, only at a certain phone number or by email). We will accommodate reasonable requests.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="5. Right to an Accounting of Disclosures">
          <LegalText>
            You have the right to receive an accounting of certain disclosures we have made of your PHI (excluding disclosures for treatment, payment, and healthcare operations). Requests may cover up to six years prior to the request date.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="6. Right to Breach Notification">
          <LegalText>
            You have the right to be notified if a breach occurs that may have compromised the privacy or security of your unsecured PHI.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="7. Right to a Paper Copy of This Notice">
          <LegalText>
            You have the right to receive a paper copy of this Notice, even if you have agreed to receive it electronically. Request a paper copy at any time by contacting our office.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="How to Exercise Your Rights">
        <LegalText>
          To exercise any of the rights described above, submit a written request to:
        </LegalText>
        <LegalAddress
          lines={[
            "Pulse Whole Health I, P.C.",
            "Attn: Privacy Officer",
            "523 West Lafayette Street",
            "Easton, PA 18042",
            "Email: contact@pulsewholehealth.com",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Complaints">
        <LegalText>
          If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services. There will be no retaliation for filing a complaint.
        </LegalText>

        <LegalSubsection heading="To File a Complaint with Us">
          <LegalText>
            Submit a written complaint to our Privacy Officer at the address above, or email us at contact@pulsewholehealth.com.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="To File a Complaint with HHS">
          <LegalAddress
            lines={[
              "U.S. Department of Health and Human Services",
              "Office for Civil Rights",
              "200 Independence Avenue, S.W.",
              "Washington, D.C. 20201",
              "Phone: 1-877-696-6775",
            ]}
          />
          <LegalText>
            Online:{" "}
            <a
              href="https://www.hhs.gov/ocr/complaints/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
              style={{ color: "#b8752f" }}
            >
              https://www.hhs.gov/ocr/complaints/index.html
            </a>
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="Changes to This Notice">
        <LegalText>
          We reserve the right to change this Notice at any time and to apply the revised Notice to PHI we already have about you as well as any PHI we receive in the future. We will post the current Notice in our office and on our website with the effective date. The Notice will contain the effective date on the first page.
        </LegalText>
      </LegalSection>

      <LegalSection heading="Contact">
        <LegalText>
          For questions about this Notice or our privacy practices, contact our Privacy Officer:
        </LegalText>
        <LegalAddress
          lines={[
            "Allyson L. Norton, PA-C — Privacy Officer",
            "Pulse Whole Health I, P.C.",
            "523 West Lafayette Street",
            "Easton, PA 18042",
            "Email: contact@pulsewholehealth.com",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}
