import imgImage from "figma:asset/d6e8df800477a14dc2206c7622a7259c268f29ad.png";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-black text-center tracking-[-1.6px] w-[800px]">
        <h1 className="block leading-[1.1]">{`Frictionless Onboarding for Enterprise Platfroms `}</h1>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <header className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-[240px] py-[80px] relative w-full">
          <Header />
        </div>
      </div>
    </header>
  );
}

function Image() {
  return (
    <section className="relative shrink-0 w-full" data-name="Image">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pb-[40px] pt-0 px-[240px] relative w-full">
          <div className="h-[370px] relative rounded-[9px] shrink-0 w-[824px]" data-name="Image">
            <img alt="An illustrative sketch of a flower" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[1.2]">Project</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Designed a 5-screen onboarding flow that guides new users through environment setup, reducing initial configuration time and improving team collaboration setup for an enterprise collaboration platform.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[1.2]">Context</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[1.45] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="mb-0">Individual project, presented as part of an internship</p>
        <p>
          completed in 8 hours using Figma then sent to developer
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow h-[355px] items-start min-h-px min-w-px relative shrink-0" data-name="Wrapper">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function TextBlock1() {
  return (
    <section className="h-[393px] relative shrink-0 w-full" data-name="Text block 1">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex h-[393px] items-start justify-center px-[240px] py-[80px] relative w-full">
          <Wrapper />
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative shrink-0 w-full" data-name="Quote">
      <div className="flex flex-col items-center justify-center overflow-clip size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[240px] py-[80px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black text-center tracking-[-0.96px] w-full">
            <p className="leading-[1.3]">How might we introduce a complex platform to first-time users through onboarding configuration?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[500px] items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[24px] text-black tracking-[-0.48px]" style={{ width: "min-content" }}>
        <p className="leading-[1.2]">Process</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]" style={{ width: "min-content" }}>
        <p className="leading-[1.45] mb-0">{`Discover →Design `}</p>
        <p className="leading-[1.45] mb-0">&nbsp;</p>
        <p className="leading-[1.45] mb-0">Discover:</p>
        <ul className="css-ed5n1g list-disc mb-0">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">reviewed company documentation to understand onboarding requirements then created a framework through information architecture</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Grouped 30+ setup requirements into 5 logical screens</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.45]">Separated strategic decisions (purpose, environment) from tactical ones (team members)</span>
          </li>
        </ul>
        <p className="leading-[1.45] mb-0">&nbsp;</p>
        <p className="leading-[1.45] mb-0">{`Design: `}</p>
        <ul className="css-ed5n1g list-disc mb-0">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">{`Tooltip + modal pattern for optional features `}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Consistent form structure across all user types</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">{`"Save for Later" at decision points to accommodate real workflow`}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Bold primary CTAs, subtle secondary actions</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[1.45]">Progress bars showing percentage complete</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[1.45]">Consistent card styling with clear hierarchy</span>
          </li>
        </ul>
        <p className="leading-[1.45] mb-0">&nbsp;</p>
        <p className="leading-[1.45]">
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function TextBlock2() {
  return (
    <section className="h-[546px] relative shrink-0 w-full" data-name="Text block 2">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex h-[546px] items-start justify-center pb-[120px] pt-[80px] px-[240px] relative w-full">
          <Paragraph2 />
        </div>
      </div>
    </section>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[1.2]">Reflection</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[1.45] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="mb-0">What Worked Well:</p>
        <p className="mb-0">Card-based selection significantly improved role selection clarity</p>
        <p className="mb-0">Separate permission configuration prevented common user errors</p>
        <p className="mb-0">Progressive disclosure kept interface clean without hiding critical features</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">If I Could Iterate:</p>
        <p className="mb-0">Create templating system for common team configurations</p>
        <p className="mb-0">Implement contextual help tooltips throughout forms</p>
        <p>
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

function TextBlock3() {
  return (
    <section className="h-[415px] relative shrink-0 w-full" data-name="Text block 3">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex h-[415px] items-start justify-center pb-[120px] pt-[80px] px-[240px] relative w-full">
          <Paragraph3 />
        </div>
      </div>
    </section>
  );
}

function Container() {
  return (
    <article className="bg-white box-border content-stretch flex flex-col items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Container">
      <Header1 />
      <Image />
      <TextBlock1 />
      <Quote />
      <TextBlock2 />
      <TextBlock3 />
    </article>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 overflow-x-clip overflow-y-auto top-0 w-[1280px]" data-name="Desktop">
      <Container />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="relative size-full">
      <Desktop />
    </div>
  );
}