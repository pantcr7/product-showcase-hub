import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Download, Heart, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 50000,
    suffix: "+",
    label: "Active Users",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Download,
    value: 2500000,
    suffix: "+",
    label: "Downloads",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Heart,
    value: 99,
    suffix: "%",
    label: "Satisfaction Rate",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    value: 150,
    suffix: "ms",
    label: "Avg Response Time",
    color: "from-amber-500 to-orange-500",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <span ref={ref}>
      {formatNumber(displayValue)}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Trusted by <span className="gradient-text">thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group hover:glow-effect transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-3xl sm:text-4xl font-display font-bold mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
