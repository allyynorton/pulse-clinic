import LegalPage, {
  LegalSection,
  LegalSubsection,
  LegalText,
  LegalList,
  LegalAddress,
} from "@/components/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Website Privacy Policy"
      effectiveDate="09/24/2026"
      lastUpdated="09/24/2026"
    >
      <LegalSection heading="1. Introduction">
        <LegalText>
          Pulse Whole Health I, P.C., doing business as Pulse Whole Health (&ldquo;Pulse Whole Health,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), respects your privacy. This Privacy Policy describes how we collect, use, disclose, and protect information when you visit our website at www.pulsewholehealth.com (the &ldquo;Site&rdquo;) or interact with us through this Site.
        </LegalText>
        <LegalText>
          This Privacy Policy applies to information collected through the Site. Protected Health Information (&ldquo;PHI&rdquo;) received in the course of providing medical services is governed by our separate Notice of Privacy Practices under the Health Insurance Portability and Accountability Act of 1996, as amended (&ldquo;HIPAA&rdquo;), which is available on this Site.
        </LegalText>
        <LegalText>
          Please read this Privacy Policy carefully. By using our Site, you agree to the practices described in this Privacy Policy.
        </LegalText>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <LegalSubsection heading="2.1 Information You Provide Directly">
          <LegalText>We collect information you voluntarily provide when you:</LegalText>
          <LegalList
            items={[
              "Complete a contact form or inquiry form on the Site",
              "Book a consultation or appointment",
              "Subscribe to email communications",
              "Communicate with us via email or through the Site",
              "Provide feedback, testimonials, or reviews",
            ]}
          />
          <LegalText>
            Information collected directly may include: name, email address, phone number, mailing address, date of birth, general reason for inquiry, and any other information you choose to provide.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="2.2 Information Collected Automatically">
          <LegalText>
            When you visit our Site, we may automatically collect certain technical information, including:
          </LegalText>
          <LegalList
            items={[
              "IP address and general geographic location (city/state level)",
              "Browser type and version",
              "Operating system and device type",
              "Pages visited and time spent on the Site",
              "Referring website or source",
              "Date and time of access",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection heading="2.3 Cookies and Tracking Technologies">
          <LegalText>
            We use cookies and similar tracking technologies to enhance user experience and analyze Site usage. See Section 7 for details.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="2.4 Protected Health Information (PHI)">
          <LegalText>
            If you become a patient of Pulse Whole Health, we collect Protected Health Information as part of providing care. PHI is governed by our Notice of Privacy Practices, not by this Privacy Policy. We do not collect PHI through the Site&rsquo;s contact forms or booking system beyond basic contact information; substantive medical information is collected through our secure patient portal (Practice Better) after you become a patient.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <LegalText>We use information collected through the Site to:</LegalText>
        <LegalList
          items={[
            "Respond to inquiries and communications you initiate",
            "Schedule and confirm consultations and appointments",
            "Provide information about our services",
            "Send administrative communications (e.g., appointment reminders, service updates)",
            "Send marketing communications (only if you have opted in)",
            "Improve the Site and understand how visitors use it",
            "Protect the security and integrity of the Site",
            "Comply with legal obligations",
          ]}
        />
      </LegalSection>

      <LegalSection heading="4. How We Share Your Information">
        <LegalText>
          We do not sell your personal information. We share information only in the following circumstances:
        </LegalText>

        <LegalSubsection heading="4.1 Service Providers">
          <LegalText>
            We share information with third-party service providers who help us operate our Site and business, including:
          </LegalText>
          <LegalList
            items={[
              <><strong>Website hosting and infrastructure:</strong> the platform where our Site is hosted</>,
              <><strong>Analytics providers:</strong> such as Google Analytics, to understand Site usage</>,
              <><strong>Email and communication providers:</strong> for sending emails and messages</>,
              <><strong>Scheduling and patient management platform:</strong> Practice Better, for appointment booking</>,
              <><strong>Payment processors:</strong> for processing payments (payment information is not stored on our Site)</>,
            ]}
          />
          <LegalText>
            Service providers are contractually required to protect your information and use it only for the purposes for which we share it.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="4.2 Business Associates (for Patient PHI)">
          <LegalText>
            For Protected Health Information of patients, we share information with Business Associates under signed Business Associate Agreements (BAAs) as required by HIPAA. See our Notice of Privacy Practices for details.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="4.3 Legal Requirements">
          <LegalText>
            We may disclose information when required by law, subpoena, court order, or governmental authority; to enforce our terms of service; or to protect the rights, property, or safety of Pulse Whole Health, our patients, or others.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="4.4 Business Transfers">
          <LegalText>
            If we are involved in a merger, acquisition, sale of assets, or similar transaction, information may be transferred to the acquiring entity, subject to the terms of this Privacy Policy.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="5. Data Security">
        <LegalText>
          We implement reasonable administrative, technical, and physical safeguards to protect information from unauthorized access, use, disclosure, alteration, or destruction. These include encryption of Protected Health Information, secure patient portals, restricted access controls, employee training, and regular security assessments.
        </LegalText>
        <LegalText>
          However, no internet transmission or electronic storage is completely secure. We cannot guarantee absolute security of information transmitted through the Site.
        </LegalText>
      </LegalSection>

      <LegalSection heading="6. Data Retention">
        <LegalText>
          We retain information for as long as necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations (including medical record retention requirements under Pennsylvania law), resolve disputes, and enforce our agreements.
        </LegalText>
        <LegalText>
          Medical records are retained for the period required by applicable law, generally at least seven (7) years after the last patient encounter for adult patients, and longer for minors.
        </LegalText>
      </LegalSection>

      <LegalSection heading="7. Cookies and Tracking Technologies">
        <LegalSubsection heading="7.1 What Are Cookies">
          <LegalText>
            Cookies are small text files placed on your device when you visit a website. They help websites recognize your device and remember information about your visit.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="7.2 Types of Cookies We Use">
          <LegalList
            items={[
              <><strong>Essential Cookies:</strong> Required for the Site to function properly. These cannot be disabled.</>,
              <><strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors use our Site. Google Analytics collects information such as pages visited, time on site, and general geographic location. Google Analytics IP addresses are anonymized where possible.</>,
              <><strong>Preference Cookies:</strong> Remember your preferences for future visits.</>,
            ]}
          />
        </LegalSubsection>

        <LegalSubsection heading="7.3 Managing Cookies">
          <LegalText>
            You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Disabling cookies may affect Site functionality.
          </LegalText>
          <LegalText>
            To opt out of Google Analytics tracking, you can install the Google Analytics Opt-Out Browser Add-on available at{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
              style={{ color: "#b8752f" }}
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            .
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="8. Your Privacy Rights">
        <LegalSubsection heading="8.1 General Rights">
          <LegalText>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </LegalText>
          <LegalList
            items={[
              <><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</>,
              <><strong>Right to Correction:</strong> Request that we correct inaccurate or incomplete information</>,
              <><strong>Right to Deletion:</strong> Request that we delete personal information, subject to legal retention requirements</>,
              <><strong>Right to Opt Out of Marketing:</strong> Unsubscribe from marketing emails at any time</>,
              <><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your privacy rights</>,
            ]}
          />
        </LegalSubsection>

        <LegalSubsection heading="8.2 State-Specific Rights">
          <LegalText>
            Residents of certain states have additional rights under state privacy laws (including California, Virginia, Colorado, Connecticut, Utah, and others). These may include the right to opt out of the sale or sharing of personal information, the right to limit use of sensitive personal information, and the right to appeal our decisions regarding your requests.
          </LegalText>
          <LegalText>Pulse Whole Health does not sell personal information.</LegalText>
        </LegalSubsection>

        <LegalSubsection heading="8.3 HIPAA Rights">
          <LegalText>
            If you are a patient, you have additional rights regarding your Protected Health Information under HIPAA. These rights are described in our Notice of Privacy Practices.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="8.4 How to Exercise Your Rights">
          <LegalText>
            To exercise any of the rights described above, contact us at contact@pulsewholehealth.com. We will respond within the timeframe required by applicable law, typically within 30 to 45 days. We may need to verify your identity before processing your request.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="9. Children's Privacy">
        <LegalText>
          Our Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete that information. If you believe a child under 13 has provided information to us, please contact us at contact@pulsewholehealth.com.
        </LegalText>
      </LegalSection>

      <LegalSection heading="10. Third-Party Links">
        <LegalText>
          Our Site may contain links to third-party websites (such as Practice Better patient portal, Fullscript, RUPA Health). We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any third-party sites you visit.
        </LegalText>
      </LegalSection>

      <LegalSection heading="11. Do Not Track Signals">
        <LegalText>
          Some browsers offer a &ldquo;Do Not Track&rdquo; signal. We currently do not respond to Do Not Track signals due to the lack of an industry standard. However, you can manage cookies through your browser settings as described in Section 7.
        </LegalText>
      </LegalSection>

      <LegalSection heading="12. Changes to This Privacy Policy">
        <LegalText>
          We may update this Privacy Policy from time to time. When we make material changes, we will post the updated policy on this page and update the &ldquo;Last Updated&rdquo; date. Continued use of the Site after changes indicates acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.
        </LegalText>
      </LegalSection>

      <LegalSection heading="13. Contact Us">
        <LegalText>
          For questions or concerns about this Privacy Policy or our privacy practices, contact us at:
        </LegalText>
        <LegalAddress
          lines={[
            "Pulse Whole Health I, P.C., d/b/a Pulse Whole Health",
            "Attn: Privacy Officer",
            "523 West Lafayette Street",
            "Easton, PA 18042",
            "Email: contact@pulsewholehealth.com",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}
