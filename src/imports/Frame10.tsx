function Frame11() {
  return <div className="absolute left-[659px] size-[100px] top-[3px]" />;
}

export default function Frame10() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[100dvh] left-0 tailwind top-0 w-[1280px]" />
      <Frame11 />
    </div>
  );
}