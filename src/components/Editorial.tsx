import { useInView } from "@/hooks/useInView";
import useStaggeredAnimation from "@/hooks/useStaggeredAnimation";

const words: { text: string; bold: boolean }[] = [
  { text: "Where",        bold: false },
  { text: "architecture", bold: true  },
  { text: "meets",        bold: false },
  { text: "business",     bold: true  },
  { text: "performance",  bold: true  },
  { text: "—",            bold: false },
  { text: "we",           bold: false },
  { text: "go",           bold: false },
  { text: "beyond",       bold: false },
  { text: "blueprints",   bold: false },
  { text: "to",           bold: false },
  { text: "deliver",      bold: false },
  { text: "real",         bold: true  },
  { text: "commercial",   bold: true  },
  { text: "outcomes.",    bold: true  },
];

const Editorial = () => {
  const { ref, inView } = useInView(0.2);

  useStaggeredAnimation(ref, inView, { selector: "span", baseDelay: 0, step: 55 });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-[28px] md:text-[40px] lg:text-[52px] font-light leading-[1.25] tracking-[-0.01em]">
            {words.map((w, i) => (
              <span
                key={i}
                className={`inline-block mr-[0.25em] ${
                      w.bold ? "font-bold text-foreground" : "text-muted-foreground"
                    } ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              >
                {w.text}
              </span>
            ))}
          </p>
        </div>

        <div
          className={`mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 ${
            inView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={inView ? { animationDelay: `${words.length * 55 + 100}ms` } : undefined}
        >
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
