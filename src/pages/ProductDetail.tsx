import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display font-bold mb-4">Product not found</h1>
            <Link to="/" className="text-primary hover:underline">
              Go back home
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const Icon = product.icon;

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          {/* Background gradient */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, hsl(var(--glow) / 0.3), transparent 70%)`,
            }}
          />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to products</span>
              </Link>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className={`w-24 h-24 rounded-3xl ${product.gradient} flex items-center justify-center shadow-2xl flex-shrink-0`}
              >
                <Icon className="w-12 h-12 text-white" />
              </motion.div>

              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4"
                >
                  {product.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-muted-foreground mb-8"
                >
                  {product.tagline}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <span>Get Started</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 sm:p-12"
            >
              <h2 className="text-2xl font-display font-bold mb-6">About {product.name}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold mb-12 text-center"
            >
              Key Features
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature}</h3>
                    <p className="text-sm text-muted-foreground">
                      Built to scale with your needs.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Join thousands of teams already using {product.name}.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-white font-semibold shadow-lg"
              >
                Start Free Trial
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

export default ProductDetail;
