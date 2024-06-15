import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { handleLoader } from "@keystatic/remix/api";
import { config } from "../keystatic/configs";

export const loader: LoaderFunction = (args) =>
  handleLoader(
    {
      config,
      clientId: args.context.cloudflare.env.KEYSTATIC_GITHUB_CLIENT_ID,
      clientSecret: args.context.cloudflare.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
      secret: args.context.cloudflare.env.KEYSTATIC_SECRET,
    },
    args
  );
export const action: ActionFunction = (args) =>
  handleLoader(
    {
      config,
      clientId: args.context.cloudflare.env.KEYSTATIC_GITHUB_CLIENT_ID,
      clientSecret: args.context.cloudflare.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
      secret: args.context.cloudflare.env.KEYSTATIC_SECRET,
    },
    args
  );
