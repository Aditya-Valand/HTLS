import { motion } from "framer-motion";
import { Card } from "../../components/ui/card"; // Corrected relative path
import { Badge } from "../../components/ui/badge"; // Corrected relative path
import { ArrowRight, Shield, Users, Zap, BookOpen, Target, Globe } from "lucide-react";

export function MissionSection() {
  const missionPoints = [
    {
      icon: BookOpen,
      title: "Pure Knowledge Transfer",
      description: "Empowering India's youth through comprehensive blockchain education and Web3 literacy programs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Transparent & Trustless",
      description: "Building trust through transparency. No investment advice, no financial speculation - just pure education.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Fostering a vibrant ecosystem where knowledge flows freely and innovation thrives collectively.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  

  return (
    <section id="mission" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 crypto-grid animate-grid opacity-20" />
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[var(--crypto-primary)] rounded-full animate-float opacity-30" />
      <div
        className="absolute top-40 right-20 w-16 h-16 border-2 border-[var(--crypto-secondary)] rotate-45 animate-float opacity-30"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-[var(--crypto-accent)] rounded-full animate-float opacity-30"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-mono border-[var(--crypto-primary)] text-[var(--crypto-primary)]"
          >
            DECENTRALIZED EDUCATION
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-balance">
            <span className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
              Knowledge, Not Speculation
            </span>
          </h2>

          <p className="text-lg md:text-xl font-sans text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            HxTLS DAO is pioneering the future of decentralized education in India. We're building a transparent,
            community-driven ecosystem that empowers youth through blockchain knowledge and Web3 innovation.
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-[var(--crypto-primary)]" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </motion.div> */}

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {missionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-secondary/50 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/25 hover:border-white/20 transition-all duration-300 group hover:scale-105">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} p-4 mb-6 group-hover:animate-pulse-glow transition-all duration-300`}
                >
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{point.description}</p>
                <div className="flex items-center text-[var(--crypto-primary)] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}