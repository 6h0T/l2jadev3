"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SectionSeparator from "./section-separator"
import { useTranslation } from "react-i18next"
import { AnimatedSection } from "./animated-section"

export default function Information() {
  const { t } = useTranslation()

  const tabs = [
    "general",
    "rates",
    "enchants",
    "augments",
    "olympiads",
    "sieges",
    "clans",
    "raidBosses",
    "farmZones",
    "rules",
  ]

  const getTranslatedArray = (key: string) => {
    const translated = t(key, { returnObjects: true })
    return Array.isArray(translated) ? translated : []
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0">
        <SectionSeparator />
      </div>
      <section id="information" className="pt-24 pb-20 relative bg-gradient-to-b from-[#121220] to-[#0a0a12]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-jade relative inline-block">
                <span className="relative z-10">{t("information.title")}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-jade/30"></span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl">{t("information.description")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Tabs defaultValue="general" className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="overflow-x-auto pb-4 scrollbar-none">
                  <TabsList className="inline-flex flex-wrap w-full h-auto bg-[#0a0a12] border border-jade/20 p-1">
                    {tabs.map((tab) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className="flex-1 basis-1/2 sm:basis-auto whitespace-nowrap px-2 py-2.5 text-xs md:text-sm font-medium data-[state=active]:bg-jade data-[state=active]:text-black data-[state=active]:shadow-none text-gray-300 hover:text-jade transition-colors min-w-[calc(50%-4px)] sm:min-w-0 m-0.5 sm:m-0"
                      >
                        {t(`information.tabs.${tab}`)}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                {/* <div className="absolute left-0 right-0 bottom-0 h-4 pointer-events-none bg-gradient-to-r from-[#121220] via-transparent to-[#121220]" /> */}
              </div>

              {tabs.map((tab) => (
                <TabsContent
                  key={tab}
                  value={tab}
                  className="mt-4 md:mt-6 bg-[#0a0a12]/60 border border-jade/20 p-4 md:p-6"
                >
                  <h3 className="text-2xl font-bold mb-4 text-jade">{t(`information.content.${tab}.title`)}</h3>
                  {tab === "rules" ? (
                    <Accordion type="single" collapsible className="w-full">
                      {getTranslatedArray(`information.content.${tab}.items`).map((rule: any, index: number) => (
                        <AccordionItem key={index} value={`rule-${index + 1}`} className="border-jade/20">
                          <AccordionTrigger className="text-gray-200 hover:text-jade">{rule.title}</AccordionTrigger>
                          <AccordionContent className="text-gray-300">{rule.content}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : tab === "farmZones" ? (
                    <div className="space-y-6">
                      {["varkaSilenos", "pvpFarm"].map((zone) => (
                        <div key={zone}>
                          <h4 className="text-xl font-bold mb-2 text-jade">
                            {t(`information.content.farmZones.${zone}.title`)}
                          </h4>
                          <p className="font-bold text-gray-200">{t("information.content.farmZones.drops")}:</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-300">
                            {getTranslatedArray(`information.content.farmZones.${zone}.drops`).map(
                              (item: string, index: number) => (
                                <li key={index}>{item}</li>
                              ),
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      {getTranslatedArray(`information.content.${tab}.items`).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {tab === "general" && (
                    <div className="mt-6">
                      <h4 className="text-xl font-bold mt-6 mb-2 text-jade">
                        {t("information.content.general.questSystem.title")}
                      </h4>
                      <p className="text-gray-300">{t("information.content.general.questSystem.description")}</p>
                    </div>
                  )}
                  {tab === "raidBosses" && (
                    <p className="mt-4 text-gray-300">{t("information.content.raidBosses.note")}</p>
                  )}
                  {tab === "rules" && (
                    <p className="mt-6 text-gray-300 text-sm">{t("information.content.rules.lastUpdate")}</p>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

