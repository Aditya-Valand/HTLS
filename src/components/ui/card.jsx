// src/components/ui/card.jsx
import * as React from "react"
import { cn } from "../../lib/utils"

// --- The Card component is the only part we need to change ---
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // REMOVED: "border" and "shadow-sm"
    // ADDED: A softer, more professional shadow and hover effect for depth
    className={cn(
      "rounded-2xl bg-card text-card-foreground shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10", 
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

// --- The rest of the file remains the same ---
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent }