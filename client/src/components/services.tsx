import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import {
  Lightbulb,
  Radio,
  Layers,
  Cloud,
  Settings,
  Rocket,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";

interface Service {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    id: 1,
    titleEn: "Digital Transformation Consulting",
    titleAr: "استشارات التحول الرقمي",
    descriptionEn:
      "Strategic guidance to navigate digital transformation with tailored strategies aligned with international best practices and global technological standards.",
    descriptionAr:
      "إرشادات استراتيجية للتحول الرقمي مع استراتيجيات مصممة وفقاً لأفضل الممارسات الدولية والمعايير التقنية العالمية.",
    icon: Lightbulb,
  },
  {
    id: 2,
    titleEn: "Telecommunications & IT Advisory",
    titleAr: "استشارات الاتصالات وتقنية المعلومات",
    descriptionEn:
      "Expert advisory services in telecommunications and information technology to optimize your technology investments and infrastructure.",
    descriptionAr:
      "خدمات استشارية متخصصة في الاتصالات وتقنية المعلومات لتحسين استثماراتك التقنية والبنية التحتية.",
    icon: Radio,
  },
  {
    id: 3,
    titleEn: "Enterprise & Smart Solutions",
    titleAr: "حلول المؤسسات والحلول الذكية",
    descriptionEn:
      "Design and development of integrated digital platforms and enterprise solutions that drive efficiency and innovation.",
    descriptionAr:
      "تصميم وتطوير منصات رقمية متكاملة وحلول مؤسسية تعزز الكفاءة والابتكار.",
    icon: Layers,
  },
  {
    id: 4,
    titleEn: "Cloud & Infrastructure Integration",
    titleAr: "تكامل السحابة والبنية التحتية",
    descriptionEn:
      "Seamless cloud and infrastructure integration services to build scalable, secure, and reliable technology ecosystems.",
    descriptionAr:
      "خدمات تكامل السحابة والبنية التحتية لبناء أنظمة تقنية قابلة للتوسع وآمنة وموثوقة.",
    icon: Cloud,
  },
  {
    id: 5,
    titleEn: "Systems & Application Integration",
    titleAr: "تكامل الأنظمة والتطبيقات",
    descriptionEn:
      "Technology integration and convergence services to connect your systems and applications into a cohesive ecosystem.",
    descriptionAr:
      "خدمات تكامل التقنية والتقارب لربط أنظمتك وتطبيقاتك في منظومة متكاملة.",
    icon: Settings,
  },
  {
    id: 6,
    titleEn: "Startup & Enterprise Enablement",
    titleAr: "تمكين الشركات الناشئة والمؤسسات",
    descriptionEn:
      "Enabling startups and established organizations through cohesive, scalable technology ecosystems and professional services.",
    descriptionAr:
      "تمكين الشركات الناشئة والمؤسسات القائمة من خلال أنظمة تقنية متكاملة وقابلة للتوسع وخدمات احترافية.",
    icon: Rocket,
  },
];

const gradients = [
  "from-rose-500/20 to-orange-500/20",
  "from-amber-500/20 to-yellow-500/20",
  "from-cyan-500/20 to-teal-500/20",
  "from-emerald-500/20 to-green-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-blue-500/20 to-cyan-500/20",
  "from-pink-500/20 to-rose-500/20",
  "from-indigo-500/20 to-blue-500/20",
];

export function Services() {
  const { language, isRTL } = useLanguage();

  return (
    <section id="services" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/40 to-background" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.08)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 mb-8 shadow-lg shadow-primary/5">
              <span
                className={`text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "ما نقدمه" : "What We Offer"}
              </span>
            </div>
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-8 ${isRTL ? "font-arabic" : ""}`}
              data-testid="text-services-title"
            >
              {isRTL ? "خدماتنا" : "Our Services"}
            </h2>
            <p
              className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}
              data-testid="text-services-subtitle"
            >
              {isRTL
                ? "حلول مبتكرة مصممة لتحويل عملك"
                : "Innovative solutions designed to transform your business"}
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            const gradient = gradients[index % gradients.length];
            const title = language === "ar" ? service.titleAr : service.titleEn;
            const description =
              language === "ar" ? service.descriptionAr : service.descriptionEn;

            return (
              <StaggerItem key={service.id} animation="zoomIn">
                <Card
                  className="group relative overflow-hidden border bg-card/60 shadow-sm hover:shadow-xl transition-all duration-300 h-full backdrop-blur-sm supports-[backdrop-filter]:bg-card/40 hover:-translate-y-1"
                  data-testid={`card-service-${service.id}`}
                  role="article"
                  aria-label={title}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.10)_1px,transparent_0)] [background-size:20px_20px]" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardContent className="relative p-6 lg:p-8">
                    <div
                      className={`flex items-start justify-between mb-6 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <div className="relative">
                        <div className={`absolute -inset-3 bg-gradient-to-br ${gradient} blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                        <div className="relative p-4 rounded-2xl bg-background/70 border border-primary/15 shadow-sm group-hover:border-primary/25 transition-colors duration-300">
                          <Icon className="h-7 w-7 text-primary group-hover:scale-105 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="p-2 rounded-full border border-transparent bg-background/40 group-hover:bg-background/70 group-hover:border-primary/15 transition-colors duration-300">
                        <ArrowUpRight
                          className={`h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRTL ? "-scale-x-100" : ""}`}
                        />
                      </div>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`text-sm text-muted-foreground leading-relaxed ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
