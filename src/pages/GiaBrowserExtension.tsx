import svgPaths from "../imports/svg-nd6ia6vrcm";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../components/ui/carousel";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import breakCardImg from "figma:asset/2084eb527eb3667676b415aca3ed47541e5dddd9.png";
import setupCardImg from "figma:asset/aae01976bb443bc885ff993f6d2d74ec2df17543.png";
import settingsPageImg from "figma:asset/88ce44aa8801119b8725b791b81ae35f532ed061.png";

// Navigation helper
function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new CustomEvent("navigate", { detail: { path } }));
}

function Header() {
  return (
    <div className="absolute h-[28px] left-[48px] top-[24px] w-[168.789px]" data-name="Header3">
      <button
        onClick={() => navigateTo("/")}
        className="hover:opacity-70 transition-opacity cursor-pointer"
      >
        <p className="absolute font-['Poppins:Medium','Noto_Sans_Symbols:Medium',sans-serif] leading-[28px] left-0 text-[#333333] text-[18px] text-nowrap top-px whitespace-pre" style={{ fontVariationSettings: "'wght' 500" }}>
          ← Back to Portfolio
        </p>
      </button>
    </div>
  );
}

function Heading() {
  return (
    <div className="w-full flex justify-center items-center py-2" data-name="Heading 1">
      <p className="font-['Poppins:Bold',sans-serif] text-[#333333] text-center tracking-[-1.2px] text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[60px]">Gia Browser Extension</p>
    </div>
  );
}

function GiaScreenshots() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6" data-name="Gia Screenshots">
      <div className="w-full overflow-hidden px-4 md:px-16">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4 flex items-center justify-center min-h-[300px]">
              <ImageWithFallback 
                src={breakCardImg} 
                alt="Gia Break Reminder Card" 
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </CarouselItem>
            <CarouselItem className="pl-4 flex items-center justify-center min-h-[300px]">
              <ImageWithFallback 
                src={setupCardImg} 
                alt="Gia Setup Screen" 
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </CarouselItem>
            <CarouselItem className="pl-4 flex items-center justify-center min-h-[300px]">
              <ImageWithFallback 
                src={settingsPageImg} 
                alt="Gia Settings Page" 
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-6 bg-[#333333]"
                : "w-2 bg-[#333333]/30 hover:bg-[#333333]/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Heading />
      <GiaScreenshots />
    </div>
  );
}

export default function GiaBrowserExtension() {
  return (
    <div className="relative min-h-screen bg-[#fcffff] flex items-start justify-center">
      <div className="bg-[#fcffff] w-full max-w-[1440px] min-h-screen">
        <div className="relative">
          <Header />
          
          {/* Screenshots Section */}
          <div className="w-full px-6 md:px-12 lg:px-16 pt-24 pb-12">
            <div className="max-w-4xl mx-auto flex justify-center">
              <Frame7 />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
            {/* Project */}
            <div className="space-y-4">
              <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Project</h2>
              <p className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed">
                Designed a Chrome extension that helps users build healthier screen habits through science-backed break reminders, powered by on-device AI for a fully private, personalized experience.
              </p>
            </div>

            {/* Context */}
            <div className="space-y-4">
              <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Context</h2>
              <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed space-y-2">
                <p>Individual project, submitted to Google Built-In AI Challenge</p>
                <p>Completed over 3 weeks using Figma, Gemini Nano, and Chrome's Built-in AI APIs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Process</h2>
              <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed space-y-6">
                <p className="font-semibold">Discover → Define → Design</p>
                
                <div>
                  <p className="font-semibold mb-2">Discover:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal catalyst: Optometrist recommended the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds) to manage eye strain</li>
                    <li>Market research: Existing break reminder apps lacked personality, required internet connectivity, and didn't adapt to user preferences</li>
                    <li>Privacy concern: Users hesitant to share screen time habits with cloud services</li>
                    <li>Opportunity identified: Chrome's Built-in AI (Gemini Nano) enabled local processing without compromising privacy</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Define:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Key insight: Break reminders fail when they feel like interruptions rather than moments of care</li>
                    <li>Secondary insight: Different personality types respond to different communication styles—some need calm, others need humor</li>
                    <li>Design principle: Effective behavior change requires both science-backed timing and emotional resonance</li>
                  </ul>
                  <p className="font-semibold mt-4 mb-2">3 Core User Needs:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Follow evidence-based eye health practices without manual tracking</li>
                    <li>Control break reminders through natural, hands-free interaction during deep work</li>
                    <li>Maintain privacy while receiving personalized, adaptive nudges</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Design:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dual tone system: Created "Mindful" (calm, grounding) and "Goofy" (humorous, playful) personalities to accommodate different user preferences</li>
                    <li>Voice-first interaction: Integrated Prompt API for local voice command recognition ("start," "snooze," "dismiss") enabling hands-free control</li>
                    <li>Multilingual accessibility: Leveraged Translator API to deliver reminders in user's preferred language—all processed on-device</li>
                    <li>Two-tier break structure:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Short breaks every 20-25 minutes (20-20-20 rule)</li>
                        <li>Longer "reset" breaks at user-defined intervals for sustained energy</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Reflection</h2>
              <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold mb-2">What Worked Well:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>On-device AI processing eliminated privacy concerns while maintaining personalization</li>
                    <li>Dual tone system allowed users to self-select the communication style that resonated with them</li>
                    <li>Voice control removed friction during focus sessions when users couldn't break flow to click</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Challenges Overcome:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Offscreen scripting complexity: Balanced voice recognition + text-to-speech without blocking UI</li>
                    <li>Timing sensitivity: Iterated on reminder cadence to feel supportive rather than intrusive</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">If I Could Iterate:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Conduct usability testing with users experiencing chronic eye strain or headaches to validate effectiveness</li>
                    <li>Develop mobile PWA version with haptic feedback for smartphone users</li>
                    <li>Add adaptive break timing that learns from user dismissal patterns to optimize reminder frequency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[rgba(0,0,0,0.15)] mt-12 md:mt-20">
          <div className="px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <h2 className="font-['Poppins:Regular',_sans-serif] font-normal text-[40px] text-[#1e1e1e] tracking-tight">Contact Me</h2>
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/michaela-lewis-9853aa304/', '_blank')}
                className="flex items-center justify-center size-6 hover:opacity-70 transition-opacity"
                aria-label="LinkedIn Profile"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g clipPath="url(#clip0_1_67)">
                    <g>
                      <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="black" fillOpacity="0.45" fillRule="evenodd" />
                      <path d={svgPaths.pe7ea00} fill="white" />
                      <path d={svgPaths.p1ab31680} fill="white" />
                      <path d={svgPaths.p28c6df0} fill="white" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_67">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
