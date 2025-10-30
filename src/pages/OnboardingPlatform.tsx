import svgPaths from "../imports/svg-fpomokqm3p";
import imgImage from "figma:asset/d6e8df800477a14dc2206c7622a7259c268f29ad.png";

// Navigation helper
function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new CustomEvent("navigate", { detail: { path } }));
}

function Header() {
  return (
    <header className="w-full" data-name="Header 1">
      <div className="px-6 md:px-12 lg:px-16 py-6">
        <button 
          onClick={() => navigateTo("/")}
          className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] hover:opacity-70 transition-opacity"
        >
          ← Back to Portfolio
        </button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="w-full">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-['Poppins:Bold',_sans-serif] font-bold text-4xl md:text-5xl lg:text-[64px] text-[#333333] text-center tracking-tight leading-tight">{`Frictionless Onboarding for Enterprise Platforms`}</h1>
        </div>
      </div>
    </section>
  );
}

function ImageSection() {
  return (
    <section className="w-full" data-name="Image">
      <div className="px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="w-full aspect-[824/370] rounded-lg overflow-hidden">
            <img 
              alt="Onboarding platform wireframe" 
              className="w-full h-full object-cover" 
              src={imgImage} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TextBlock1() {
  return (
    <section className="w-full" data-name="Text block 1">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          {/* Project */}
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Project</h2>
            <p className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed">
              Designed a 5-screen onboarding flow that guides new users through environment setup, reducing initial configuration time and improving team collaboration setup for an enterprise collaboration platform.
            </p>
          </div>

          {/* Context */}
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Context</h2>
            <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed">
              <p>Individual project, presented as part of an internship</p>
              <p>completed in 8 hours using Figma then sent to developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="w-full" data-name="Quote">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <p className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-4xl lg:text-[48px] text-[#333333] text-center tracking-tight leading-tight">
            How might we introduce a complex platform to first-time users through onboarding configuration?
          </p>
        </div>
      </div>
    </section>
  );
}

function TextBlock2() {
  return (
    <section className="w-full" data-name="Text block 2">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Process</h2>
            <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed space-y-4">
              <p className="font-semibold">Discover → Design</p>
              
              <div>
                <p className="font-semibold mb-2">Discover:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reviewed company documentation to understand onboarding requirements then created a framework through information architecture</li>
                  <li>Grouped 30+ setup requirements into 5 logical screens</li>
                  <li>Separated strategic decisions (purpose, environment) from tactical ones (team members)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">Design:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tooltip + modal pattern for optional features</li>
                  <li>Consistent form structure across all user types</li>
                  <li>"Save for Later" at decision points to accommodate real workflow</li>
                  <li>Bold primary CTAs, subtle secondary actions</li>
                  <li>Progress bars showing percentage complete</li>
                  <li>Consistent card styling with clear hierarchy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextBlock3() {
  return (
    <section className="w-full" data-name="Text block 3">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Reflection</h2>
            <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed space-y-4">
              <div>
                <p className="font-semibold mb-2">What Worked Well:</p>
                <p>Card-based selection significantly improved role selection clarity</p>
                <p>Separate permission configuration prevented common user errors</p>
                <p>Progressive disclosure kept interface clean without hiding critical features</p>
              </div>

              <div>
                <p className="font-semibold mb-2">If I Could Iterate:</p>
                <p>Create templating system for common team configurations</p>
                <p>Implement contextual help tooltips throughout forms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OnboardingPlatform() {
  return (
    <div className="relative min-h-screen bg-[#fcffff] flex items-start justify-center">
      <div className="bg-[#fcffff] w-full max-w-[1440px] min-h-screen">
        <Header />
        <HeroSection />
        <ImageSection />
        <TextBlock1 />
        <Quote />
        <TextBlock2 />
        <TextBlock3 />

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