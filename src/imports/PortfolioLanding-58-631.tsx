import svgPaths from "./svg-nd6ia6vrcm";
import { imgGroup } from "./svg-3uv74";

function Header() {
  return (
    <div className="absolute h-[28px] left-[48px] top-[24px] w-[168.789px]" data-name="Header3">
      <p className="absolute font-['Poppins:Medium','Noto_Sans_Symbols:Medium',sans-serif] leading-[28px] left-0 text-[#333333] text-[18px] text-nowrap top-px whitespace-pre" style={{ fontVariationSettings: "'wght' 500" }}>
        ← Back to Portfolio
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[189px] left-0 top-[2847.66px] w-[1006px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[60px] left-[448.91px] not-italic text-[#333333] text-[48px] text-center text-nowrap top-[2px] tracking-[-1.2px] translate-x-[-50%] whitespace-pre">Gia Browser Extension</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[12px] left-[98.36px] not-italic text-[#101828] text-[10px] text-center text-nowrap top-0 tracking-[0.5px] translate-x-[-50%] whitespace-pre">Settings</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] text-nowrap top-0 tracking-[-0.1563px] whitespace-pre">Read reminders out loud</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[10px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-0 not-italic text-[#4a5565] text-[7px] text-nowrap top-0 tracking-[-0.0752px] whitespace-pre">AI-generated messages with text-to-speech</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[24px] items-start left-0 top-0 w-[162.648px]" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        <g id="Icon">
          <path d={svgPaths.p3f81ca00} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="content-stretch flex h-[7px] items-center justify-center relative shrink-0 w-full" data-name="Primitive.span">
      <Icon />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-indigo-100 box-border content-stretch flex flex-col items-start left-[162.65px] p-[0.5px] rounded-[2px] size-[8px] top-[2px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#030213] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.05)]" />
      <PrimitiveSpan />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <PrimitiveButton />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-gray-50 h-[49px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[49px] items-start pb-[0.5px] pt-[12.5px] px-[12.5px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] text-nowrap top-0 tracking-[-0.1563px] whitespace-pre">Enable voice commands</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[10px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-0 not-italic text-[#4a5565] text-[7px] text-nowrap top-0 tracking-[-0.0752px] whitespace-pre">{`Say "snooze" or "dismiss" during breaks`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[24px] items-start left-0 top-0 w-[162.648px]" data-name="Container">
      <Heading4 />
      <Paragraph1 />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[162.65px] rounded-[2px] size-[8px] top-[2px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <PrimitiveButton1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-gray-50 h-[49px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[49px] items-start pb-[0.5px] pt-[12.5px] px-[12.5px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] text-nowrap top-0 tracking-[-0.1563px] whitespace-pre">Language</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[12px] relative shrink-0 w-[43.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] relative w-[43.859px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#1e2939] text-[8px] text-nowrap top-0 tracking-[-0.1563px] whitespace-pre">Auto-detect</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p75d73c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gray-50 h-[25px] relative rounded-[7px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[25px] items-center justify-between px-[8.5px] py-[0.5px] relative w-full">
          <Text />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-gray-50 h-[68px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] h-[68px] items-start pb-[0.5px] pt-[12.5px] px-[12.5px] relative w-full">
          <Heading5 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] text-nowrap top-0 tracking-[-0.1563px] whitespace-pre">Tone</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-indigo-100 relative rounded-[1.67772e+07px] shrink-0 w-[75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(16,24,40,0.5)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5px] items-center justify-center px-[12px] py-[7px] relative w-[75px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[#1e2939] text-[8px] text-nowrap tracking-[-0.1563px] whitespace-pre">Mindful</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gray-50 relative rounded-[1.67772e+07px] shrink-0 w-[75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(16,24,40,0.5)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5px] items-center justify-center px-[13px] py-[7px] relative w-[75px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[#101828] text-[8px] text-center text-nowrap tracking-[-0.1563px] whitespace-pre">Goofy</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[6px] h-[26px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-gray-50 h-[71px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[5px] h-[71px] items-center px-[7.5px] py-[12.5px] relative w-full">
          <Heading6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] text-nowrap top-0 tracking-[-0.1563px] whitespace-pre">Long breaks</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[10px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-0 not-italic text-[#4a5565] text-[7px] text-nowrap top-0 tracking-[-0.0752px] whitespace-pre">Take longer breaks during extended work sessions</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[24px] items-start left-0 top-0 w-[162.648px]" data-name="Container">
      <Heading7 />
      <Paragraph2 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute bg-[#f3f3f5] left-[162.65px] rounded-[2px] size-[8px] top-[2px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <PrimitiveButton2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-gray-50 h-[49px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[49px] items-start pb-[0.5px] pt-[12.5px] px-[12.5px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#101828] text-[8px] text-nowrap top-0 tracking-[-0.1563px] whitespace-pre">End time</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[39.852px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] relative w-[39.852px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-0 not-italic text-[#1e2939] text-[8px] text-nowrap top-0 tracking-[-0.1563px] whitespace-pre">06 : 00 PM</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_58_643)" id="Icon">
          <path d={svgPaths.p3da7a900} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgPaths.p2ee8b080} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_58_643">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gray-50 h-[25px] relative rounded-[7px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[25px] items-center justify-between px-[8.5px] py-[0.5px] relative w-full">
          <Text1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-gray-50 h-[68px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[6px] h-[68px] items-start pb-[0.5px] pt-[12.5px] px-[12.5px] relative w-full">
          <Heading8 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-indigo-400 box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[32.25px] py-[12.25px] relative rounded-[1.67772e+07px] shrink-0 w-[150px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.25px] border-[rgba(16,24,40,0.5)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#f3f3f3] text-[7px] text-nowrap tracking-[-0.0752px] whitespace-pre">Save Changes</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#101828] box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[32.5px] py-[10.5px] relative rounded-[1.67772e+07px] shrink-0 w-[150px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#6a7282] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#f3f3f3] text-[7px] text-nowrap tracking-[-0.0752px] whitespace-pre">Quit Gia</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center justify-center relative shrink-0">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[12px] shrink-0 w-[216.648px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_5px_7.5px_-1.5px_rgba(0,0,0,0.1),0px_2px_3px_-2px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[10.5px] items-center justify-center px-[10.5px] py-[16px] relative w-[216.648px]">
        <Heading3 />
        <Container2 />
        <Container5 />
        <Container6 />
        <Container8 />
        <Container11 />
        <Container12 />
        <Frame2 />
      </div>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="content-stretch flex h-[518px] items-start justify-center relative shrink-0 w-[251.648px]" data-name="SettingsPage">
      <Container13 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[60px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Icon">
          <path d={svgPaths.p1dfd0400} id="Vector" stroke="var(--stroke-0, #E0E7FF)" strokeWidth="4" />
          <path d={svgPaths.p269126c0} id="Vector_2" stroke="var(--stroke-0, #818CF8)" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[18.03px] top-[21px] w-[23.934px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[15px] text-indigo-400 text-nowrap tracking-[-0.1772px] whitespace-pre">28s</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute left-[114px] size-[60px] top-[24px]" data-name="Container">
      <Icon3 />
      <Text2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[12px] left-[24px] top-[100px] w-[240px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[12px] left-[120.35px] not-italic text-[8px] text-black text-center text-nowrap top-[-0.25px] tracking-[-0.1563px] translate-x-[-50%] whitespace-pre">TAKE A LONGER BREAK</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[39px] left-[24px] top-[120px] w-[240px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13px] left-[120.23px] not-italic text-[#4a5565] text-[8px] text-center top-[-0.25px] tracking-[-0.1563px] translate-x-[-50%] w-[216.5px]">{`Take 5. Time to touch grass but here's one for the road. Knock knock. Who's there? Cow says. Cow says who? No, a cow says moo!`}</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-indigo-100 box-border content-stretch flex gap-[4px] h-[20px] items-center justify-center left-[92.56px] px-[12.5px] py-[10.5px] rounded-[5px] top-[175px] w-[102.883px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(73,69,79,0.5)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[10px] not-italic relative shrink-0 text-[#1e2939] text-[7px] text-nowrap tracking-[-0.0752px] whitespace-pre">Remind me in 5 minutes</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[10px] left-[24px] top-[207px] w-[240px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10px] left-[120.23px] not-italic text-[#6a7282] text-[7px] text-center text-nowrap top-[0.25px] tracking-[-0.0752px] translate-x-[-50%] whitespace-pre">Press ESC or click outside to close</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p755a300} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p4618fa0} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[262px] size-[14px] top-[12px]" data-name="Button">
      <Icon4 />
    </div>
  );
}

function BreakCard() {
  return (
    <div className="bg-[#f3f3f3] h-[241px] relative rounded-[12px] shadow-[0px_12.5px_25px_-6px_rgba(0,0,0,0.25)] shrink-0 w-[288px]" data-name="BreakCard">
      <Container14 />
      <Heading1 />
      <Paragraph3 />
      <Button6 />
      <Paragraph4 />
      <Button7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[5px] items-center justify-center p-[5px] relative w-full">
          <BreakCard />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] h-[312px] items-center justify-center p-[12.5px] relative shrink-0 w-[393.5px]">
      <Frame />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[13.565px] relative shrink-0 w-[23.72px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[13.565px] relative w-[23.72px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[13.565px] left-0 not-italic text-[#101828] text-[9.043px] text-nowrap top-0 tracking-[0.0265px] whitespace-pre">Setup</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[9.043px] relative shrink-0 w-[29.225px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[9.043px] relative w-[29.225px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.043px] left-0 not-italic text-[#6a7282] text-[6.029px] text-nowrap top-0 tracking-[-0.1177px] whitespace-pre">Step 1 of 3</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[13.565px] items-start justify-between left-[18.09px] top-[18.09px] w-[253.205px]" data-name="Container">
      <Heading9 />
      <Text3 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[9.043px] left-[18.09px] top-[40.69px] w-[253.205px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.043px] left-0 not-italic text-[#364153] text-[6.029px] text-nowrap top-0 tracking-[-0.1177px] whitespace-pre">Keep your digital wellness in check with eye breaks to prevent strain.</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[9.043px] relative shrink-0 w-[69.701px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.043px] left-0 not-italic text-[#101828] text-[6.029px] text-nowrap top-0 tracking-[-0.1177px] whitespace-pre">Read reminders out loud?</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[7.536px] relative shrink-0 w-[36.596px]" data-name="Text">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[7.536px] left-[-0.37px] text-[#6a7282] text-[5.275px] text-nowrap top-0 tracking-[-0.0567px] whitespace-pre">Recommended</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.652px] items-baseline relative">
        <Heading10 />
        <Text4 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[5.652px] h-[9.043px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame3 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[9.043px] relative shrink-0 w-[89.388px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[9.043px] relative w-[89.388px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.043px] left-0 not-italic text-[#1e2939] text-[6.029px] text-nowrap top-0 tracking-[-0.1177px] whitespace-pre">Hear break reminders read aloud</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[1.26431e+07px] shrink-0 size-[6.029px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[6.029px]" />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[#8390fa] h-[6.929px] relative rounded-[1.26431e+07px] shrink-0 w-[12.057px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.377px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.26431e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[6.929px] items-center pl-[5.652px] pr-[0.377px] py-[0.377px] relative w-[12.057px]">
        <PrimitiveSpan1 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-gray-50 h-[24.115px] relative rounded-[6.029px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.377px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[6.029px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[24.115px] items-center justify-between px-[9.42px] py-[0.377px] relative w-full">
          <Text5 />
          <PrimitiveButton3 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.522px] h-[37.679px] items-start left-[18.09px] top-[61.79px] w-[253.205px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[10.173px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[10.173px] left-0 not-italic text-[#101828] text-[6.782px] text-nowrap top-[0.38px] tracking-[-0.1656px] whitespace-pre">Enable voice commands?</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[9.043px] relative shrink-0 w-[110.424px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[9.043px] relative w-[110.424px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.043px] left-0 not-italic text-[#1e2939] text-[6.029px] text-nowrap top-0 tracking-[-0.1177px] whitespace-pre">{`Say "snooze" or "dismiss" during breaks`}</p>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="bg-[#f3f3f3] relative rounded-[1.26431e+07px] shrink-0 size-[6.029px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[6.029px]" />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[#cbced4] h-[6.929px] relative rounded-[1.26431e+07px] shrink-0 w-[12.057px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.377px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.26431e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[6.929px] items-center p-[0.377px] relative w-[12.057px]">
        <PrimitiveSpan2 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-gray-50 h-[24.115px] relative rounded-[6.029px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.377px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[6.029px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[24.115px] items-center justify-between px-[9.42px] py-[0.377px] relative w-full">
          <Text6 />
          <PrimitiveButton4 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.522px] h-[38.81px] items-start left-[18.09px] top-[111.53px] w-[253.205px]" data-name="Container">
      <Heading11 />
      <Container19 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[9.043px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.043px] left-0 not-italic text-[#101828] text-[6.029px] text-nowrap top-0 tracking-[-0.1177px] whitespace-pre">Language</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[9.043px] relative shrink-0 w-[33.052px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[9.043px] relative w-[33.052px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.043px] left-0 not-italic text-[#1e2939] text-[6.029px] text-nowrap top-0 tracking-[-0.1177px] whitespace-pre">Auto-detect</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[7.536px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Icon">
          <path d={svgPaths.p2df307c0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.627988" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-gray-50 h-[24.115px] relative rounded-[6.029px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.377px] border-[rgba(190,193,199,0.75)] border-solid inset-0 pointer-events-none rounded-[6.029px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[24.115px] items-center justify-between px-[9.42px] py-[0.377px] relative w-full">
          <Text7 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.522px] h-[37.679px] items-start left-[18.09px] top-[162.4px] w-[253.205px]" data-name="Container">
      <Heading12 />
      <Button8 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[10.55px] relative shrink-0 w-[8.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[10.55px] relative w-[8.289px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[10.55px] left-0 not-italic text-[7.536px] text-neutral-950 text-nowrap top-0 tracking-[-0.1693px] whitespace-pre">🚀</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[9.043px] relative shrink-0 w-[26.364px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[9.043px] relative w-[26.364px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[9.043px] left-0 not-italic text-[#101828] text-[6.029px] text-nowrap top-0 tracking-[-0.1177px] whitespace-pre">Try Demo</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[3.014px] h-[10.55px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[7.536px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[7.536px] left-0 not-italic text-[#6a7282] text-[5.275px] text-nowrap top-0 tracking-[-0.0567px] whitespace-pre">Skip setup and try Gia now</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[19.593px] relative shrink-0 w-[65.056px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.507px] h-[19.593px] items-start relative w-[65.056px]">
        <Container22 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-indigo-100 h-[18.086px] relative rounded-[1.26431e+07px] shrink-0 w-[52.586px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.377px] border-[rgba(73,69,79,0.5)] border-solid inset-0 pointer-events-none rounded-[1.26431e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.014px] h-[18.086px] items-center justify-center px-[15.449px] py-[9.42px] relative w-[52.586px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[7.536px] not-italic relative shrink-0 text-[#1e2939] text-[5.275px] text-nowrap tracking-[-0.0567px] whitespace-pre">Continue</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[19.593px] items-center justify-between left-[18.09px] top-[218.16px] w-[253.205px]" data-name="Container">
      <Container23 />
      <Button9 />
    </div>
  );
}

function SetupCard() {
  return (
    <div className="bg-[#f3f3f3] h-[255.842px] relative rounded-[9.043px] shrink-0 w-[289px]" data-name="SetupCard">
      <div aria-hidden="true" className="absolute border-[0.377px] border-[rgba(249,244,245,0.25)] border-solid inset-0 pointer-events-none rounded-[9.043px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25),0px_3.768px_5.652px_-1.13px_rgba(0,0,0,0.1)]" />
      <Container15 />
      <Paragraph5 />
      <Container18 />
      <Container20 />
      <Container21 />
      <Container24 />
    </div>
  );
}

function App() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5px] items-center justify-center p-[10px] relative shrink-0" data-name="App">
      <SetupCard />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
      <Frame1 />
      <App />
    </div>
  );
}

function GiaScreenshots() {
  return (
    <div className="box-border content-stretch flex gap-[12.5px] items-center justify-center px-[7.5px] py-[12.5px] relative shrink-0 w-[682.648px]" data-name="Gia Screenshots">
      <SettingsPage />
      <Frame4 />
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

function Frame8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[60px] items-start left-[45px] p-[10px] top-[94px] w-[916px]">
      <Frame7 />
    </div>
  );
}

function GiaBrowserExtension() {
  return (
    <div className="bg-[#fcffff] h-[3036.66px] relative shrink-0 w-full" data-name="GiaBrowserExtension">
      <Header />
      <Footer />
      <Frame8 />
    </div>
  );
}

function MichaelasPortfolio() {
  return (
    <div className="bg-[ghostwhite] content-stretch flex flex-col h-[3036px] items-start relative shrink-0 w-[1006px]" data-name="Michaela\'s Portfolio">
      <GiaBrowserExtension />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[20px] relative shrink-0">
      <MichaelasPortfolio />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[60px] relative shrink-0 w-[222.445px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60px] relative w-[222.445px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[60px] left-0 not-italic text-[#333333] text-[40px] text-nowrap top-[2px] tracking-[-1px] whitespace-pre">Contact Me</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[24px_24px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="var(--fill-0, #333333)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.pe7ea00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1ab31680} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p28c6df0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border overflow-clip relative rounded-[inherit] size-[24px]">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Button10 />
    </div>
  );
}

function MichaelasPortfolio1() {
  return (
    <div className="bg-[#fcffff] h-[3180px] relative shrink-0 w-full" data-name="Michaela\'s Portfolio">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[3180px] items-center px-[96px] py-0 relative w-full">
          <Frame5 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioLanding() {
  return (
    <div className="relative size-full" data-name="Portfolio Landing">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <MichaelasPortfolio1 />
        </div>
      </div>
    </div>
  );
}