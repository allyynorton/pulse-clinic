import LegalPage, {
  LegalSection,
  LegalSubsection,
  LegalText,
  LegalList,
  LegalTable,
  LegalAddress,
  LegalSignature,
} from "@/components/LegalPage";

export default function FinancialPolicy() {
  return (
    <LegalPage
      title="Cash Pay Financial Policy"
      effectiveDate="09/24/2026"
    >
      <LegalSection heading="1. Overview">
        <LegalText>
          Pulse Whole Health I, P.C., doing business as Pulse Whole Health (&ldquo;the Practice,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;), is a cash-pay integrative medicine practice serving patients across the Commonwealth of Pennsylvania via telehealth. This Financial Policy explains how we handle payment, insurance, refunds, and related financial matters.
        </LegalText>
        <LegalText>
          Please read this Policy carefully before scheduling your first appointment. By scheduling and receiving services, you acknowledge and agree to the terms below.
        </LegalText>
      </LegalSection>

      <LegalSection heading="2. Why We Are a Cash-Pay Practice">
        <LegalText>
          Pulse Whole Health operates on a direct-pay (cash-pay) model. This means we do not bill health insurance carriers, Medicare, Medicaid, or any third-party payer for our services. This model allows us to:
        </LegalText>
        <LegalList
          items={[
            "Spend meaningful time with each patient without insurance-imposed time restrictions",
            "Provide integrative and functional medicine services that most insurance plans do not cover",
            "Maintain transparent, upfront pricing without insurance billing complexity or surprise bills",
            "Focus on root-cause care and long-term outcomes rather than volume-based visits",
            "Offer flexible scheduling including packages designed for structured, ongoing care",
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. Fee Schedule">
        <LegalText>
          Our current published fees are as follows. Fees are reviewed periodically and may be updated with reasonable notice.
        </LegalText>
        <LegalTable
          headers={["Service", "Duration", "Fee"]}
          rows={[
            ["Initial Integrative Medicine Consultation", "60 minutes", "$300"],
            ["Integrative Medicine Follow-Up Visit", "30-45 minutes", "$175"],
            [
              "Introductory Package (1 initial + 4 follow-ups, 6-month validity)",
              "6 months",
              "$900",
            ],
          ]}
        />
        <p className="italic leading-relaxed" style={{ color: "#8a9584" }}>
          Additional package options and specialized programs may be offered from time to time. See separate agreements for package-specific terms.
        </p>
      </LegalSection>

      <LegalSection heading="4. What Is Not Included in Visit Fees">
        <LegalText>
          Visit fees cover the provider&rsquo;s clinical time only. The following are separate charges and are the Patient&rsquo;s financial responsibility:
        </LegalText>
        <LegalList
          items={[
            <><strong>Laboratory testing:</strong> billed by the lab (RUPA Health, LabCorp, Quest, or other) either at cash-pay rates or through your insurance</>,
            <><strong>Prescription medications:</strong> filled and paid for at your pharmacy of choice</>,
            <><strong>Compounded medications:</strong> billed by the compounding pharmacy at their rates</>,
            <><strong>Nutritional supplements:</strong> purchased through Fullscript or your preferred source</>,
            <><strong>Referrals to specialists or other providers:</strong> billed by those providers separately</>,
            <><strong>Records requests, letters, or forms:</strong> requiring more than 10 minutes of provider time may be billed at $50 per 15 minutes</>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Payment Requirements">
        <LegalSubsection heading="5.1 Payment Due at Time of Service">
          <LegalText>
            Payment in full is required at the time of service. Appointments cannot be confirmed or completed without payment on file.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="5.2 Accepted Payment Methods">
          <LegalText>
            We accept the following payment methods through our secure patient portal (Practice Better):
          </LegalText>
          <LegalList
            items={[
              "Credit cards (Visa, Mastercard, American Express, Discover)",
              "Debit cards",
              "HSA (Health Savings Account) cards",
              "FSA (Flexible Spending Account) cards",
              "ACH bank transfers (for package purchases and larger transactions)",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection heading="5.3 HSA/FSA Notice">
          <LegalText>
            Most integrative medicine services and packages are eligible for HSA and FSA payment. However, HSA/FSA eligibility is ultimately determined by your plan administrator and the IRS. We cannot guarantee that your specific plan will approve any given service. You are responsible for confirming eligibility with your plan administrator if in doubt. Documentation of services (superbill or receipt) will be provided upon request.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="5.4 Package Payments">
          <LegalText>
            Prepaid care packages (such as the Introductory Package) require payment in full at enrollment. Payment plans may be available at the Provider&rsquo;s discretion; please inquire if interested. Package-specific terms are governed by a separate Care Package Agreement signed at enrollment.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="6. Insurance">
        <LegalSubsection heading="6.1 We Do Not Bill Insurance">
          <LegalText>
            Pulse Whole Health does not participate with any insurance networks and does not submit claims to any insurance carrier, Medicare, Medicaid, or third-party payer. Payment is not contingent on insurance coverage.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="6.2 Superbill for Insurance Reimbursement">
          <LegalText>
            Upon request, we can provide a superbill (an itemized receipt with the necessary billing codes) that you may submit to your insurance company for possible out-of-network reimbursement. Whether your insurance reimburses any portion of the visit fee depends entirely on your specific plan and is not guaranteed. The Practice cannot advocate for reimbursement or communicate with your insurance company on your behalf.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="6.3 Verifying Your Insurance Benefits">
          <LegalText>
            If you plan to seek insurance reimbursement, we recommend contacting your insurance company before your first visit to ask:
          </LegalText>
          <LegalList
            items={[
              "Do you cover out-of-network integrative medicine or functional medicine visits?",
              "What is my out-of-network deductible, and how much has been met?",
              "What percentage of the visit fee will be reimbursed?",
              "Do I need a referral or prior authorization for out-of-network services?",
              "What is the process and timeline for submitting a claim?",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection heading="6.4 Labs and Insurance">
          <LegalText>
            Laboratory testing is a separate service and may be billed through your insurance if you prefer, using LabCorp, Quest, or other in-network labs. Rupa Health platform testing is cash-pay only. The Provider will discuss lab options with you based on your specific needs and insurance situation.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="7. Refunds and Cancellations">
        <LegalSubsection heading="7.1 Individual Visits">
          <LegalText>
            All fees for completed visits are non-refundable. If the Practice cancels an appointment or is unable to provide services, a full refund will be issued to the original payment method within 30 days.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="7.2 Package Refunds">
          <LegalText>
            Prepaid care packages (such as the Introductory Package) have their own refund terms as specified in the applicable Care Package Agreement signed at enrollment. In general, package refunds are calculated on a pro-rata basis using the standard itemized rates for services delivered, less an administrative processing fee. Please refer to your signed Care Package Agreement for complete refund terms.
          </LegalText>
        </LegalSubsection>

        <LegalSubsection heading="7.3 Cancellation and No-Show Fees">
          <LegalText>
            Appointment cancellation and no-show fees are governed by a separate Cancellation Policy. In summary:
          </LegalText>
          <LegalList
            items={[
              "Initial consultations require 48 hours' cancellation notice",
              "Follow-up visits require 24 hours' cancellation notice",
              "Late cancellations (less than the required notice) are subject to a $75 fee",
              "No-shows are charged the full appointment fee",
              "Cancellation and no-show fees are not billable to insurance and are the Patient's responsibility",
            ]}
          />
          <p className="italic leading-relaxed" style={{ color: "#8a9584" }}>
            Please refer to the separate Cancellation Policy for complete details.
          </p>
        </LegalSubsection>

        <LegalSubsection heading="7.4 Chargeback Policy">
          <LegalText>
            If you dispute a charge with your credit card company after receiving services, you agree to work with the Practice first to resolve the dispute. Chargebacks filed without first attempting resolution with the Practice may result in additional administrative fees and possible termination of the patient relationship.
          </LegalText>
        </LegalSubsection>
      </LegalSection>

      <LegalSection heading="8. Unpaid Balances and Collections">
        <LegalText>
          Because payment is required at the time of service, unpaid balances should be rare. However, in the event of an unpaid balance (for example, an unpaid late cancellation fee or no-show fee):
        </LegalText>
        <LegalList
          items={[
            "You will receive an itemized invoice via the patient portal",
            "Payment is due within 30 days of the invoice date",
            "Unpaid balances beyond 30 days may result in a $25 late fee",
            "Balances unpaid after 60 days may be referred to a collections agency, subject to state and federal law",
            "The Practice reserves the right to decline scheduling future appointments while a balance is outstanding",
          ]}
        />
      </LegalSection>

      <LegalSection heading="9. Financial Hardship">
        <LegalText>
          The Practice recognizes that healthcare costs can be a burden. Patients experiencing documented financial hardship may inquire about the following options:
        </LegalText>
        <LegalList
          items={[
            <><strong>Payment plans:</strong> Splitting a package fee or larger balance across multiple payments</>,
            <><strong>Deferred first visit:</strong> Rescheduling to a time when finances allow, without penalty</>,
            <><strong>Alternative resources:</strong> Assistance identifying community health resources or lower-cost alternatives</>,
          ]}
        />
        <LegalText>
          Blanket discounts are not routinely offered, but flexibility may be available in individual circumstances. To inquire, please contact the Practice at contact@pulsewholehealth.com.
        </LegalText>
      </LegalSection>

      <LegalSection heading="10. Financial Communication and Records">
        <LegalText>
          All financial communications, invoices, receipts, and payment records are maintained within your patient portal (Practice Better). You may access your billing history, download receipts and superbills, and view payment records at any time through the portal. For questions or discrepancies, contact the Practice at contact@pulsewholehealth.com.
        </LegalText>
      </LegalSection>

      <LegalSection heading="11. Good Faith Estimate">
        <LegalText>
          Under the federal No Surprises Act, the Practice provides a Good Faith Estimate of expected charges to all patients before service. You will receive a Good Faith Estimate at scheduling for individual visits, and as part of your Care Package Agreement for package purchases. If your final bill is $400 or more above the Good Faith Estimate, you have the right to initiate a patient-provider dispute resolution process through the federal No Surprises Help Desk at 1-800-985-3059 or online at{" "}
          <a
            href="https://www.cms.gov/nosurprises/consumers"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
            style={{ color: "#b8752f" }}
          >
            www.cms.gov/nosurprises/consumers
          </a>
          .
        </LegalText>
      </LegalSection>

      <LegalSection heading="12. Changes to This Policy">
        <LegalText>
          The Practice may update this Financial Policy from time to time. Material changes will be communicated to active patients by email or through the patient portal at least thirty (30) days before taking effect, and the updated Policy will be posted on the Practice&rsquo;s website with a revised effective date.
        </LegalText>
      </LegalSection>

      <LegalSection heading="13. Questions">
        <LegalText>
          If you have questions about fees, payment, or this Financial Policy, please contact:
        </LegalText>
        <LegalAddress
          lines={[
            "Pulse Whole Health I, P.C.",
            "Email: contact@pulsewholehealth.com",
            "Phone: 610-885-6953",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Acknowledgment">
        <LegalText>
          By scheduling and receiving services from Pulse Whole Health, I acknowledge that I have read, understood, and agree to this Cash Pay Financial Policy.
        </LegalText>
        <LegalSignature
          lines={[
            "Patient Name (printed): _____________________________________________",
            "Patient Signature: _____________________________________  Date: _______________",
          ]}
        />
      </LegalSection>
    </LegalPage>
  );
}
