import type { NextConfig } from "next";

import "./src/lib/env";

const nextConfig: NextConfig = {
  typedRoutes: true,
  cacheComponents: true,
};

export default nextConfig;
