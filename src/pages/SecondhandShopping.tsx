import svgPaths from "../imports/svg-fpomokqm3p";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const gifDemo = "https://i.imgur.com/LZD2FEc.gif";

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

export default function SecondhandShopping() {
  return (
    <div className="relative min-h-screen bg-[#fcffff] flex items-start justify-center">
      <div className="bg-[#fcffff] w-full max-w-[1440px] min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="w-full">
          <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-['Poppins:Bold',_sans-serif] font-bold text-4xl md:text-5xl lg:text-[64px] text-[#333333] tracking-tight text-center leading-tight">
                Addressing Barriers to Secondhand Shopping Through App Design
              </h1>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="w-full px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto flex justify-center">
            <ImageWithFallback 
              src={gifDemo}
              alt="Secondhand shopping app demo"
              className="rounded-3xl w-full max-w-[300px] h-auto"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            />
          </div>
        </section>

        {/* Project Details */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
            {/* Project */}
            <div className="space-y-4">
              <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Project</h2>
              <p className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed">
                Designed a mobile app that promotes sustainable shopping by delivering a curated feed of pre-loved, locally available items to shoppers using AI-powered recommendations and location technology.
              </p>
            </div>

            {/* Context */}
            <div className="space-y-4">
              <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Context</h2>
              <p className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed">
                Individual project, presented as part of UX design course final Completed over 6 weeks using Figma and human-centered design methodology.
              </p>
            </div>
          </div>
        </section>

        {/* How Might We */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <p className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-4xl lg:text-[48px] text-[#333333] text-center tracking-tight leading-tight">
              How might we remove barriers to second-hand shopping and encourage sustainable consumer behavior?
            </p>
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
                    <li>Interviewed second-hand shoppers and vendors to understand both sides of the marketplace</li>
                    <li>Initially explored in-app purchasing with shipping options</li>
                    <li>Discovered users were satisfied with existing transaction platforms but frustrated with discovery process</li>
                    <li>Identified opportunity gap: no app efficiently presents curated, local second-hand inventory</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Define:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Key insight: Consumers experience shared frustration with time required to find local second-hand items</li>
                    <li>Secondary insight: Some users motivated by proximity and efficiency rather than specific items (e.g., weekend yard sale hobbyists)</li>
                    <li>Pivoted from transaction platform to discovery platform focused on local listings</li>
                  </ul>
                  <p className="font-semibold mt-4 mb-2">3 Core User Needs:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Reduce time spent finding information on local yard sales and antiques</li>
                    <li>Easily access saved items</li>
                    <li>Efficiently plan routes for multi-destination trips</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Design:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Created 3 key features mapped directly to user needs: Custom Feed, Favorites List, Local Map</li>
                    <li>Developed user personas representing different shopper motivations</li>
                    <li>Designed seller upload flow to ensure content supply</li>
                    <li>Iterated on visual design based on peer critique (navigation color adjustment improved visual harmony)</li>
                    <li>Prototyped interactions for feed scrolling, favoriting, and map navigation</li>
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
              <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed space-y-2">
                <p className="font-semibold">If I were to continue with this project, I would:</p>
                <p>Conduct usability testing with interactive prototype to validate navigation and feature discoverability</p>
                <p>Explore notification system for new items matching user preferences or nearby sales</p>
                <p>Design seller dashboard analytics to incentivize quality listings</p>
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