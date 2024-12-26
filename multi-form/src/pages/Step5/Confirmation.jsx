import Heading from "../../ui/Heading";
import Paragraph from "../../ui/paragraph";

function Confirmation() {
  return (
    <div className="text-center">
      <img
        src="/images/icon-thank-you.svg"
        alt="Icon"
        className="mx-auto mb-4 h-16 w-16"
      />
      <Heading>Thank you!</Heading>
      <Paragraph>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Paragraph>
    </div>
  );
}

export default Confirmation;
