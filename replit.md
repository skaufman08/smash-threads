# Riot Threads - Punk Rock T-Shirt Store

## Overview

Riot Threads is an e-commerce web application for selling punk rock band t-shirts with a distinctive underground zine aesthetic. The application features a product catalog, shopping cart functionality, and a checkout flow, all styled with a DIY punk rock design inspired by 1980s-90s zine culture with photocopied aesthetics, distressed typography, and intentionally chaotic layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (home, checkout, confirmation pages)
- Single Page Application (SPA) architecture with client-side navigation

**State Management**
- React Context API via CartProvider for global shopping cart state
- TanStack React Query (v5) for server state management and caching
- Local component state with React hooks (useState, useEffect)

**UI Component System**
- shadcn/ui component library (New York style variant) providing pre-built, accessible Radix UI primitives
- Custom punk rock themed components layered on top of shadcn base components
- Tailwind CSS for utility-first styling with extensive custom configuration
- Design system based on "underground zine/punk aesthetic" with intentional chaos, torn edges, and rotated elements

**Form Handling**
- React Hook Form for form state management and validation
- Zod schema validation via @hookform/resolvers for type-safe form validation
- Checkout form validates customer information and payment details

**Key Design Patterns**
- Composition pattern for reusable UI components
- Provider pattern for context-based state sharing (CartContext)
- Custom hooks for shared logic (use-mobile, use-toast)
- Responsive design with mobile-first approach

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- TypeScript for type safety across the full stack
- ESM module system (type: "module")

**Development vs Production**
- Vite middleware integration in development for HMR
- Static file serving in production from dist/public
- Request logging middleware for API routes
- Error handling with runtime error overlay in development

**Data Layer**
- Currently using in-memory storage (MemStorage class) implementing IStorage interface
- Designed for easy migration to persistent storage (PostgreSQL via Drizzle ORM)
- Drizzle ORM configured with schema in shared/schema.ts
- Basic user schema defined (users table with username/password)

**Shared Types & Validation**
- Shared TypeScript types between client and server in shared/ directory
- Drizzle-Zod integration for runtime validation matching database schemas
- Type-safe API contracts via shared schema definitions

**Code Organization**
- Monorepo structure with client/, server/, and shared/ directories
- Path aliases configured (@/, @shared/, @assets/) for clean imports
- Separation of concerns: routes, storage interface, and server setup

### External Dependencies

**UI Component Libraries**
- Radix UI primitives (@radix-ui/*) for accessible, unstyled component foundations
- Embla Carousel for image carousels
- cmdk for command palette functionality
- Lucide React for icon system

**Styling & Theming**
- Tailwind CSS with PostCSS for processing
- Custom CSS variables for theming (light/dark mode support)
- Google Fonts integration (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- Custom punk rock design utilities (punk-rotate-*, xerox-grain, hover-elevate)

**Form & Validation**
- Zod for schema validation
- React Hook Form for form state
- @hookform/resolvers for connecting Zod to React Hook Form

**Data & State**
- @tanstack/react-query for server state caching
- date-fns for date manipulation
- class-variance-authority (cva) for variant-based component styling
- clsx and tailwind-merge for conditional className handling

**Database & ORM**
- Drizzle ORM for type-safe database queries
- @neondatabase/serverless as PostgreSQL driver (configured but not actively used)
- drizzle-kit for migrations and schema management
- connect-pg-simple for session storage (available but not implemented)

**Development Tools**
- Replit-specific plugins (@replit/vite-plugin-*) for development experience
- tsx for running TypeScript files directly
- esbuild for production builds

**Asset Management**
- Static assets served from attached_assets/ directory
- Image references via Vite's asset imports
- Product images for punk band t-shirts (Casualties, Dead Kennedys, Rancid, Misfits, Black Flag, Ramones, Sex Pistols, The Clash)