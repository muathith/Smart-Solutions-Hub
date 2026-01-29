import { useLanguage } from "@/lib/language-context";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "@/components/scroll-animation";
import {
  Sparkles,
  Users,
  HeadphonesIcon,
  TrendingUp,
  CheckCircle2,
  Star,
} from "lucide-react";

const reasons = [
  {
    key: "expertise",
    icon: Users,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    key: "support",
    icon: HeadphonesIcon,
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
  },
  {
    key: "scalable",
    icon: TrendingUp,
    gradient: "from-rose-500/20 to-orange-500/20",
    iconColor: "text-rose-400",
  },
  {
    key: "innovation",
    icon: Sparkles,
    gradient: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-400",
  },
];

export function WhyChooseUs() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />

      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
            isRTL ? "lg:flex-row-reverse" : ""
          }`}
        >
          <ScrollAnimation
            animation="fadeLeft"
            className={
              isRTL ? "text-right order-2 lg:order-1" : "order-2 lg:order-1"
            }
          >
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-slate-100 to-gray-200 bg-clip-text text-transparent ${
                isRTL ? "font-arabic" : ""
              }`}
              data-testid="text-why-title"
            >
              {t("why.title")}
            </h2>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <StaggerItem key={reason.key} animation="fadeUp">
                    <div
                      className={`group relative p-6 rounded-2xl bg-gradient-to-br ${
                        reason.gradient
                      } backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden h-full ${
                        isRTL ? "text-right" : ""
                      }`}
                      data-testid={`card-why-${reason.key}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div
                        className={`relative flex items-start gap-4 ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div className="shrink-0 p-3.5 rounded-xl bg-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className={`h-6 w-6 ${reason.iconColor}`} />
                        </div>
                        <div>
                          <h3
                            className={`text-lg font-bold mb-2 text-white ${
                              isRTL ? "font-arabic" : ""
                            }`}
                          >
                            {t(`why.${reason.key}.title`)}
                          </h3>
                          <p
                            className={`text-sm text-slate-300 leading-relaxed ${
                              isRTL ? "font-arabic" : ""
                            }`}
                          >
                            {t(`why.${reason.key}.description`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollAnimation>

          <ScrollAnimation
            animation="fadeRight"
            className={`relative order-1 lg:order-2 ${
              isRTL ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-500/10 to-red-500/5 rounded-[3rem] rotate-6 blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-purple-500/5 to-transparent rounded-[3rem] -rotate-3" />

              <div className="absolute inset-4 bg-gradient-to-br from-slate-800/80 via-gray-800/80 to-slate-900/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 fill-red-500 text-red-500"
                        />
                      ))}
                    </div>
                    <div className="text-8xl lg:text-9xl font-black bg-gradient-to-br from-red-500 via-red-400 to-rose-400 bg-clip-text text-transparent mb-4">
                      10+
                    </div>
                    <div
                      className={`text-xl font-semibold text-slate-300 ${
                        isRTL ? "font-arabic" : ""
                      }`}
                    >
                      {isRTL ? "سنوات من التميز" : "Years of Excellence"}
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span
                        className={`text-sm text-slate-400 ${
                          isRTL ? "font-arabic" : ""
                        }`}
                      >
                        {isRTL ? "يثق بنا العملاء" : "Trusted by Clients"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
