import svgPaths from "./svg-7mxc1trqai";
import imgImage from "figma:asset/f5437d86a4fa734e2e9bb6c802118c6b547eb7ab.png";

function Container() {
  return <div className="absolute inset-[37.98px_40.84px_14px_16px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[28px] left-0 not-italic text-[#333333] text-[18px] text-nowrap top-[1.43px] whitespace-pre">Portfolio</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[27.991px] items-start pb-0 pl-0 pt-[3.489px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27.991px] items-start left-0 top-0 w-[0.992px]" data-name="Button10">
      <Container1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[28px] left-0 not-italic text-[#333333] text-[18px] text-nowrap top-[1.43px] whitespace-pre">Contact</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[27.991px] items-start pb-0 pl-0 pt-[3.489px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bottom-[0.01px] content-stretch flex flex-col items-center justify-center right-[38.97px] top-0 w-[62.035px]" data-name="Button12">
      <Container2 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[28px] overflow-clip right-[-214.16px] top-[5px] w-[202px]" data-name="Nav">
      <Button />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[51.98px] left-[-54px] top-0 w-[181.836px]" data-name="Container">
      <Container />
      <Nav />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[84.529px] left-0 right-[-12px] top-[-2.47px]" data-name="Heading13">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.47px_-22px_-26.95px_22px] leading-[55.5px] not-italic text-[#290be6] text-[44.4px] tracking-[-1.776px]">{`Hi, I'm Michaela.`}</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Paragraph7">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[120px] relative w-full">
        <p className="absolute font-['Poppins:Medium',sans-serif] leading-[27.596px] left-0 not-italic right-0 text-[#333333] text-[16.982px] top-0 tracking-[-0.5307px]">{`I'm a UX designer passionate about human-centered AI and the role design plays in how people interact with technology.`}</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[202px] relative shrink-0 w-full" data-name="Paragraph12">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[202px] relative w-full">
        <p className="absolute font-['Poppins:Medium',sans-serif] leading-[27.596px] left-[2px] not-italic right-[-2px] text-[#333333] text-[16.982px] top-[-14.98px] tracking-[-0.5307px]">Using an interdisciplinary skill set that blends psychology, visual design, and technical knowledge, I take a research-informed approach to simplify complexity and create experiences that are intuitive and inclusive.</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16.979px] items-start left-[25px] right-[-25px] top-[110px]" data-name="Container25">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[619px] left-0 top-[82px] w-[300px]" data-name="Hero">
      <Heading />
      <Container17 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[29.998px] left-0 top-0 w-[181.836px]" data-name="H">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[30px] left-0 not-italic text-[#333333] text-[24px] text-nowrap top-[0.86px] tracking-[-1px] whitespace-pre">Portfolio</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute contents inset-[4.96%_5.67%_5.67%_4.96%]" data-name="Icon">
      <div className="absolute inset-[4.96%_5.67%_5.67%_4.96%]" data-name="Vector">
        <div className="absolute inset-[-3.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
            <path d={svgPaths.p31136040} id="Vector" stroke="var(--stroke-0, #E0E7FF)" strokeWidth="2.80992" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.96%_5.67%_5.67%_4.96%]" data-name="Vector_2">
        <div className="absolute inset-[-3.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
            <path d={svgPaths.p1a2cd440} id="Vector_2" stroke="var(--stroke-0, #818CF8)" strokeWidth="2.80992" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[42.447px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[42.447px] top-0" data-name="Icon6">
      <Icon1 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[12.733px] left-[12.75px] top-[14.86px] w-[18.134px]" data-name="Text10">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.98px] left-0 not-italic text-[#7c86ff] text-[14.15px] text-nowrap top-[-0.54px] tracking-[-0.1672px] whitespace-pre">28s</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute left-[80.65px] size-[42.447px] top-[16.97px]" data-name="Container110">
      <Icon6 />
      <Text />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[8.486px] left-[71.36px] top-[70.57px] w-[61.517px]" data-name="Heading14">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[11.32px] left-[31.5px] not-italic text-[7.547px] text-black text-center text-nowrap top-[-0.47px] tracking-[-0.1474px] translate-x-[-50%] whitespace-pre">TAKE A LONGER BREAK</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[27.59px] left-[25.45px] top-[84.72px] w-[153.173px]" data-name="Paragraph22">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12.263px] left-[77.07px] not-italic text-[#4a5565] text-[7.547px] text-center top-[-0.93px] tracking-[-0.1474px] translate-x-[-50%] w-[150px]">{`Take 5. Time to touch grass but here's one for the road. Knock knock. Who's there? Cow says. Cow says who? No, a cow says moo!`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[14.848px] left-0 rounded-[4.717px] top-0 w-[72.787px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.713px] border-[rgba(73,69,79,0.5)] border-solid inset-0 pointer-events-none rounded-[4.717px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[7.073px] left-[8.79px] top-[3.89px] w-[55.213px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[9.433px] left-0 not-italic text-[#1e2939] text-[6.603px] text-nowrap top-[-0.47px] tracking-[-0.0709px] whitespace-pre">Remind me in 5 minutes</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-indigo-100 h-[14.848px] left-[65.48px] rounded-[4.717px] top-[123.8px] w-[72.787px]" data-name="Button22">
      <Container4 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[7.073px] left-[62.7px] top-[146.63px] w-[78.907px]" data-name="Paragraph32">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.433px] left-[39px] not-italic text-[#6a7282] text-[6.603px] text-center text-nowrap top-[-0.47px] tracking-[-0.0709px] translate-x-[-50%] whitespace-pre">Press ESC or click outside to close</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[5.769px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.88%_10.58%_10.58%_6.88%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p3c18e6c0} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.79361" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2.06px] size-[5.769px] top-[2.06px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[5.769px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.88%_10.58%_10.58%_6.88%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p3b5c9c80} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.79361" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2.06px] size-[5.769px] top-[2.06px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[185.36px] overflow-clip size-[9.899px] top-[8.49px]" data-name="Icon12">
      <Container5 />
      <Container6 />
    </div>
  );
}

function BreakCard() {
  return (
    <div className="absolute bg-[#f3f3f3] h-[170.505px] left-[-10.95px] rounded-[11.32px] shadow-[0px_11.792px_23.583px_-5.66px_rgba(0,0,0,0.25)] top-[60.41px] w-[203.755px]" data-name="BreakCard2">
      <Container20 />
      <Heading1 />
      <Paragraph7 />
      <Button2 />
      <Paragraph8 />
      <Icon9 />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[87.752px] left-[16px] top-[275.33px] w-[149.843px]" data-name="H1">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[29.25px] left-[75.24px] not-italic text-[#333333] text-[18px] text-center top-[1.14px] tracking-[-0.6603px] translate-x-[-50%] w-[147px]">Built in AI Chrome Extension: Digital Break Reminders</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-0 left-0 overflow-clip right-[-24px] rounded-[14px] top-0" data-name="Container">
      <BreakCard />
      <H1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-0 left-[calc(50%+12px)] rounded-[14px] top-0 translate-x-[-50%] w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.713px] border-[rgba(121,119,119,0.75)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-[#fcffff] h-[395px] left-0 right-[-8px] rounded-[14px] top-0" data-name="Card3">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute inset-[-21px_-114.99px_-4px_14px]" data-name="Heading22">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[26px] left-[125px] not-italic text-[#333333] text-[16px] text-center text-nowrap top-[0.43px] tracking-[-0.413px] translate-x-[-50%] whitespace-pre">Automation for Design Research</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[0.992px] left-[calc(50%-118.082px)] top-[calc(50%-0.007px)] translate-x-[-50%] translate-y-[-50%] w-[149.843px]" data-name="Frame5">
      <Heading2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[0.06px] left-0 overflow-clip right-[-118px] rounded-[14px] top-[-0.06px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bottom-[-19px] left-0 right-0 rounded-[14px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.713px] border-[rgba(121,119,119,0.76)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[#fcffff] h-[33px] left-0 rounded-[14px] top-[419px] w-[300px]" data-name="Card1">
      <Container9 />
      <Container10 />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute h-[175px] left-[16px] top-[32px] w-[300px]" data-name="H2">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[29.25px] left-0 not-italic right-[50px] text-[#333333] text-[18px] text-center top-[-15px] tracking-[-0.6603px]">Addressing Barriers to Secondhand Shopping Through App Design</p>
    </div>
  );
}

function Container11() {
  return <div className="absolute left-0 size-[199.995px] top-0" data-name="Container" />;
}

function Image() {
  return (
    <div className="absolute left-0 rounded-[14px] size-[199.995px] top-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[14px] size-full" src={imgImage} />
    </div>
  );
}

function ImageSecondhandShoppingAppMockup() {
  return (
    <div className="absolute h-[199.995px] left-[50px] right-[50.01px] rounded-[14px] top-[calc(50%+0.498px)] translate-y-[-50%]" data-name="ImageSecondhandShoppingAppMockup">
      <Container11 />
      <Image />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[455px] left-0 overflow-clip rounded-[14px] top-0 w-[300px]" data-name="Container">
      <H2 />
      <ImageSecondhandShoppingAppMockup />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[455px] left-[calc(50%+3.5px)] rounded-[14px] top-0 translate-x-[-50%] w-[300px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.713px] border-[rgba(121,119,119,0.75)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[#fcffff] h-[456px] left-0 right-[-25px] rounded-[14px] top-[492px]" data-name="Card2">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[25.985px] left-[-60.02px] top-[-3.71px] w-[269.889px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[26px] left-[135.5px] not-italic text-[#333333] text-[16px] text-center text-nowrap top-[0.43px] tracking-[-0.413px] translate-x-[-50%] whitespace-pre">Onboarding for Enterprise Platform</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[18.549px] left-0 top-0 w-[149.843px]" data-name="Heading32">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[22.752px] left-[-158.1px] top-0 w-[466.061px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[22.75px] left-[233.5px] not-italic text-[#797777] text-[14px] text-center text-nowrap top-[-0.29px] tracking-[-0.3097px] translate-x-[-50%] whitespace-pre">5-screen flow that guides new users through multiple configurations.</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[22.752px] left-0 top-[24.05px] w-[149.843px]" data-name="Paragraph52">
      <Paragraph4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[46.797px] left-[16px] top-[16px] w-[149.843px]" data-name="Container32">
      <Heading3 />
      <Paragraph9 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[78.79px] left-0 overflow-clip rounded-[14px] top-0 w-[181.836px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[78.79px] left-0 rounded-[14px] top-0 w-[181.836px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.713px] border-[rgba(121,119,119,0.75)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[#fcffff] h-[78.79px] left-0 rounded-[14px] top-[955.51px] w-[181.836px]" data-name="Card">
      <Container14 />
      <Container15 />
    </div>
  );
}

function PortfolioGrid() {
  return (
    <div className="absolute bottom-[0.29px] h-[1034px] left-0 right-[-86.16px]" data-name="PortfolioGrid">
      <Card3 />
      <Card1 />
      <Card2 />
      <Card />
    </div>
  );
}

function PortfolioGroup() {
  return (
    <div className="absolute h-[1112.29px] left-[25px] top-[549px] w-[181.836px]" data-name="PortfolioGroup">
      <H />
      <PortfolioGrid />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[29.998px] left-0 top-0 w-[129.466px]" data-name="Heading42">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[30px] left-0 not-italic text-[#333333] text-[24px] text-nowrap top-[0.86px] tracking-[-1px] whitespace-pre">Contact Me</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[23.989px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.p1e97780} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[918.99px] overflow-clip size-[23.989px] top-[1358.99px]" data-name="Icon22">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[11.259px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[6.2%] left-0 right-[19.13%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 11">
          <path d={svgPaths.p20812740} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.259px] items-start left-[921.86px] overflow-clip top-[1367.36px] w-[3.233px]" data-name="Icon32">
      <Icon5 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[3.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.51%] left-0 right-[18.2%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p7fc6200} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[3.5px] items-start left-[921.62px] overflow-clip top-[1361.53px] w-[4.091px]" data-name="Icon42">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[11.783px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[1.76%] left-0 right-[3.47%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p1c41e700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[11.783px] items-start left-[928.1px] overflow-clip top-[1367.08px] w-[11.582px]" data-name="Icon52">
      <Icon8 />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute left-0 size-0 top-0" data-name="Vector">
      <Icon10 />
      <Icon11 />
      <Icon12 />
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[23.989px] overflow-clip relative shrink-0 w-full" data-name="Icon62">
      <Vector />
    </div>
  );
}

function Container16() {
  return (
    <div className="box-border content-stretch flex flex-col h-[23.989px] items-start pl-0 py-0 relative shrink-0 w-full" data-name="Container">
      <Icon14 />
    </div>
  );
}

function SocialLink() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[157.85px] size-[23.989px] top-[3px]" data-name="SocialLink">
      <Container16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[29.998px] left-0 top-[32.71px] w-[181.836px]" data-name="Container82">
      <Heading4 />
      <SocialLink />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute h-[62.704px] left-0 top-[1890.92px] w-[181.836px]" data-name="Contact">
      <div aria-hidden="true" className="absolute border-[0.713px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="h-[1954px] relative shrink-0 w-[375px]" data-name="Desktop">
      <Container3 />
      <Hero />
      <PortfolioGroup />
      <Contact />
    </div>
  );
}

function PortfolioLanding() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[1570px] items-start max-w-[1279px] p-[10px] relative shrink-0 w-[375px]" data-name="Portfolio Landing">
      <Desktop />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#fcffff] content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <PortfolioLanding />
    </div>
  );
}