// http://localhost:3000/api/auth/[...nextauth]/

// add route handler
import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers