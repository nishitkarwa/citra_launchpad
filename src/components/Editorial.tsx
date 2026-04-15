import { useInView } from "@/hooks/useInView";

const Editorial = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className={`section-padding ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-[28px] md:text-[40px] lg:text-[52px] font-light leading-[1.25] tracking-[-0.01em] text-muted-foreground">
            Where <span className="font-bold text-foreground">architecture</span> meets{" "}
            <span className="font-bold text-foreground">business performance</span> — we go beyond blueprints to deliver{" "}
            <span className="font-bold text-foreground">real commercial outcomes.</span>
          </p>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Avatars placeholder */}
          <div>
            <div className="flex -space-x-3 mb-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-semibold text-secondary-foreground"
                >
                  {["AM", "RD", "PN"][i]}
                </div>
              ))}
            </div>
            <p className="body-default text-muted-foreground max-w-xs">
              We craft inspiring spaces that blend cutting-edge design with enduring functionality, turning your vision into reality.
            </p>
          </div>

          {/* Circular Learn more button */}
          <a
            href="#aboutus"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-dark flex items-center justify-center text-primary-foreground text-sm font-medium hover:bg-primary transition-colors shrink-0"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
