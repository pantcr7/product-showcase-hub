import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  gradient: string;
  index: number;
}

export function ProductCard({ id, name, tagline, icon: Icon, gradient, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/product/${id}`} className="block group">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glass-card rounded-2xl p-6 h-full relative overflow-hidden"
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, hsl(var(--glow) / 0.15), transparent 70%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className={`w-14 h-14 rounded-2xl ${gradient} flex items-center justify-center mb-4 shadow-lg`}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>

            <h3 className="font-display text-xl font-bold mb-2">{name}</h3>
            <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{tagline}</p>

            <motion.div
              className="flex items-center gap-2 text-primary font-medium text-sm"
              whileHover={{ x: 5 }}
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>

          {/* Border gradient on hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[hsl(var(--glow)/0.3)] transition-colors duration-300" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
