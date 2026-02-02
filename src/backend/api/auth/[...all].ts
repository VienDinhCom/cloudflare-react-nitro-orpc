import { defineEventHandler } from "nitro/h3";

import { createDb } from "@/backend/database";
import { createAuth } from "@/backend/lib/auth";

export default defineEventHandler((event) => {
  const env = (event as any).context.cloudflare?.env;
  const d1 = env?.DB;

  if (!d1) {
    throw new Error("Missing D1 database binding");
  }

  const db = createDb(d1 as D1Database);
  const auth = createAuth(db, env);

  return auth.handler(event.req as unknown as Request);
});
