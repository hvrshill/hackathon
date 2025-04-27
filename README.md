# WorkerConnect

WorkerConnect is a platform that connects daily wage workers with people seeking their services, especially in rural and semi-urban areas. The app allows users to post gigs or tasks specifying their location, budget, and requirements, while workers nearby can accept tasks in real-time based on proximity and payment offered.

## Features

- User authentication (email/password and Google)
- Role-based access (Client/Worker)
- Job posting and management
- Job search and filtering
- Real-time job matching
- Worker profiles and ratings
- Secure payment system

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- NextAuth.js
- Zod (Form validation)
- React Hook Form

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- PostgreSQL database
- Google OAuth credentials (for Google Sign-In)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/workerconnect.git
   cd workerconnect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/workerconnect?schema=public"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. Initialize the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── jobs/              # Job-related pages
│   └── profile/           # Profile pages
├── components/            # Reusable components
├── lib/                   # Utility functions and configurations
├── types/                 # TypeScript type definitions
└── styles/               # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
