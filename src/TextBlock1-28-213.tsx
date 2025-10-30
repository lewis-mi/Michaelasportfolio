function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <p className="leading-[1.2]">Project</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Designed a mobile app that promotes sustainable shopping by delivering a curated feed of pre-loved, locally available items to shoppers using AI-powered recommendations and location technology.</p>
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
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">
          Individual project, presented as part of UX design course final Completed over 6 weeks using Figma and user research methods
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

export default function TextBlock1() {
  return (
    <section className="relative size-full" data-name="Text block 1">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[240px] py-[80px] relative size-full">
          <Wrapper />
        </div>
      </div>
    </section>
  );
}