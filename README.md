# Discord Clone

You can access the project using the following link: [Discord Clone](https://discord-clone-production-613c.up.railway.app/)

## Stack Used

**Front-end:** Next.js, React, TailwindCSS, Socket.io

**Back-end:** Prisma, MySQL, Socket.io
## Features

<details>
<summary><strong>Real-time Messaging</strong></summary>
  
- UploadThing (Attachments)
- Delete & Edit Messages in Real Time

</details>

<details>
<summary><strong>Communication</strong></summary>

- Create Text, Audio, and Video Call Channels
- Conversation Between Members
- Video Calls Between Members

</details>

<details>
<summary><strong>Member Management</strong></summary>

- Kick and Role Changes (Guest/Moderator)
- Unique Invite Link Generation

</details>

<details>
<summary><strong>User Interface</strong></summary>

- Full Responsivity and Mobile UI
- Light/Dark Mode

</details>

<details>
<summary><strong>Functionality</strong></summary>

- Websocket Fallback (Polling with Alerts)
- Infinite Loading in batches of 50 (tanstack/query)
- Server Creation and Customization

</details>

<details>
<summary><strong>Database & Authentication</strong></summary>

- ORM (Prisma)
- MySQL Database (Planetscale)
- Authentication (Clerk)

</details>

## Setup .env file
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

## Install packages

```bash
npm i
```
## Setup Prisma

```bash
npx prisma generate
npx prisma db push
```
    
## Start the app

```bash
npm run dev
```
    
    
