import { steps } from "@/constants/workingSteps";

export default function HowItWorks() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Four simple steps to revolutionize your networking experience
            </p>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-29 left-0 right-0 mx-auto h-1 bg-border w-[80%] z-0 hidden md:block" />
          <div className="grid gap-12 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex flex-col gap-4 items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-lg border z-10">
                    {step.icon}
                  </div>
                  <div className="flex items-center justify-center  w-10 h-10  text-lg font-bold text-text bg-background px-3 z-10 md:top-[5.5rem] rounded-full">
                    {index + 1}
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
