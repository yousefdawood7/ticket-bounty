import type { NextConfig } from "next";

import "./src/lib/env";

const nextConfig: NextConfig = {
  typedRoutes: true,

  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;
