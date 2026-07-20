export interface Service {
  title: string;
  description: string;
  subtitle: string;
  items: string[];
  image: string;
}

export const services: Service[] = [
  {
    title: "Telecommunications & Value Added Services",
    description:
      "From telecom support and enterprise messaging to USSD, SMS and Value Added Services, we provide scalable solutions that enable seamless communication and exceptional customer experiences.",
    subtitle: "Our services include:",
    items: [
      "Bulk SMS Solutions",
      "Digital Content & Subscription Services",
      "Gaming & Lottery Solutions",
      "Customer Engagement Solutions",
      "Campaign Management",
      "Short Code Services",
      "VAS Licensing & Regulatory Support",
      "VAS Lifecycle Management",
    ],
    image: "/images/services/telecommunications.png",
  },

  {
    title: "Web, Mobile and Software Development",
    description:
      "We design and develop intuitive web and mobile applications that combine exceptional user experiences with reliable performance.",
    subtitle: "Our Capabilities Include:",
    items: [
      "Corporate websites",
      "Customer portals",
      "Business applications",
      "Android apps",
      "iOS apps",
      "Web apps",
    ],
    image: "/images/services/software_development.png",
  },

  {
    title: "Mobile Content & Digital Services",
    description:
      "We create engaging digital experiences that connect businesses with customers across mobile channels.",
    subtitle: "Solutions include:",
    items: [
      "Trivia and gaming platforms",
      "Educational content",
      "Digital campaigns",
      "Interactive services",
      "Mobile information platforms",
      "Content distribution solutions",
    ],
    image: "/images/services/digital_services.png",
  },

  {
    title: "Data Analytics & Artificial Intelligence",
    description:
      "Data is one of your organization's greatest assets. We help businesses transform data into actionable insights and intelligent decision-making.",
    subtitle: "Services include:",
    items: [
      "Business intelligence",
      "Data visualization",
      "AI-powered automation",
      "Predictive analytics",
      "Machine learning solutions",
      "Performance dashboards",
    ],
    image: "/images/services/data_analytics.png",
  },

  {
    title: "E-Commerce & Fintech Solutions",
    description:
      "We develop secure and scalable e-commerce and fintech solutions that help businesses sell online, process payments, and deliver seamless digital experiences.",
    subtitle: "Solutions include:",
    items: [
      "Online stores & marketplaces",
      "Payment gateway integration",
      "Digital wallet solutions",
      "Fintech applications",
      "Order & inventory management",
      "Customer portals",
      "Financial APIs & payment integrations",
    ],
    image: "/images/services/e_commerce.png",
  },

  {
    title: "ICT Consulting",
    description:
      "Technology should support your business strategy, not complicate it. Our consultants help organizations make informed technology decisions that drive innovation and long-term growth.",
    subtitle: "Our consulting services cover:",
    items: [
      "Digital transformation",
      "Technology strategy",
      "IT planning",
      "Solution architecture",
      "Process optimization",
      "Technology assessments",
    ],
    image: "/images/services/ict_consulting.png",
  },
];
