// src/components/sections/what-we-do-section.jsx
import { motion } from 'framer-motion';
import { BookOpen, Mic, Users, Code } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const activities = [
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Workshops & Bootcamps',
    description: 'Hands-on training sessions to upskill our community in the latest Web3 technologies.'
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Community Meetups',
    description: 'Regular online and offline events to foster networking and collaboration among members.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Global Exchange',
    description: 'Providing opportunities for members to connect with the global Web3 ecosystem.'
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Hackathons & Bounties',
    description: 'Putting skills to the test by building real-world projects and solving challenges.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      ease: 'easeOut',
      duration: 0.5
    }
  })
};

export function WhatWeDoSection() {
  return (
    <section id="mission" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Building the Future, Together
          </h2>
          <p className="text-lg text-muted-foreground mb-16">
            Our mission is to empower India's youth by providing the tools, knowledge, and network to thrive in the decentralized world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
             <Card className="p-8 h-full bg-secondary/50 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/25 hover:border-white/20 transition-all duration-300 group hover:scale-105">
                <CardHeader>
                  <div className="mb-4">{activity.icon}</div>
                  <CardTitle>{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}