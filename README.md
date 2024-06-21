## 🚀 Project API Structure

Inside of your api, you'll see the following folders and files:

```text
/
├── api/
│   └── eatofy/
│       └── dashboard/
│       └── auth/
│          └── register/
│           └── login/
│           └── forgot_password/
│           └── delete_account/
│       └── hotels/
│           └── operations/
│               └── add/
│               └── fetch/
│               └── update/
│                   └── details/
│                   └── profile/
│               └── remove/
│           └── schedules/
│               └── add/
│               └── fetch/
│               └── remove/
│       └── hotel_subscription/
│           └── add/
│           └── fetch/
│           └── update/
│           └── remove/
│       └── subscription/
│           └── add/
│           └── fetch/
│           └── update/
│           └── remove/
│
│   └── hotel/
│       └── auth/
│           └── login/
│       └── tables/

```

Inside of your project, you'll see the following folders and files:

```text
/
├── src/
│   └── app/
│       └── api/
│   └── lib/
│       └── Database Connector
│       └── utils/
│           └── Password Hashing
│   └── model/
│       └── Interfaces
│   └── schemas/
│       └── Zod Checkers
│   └── types/
│       └── Response Interfaces
```

## 🧞 Commands 

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npx prisma init`         | Initialise Prisma Command                        |
| `npm run dev`             | Starts local dev server                          |
| `npx prisma generate`     | Generate the code using schema.prisma            |
| `npx prisma migrate dev`  | Migrate Database                                 |
