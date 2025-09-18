import PremiumMessage from "@/components/layouts/PremiumMessage";

const Support = () => {
  const supportFeatures = [
    "24/7 customer support",
    "Dedicated account manager",
    "Priority response times",
    "Custom onboarding assistance",
    "Advanced troubleshooting and issue resolution",
    "Access to exclusive support resources",
  ];

  return (
    <PremiumMessage
      title="Advanced Support"
      description="Get the help you need with our comprehensive support services."
      features={supportFeatures}
    />
  );
};

export default Support;
