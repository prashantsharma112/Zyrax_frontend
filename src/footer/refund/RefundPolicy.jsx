// import Image from "../../assets/";

const RefundPolicy = () => {
  return (
    <div className="relative w-full h-auto justify-text overflow-hidden bg-gray-100 text-black p-6">
      {/* Text Content */}
      <div className="flex flex-col items-start text-left ">
        <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold mb-10">
          Refund Policy
        </h2>
        <p className="text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] mb-4">
          Zyrax Fitness offers a refund policy for its digital fitness products as explained below:
        </p>

        <ol className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] list-decimal list-inside">
          <li className="mb-4">
            Amount once paid through the payment gateway shall not be refunded other than under the following circumstances:
            <ul className="list-disc pl-6">
              <li className="mb-2">Multiple times debiting of Customer’s Card/Bank Account due to technical error OR Customer’s account being debited with excess amount in a single transaction due to technical error. In such cases, excess amount excluding Payment Gateway charges would be refunded to the Customer.</li>
              <li className="mb-2">Due to technical error, payment being charged on the Customer’s Card/Bank Account but the enrolment for the Service is unsuccessful. Customer would be provided with the enrolment by Zyrax, at no additional cost.</li>
              <li>Due to timing error, if the customer didn’t get the live timings promised in the sales process. If the selected live timings don’t start within 7 days, the amount will be refunded after 7 days of making the payment.</li>
            </ul>
          </li>

          <li className="mb-4">
            The Customer will have to make an application for refund along with the REASON FOR REFUND attached and the original payment receipt (if any) generated at the time of making payments.
          </li>

          <li className="mb-4">
            The application in the prescribed format should be sent on WhatsApp to +91-8077383314.
          </li>

          <li className="mb-4">
            The application will be processed manually, and after verification, if the claim is found valid, 50% of the net amount will be refunded by Zyrax through electronic mode in favor of the applicant and confirmation sent to them in the online registration form within a period of 21 calendar days on receipt of such claim. It will take 3-21 days for the money to show in your bank account depending on your bank’s policy.
          </li>

          <li className="mb-4">
            Company assumes no responsibility and shall incur no liability if it is unable to effect any Payment Instruction(s) on the Payment Date owing to any one or more of the following circumstances:
            <ul className="list-disc pl-6">
              <li className="mb-2">If the Payment Instruction(s) issued by you is/are incomplete, inaccurate, invalid, or delayed.</li>
              <li className="mb-2">If the Payment Account has insufficient funds/limits to cover the amount as mentioned in the Payment Instruction(s).</li>
              <li className="mb-2">If the funds available in the Payment Account are under any encumbrance or charge.</li>
              <li className="mb-2">If your Bank or the NCC refuses or delays honoring the Payment Instruction(s).</li>
              <li className="mb-2">Circumstances beyond the control of the company (including, but not limited to, fire, flood, natural disasters, bank strikes, power failure, systems failure like computer or telephone lines breakdown due to an unforeseeable cause or interference from an outside force).</li>
              <li>In case the payment is not effected for any reason, you will be intimated about the failed payment by an SMS/WhatsApp message.</li>
            </ul>
          </li>

          <li className="mb-4">
            User agrees that Company, in its sole discretion, for any or no reason, and without penalty, may suspend or terminate his/her account (or any part thereof) or use of the Services and remove and discard all or any part of his/her account, user profile, or his/her recipient profile, at any time. Company may also in its sole discretion and at any time discontinue providing access to the Services, or any part thereof, with or without notice. Any suspected, fraudulent, abusive, or illegal activity may be referred to appropriate law enforcement authorities.
          </li>

          <li>
            Company may elect to resolve any dispute, controversy, or claim arising out of or relating to this Agreement or Service provided in connection with this Agreement by binding arbitration in accordance with the provisions of the Indian Arbitration & Conciliation Act, 1996. Any such dispute, controversy, or claim shall be arbitrated on an individual basis and shall not be consolidated in any arbitration with any claim or controversy of any other party.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RefundPolicy;
