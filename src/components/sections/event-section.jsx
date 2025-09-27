// src/components/sections/events-section.jsx
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { motion } from "framer-motion"

export function EventsSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="events" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Community Events & Webinars
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="h-full hover:shadow-primary/10 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  Past Event
                </Badge>
                <CardTitle className="text-xl">Web3 Explained - Online Webinar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">September 2025</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Card className="h-full border-primary/50 hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge className="w-fit mb-2 animate-pulse">Upcoming Event</Badge>
                <CardTitle className="text-xl">First Community Meetup - Rajkot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">October 2025</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}