import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="nx-font-semibold">tRPC Cheatsheet</span>,
  project: {
    link: "https://github.com/lawrencecchen/trpc-cheatsheet",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/lawrencecchen/trpc-cheatsheet",
  footer: {
    text: "tRPC Cheatsheet",
  },
};

export default config;
