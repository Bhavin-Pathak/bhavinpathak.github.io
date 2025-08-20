/* eslint-disable react/prop-types */
import React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "../utils/utils.js"

const Tabs = TabsPrimitive.Root

// Tabs List => Glassmorphic wrapper
const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center gap-2 rounded-2xl",
      "bg-white/40 dark:bg-black/30", // glass effect
      "backdrop-blur-md backdrop-saturate-150 shadow-lg",
      "p-1 text-sm transition-all duration-300 ease-in-out",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

// Trigger => primary color on active
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center whitespace-nowrap",
      "rounded-xl px-4 py-2 text-sm font-medium",
      "transition-all duration-300 ease-in-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md",
      "data-[state=active]:hover:bg-primary data-[state=active]:hover:text-white",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName


// Tab Content => also glass background
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 rounded-2xl p-6",
      "bg-white/50 dark:bg-black/30",
      "backdrop-blur-md backdrop-saturate-150 shadow-lg",
      "text-sm transition-all duration-300 ease-in-out",
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
