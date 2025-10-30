import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-chrtb08d28";
import linkedinPaths from "./imports/svg-fpomokqm3p";
import imgImageSecondhandShoppingAppMockup from "figma:asset/f5437d86a4fa734e2e9bb6c802118c6b547eb7ab.png";
import SecondhandShopping from "./pages/SecondhandShopping";
import OnboardingPlatform from "./pages/OnboardingPlatform";
import AutomationResearch from "./pages/AutomationResearch";
import GiaBrowserExtension from "./pages/GiaBrowserExtension";
import NavWrapper from "./components/NavWrapper";

// Navigation helper
function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new CustomEvent("navigate", { detail: { path } }));
}

// Navigation components
function Nav() {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-[96px] py-5 inline-flex justify-end items-baseline gap-5" data-name="Nav">
      <div className="flex justify-start items-baseline gap-5">
        <button
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="hover:opacity-70 transition-opacity cursor-pointer text-[#333333] text-[18px] font-['Poppins:Medium',sans-serif] leading-[28px]"
        >
          Portfolio
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="hover:opacity-70 transition-opacity cursor-pointer text-[#333333] text-[18px] font-['Poppins:Medium',sans-serif] leading-[28px]"
        >
          Contact
        </button>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[44px] md:leading-[48px] not-italic text-[#290be6] text-[36px] md:text-[48px] tracking-[-1.2px]">{`Hi, I'm Michaela.`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Poppins:Medium',sans-serif] leading-[27.6px] md:leading-[28px] not-italic text-[#333333] text-[17px] md:text-[20px] tracking-[-0.5px]">{`I'm a UX designer passionate about human-centered AI and the role design plays in how people interact with technology.`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Poppins:Medium',sans-serif] leading-[27.6px] md:leading-[28px] not-italic text-[#333333] text-[17px] md:text-[20px] tracking-[-0.5px]">Using an interdisciplinary skill set that blends psychology, visual design, and technical knowledge, I take a research-informed approach to simplify complexity and create experiences that are intuitive and inclusive.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] md:gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-8 md:gap-[32px] items-start justify-center w-full max-w-[895px]" data-name="Hero">
      <Heading />
      <Container />
    </div>
  );
}

