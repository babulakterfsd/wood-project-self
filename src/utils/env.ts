import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

const ENV = createEnv({
  clientPrefix: 'NEXT_PUBLIC_',
  runtimeEnv: process.env,
  client: {},
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'testing'])
      .default('production'),
    MONGODB_URI: z.string().url(),
    BACKEND_API_URL: z.string().url(),
  },
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  skipValidation: process.env.SKIP_ENV_VALIDATION === 'true',
});

export default ENV;
