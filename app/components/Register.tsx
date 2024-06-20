import ShimmerButton from "@/components/magicui/shimmer-button";

export function Register() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Events
        </span>
      </ShimmerButton>
    </div>
  );
}