function H() {
  return (
    <div className="relative shrink-0 w-full" data-name="h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative w-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] md:leading-[60px] not-italic text-[#333333] text-[24px] md:text-[40px] tracking-[-1px]">Portfolio</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[56.6px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
        <g id="Icon">
          <path d={svgPaths.p32c9e180} id="Vector" stroke="var(--stroke-0, #E0E7FF)" strokeWidth="3.77335" />
          <path d={svgPaths.pca38600} id="Vector_2" stroke="var(--stroke-0, #818CF8)" strokeWidth="3.77335" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16.98px] items-start left-[17.01px] top-[19.81px] w-[22.577px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.98px] not-italic relative shrink-0 text-[14.15px] text-indigo-400 text-nowrap tracking-[-0.1672px] whitespace-pre">28s</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute left-[107.54px] size-[56.6px] top-[22.64px]" data-name="Container">
      <Icon />
      <Text />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[11.32px] left-[22.64px] top-[94.33px] w-[226.401px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11.32px] left-[113.53px] not-italic text-[7.547px] text-black text-center text-nowrap top-[-0.24px] tracking-[-0.1474px] translate-x-[-50%] whitespace-pre">TAKE A LONGER BREAK</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[36.79px] left-[22.64px] top-[113.2px] w-[226.401px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12.263px] left-[113.42px] not-italic text-[#4a5565] text-[7.547px] text-center top-[-0.24px] tracking-[-0.1474px] translate-x-[-50%] w-[204.232px]">{`Take 5. Time to touch grass but here's one for the road. Knock knock. Who's there? Cow says. Cow says who? No, a cow says moo!`}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-indigo-100 box-border content-stretch flex gap-[3.773px] h-[18.867px] items-center justify-center left-[87.31px] px-[11.792px] py-[9.905px] rounded-[4.717px] top-[165.08px] w-[97.053px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.472px] border-[rgba(73,69,79,0.5)] border-solid inset-0 pointer-events-none rounded-[4.717px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[9.433px] not-italic relative shrink-0 text-[#1e2939] text-[6.603px] text-nowrap tracking-[-0.0709px] whitespace-pre">Remind me in 5 minutes</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[9.433px] left-[22.64px] top-[195.27px] w-[226.401px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.433px] left-[113.59px] not-italic text-[#6a7282] text-[6.603px] text-center text-nowrap top-[0.24px] tracking-[-0.0709px] translate-x-[-50%] whitespace-pre">Press ESC or click outside to close</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[13.207px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[25%] right-[25%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.333%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p147cf00} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.10056" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[25%] right-[25%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.333%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.pd4fe380} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.10056" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[247.15px] size-[13.207px] top-[11.32px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function BreakCard() {
  return (
    <div className="bg-[#f3f3f3] h-[227.344px] relative rounded-[11.32px] shadow-[0px_11.792px_23.583px_-5.66px_rgba(0,0,0,0.25)] shrink-0 w-[271.681px]" data-name="BreakCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[227.344px] relative w-[271.681px]">
        <Container1 />
        <Heading1 />
        <Paragraph2 />
        <Button2 />
        <Paragraph3 />
        <Button3 />
      </div>
    </div>
  );
}

function H1() {
  return (
    <div className="relative shrink-0 w-full md:w-[271.681px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-center relative w-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[29.25px] md:leading-[35.217px] not-italic relative text-[#333333] text-[18px] md:text-[26.413px] text-center tracking-[-0.6603px] break-words">Built in AI Chrome Extension: Digital Break Reminders</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <button
      onClick={() => navigateTo("/gia-browser-extension")}
      className="bg-[#fcffff] relative rounded-xl md:rounded-[17.609px] shrink-0 w-full max-w-[800px] hover:bg-[rgba(252,255,255,0.8)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer" 
      data-name="Card4"
    >
      <div className="box-border content-stretch flex flex-col md:flex-row gap-3 items-center justify-center overflow-clip px-4 md:px-6 py-6 md:py-8 relative rounded-[inherit] w-full">
        <div className="scale-75 md:scale-100">
          <BreakCard />
        </div>
        <div className="flex flex-row items-center self-stretch w-full md:w-auto">
          <H1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[1.101px] border-[rgba(121,119,119,0.75)] border-solid inset-0 pointer-events-none rounded-xl md:rounded-[17.609px]" />
    </button>
  );
}

function Heading2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[26px] md:leading-[28px] not-italic relative text-[#333333] text-[16px] md:text-[20px] text-center tracking-[-0.413px] break-words">Automation for Design Research</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Poppins:Medium',sans-serif] leading-[20px] md:leading-[19.272px] not-italic relative text-[#797777] text-[12px] sm:text-[14px] md:text-[12.389px] text-center px-2 break-words">Custom system built to efficiently analyze 4k+ data points.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6px] items-center justify-center relative size-full">
        <Heading2 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function Card1() {
  return (
    <button
      onClick={() => navigateTo("/automation-research")}
      className="bg-[#fcffff] relative rounded-xl shrink-0 w-full max-w-[800px] hover:bg-[rgba(252,255,255,0.8)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer" 
      data-name="Card2"
    >
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center overflow-clip px-4 md:px-6 pt-12 pb-14 md:pt-16 md:pb-16 relative rounded-[inherit] w-full">
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(121,119,119,0.75)] border-solid inset-0 pointer-events-none rounded-xl" />
    </button>
  );
}

function H2() {
  return (
    <div className="relative shrink-0 w-full md:w-[271.681px]" data-name="h3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-center justify-center relative w-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[29.25px] md:leading-[35.217px] not-italic relative text-[#333333] text-[18px] md:text-[26.413px] text-center tracking-[-0.6603px] break-words">Addressing Barriers to Secondhand Shopping Through App Design</p>
      </div>
    </div>
  );
}

function ImageSecondhandShoppingAppMockup() {
  return (
    <div className="h-[200px] md:h-[258.62px] relative rounded-xl md:rounded-[17.609px] shrink-0 w-[200px] md:w-[271.68px]" data-name="Image (Secondhand shopping app mockup)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-xl md:rounded-[17.609px] size-full" src={imgImageSecondhandShoppingAppMockup} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-full" />
    </div>
  );
}

function Card2() {
  return (
    <button
      onClick={() => navigateTo("/secondhand-shopping")}
      className="bg-[#fcffff] relative rounded-xl md:rounded-[17.609px] shrink-0 w-full max-w-[801px] hover:bg-[rgba(252,255,255,0.8)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer" 
      data-name="Card3"
    >
      <div className="box-border content-stretch flex flex-col md:flex-row gap-3 items-center justify-center overflow-clip px-4 md:px-6 py-6 md:py-8 relative rounded-[inherit] w-full">
        <div className="flex flex-row items-center self-stretch w-full md:w-auto">
          <H2 />
        </div>
        <ImageSecondhandShoppingAppMockup />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(121,119,119,0.75)] border-solid inset-0 pointer-events-none rounded-xl md:rounded-[17.609px]" />
    </button>
  );
}

function Heading3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-full items-center justify-center relative">
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[26px] md:leading-[30px] not-italic relative text-[#333333] text-[16px] md:text-[20px] text-center tracking-[-0.413px] break-words">Onboarding for Enterprise Platform</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Poppins:Medium',sans-serif] leading-[20px] md:leading-[19px] not-italic relative text-[#797777] text-[12px] sm:text-[14px] md:text-[12.389px] text-center tracking-[-0.3097px] px-2 break-words">5-screen flow that guides new users through multiple configurations.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Paragraph5 />
    </div>
  );
}

function Card() {
  return (
    <button
      onClick={() => navigateTo("/onboarding-platform")}
      className="bg-[#fcffff] relative rounded-xl shrink-0 w-full max-w-[800px] hover:bg-[rgba(252,255,255,0.8)] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer" 
      data-name="Card1"
    >
      <div className="box-border content-stretch flex flex-col gap-5 md:gap-3 items-center justify-center overflow-clip px-4 md:px-6 py-12 md:py-14 relative rounded-[inherit] w-full">
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(121,119,119,0.75)] border-solid inset-0 pointer-events-none rounded-xl" />
    </button>
  );
}

