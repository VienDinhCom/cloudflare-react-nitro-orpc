import { defineEventHandler } from "nitro/h3";

import { createDb } from "@/backend/database";
import { createAuth } from "@/backend/lib/auth";

export default defineEventHandler((event) => {
  const db = createDb(event.context.env.CLOUDFLARE_D1);
  const auth = createAuth(db, event.context.env);

  return auth.handler(event.req as unknown as Request);
});
