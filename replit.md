# Overview

MESTRANDOR is a research scholarship management platform built for Brazilian academic institutions. The application serves as a comprehensive platform for managing research scholarships ("Bolsas de Pesquisa Científica"), connecting researchers with funding opportunities and facilitating the academic research ecosystem. The platform features a skills-based matching system, scholarship listings, and research opportunity management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React 18 using TypeScript and follows a modern component-based architecture:

- **UI Framework**: React with TypeScript for type safety and developer experience
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The backend follows a RESTful API design using Node.js and Express:

- **Runtime**: Node.js with TypeScript and ES modules
- **Framework**: Express.js for HTTP server and middleware
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL session store
- **Development**: Hot reload with tsx for TypeScript execution

## Data Storage
The application uses PostgreSQL as the primary database:

- **ORM**: Drizzle ORM for type-safe database queries and migrations
- **Schema Management**: Centralized schema definition in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migration management
- **Connection**: Neon serverless PostgreSQL with connection pooling

## Authentication and Authorization
Currently implements a basic user system:

- **User Model**: Simple username/password authentication structure
- **Session Storage**: PostgreSQL-backed session management
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations

## Component Design System
The UI follows shadcn/ui design principles:

- **Design Tokens**: CSS custom properties for theming and consistent spacing
- **Component Library**: Comprehensive set of accessible UI components built on Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Theme Support**: Built-in dark/light theme support with CSS variables

## Skills Matching System
Core feature for connecting researchers with opportunities:

- **Skill Categories**: Predefined research skills including statistical methods, academic writing, and language proficiency
- **Interactive Selection**: Checkbox-based skill selection with real-time filtering
- **Matching Algorithm**: Skills-based filtering for scholarship recommendations

## External Dependencies

- **Database**: Neon serverless PostgreSQL for production database hosting
- **UI Components**: Radix UI primitives for accessible component foundations
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting
- **Validation**: Zod for runtime type checking and schema validation
- **Development Tools**: Replit integration for cloud development environment
- **Image Assets**: Unsplash for placeholder research and academic imagery