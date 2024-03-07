# Week 14: Next.js Basic Assignment

This week's assignment is designed to help you learn and practice key concepts of Next.js 14, including file-based routing with the App Router, navigation, layout components, static rendering, and client-side rendering with the `"use client"` directive.

## Assignment Overview

In this assignment, you will build a Next.js application from scratch using the App Router structure. The application will consist of three routes: Home, Static Route, and Interactive Route. You will create a navigation bar component to enable seamless navigation between these routes. The Static Route will demonstrate static rendering, while the Interactive Route will showcase client-side rendering and interactivity using the `"use client"` directive.

## Learning Objectives

By completing this assignment, you will gain hands-on experience and understanding of the following Next.js 14 concepts:

1. **File-based Routing with App Router**: Learn how Next.js 14 uses file-based routing with the App Router, where each file in the `app` directory corresponds to a route in the application.

2. **Navigation with `Link` Component**: Understand how to use the `Link` component from `next/link` to create navigation links between different routes, enabling client-side navigation without a full page reload.

3. **Layout Component**: Discover how to create a layout component in Next.js 14 using `layout.tsx`, which wraps around the content of each route and allows for a consistent layout across the application.

4. **Static Rendering**: Explore how Next.js performs static rendering with the static route (`static-page/page.tsx`), where the content is generated at build time and served as pre-rendered HTML for better performance and SEO.

5. **Client-Side Rendering with "use client"**: Learn about client-side rendering using the `"use client"` directive in the interactive route (`interactive-page/page.tsx`), which enables interactivity and state management using React hooks like `useState`.
   

## Assignment Requirements

Follow these steps to complete the assignment:

1. Bootstrap a Next.js project with TypeScript.
2. Create a `Navbar` component with three navigation links: Home, Static Route, and Interactive Route.
3. Implement a layout component that includes the `Navbar` component and wraps around the content of each route, ensuring a consistent layout across all pages.
4. Implement the Home route with a welcoming message and introduction to your application.
5. Create the Static Route and display a static paragraph highlighting the benefits of static rendering in Next.js.
6. Implement the Interactive Route with a count button that increments the count when clicked, demonstrating client-side interactivity.
7. Ensure proper routing and navigation between the routes using the `Link` component.
8. Style your application as desired to achieve an appealing and user-friendly interface.
   
Refer to the UI images attached below for visual guidance on how your application should look and function.

![Home Page](https://i.postimg.cc/x1LWsq08/PICS1.png)

![Server Page](https://i.postimg.cc/Sscd4YvY/PICS2.png)

![Client Page](https://i.postimg.cc/2ymwSjsc/PICS3.png)

