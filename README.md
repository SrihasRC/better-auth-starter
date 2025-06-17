# Better Auth

A simple, secure authentication system built with Next.js and Drizzle ORM.

## Overview

Better Auth is a lightweight authentication starter project designed for practicing secure user management. It implements modern authentication patterns using Next.js, providing a solid foundation for secure user sign-up, login, and session management.

## Features

- 🔒 Secure user authentication
- 📝 User registration and login flows
- 🔑 Session-based authentication
- 🛡️ Protected dashboard route
- 🔄 Password reset functionality
- 💾 Database integration with Drizzle ORM and Neon

## Tech Stack

- **Framework**: Next.js
- **Database**: Neon (Serverless Postgres)
- **Database ORM**: Drizzle
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Neon account for PostgreSQL database

### Installation

1. Clone the repository
   ```bash
   git clone <your-repository-url>
   cd better-auth-starter
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   # Database (Neon)
   DATABASE_URL="postgresql://username:password@your-neon-db-host/database_name"
   
   # Next Auth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret-key"
   
   # Email for password reset
   EMAIL_SERVER_HOST="smtp.example.com"
   EMAIL_SERVER_PORT="587"
   EMAIL_SERVER_USER="your-email-user"
   EMAIL_SERVER_PASSWORD="your-email-password"
   EMAIL_FROM="noreply@yourdomain.com"
   
   # Auth Providers (if using)
   # GITHUB_ID="your-github-client-id"
   # GITHUB_SECRET="your-github-client-secret"
   
   # Other configurations
   NODE_ENV="development"
   ```

4. Run database migrations
   ```bash
   npm run db:migrate
   # or
   yarn db:migrate
   # or
   pnpm db:migrate
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Neon Database Setup

This project uses [Neon](https://neon.tech) as the serverless PostgreSQL database. To set up Neon:

1. Create a Neon account at https://neon.tech
2. Create a new project in the Neon console
3. Create a new database for your project
4. Get your connection string from the Neon dashboard
5. Add the connection string to your `.env` file as `DATABASE_URL`

## Authentication Features

### User Registration and Login
- Email and password-based signup
- Secure password hashing
- Session management using NextAuth.js

### Password Reset Flow
1. User requests a password reset from the "Forgot Password" page
2. System sends a reset email with a secure token
3. User follows the link in the email to the reset password page
4. User sets a new password and is redirected to login

## Project Structure

- `/app` - Next.js app router pages and API routes
  - `/app/forgot-password` - Password reset request flow
  - `/app/reset-password` - Password reset confirmation flow
- `/components` - Reusable UI components
  - `/components/emails` - Email templates including password reset
  - `/components/forms` - Form components for authentication
- `/db` - Database schema and configuration
- `/lib` - Utility functions and authentication helpers
- `/public` - Static assets
- `/server` - Server-side code and user management

## License

This project is licensed under the MIT License - see the LICENSE file for details.
