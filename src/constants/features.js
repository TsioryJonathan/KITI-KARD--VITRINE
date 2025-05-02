import {
  Smartphone,
  Edit,
  BarChart3,
  Recycle,
  Globe,
  Shield,
  ArrowRight,
  RefreshCw,
  Zap,
  Palette,
} from "lucide-react";
export const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-[var(--color-text)]/90" />,
    title: "Instant Information Sharing",
    description:
      "Share your contact details, portfolio, social media, and more with a simple tap. No typing, no errors, no hassle.",
  },
  {
    icon: <Edit className="h-8 w-8 text-[var(--color-text)]/90" />,
    title: "Update Anytime",
    description:
      "Change your information remotely without ordering new cards. Your physical card always links to your latest details.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-[var(--color-text)]/90" />,
    title: "Track Engagement",
    description:
      "See who's viewed your profile, when, and how often. Gain insights into your networking effectiveness.",
  },
  {
    icon: <Recycle className="h-8 w-8 text-[var(--color-text)]/90" />,
    title: "Eco-Friendly",
    description:
      "Reduce paper waste with a sustainable digital solution. One NFC card replaces hundreds of traditional business cards.",
  },
  {
    icon: <Globe className="h-8 w-8 text-[var(--color-text)]/90" />,
    title: "Works Everywhere",
    description:
      "Compatible with most modern smartphones. No app download required for the recipient - just tap and connect.",
  },
  {
    icon: <Shield className="h-8 w-8 text-[var(--color-text)]/90" />,
    title: "Secure & Private",
    description:
      "You control what information you share. Update or revoke access anytime through your secure dashboard.",
  },
];

export default features;

export const additionalFeatures = [
  {
    icon: <RefreshCw className="h-6 w-6 text-text" />,
    title: "Always Up-to-Date",
    description: "Never worry about outdated information again",
  },
  {
    icon: <Zap className="h-6 w-6 text-text" />,
    title: "Make an Impression",
    description: "Stand out with innovative technology",
  },
  {
    icon: <Palette className="h-6 w-6 text-text" />,
    title: "Customizable Design",
    description: "Match your brand with custom designs",
  },
];

