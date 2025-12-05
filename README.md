# School Management System

A full-stack Next.js application for school management, featuring comprehensive dashboards for Admins, Teachers, Students, and Parents.

## Features
- **Role-based Dashboards** (Admin, Teacher, Student, Parent)
- **Authentication** powered by Clerk
- **Database** via Prisma ORM and PostgreSQL
- **UI Components** built with Tailwind CSS, Recharts, and custom glassmorphism designs.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env` file in the root of the project and populate it with the required keys (see `.env.example`).

```env
DATABASE_URL="postgresql://user:password@localhost:5432/school_management?schema=public"

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
```

### 3. Database Setup
Push the schema to your database:
```bash
npx prisma db push
```
Seed the database (optional):
```bash
npx prisma db seed
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack
- Next.js 15+
- React 19+
- Tailwind CSS
- Prisma
- Clerk Auth