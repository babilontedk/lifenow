import productivity from "@/assets/categories/productivity.jpg";
import lifestyle from "@/assets/categories/lifestyle.jpg";
import health from "@/assets/categories/health.jpg";
import onlineMoney from "@/assets/categories/online-money.jpg";
import selfImprovement from "@/assets/categories/self-improvement.jpg";
import technology from "@/assets/categories/technology.jpg";

export const categoryImages: Record<string, string> = {
  "Productivity": productivity,
  "Lifestyle": lifestyle,
  "Health Tips": health,
  "Online Money": onlineMoney,
  "Self Improvement": selfImprovement,
  "Technology Tips": technology,
};

export const getCategoryImage = (category: string): string =>
  categoryImages[category] || productivity;