function PortfolioGrid() {
  return (
    <div className="relative shrink-0 w-full max-w-[900px]" data-name="Portfolio Grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-8 md:gap-[40px] items-center justify-center relative w-full">
        <Card3 />
        <Card1 />
        <Card2 />
        <Card />
      </div>
    </div>
  );
}
<div style="width: 100%; height: 100%; flex-direction: column; justify-content: center; align-items: center; gap: 40px; display: inline-flex">
    <div style="align-self: stretch; height: 220px; padding-left: 22.01px; padding-right: 22.01px; padding-top: 49.52px; padding-bottom: 49.52px; background: #FCFFFF; overflow: hidden; border-radius: 17.61px; outline: 1.10px rgba(121, 119, 119, 0.75) solid; outline-offset: -1.10px; justify-content: center; align-items: center; gap: 12px; display: inline-flex">
        <div style="width: 185px; height: 124px; position: relative; background: #F3F3F3; box-shadow: 0px 7.075024127960205px 14.15004825592041px -3.3960115909576416px rgba(0, 0, 0, 0.25); border-radius: 6.79px">
            <div style="width: 33.96px; height: 33.96px; left: 64.52px; top: 13.58px; position: absolute">
                <div style="width: 33.96px; height: 33.96px; left: 0px; top: 0px; position: absolute; overflow: hidden">
                    <div style="width: 30.56px; height: 30.56px; left: 1.70px; top: 1.70px; position: absolute; outline: 2.26px #E0E7FF solid; outline-offset: -1.13px"></div>
                    <div style="width: 30.56px; height: 30.56px; left: 1.70px; top: 1.70px; position: absolute; outline: 2.26px #818CF8 solid; outline-offset: -1.13px"></div>
                </div>
                <div style="width: 13.55px; height: 10.19px; left: 10.21px; top: 11.89px; position: absolute; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                    <div style="color: #818CF8; font-size: 8.49px; font-family: Inter; font-weight: 400; line-height: 10.19px; word-wrap: break-word">28s</div>
                </div>
            </div>
            <div style="width: 135.84px; height: 6.79px; left: 13.58px; top: 56.60px; position: absolute">
                <div style="left: 43.22px; top: -0.14px; position: absolute; text-align: center; color: black; font-size: 4.53px; font-family: Inter; font-weight: 400; line-height: 6.79px; word-wrap: break-word">TAKE A LONGER BREAK</div>
            </div>
            <div style="width: 135.84px; height: 22.07px; left: 13.58px; top: 67.92px; position: absolute">
                <div style="width: 122.54px; left: 6.78px; top: -0.14px; position: absolute; text-align: center; color: #4A5565; font-size: 4.53px; font-family: Inter; font-weight: 400; line-height: 7.36px; word-wrap: break-word">Take 5. Time to touch grass but here's one for the road. Knock knock. Who's there? Cow says. Cow says who? No, a cow says moo!</div>
            </div>
            <div style="width: 58.23px; height: 11.32px; padding-left: 6.79px; padding-right: 6.79px; padding-top: 5.66px; padding-bottom: 5.66px; left: 52.39px; top: 99.05px; position: absolute; background: #E0E7FF; border-radius: 2.83px; outline: 0.28px rgba(73, 69, 79, 0.50) solid; outline-offset: -0.28px; justify-content: center; align-items: center; gap: 2.26px; display: inline-flex">
                <div style="color: #1E2939; font-size: 3.96px; font-family: Inter; font-weight: 500; line-height: 5.66px; word-wrap: break-word">Remind me in 5 minutes</div>
            </div>
            <div style="width: 135.84px; height: 5.66px; left: 13.58px; top: 117.16px; position: absolute">
                <div style="left: 36.36px; top: 0.14px; position: absolute; text-align: center; color: #6A7282; font-size: 3.96px; font-family: Inter; font-weight: 400; line-height: 5.66px; word-wrap: break-word">Press ESC or click outside to close</div>
            </div>
            <div style="width: 7.92px; height: 7.92px; left: 148.29px; top: 6.79px; position: absolute; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                <div style="align-self: stretch; height: 7.92px; position: relative; overflow: hidden">
                    <div style="width: 3.96px; height: 3.96px; left: 1.98px; top: 1.98px; position: absolute; outline: 0.66px #1E2939 solid; outline-offset: -0.33px"></div>
                    <div style="width: 3.96px; height: 3.96px; left: 1.98px; top: 1.98px; position: absolute; outline: 0.66px #1E2939 solid; outline-offset: -0.33px"></div>
                </div>
            </div>
        </div>
        <div style="height: 106.14px; flex-direction: column; justify-content: center; align-items: center; display: inline-flex">
            <div style="width: 130px; height: 106px; text-align: center; color: #333333; font-size: 16px; font-family: Poppins; font-weight: 400; line-height: 24.09px; word-wrap: break-word">Built in AI Chrome Extension: Digital Break Reminders</div>
        </div>
    </div>
    <div style="width: 350px; padding-left: 23px; padding-right: 23px; padding-top: 20px; padding-bottom: 20px; background: var(--Card-White, #FCFFFF); overflow: hidden; border-radius: 11.01px; outline: 1px rgba(121, 119, 119, 0.76) solid; outline-offset: -1px; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: flex">
        <div style="width: 350px; height: 68px; flex-direction: column; justify-content: center; align-items: center; gap: 5.51px; display: flex">
            <div style="width: 309px; height: 58px; padding-left: 20px; padding-right: 20px; flex-direction: column; justify-content: center; align-items: center; gap: 6px; display: flex">
                <div style="align-self: stretch; height: 20px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                    <div style="text-align: center; color: #333333; font-size: 16.52px; font-family: Poppins; font-weight: 600; line-height: 22.02px; word-wrap: break-word">Automation for Design Research</div>
                </div>
                <div style="width: 285px; height: 26px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                    <div style="width: 315px; align-self: stretch; text-align: center; color: #797777; font-size: 12.39px; font-family: Poppins; font-weight: 500; line-height: 19.27px; word-wrap: break-word">Custom system built to efficiently analyze 4k+ data points.</div>
                </div>
            </div>
        </div>
    </div>
    <div style="width: 350px; padding-left: 22.01px; padding-right: 22.01px; padding-top: 20px; padding-bottom: 20px; background: var(--Card-White, #FCFFFF); overflow: hidden; border-radius: 17.61px; outline: 1px rgba(121, 119, 119, 0.75) solid; outline-offset: -1px; justify-content: center; align-items: center; gap: 26.42px; display: inline-flex">
        <div style="flex: 1 1 0; flex-direction: column; justify-content: center; align-items: center; display: inline-flex">
            <div style="width: 116px; height: 155px; text-align: center; color: #333333; font-size: 14px; font-family: Poppins; font-weight: 400; line-height: 25px; word-wrap: break-word">Addressing Barriers to Secondhand Shopping Through App Design</div>
        </div>
        <img style="width: 163.01px; height: 155.17px; position: relative; border-radius: 10.57px" src="https://placehold.co/163x155" />
    </div>
    <div style="width: 351px; padding-left: 23px; padding-right: 23px; padding-top: 20px; padding-bottom: 20px; background: var(--Card-White, #FCFFFF); overflow: hidden; border-radius: 11.01px; outline: 1px rgba(121, 119, 119, 0.75) solid; outline-offset: -1px; flex-direction: column; justify-content: center; align-items: center; gap: 10px; display: flex">
        <div style="align-self: stretch; flex-direction: column; justify-content: center; align-items: center; gap: 5.51px; display: flex">
            <div style="justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                <div style="text-align: center; color: #333333; font-size: 16.52px; font-family: Poppins; font-weight: 600; line-height: 22.02px; word-wrap: break-word">Onboarding for Enterprise Platform</div>
            </div>
            <div style="width: 300px; justify-content: center; align-items: center; gap: 10px; display: inline-flex">
                <div style="width: 300px; text-align: center; color: #797777; font-size: 12.39px; font-family: Poppins; font-weight: 500; line-height: 19.27px; word-wrap: break-word">5-screen flow that guides new users through multiple configurations.</div>
            </div>
        </div>
    </div>
