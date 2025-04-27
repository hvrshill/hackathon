import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: "CLIENT" | "WORKER" | "ADMIN";
  }

  interface Session {
    user: User & {
      id: string;
      role: "CLIENT" | "WORKER" | "ADMIN";
    };
  }
} 