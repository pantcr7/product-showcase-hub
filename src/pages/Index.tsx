import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { PageTransition } from "@/components/PageTransition";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { products } from "@/data/products";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section with Background */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroBg}
              alt=""
              className="w-full h-full object-cover opacity-40 dark:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>100% Free — No credit card required</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-balance"
            >
              Tools that{" "}
              <span className="gradient-text">power</span>
              <br />
              modern teams
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Discover our suite of products designed to help you build, ship, and scale faster than ever before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card font-semibold hover:bg-secondary/80 transition-colors"
              >
                View All Products
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Products Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                Our Products
              </h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to build amazing things
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  tagline={product.tagline}
                  icon={product.icon}
                  gradient={product.gradient}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 glow-effect"
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground mb-8">
                All products are completely free. No hidden fees, ever.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white font-semibold shadow-lg"
              >
                Start Building Today
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ProductHub. Built with passion.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Index;
