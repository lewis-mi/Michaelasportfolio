import imgImage from "figma:asset/b02ad0c5010285c7c9d03a5a08dcdbb175be5137.png";
import svgPaths from "../imports/svg-fpomokqm3p";

// Navigation helper
function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new CustomEvent("navigate", { detail: { path } }));
}

function BackHeader() {
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

export default function AutomationResearch() {
  return (
    <div className="relative min-h-screen bg-[#fcffff] flex items-start justify-center">
      <div className="bg-[#fcffff] w-full max-w-[1440px] min-h-screen">
        <BackHeader />
        
        {/* Hero Section */}
        <section className="w-full">
          <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <h1 className="font-['Poppins:Bold',_sans-serif] font-bold text-4xl md:text-5xl lg:text-[64px] text-[#333333] text-center tracking-tight leading-tight">
                Automated Design Research
              </h1>
              <h4 className="font-['Poppins:Medium',_sans-serif] font-medium text-lg md:text-xl lg:text-2xl text-[#333333] text-center tracking-tight leading-tight">
                {`Impact: Streamlined what is typically a 2 week research process to 2 days. `}
              </h4>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="w-full" data-name="Image">
          <div className="px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="w-full aspect-[824/370] rounded-lg overflow-hidden">
                <img 
                  alt="Research workflow diagram" 
                  className="w-full h-full object-cover" 
                  src={imgImage} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
            {/* Project */}
            <div className="space-y-4">
              <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Project</h2>
              <p className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed">
                A wellness technology startup needed rapid competitive intelligence to inform their product strategy. With limited time and resources, I provided actionable insights from thousands of user reviews across multiple competitor categories.
              </p>
            </div>

            {/* Context */}
            <div className="space-y-4">
              <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Context</h2>
              <p className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed">
                Individual project, presented as part of an internship completed in 10 hours over 2 days with N8N, Claude, & Python
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="w-full" data-name="Quote">
          <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto">
              <p className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-4xl lg:text-[48px] text-[#333333] text-center tracking-tight leading-tight">
                How might we conduct meaningful qualitative research at scale within startup time and budget constraints?
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="w-full" data-name="Text block 2">
          <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Process</h2>
                <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed space-y-4">
                  <p className="font-semibold">Discover → Design → Refine</p>
                  
                  <div>
                    <p className="font-semibold mb-2">Discover:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Mapped out competitors across 2 areas of interest, hardware and software functionality</li>
                      <li>Conducted targeted searches across app stores and social media platforms</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Design:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Designed a data collection system using an API to output .CSV file</li>
                      <li>Python script analyzed each data point for sentiment, then generated common themes through qualitative coding</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Refine:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Evaluated output from Python manually for accuracy, determined that output was not accurate</li>
                      <li>Switched to Claude for analysis, iterated several prompts to refine for specific product goals</li>
                      <li>Further condensed data into 1 page stakeholder reports for each category</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="w-full" data-name="Text block 3">
          <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <h2 className="font-['Poppins:Bold',_sans-serif] font-bold text-2xl md:text-[32px] text-[#333333] tracking-tight">Reflection</h2>
                <div className="font-['Poppins:Medium',_sans-serif] font-medium text-base md:text-lg text-[#333333] tracking-tight leading-relaxed space-y-4">
                  <p className="font-semibold">Areas for Growth</p>
                  <p><span className="font-semibold">Workflow Optimization:</span> Initially processed competitors individually despite shared categories. Future iterations will implement tag-based batch processing from the outset to reduce redundancy.</p>
                  <p><span className="font-semibold">Visualization from Start:</span> Early reports used long-form format before evolving to comparison charts. Will implement visual frameworks at project kickoff in future work to enhance clarity and stakeholder accessibility.</p>
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