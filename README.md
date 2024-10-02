# Full-Stack Application with Next.js, tRPC, Prisma, and PostgreSQL

This project is a full-stack application built using **Next.js** (App Router), **tRPC**, **Prisma**, and **PostgreSQL**. The app includes a form where users can submit their details, which are then stored in the PostgreSQL database using Prisma as the ORM.

## Key Concepts

### 1. **tRPC**
- **tRPC** provides a way to create **type-safe APIs**. It enables the frontend to communicate directly with the backend without requiring REST or GraphQL. 
- It leverages TypeScript types on both the client and server, ensuring that all requests and responses adhere to the expected types. 
- With tRPC, the API definitions are created on the server and used directly in the frontend, leading to a seamless developer experience.

### 2. **Prisma**
- **Prisma** is an ORM (Object-Relational Mapper) that simplifies database interactions. 
- It allows you to define your database schema using a `schema.prisma` file and generates a Prisma client for querying and manipulating the database.
- Prisma offers powerful database migrations and a built-in `Prisma Studio` UI to view and manage your data.

### 3. **Zod**
- **Zod** is a TypeScript-first schema declaration and validation library. 
- It helps in validating user input before processing it on the server. 
- For example, when the form sends data to the API, Zod ensures that fields like email are in the correct format and required fields are present.

### 4. **Next.js App Router**
- **Next.js** is a React-based framework for building web applications with server-side rendering (SSR), static site generation (SSG), and more.
- The **App Router** in Next.js 13+ allows you to organize your application with `layout.tsx` and `page.tsx` files. The layout file provides a shared structure for your app, while the page file defines individual pages and their components.

## Project Overview

This application allows users to submit their details (email, name, and subscription plan) through a form, and stores the submitted data in a PostgreSQL database using Prisma. The application is structured using the **App Router** in Next.js, with backend APIs being handled by tRPC.

## Setup Instructions

### 1. **Install Dependencies**

```bash
npm install
```

Ensure that all required packages, such as Prisma, tRPC, and Zod, are installed.

### 2. **Dockerized PostgreSQL Setup**

You can run PostgreSQL in a Docker container for development purposes.

```bash
docker-compose up -d
```

Make sure to update the `.env` file with the correct connection string to the database.

### 3. **Prisma Setup**

1. Database Migrations: To apply the database schema (as defined in schema.prisma), run the following command:

```bash
npx prisma migrate dev --name init
```

2. Prisma Studio: To view and manage the database data, you can run Prisma Studio:

```bash
npx prisma studio
```

### 4. **Run the Application**

To start the Next.js development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000` to access the form.

## Code Overview

### 1. **Backend Setup (tRPC) - `app/api/trpc/[trpc].ts`**

This file sets up the tRPC API handler, which connects your Next.js app to the backend API.

### 2. **Frontend Form (React + tRPC) - `app/page.tsx`**

The form on the homepage allows users to submit their details. It uses React hooks to manage state and tRPC to call the backend API to create a new user.

### 3. **Prisma Client - `lib/prisma.ts`**

This file initializes the Prisma client for interacting with the PostgreSQL database. It ensures that Prisma is only initialized once, even during hot-reloading in development.

### 4. **tRPC Client - `lib/trpc.ts`**

The lib/trpc.ts file sets up the tRPC client, which connects the frontend to the backend API.

### 5. **Database Schema - `prisma/schema.prisma`**

The `schema.prisma` file defines the `User` model with fields for email, name, subscription plan, and tokens. Each user can have a different subscription plan with a set number of tokens.

### 6. **API Router - `server/routers/_app.ts`**

The API router defines the backend API for creating users and assigns them a token balance based on their subscription plan.

## Conclusion

This project demonstrates how to build a full-stack application using **Next.js**, **tRPC**, **Prisma**, and **PostgreSQL**. The frontend communicates with the backend using tRPC, while Prisma handles database operations, making the application type-safe and easy to extend.