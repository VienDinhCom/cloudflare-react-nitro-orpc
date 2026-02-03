import type { H3Event } from "nitro/h3";

import { createEnv as createEnvCore } from "@t3-oss/env-core";
import { z } from "zod";

export const EnvSchema = z.object({
  CLOUDFLARE_D1: z.instanceof(D1Database),
  BASE_URL: z.string().url(),
  BETTER_AUTH_SECRET: z.string(),
});

export type Env = z.infer<typeof EnvSchema>;

export function createEnv(event: H3Event): Env {
  return createEnvCore({
    server: EnvSchema.shape,
    runtimeEnv: event.context.env as any,
    emptyStringAsUndefined: true,
  }) as unknown as Env;
}
