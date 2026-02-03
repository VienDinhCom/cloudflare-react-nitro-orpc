import type { H3Event } from "nitro/h3";

import { createDb } from "@/backend/database";
import { createAuth } from "@/backend/lib/auth";

export async function createORPCContext(event: H3Event) {
  const env = event.context.env;
  const db = createDb(env.CLOUDFLARE_D1);
  const auth = createAuth(db, env);

  return { event, db, auth };
}

export type ORPCContext = Awaited<ReturnType<typeof createORPCContext>>;
