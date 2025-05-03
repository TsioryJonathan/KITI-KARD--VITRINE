import {
  CreditCard,
  UserCircle,
  Smartphone,
  BarChart3,
  Check,
} from "lucide-react";

export const steps = [
  {
    icon: <CreditCard className="h-9 w-9 text-text" />,
    title: "Choose Your Card",
    description:
      "Select from our range of premium materials and designs, or create a custom card that matches your brand.",
    details:
      "Browse our collection of NFC business cards made from premium materials like metal, wood, bamboo, and plastic. Each material offers unique benefits and aesthetics to match your personal style and professional image.",
    items: [
      "Choose from metal, wood, bamboo, or plastic materials",
      "Select from various designs and customization options",
      "Add your logo or custom artwork for a personalized touch",
    ],
  },
  {
    icon: <UserCircle className="h-9 w-9 text-text" />,
    title: "Set Up Your Profile",
    description:
      "Create your digital profile with contact details, social links, portfolio, and more through our easy dashboard.",
    details:
      "Our intuitive dashboard makes it simple to create and customize your digital profile. Add your contact information, social media links, website, portfolio, and even multimedia content that best represents you and your brand.",
    items: [
      "Add contact details, social media, and website links",
      "Upload photos, videos, and portfolio samples",
      "Create custom CTAs and lead generation forms",
    ],
  },
  {
    icon: <Smartphone className="h-9 w-9 text-text" />,
    title: "Tap & Share",
    description:
      "Simply tap your card on any smartphone to instantly share your information. No app required for recipients.",
    details:
      "When you meet someone new, simply tap your NFC card on their smartphone. Their phone will instantly recognize the card and prompt them to view your digital profile. No special apps are required for the recipient.",
    items: [
      "Works with both iPhone (iOS 14+) and Android devices",
      "Alternative QR code for non-NFC devices",
      "Instant sharing without exchanging paper cards",
    ],
  },
  {
    icon: <BarChart3 className="h-9 w-9 text-text" />,
    title: "Track & Update",
    description:
      "Monitor engagement and update your information anytime through your personal dashboard.",
    details:
      "Our analytics dashboard shows you when and how often your card is scanned, which links are clicked, and other valuable insights. Update your information anytime, and all your cards will instantly reflect the changes.",
    items: [
      "View detailed analytics on card usage and engagement",
      "Update your information anytime without ordering new cards",
      "Export contact data for CRM integration",
    ],
  },
];
