export default function NavWrapper() {
  return (
    <div className="flex gap-[32px] items-center h-[28px]" data-name="Nav">
      <button
        onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
        className="cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap"
        data-name="Button10"
      >
        <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic text-[#333333] text-[18px] whitespace-nowrap">Portfolio</p>
      </button>
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap"
        data-name="Button12"
      >
        <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic text-[#333333] text-[18px] whitespace-nowrap">Contact</p>
      </button>
    </div>
  );
}
