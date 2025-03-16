export default function AboutPage() {
    return (
      <div
        className="flex h-full w-full flex-col items-start gap-2 overflow-auto p-4"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <p className="text-xl font-semibold lg:text-2xl">Hi there,</p>
  
        <p className="text-sm leading-6 lg:text-base lg:leading-8">
          I'm Emma Dong.
        </p>
      </div>
    );
  }
  