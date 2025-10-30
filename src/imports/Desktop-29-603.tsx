import svgPaths from "./svg-19n5oxgpwp";
import imgImageSecondhandShoppingAppMockup from "figma:asset/f5437d86a4fa734e2e9bb6c802118c6b547eb7ab.png";
import { imgVector } from "./svg-3zzyd";

function Paragraph() {
  return (
    <div className="h-[61.594px] relative shrink-0 w-[760.438px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Black',_sans-serif] font-black leading-[61.6px] left-0 not-italic text-[#1e1e1e] text-[56px] text-nowrap top-[-1px] tracking-[-1.68px] whitespace-pre">M.LEWIS</p>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 grow h-[26.094px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.094px] relative w-full">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[26.1px] left-0 not-italic text-[#1e1e1e] text-[18px] text-nowrap top-0 tracking-[-0.09px] whitespace-pre">Portfolio</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[26.094px] relative shrink-0 w-[68.063px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.094px] relative w-[68.063px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[26.1px] left-0 not-italic text-[#1e1e1e] text-[18px] text-nowrap top-0 tracking-[-0.09px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[40px] h-[26.094px] items-center justify-end relative shrink-0 w-full" data-name="Nav">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180.562px]">
      <Nav />
    </div>
  );
}

function Header12() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[96px] py-[24px] top-0 w-[1440px]" data-name="Header12">
      <Paragraph />
      <Frame13 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[70.391px] left-0 top-0 w-[740px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[70.4px] left-0 not-italic text-[#1e1e1e] text-[64px] text-nowrap top-0 tracking-[-1.28px] whitespace-pre">{`Hi, I'm Michaela.`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute bottom-[-70px] font-['Inter:Medium',_sans-serif] font-medium h-[244px] leading-[34.8px] left-0 not-italic right-0 text-[#1e1e1e] text-[24px] tracking-[-0.12px]" data-name="Paragraph">
      <p className="absolute left-0 top-[-1px] w-[1207px]">{`I'm a UX designer passionate about human-centered AI and the role design plays in how people interact with technology.`}</p>
      <p className="absolute left-0 right-[28px] top-[104px]">Using an interdisciplinary skill set that blends psychology, visual design, and technical knowledge, I take a research-informed approach to simplify complexity and create experiences that are intuitive, and inclusive.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[276px] relative shrink-0 w-[1272px]" data-name="Text">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[26.094px] relative shrink-0 w-[158.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.094px] relative w-[158.266px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[26.1px] left-[79.5px] not-italic text-[18px] text-center text-nowrap text-white top-0 tracking-[-0.09px] translate-x-[-50%] whitespace-pre">Download Resume</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex h-[50.094px] items-center justify-center relative rounded-[12px] shrink-0 w-[190.266px]" data-name="PrimaryButton">
      <Paragraph2 />
    </div>
  );
}

function Hero1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[20px] items-start justify-center left-0 px-[96px] py-[20px] right-0 top-[180px]" data-name="Hero1">
      <Text />
      <PrimaryButton />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[70.391px] relative shrink-0 w-full" data-name="Hero">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[70.4px] left-0 not-italic text-[#1e1e1e] text-[64px] text-nowrap top-0 tracking-[-1.6px] whitespace-pre">Portfolio</p>
    </div>
  );
}

