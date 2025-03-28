/// <reference types="vite/client" />

import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "react" {
  type HTMLAttributes = AttributifyAttributes;
}
