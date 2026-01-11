import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const missingVars = [];
if (!process.env.GOOGLE_CLIENT_ID) missingVars.push("GOOGLE_CLIENT_ID");
if (!process.env.GOOGLE_CLIENT_SECRET) missingVars.push("GOOGLE_CLIENT_SECRET");
if (!process.env.NEXTAUTH_SECRET) missingVars.push("NEXTAUTH_SECRET");

if (missingVars.length > 0) {
    console.error("❌ CRITICAL ERROR: The following environment variables are MISSING in process.env:");
    missingVars.forEach(v => console.error(`   - ${v}`));
    console.error("ℹ️  Loaded Environment Variables (Keys Only):", Object.keys(process.env).filter(k => !k.startsWith("npm_")));
    console.error("ℹ️  Please verify your .env or .env.local file is in the root directory and formatted correctly.");
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET!,
})

export { handler as GET, handler as POST }
