function Paragraph() {
  return (
    <div className="h-[28.002px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[28px] left-0 not-italic text-[#333333] text-[18px] text-nowrap top-[1.43px] whitespace-pre">Portfolio</p>
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex flex-col h-[27.991px] items-start pb-0 pl-0 pt-[3.489px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27.991px] items-start left-0 top-0 w-[0.992px]" data-name="Button10">
      <Container />
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

function Container1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[27.991px] items-start pb-0 pl-0 pt-[3.489px] relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bottom-[0.01px] content-stretch flex flex-col items-center justify-center right-[38.97px] top-0 w-[62.035px]" data-name="Button12">
      <Container1 />
    </div>
  );
}

export default function Nav() {
  return (
    <div className="relative size-full" data-name="Nav">
      <Button />
      <Button1 />
    </div>
  );
}