</div>
function PortfolioGroup() {
  return (
    <div id="portfolio" className="content-stretch flex flex-col gap-8 md:gap-[72px] items-center justify-center w-full max-w-[895px]" data-name="Portfolio Group">
      <H />
      <PortfolioGrid />
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border relative">
        <p className="font-['Poppins:Regular',sans-serif] leading-[30px] md:leading-[40px] not-italic text-[#333333] text-[24px] md:text-[40px] tracking-[-1px]">Contact Me</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[919px] size-[24px] top-[1359px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[12.102px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[6.99%] left-0 right-[19.6%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 12">
          <path d={svgPaths.p1c9cc680} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.102px] items-start left-[921.86px] top-[1367.37px] w-[4.023px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[4.188px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[16.43%] left-0 right-[9.58%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 4">
          <path d={svgPaths.p22a86200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.188px] items-start left-[921.63px] top-[1361.54px] w-[4.523px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[12.383px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[4.8%] left-0 right-[5.63%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p2699b000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12.383px] items-start left-[928.1px] top-[1367.09px] w-[12.273px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Vector() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Vector">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 overflow-clip pb-0 size-[24px] top-0" data-name="Icon">
      <Vector />
    </div>
  );
}

function SocialLink() {
  return (
    <button
      onClick={() => window.open('https://www.linkedin.com/in/michaela-lewis-9853aa304/', '_blank')}
      className="relative shrink-0 size-[24px] hover:opacity-70 transition-opacity cursor-pointer" 
      data-name="SocialLink3"
      aria-label="LinkedIn Profile"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_67)">
          <g>
            <path clipRule="evenodd" d={linkedinPaths.p1fcf5070} fill="black" fillOpacity="0.45" fillRule="evenodd" />
            <path d={linkedinPaths.pe7ea00} fill="white" />
            <path d={linkedinPaths.p1ab31680} fill="white" />
            <path d={linkedinPaths.p28c6df0} fill="white" />
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

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <SocialLink />
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="box-border content-stretch flex flex-col items-start border-t border-[rgba(0,0,0,0.15)] pt-8 md:pt-[41px] w-full max-w-[895px]" data-name="Contact">
      <Container8 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="relative shrink-0 w-full flex flex-col items-center" data-name="Desktop">
      <Nav />
      <div className="w-full max-w-[1006px] flex flex-col items-center gap-8 md:gap-12 lg:gap-20">
        <div className="w-full px-6 sm:px-8 lg:px-0">
          <Hero />
        </div>
        <div className="w-full px-6 sm:px-8 lg:px-0">
          <PortfolioGroup />
        </div>
        <div className="w-full px-6 sm:px-8 lg:px-0">
          <Contact />
        </div>
      </div>
    </div>
  );
}

function MichaelasPortfolio() {
  return (
    <div className="bg-[#fcffff] min-h-screen relative shrink-0 w-full py-8 md:py-0" data-name="Michaela's Portfolio">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center md:px-[96px] py-0 relative w-full">
          <Desktop />
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="relative size-full" data-name="Portfolio Landing">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start relative size-full">
          <MichaelasPortfolio />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname || "/");

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    // Listen for custom navigation events
    const handleNavigation = (e: CustomEvent) => {
      const path = e.detail.path;
      window.history.pushState({}, "", path);
      setCurrentPage(path);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("navigate" as any, handleNavigation as any);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("navigate" as any, handleNavigation as any);
    };
  }, []);

  // Route rendering
  if (currentPage === "/secondhand-shopping") {
    return <SecondhandShopping />;
  }
  if (currentPage === "/onboarding-platform") {
    return <OnboardingPlatform />;
  }
  if (currentPage === "/automation-research") {
    return <AutomationResearch />;
  }
  if (currentPage === "/gia-browser-extension") {
    return <GiaBrowserExtension />;
  }
  
  return <HomePage />;
}

