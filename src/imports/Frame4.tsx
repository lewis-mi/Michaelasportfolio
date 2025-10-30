import svgPaths from "./svg-fpomokqm3p";
import imgImage from "figma:asset/674470799a3805bf622cec4dc28cf6e0fc0f585b.png";

function Nav() {
  return (
    <nav className="box-border content-stretch flex gap-[40px] items-center overflow-visible p-0 relative shrink-0" data-name="Nav">
      <div className="h-[100dvh] overflow-clip shrink-0 tailwind w-[65px]" />
      <div className="h-[100dvh] overflow-clip shrink-0 tailwind w-[61px]" />
    </nav>
  );
}

function Header1() {
  return (
    <header className="relative shrink-0 w-full" data-name="Header 1">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[64px] py-[24px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Black',_sans-serif] font-black grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[56px] text-black tracking-[-1.68px]">
            <p className="leading-[1.1]">M.LEWIS</p>
          </div>
          <Nav />
        </div>
      </div>
    </header>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[64px] text-black tracking-[-1.28px] w-[740px]">
        <h1 className="block leading-[1.1]">Hi, I’m Michaela.</h1>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] tracking-[-0.12px]" style={{ width: "min-content" }}>
        <p className="leading-[1.45]">
          {`I’m a UX designer passionate about human-centered AI and the role design plays in how people interact with technology. `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          {`Using an interdisciplinary skill set that blends psychology, visual design, and technical knowledge, I take a research-informed approach to simplify complexity and create experiences that are intuitive, and inclusive. `}
        </p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <button className="bg-black box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-visible px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45] whitespace-pre">Download Resume</p>
      </div>
    </button>
  );
}

function Buttons() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <PrimaryButton />
    </div>
  );
}

function Hero1() {
  return (
    <section className="h-[554px] relative shrink-0 w-full" data-name="Hero 1">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[554px] items-start justify-center px-[64px] py-[120px] relative w-full">
          <Text />
          <Buttons />
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-center ml-0 mt-0 overflow-visible pb-[30px] pt-[40px] px-[120px] relative w-[1280px]" data-name="Hero">
      <div className="basis-0 flex flex-col font-['Inter:Bold',_sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[64px] text-black tracking-[-1.6px]">
        <h1 className="block leading-[1.1]">Portfolio</h1>
      </div>
    </section>
  );
}

function Text1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[32px] relative shrink-0 w-[237px]" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[233px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.2]">Addressing Barriers to Secondhand Shopping Through App Design</h5>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Text1 />
      <div className="h-[235px] pointer-events-none relative rounded-[16px] shrink-0 w-[236px]" data-name="Image">
        <img alt="My project hero" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImage} />
        <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 rounded-[16px]" />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <button className="basis-0 bg-[rgba(0,0,0,0.05)] box-border content-stretch cursor-pointer flex flex-col grow h-[370px] items-start justify-center min-h-px min-w-px overflow-clip p-0 relative rounded-[16px] shrink-0" data-name="Card 3">
      <Frame3 />
    </button>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[32px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
            <h5 className="block leading-[1.2]">Automation for Design Research</h5>
          </div>
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
            <p className="leading-[1.45]">{`Custom system built to efficiently analyze 4k+ data points with accuracy. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <button className="bg-[rgba(0,0,0,0.05)] box-border content-stretch cursor-pointer flex flex-col h-[153px] items-start overflow-clip p-0 relative rounded-[16px] shrink-0 w-full" data-name="Card 2">
      <Text2 />
    </button>
  );
}

function Column() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-[370px] items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <div className="h-[100dvh] overflow-clip shrink-0 tailwind w-full" />
      <Card2 />
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex gap-[36px] h-[400px] items-start relative shrink-0 w-full" data-name="Grid">
      <Card3 />
      <Column />
    </div>
  );
}

function FeatureCards1() {
  return (
    <section className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] h-[460px] items-center ml-0 mt-[140px] overflow-visible pb-[120px] pt-[60px] px-[120px] relative w-[1280px]" data-name="Feature cards 1">
      <Grid />
    </section>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Hero />
      <FeatureCards1 />
    </div>
  );
}

function SocialLink2() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Social link 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_67)" id="Social link 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="black" fillOpacity="0.45" fillRule="evenodd" />
            <path d={svgPaths.pe7ea00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ab31680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28c6df0} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_67">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function SocialLinks() {
  return (
    <nav className="box-border content-stretch flex gap-[24px] items-center overflow-visible p-0 relative shrink-0" data-name="Social links">
      <SocialLink2 />
    </nav>
  );
}

function Contact() {
  return (
    <footer className="h-[162px] relative shrink-0 w-full" data-name="Contact">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex h-[162px] items-center justify-between p-[64px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px]">
            <p className="leading-[1.2]">Let’s work together</p>
          </div>
          <SocialLinks />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </footer>
  );
}

function Desktop() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 min-h-[1080px] overflow-x-clip overflow-y-auto top-0 w-[1280px]" data-name="Desktop">
      <Header1 />
      <Hero1 />
      <Group1 />
      <Contact />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[1986px] left-0 top-0 w-[1280px]">
      <Desktop />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="relative size-full">
      <Frame2 />
    </div>
  );
}