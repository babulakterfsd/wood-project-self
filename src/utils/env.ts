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
  },
});

export default ENV;
