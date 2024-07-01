import ShimmerButton from "@/components/magicui/shimmer-button";

export function Register() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-xl font-medium leading-none tracking-tight text-white">
          Events
        </span>
      </ShimmerButton>
    </div>
  );
}
