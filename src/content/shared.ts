import type { Stat } from "@/types/content";

export const companyStats = [
  { value: "100+", label: "Financing Transactions", countTo: 100, suffix: "+" },
  { value: "Billions", label: "Dollars of Capital Raised" },
  { value: "Thousands", label: "Underlying Shareholders" },
] as const satisfies readonly Stat[];

export const contactCopy = {
  title: "Contact us",
  body: "Connect with our team to discuss your strategic objectives.",
  fields: {
    name: "Full Name",
    phone: "Phone",
    email: "Email",
    sector: "Sector",
    company: "Company",
  },
  submit: "Lets Talk",
  demoNote: "This demonstration does not send messages.",
} as const;
