# Uplike News - Modern News Blog Platform

A professional, high-performance news blog website built with Next.js, Tailwind CSS, and MongoDB.

## Features

- **Public Website**: Modern hero sections, category grids, trending news sidebar, and responsive article pages.
- **Admin Panel**: Secure dashboard for managing posts, categories, and SEO settings.
- **SEO Optimized**: Built-in support for meta titles, descriptions, slugs, and semantic HTML.
- **AdSense Ready**: Strategic ad placement areas in header, sidebar, footer, and within articles.
- **Clean UI**: Premium design inspired by leading news portals with a focus on readability.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (Node.js)
- **Database**: MongoDB with Mongoose
- **Icons**: Lucide React
- **Editor**: React Quill (Admin Panel)

## Getting Started

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Set up Environment Variables**:
   Copy `.env.example` to `.env.local` and fill in your MongoDB URI and JWT Secret.
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000)** to see the site.
6. **Admin Access**: Go to `/admin/login`. (Default mock: admin@uplike.com / admin123)

## Deployment

This project is ready to be deployed on **Vercel**. 
Simply connect your GitHub repository to Vercel and it will automatically handle the build process.

## AdSense Approval Tips

- Ensure you have at least 15-20 original articles.
- Fill out all legal pages (Privacy Policy, Terms, etc.).
- Use the provided Ad placement areas responsibly.
- Avoid duplicate or scraped content.
