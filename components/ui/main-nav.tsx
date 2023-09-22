"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from "./logo"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "SEO Optimization",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Minimum Viable Product (MVP)",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Mobile App Development",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Web App Development",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
]


export default function MainNav() {

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
      <Logo />
        <span className="sr-only hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
          <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={siteConfig.url}
                  >
                    <Logo />
                    <div className="sr-only mb-2 mt-4 text-lg font-medium">
                     {siteConfig.name} 
                    </div>
                    {/* <p className="text-sm leading-tight text-muted-foreground">
                    {siteConfig.description}
                    </p> */}
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="/01. Discover">
              We work closely with our clients to understand their needs and goals.
              </ListItem>
              <ListItem href="/docs/installation" title="/02. Build">
              Based off of the discovery phase, we develop a comprehensive roadmap for each product and start working towards delivery.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="/03. Deliver">
              We ensure that product is fully functional at launch
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Pricing 
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

// export default function MainNav() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <Icons.logo className="h-6 w-6" />
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components built with Radix UI and
//                       Tailwind CSS.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }
//
//

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

