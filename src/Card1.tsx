import { useActiveBreakpoint } from "figma:react";

function TextDesktop() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[32px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
            <h5 className="block leading-[1.2]">Onboarding for Enterprise Platform</h5>
          </div>
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
            <p className="leading-[1.45]">{`5-screen onboarding flow that guides new users through complex concepts & multiple configurations.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card1Desktop() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] group-hover:bg-[rgba(0,0,0,0.1)] transition-colors duration-200 content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] size-full" data-name="Card 1">
      <TextDesktop />
    </div>
  );
}

function TextTablet() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[32px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
            <h5 className="block leading-[1.2]">Onboarding for Enterprise Platform</h5>
          </div>
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
            <p className="leading-[1.45]">{`5-screen onboarding flow that guides new users through complex concepts & multiple configurations.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card1Tablet() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] group-hover:bg-[rgba(0,0,0,0.1)] transition-colors duration-200 content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] size-full" data-name="Card 1">
      <TextTablet />
    </div>
  );
}

function TextMobile() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
            <h5 className="block leading-[1.2]">Onboarding for Enterprise Platform</h5>
          </div>
          <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
            <p className="leading-[1.45]">{`5-screen onboarding flow that guides new users through complex concepts & multiple configurations.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card1Mobile() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] group-hover:bg-[rgba(0,0,0,0.1)] transition-colors duration-200 content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] size-full" data-name="Card 1">
      <TextMobile />
    </div>
  );
}

function Card1() {
  const { width } = useActiveBreakpoint();

  const handleClick = () => {
    window.location.href = "/onboarding";
  };

  const Variant = width < 800 ? Card1Mobile : width < 1280 ? Card1Tablet : Card1Desktop;

  return (
    <div className="group cursor-pointer size-full" onClick={handleClick}>
      <Variant />
    </div>
  );
}

export default Card1;