import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import {
  ArrowRight,
  ArrowLeft,
  BadgeCheck,
  Zap,
  Lightbulb,
  Radio,
  Layers,
  Sparkles,
  Clock,
  Users,
} from "lucide-react";
import heroBackground from "@assets/stock_images/abstract_technology__2c24a2c3.jpg";
import ithingLogoLight from "@assets/logos/Logo/logaster_No_6_png/1024_pixels/1_Primary_logo_on_transparent_1024.png";
import ithingLogoDark from "@assets/ithing_logo_dark.png_1768127827204.png";

export function Hero() {
  const { t, isRTL } = useLanguage();
  const { theme } = useTheme();
  const ithingLogo = theme === "dark" ? ithingLogoDark : ithingLogoLight;

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const badgeText = isRTL
    ? "التحول الرقمي للمؤسسات"
    : "Enterprise digital transformation";
  const impactLabel = isRTL ? "الأثر بالأرقام" : "Impact at a glance";
  const impactTitle = isRTL ? "نتائج قابلة للقياس" : "Measurable outcomes";
  const capabilitiesTitle = isRTL ? "قدراتنا الأساسية" : "Core capabilities";

  const metrics = [
    { icon: Users, value: "100+", label: t("stats.clients") },
    { icon: Sparkles, value: "500+", label: t("stats.projects") },
    { icon: Clock, value: "10+", label: t("stats.experience") },
    { icon: BadgeCheck, value: "25+", label: t("stats.experts") },
  ];

  const capabilities = [
    {
      icon: Lightbulb,
      title: isRTL ? "استشارات التحول الرقمي" : "Digital Transformation",
      description: isRTL
        ? "استراتيجية، أتمتة، وإدارة التغيير"
        : "Strategy, automation, and change management",
    },
    {
      icon: Radio,
      title: isRTL
        ? "استشارات الاتصالات وتقنية المعلومات"
        : "Telecom & IT Advisory",
      description: isRTL
        ? "البنية التحتية، الأمن، وحوكمة التقنية"
        : "Infrastructure, security, and IT governance",
    },
    {
      icon: Layers,
      title: isRTL ? "الحلول الذكية" : "Smart Solutions",
      description: isRTL
        ? "منصات متصلة وتجارب رقمية ذكية"
        : "Connected platforms and smart experiences",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-bg"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div
        className={`absolute inset-0 ${
          isRTL
            ? "bg-gradient-to-l from-background/95 via-background/85 to-background/30"
            : "bg-gradient-to-r from-background/95 via-background/85 to-background/30"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className={`flex flex-col gap-6 text-center items-center ${
              isRTL
                ? "lg:text-right lg:items-end lg:order-2"
                : "lg:text-left lg:items-start lg:order-1"
            }`}
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-background/60 backdrop-blur text-xs sm:text-sm font-semibold ${
                isRTL
                  ? "lg:self-end flex-row-reverse font-arabic tracking-normal"
                  : "lg:self-start tracking-[0.2em] uppercase"
              }`}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span>{badgeText}</span>
            </div>

            <img
              src={ithingLogo}
              alt="iThing Logo"
              className="h-12 sm:h-14 w-auto"
            />

            <div className="space-y-4">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                  isRTL ? "font-arabic leading-relaxed" : "leading-tight"
                }`}
                data-testid="text-hero-title"
              >
                <span className="bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent animate-gradient-text">
                  {t("hero.title")}
                </span>
              </h1>
              <p
                className={`text-lg sm:text-xl text-muted-foreground ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("hero.subtitle")}
              </p>
              <p
                className={`text-base sm:text-lg text-muted-foreground/90 max-w-xl ${
                  isRTL ? "font-arabic" : ""
                }`}
                data-testid="text-hero-description"
              >
                {t("hero.description")}
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
                isRTL ? "sm:flex-row-reverse" : ""
              } ${isRTL ? "lg:justify-end" : "lg:justify-start"}`}
            >
              <Button
                size="lg"
                className={`group min-w-[220px] h-14 text-base sm:text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300 ${
                  isRTL ? "font-arabic" : ""
                }`}
                data-testid="button-hero-primary"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.cta.primary")}
                <ArrowIcon
                  className={`h-5 w-5 transition-transform duration-300 group-hover:${
                    isRTL ? "-translate-x-1.5" : "translate-x-1.5"
                  }`}
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className={`min-w-[220px] h-14 text-base sm:text-lg font-semibold bg-background/60 backdrop-blur border-white/20 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 ${
                  isRTL ? "font-arabic" : ""
                }`}
                data-testid="button-hero-secondary"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.cta.secondary")}
              </Button>
            </div>

            <div
              className={`flex flex-wrap items-center justify-center gap-3 text-sm ${
                isRTL ? "flex-row-reverse" : ""
              } ${isRTL ? "lg:justify-end" : "lg:justify-start"}`}
            >
              <div
                className={`flex items-center gap-3 px-4 py-2 rounded-full bg-background/70 border border-white/10 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span
                  className={`text-muted-foreground ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {isRTL ? "متوفرون الآن" : "Available Now"}
                </span>
              </div>
              <a
                className={`flex items-center gap-3 px-4 py-2 rounded-full bg-background/70 border border-white/10 cursor-pointer hover:bg-primary/10 hover:border-primary/40 transition-colors duration-200 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
                data-testid="button-free-consultation"
                href="mailto:info@ithingsolutions.com"
              >
                <Zap className="w-4 h-4 text-primary" />
                <span
                  className={`text-muted-foreground ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {isRTL ? "استشارة مجانية" : "Free Consultation"}
                </span>
              </a>
            </div>
          </div>

          <div
            className={`flex flex-col gap-6 ${
              isRTL ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="glass rounded-3xl border border-white/10 p-8 shadow-2xl">
              <div
                className={`flex items-center justify-between gap-4 mb-6 ${
                  isRTL ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div>
                  <p
                    className={`text-xs text-muted-foreground ${
                      isRTL
                        ? "font-arabic tracking-normal"
                        : "uppercase tracking-[0.3em]"
                    }`}
                  >
                    {impactLabel}
                  </p>
                  <h3
                    className={`text-2xl font-bold ${
                      isRTL ? "font-arabic" : ""
                    }`}
                  >
                    {impactTitle}
                  </h3>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className={`flex items-center gap-3 ${
                        isRTL ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <div className="h-11 w-11 rounded-2xl bg-background/60 border border-white/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">
                          {metric.value}
                        </div>
                        <div
                          className={`text-xs text-muted-foreground ${
                            isRTL ? "font-arabic" : ""
                          }`}
                        >
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-background/60 backdrop-blur p-6">
              <div
                className={`flex items-center gap-2 mb-4 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Layers className="h-5 w-5 text-primary" />
                <h4
                  className={`text-lg font-semibold ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {capabilitiesTitle}
                </h4>
              </div>
              <div className="space-y-4">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <div
                      key={capability.title}
                      className={`flex items-start gap-3 ${
                        isRTL ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-semibold text-foreground ${
                            isRTL ? "font-arabic" : ""
                          }`}
                        >
                          {capability.title}
                        </p>
                        <p
                          className={`text-xs text-muted-foreground ${
                            isRTL ? "font-arabic" : ""
                          }`}
                        >
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
