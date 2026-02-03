import type { Env } from "@/backend/lib/env";

declare module "nitro/h3" {
  interface H3EventContext {
    env: Env;
  }
}

export {};
