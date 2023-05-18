# Next.js v13.4 Boilerplate

Boilerplate for Next.js v13.4 using `/app` router.

## Technologies Used

- Next.js v13.4.2
- TypeScript
- Tailwind CSS
- Auth.js
- Prisma
- MongoDB
- Shadcn/ui
- ESLint

## Installation

1. Create app `npx create-next-app@latest`

2. Install Auth.js `npm install next-auth` and setup `[...nextauth].ts` in `pages/api/auth` folder.

3. Setting up MongoDB via Prisma with Auth.js

```
npm install prisma --save-dev
npx prisma init --datasource-provider mongodb
# after setup `schema.prisma`, and add `DATABASE_URL` in `.env`:
npx prisma db push
# new collections should now appear in db
```

Whenever you make changes to your Prisma schema in the future, you manually need to invoke `prisma generate` in order to accommodate the changes in your Prisma Client API.

Source: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/mongodb/install-prisma-client-typescript-mongodb

```
npm install @prisma/client @next-auth/prisma-adapter
```

Then setup `PrismaClient` in `@/app/libs/prismadb.ts`, and `PrismaAdapter` in `@/pages/api/auth/[...nextauth].ts`: https://authjs.dev/reference/adapter/prisma.

For vercel setup: https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue.

## Setup

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the app running.
