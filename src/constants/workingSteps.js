import { CheckCircle2, Smartphone, CreditCard, UserCircle } from "lucide-react";
export const steps = [
  {
    icon: <CreditCard className="h-10 w-10 text-text" />,
    title: "Choose Your Card",
    description:
      "Select from our range of premium materials and designs, or create a custom card that matches your brand.",
  },
  {
    icon: <UserCircle className="h-10 w-10 text-text" />,
    title: "Set Up Your Profile",
    description:
      "Create your digital profile with contact details, social links, portfolio, and more through our easy dashboard.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-text" />,
    title: "Tap & Share",
    description:
      "Simply tap your card on any smartphone to instantly share your information. No app required for recipients.",
  },
  {
    icon: <CheckCircle2 className="h-10 w-10 text-text" />,
    title: "Track & Update",
    description:
      "Monitor engagement and update your information anytime through your personal dashboard.",
  },
];
