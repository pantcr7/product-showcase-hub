import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { PageTransition } from "@/components/PageTransition";
import { products } from "@/data/products";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore our product suite</span>
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
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            >
              Discover our suite of products designed to help you build, ship, and scale faster than ever before.
            </motion.p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">
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
