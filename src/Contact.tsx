import { useActiveBreakpoint } from "figma:react";

function ContactDesktop() {
  return (
    <div className="capitalize flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative size-full text-[16px] text-black text-center text-nowrap tracking-[-0.08px]">
      <p className="leading-[1.45] whitespace-pre">Contact</p>
    </div>
  );
}

function ContactTablet() {
  return (
    <div className="capitalize flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative size-full text-[16px] text-black text-center text-nowrap tracking-[-0.08px]">
      <p className="leading-[1.45] whitespace-pre">Contact</p>
    </div>
  );
}

function ContactMobile() {
  return (
    <div className="capitalize flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative size-full text-[16px] text-black text-center text-nowrap tracking-[-0.08px]">
      <p className="leading-[1.45] whitespace-pre">Contact</p>
    </div>
  );
}

function Contact() {
  const { width } = useActiveBreakpoint();
  if (width < 800) {
    return <ContactMobile />;
  }
  if (width < 1280) {
    return <ContactTablet />;
  }
  return <ContactDesktop />;
}

export default Contact;