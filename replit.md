# ZMusic - Decentralized Music Platform

## Overview

ZMusic is a modern, decentralized music streaming platform built with Next.js 15, TypeScript, and a comprehensive suite of modern web technologies. The application provides a Spotify-like experience with user authentication, music streaming capabilities, and a responsive design optimized for both desktop and mobile devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router for server-side rendering and optimal performance
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS 4 with custom design tokens and dark mode support via next-themes
- **State Management**: Combination of React Hook Form for form state, Zustand for global state, and TanStack Query for server state management
- **Animations**: Framer Motion for smooth UI transitions and micro-interactions

### Backend Architecture
- **Custom Server**: Express-like custom server (server.ts) that handles both Next.js routing and WebSocket connections
- **Real-time Communication**: Socket.IO integration for live features like chat, notifications, and collaborative playlists
- **Authentication**: NextAuth.js with credentials provider and Prisma adapter for session management
- **API Routes**: Next.js API routes for REST endpoints including authentication and health checks

### Data Storage
- **ORM**: Prisma as the database abstraction layer with TypeScript-first approach
- **Database**: Configured for Prisma but database provider not specified (flexible for PostgreSQL, MySQL, or SQLite)
- **Schema Management**: Prisma migrations for version-controlled database changes

### UI/UX Features
- **Responsive Design**: Mobile-first approach with adaptive layouts using Tailwind breakpoints
- **Component System**: Comprehensive UI component library including data tables (TanStack Table), drag-and-drop (DND Kit), and rich text editing (MDX Editor)
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance
- **Theming**: CSS variables-based theming system with light/dark mode toggle

### Development Tools
- **TypeScript**: Full type safety with strict configuration and path mapping
- **Form Handling**: React Hook Form with Zod schema validation for type-safe forms
- **HTTP Client**: Axios for API communication with built-in interceptors
- **Development Server**: Nodemon for hot reloading with custom server setup

## External Dependencies

### Core Framework Dependencies
- **Next.js 15**: React framework with App Router
- **React 18**: Latest React with concurrent features
- **TypeScript 5**: Static type checking

### UI and Styling
- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: Component library based on Radix UI
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library
- **Framer Motion**: Animation library
- **next-themes**: Theme management

### State Management and Data
- **Zustand**: Lightweight state management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **Axios**: HTTP client

### Backend and Database
- **Prisma**: Database ORM and schema management
- **NextAuth.js**: Authentication solution
- **Socket.IO**: Real-time WebSocket communication
- **bcryptjs**: Password hashing

### Development and Build Tools
- **nodemon**: Development server with hot reload
- **tsx**: TypeScript execution engine
- **eslint**: Code linting (configured but build errors ignored for development)

### Specialized Features
- **TanStack Table**: Advanced data table functionality
- **DND Kit**: Drag and drop interactions
- **MDX Editor**: Rich text editing capabilities
- **Recharts**: Data visualization and charting
- **date-fns**: Date manipulation utilities
- **React Use**: Collection of useful React hooks

The application is configured for Replit deployment with cross-origin request handling and production-ready build configurations.