function ImageSecondhandShoppingAppMockup() {
  return (
    <div className="absolute h-[235px] left-0 rounded-[16px] top-0 w-[236px]" data-name="Image (Secondhand shopping app mockup)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[16px] size-full" src={imgImageSecondhandShoppingAppMockup} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[235px] left-0 rounded-[16px] top-0 w-[236px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-[31px] rounded-[16px] top-[31px] translate-x-[-50%] w-[236px]" data-name="Container" style={{ left: "calc(50% + 0.5px)" }}>
      <ImageSecondhandShoppingAppMockup />
      <Container />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[297px] relative shrink-0 w-full" data-name="Frame3">
      <Container1 />
    </div>
  );
}

function Text1() {
  return <div className="h-[57px] shrink-0 w-full" data-name="Text1" />;
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[370px] items-center relative shrink-0 w-full">
      <Frame3 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#1e1e1e] text-[24px] text-center tracking-[-0.48px] w-full">Addressing Barriers to Secondhand Shopping Through App Design</p>
      <Text1 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex flex-col h-[370px] items-start overflow-clip relative rounded-[16px] shrink-0 w-[473px]" data-name="Card3">
      <Frame14 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28.797px] relative shrink-0 w-[438px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.797px] relative w-[438px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28.8px] left-0 not-italic text-[#1e1e1e] text-[24px] text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Onboarding for Enterprise Platform</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[438px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[26.1px] left-0 not-italic text-[#1e1e1e] text-[18px] top-0 tracking-[-0.09px] w-[413px]">{`5-screen onboarding flow that guides new users through complex concepts & multiple configurations.`}</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[179.078px] items-start left-0 pl-[32px] pr-0 py-[32px] top-0 w-[502px]" data-name="Text2">
      <Heading5 />
      <Paragraph3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] h-[185px] left-0 overflow-clip rounded-[16px] top-0 w-[502px]" data-name="Card1">
      <Text2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28.797px] relative shrink-0 w-[438px]" data-name="Heading 5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28.797px] relative w-[438px]">
        <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28.8px] left-0 not-italic text-[#1e1e1e] text-[24px] text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">Automation for Design Research</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[438px]">
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[26.1px] left-0 not-italic text-[#1e1e1e] text-[18px] top-0 tracking-[-0.09px] w-[437px]">Custom system built to efficiently analyze 4k+ data points with accuracy.</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[152.984px] items-start left-0 pl-[32px] pr-0 py-[32px] top-0 w-[502px]" data-name="Text3">
      <Heading6 />
      <Paragraph4 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.05)] h-[153px] left-0 overflow-clip rounded-[16px] top-[217px] w-[502px]" data-name="Card2">
      <Text3 />
    </div>
  );
}

function Column() {
  return (
    <div className="h-[370px] relative shrink-0 w-[502px]" data-name="Column">
      <Card1 />
      <Card2 />
    </div>
  );
}

function Grid() {
  return (
    <div className="content-stretch flex gap-[65px] h-[402px] items-center justify-center relative shrink-0 w-full" data-name="Grid">
      <Card3 />
      <Column />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[20px] h-[600.391px] items-end left-0 px-[96px] py-[20px] right-0 top-[664px]" data-name="Group1">
      <Hero />
      <Grid />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[28.797px] relative shrink-0 w-[917px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[28.8px] left-0 not-italic text-[#1e1e1e] text-[24px] text-nowrap top-[-1px] tracking-[-0.48px] whitespace-pre">{`Let's work together`}</p>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute contents inset-0" data-name="Vector">
      <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="var(--fill-0, #1E1E1E)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.89%_71.33%_14.72%_11.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.861px_-8.374px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 13">
          <path d="M4.02 0H0V12.092H4.02V0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.6%_70.22%_71.99%_10.94%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.625px_-2.544px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p147cc700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.71%_10.94%_14.72%_37.94%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.106px_-8.09px] mask-size-[24px_24px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <path d={svgPaths.pf0736c0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SocialLink2() {
  return (
    <div className="absolute contents inset-0" data-name="Social link 2">
      <Vector />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <SocialLink2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function SocialLink3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[24px]" data-name="SocialLink2">
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[64px] py-[67px] relative w-full">
          <Paragraph5 />
          <SocialLink3 />
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-0 top-[1264px] w-[1440px]" data-name="Contact">
      <Container2 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <Header12 />
      <Hero1 />
      <Group1 />
      <Contact />
    </div>
  );
}