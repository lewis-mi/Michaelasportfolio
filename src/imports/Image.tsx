import imgImage from "figma:asset/b02ad0c5010285c7c9d03a5a08dcdbb175be5137.png";

export default function Image() {
  return (
    <section className="relative size-full" data-name="Image">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center pb-[40px] pt-0 px-[240px] relative size-full">
          <div className="h-[370px] relative rounded-[9px] shrink-0 w-[824px]" data-name="Image">
            <img alt="An illustrative sketch of a flower" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgImage} />
          </div>
        </div>
      </div>
    </section>
  );
}