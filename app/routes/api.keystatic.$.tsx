import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { handleLoader } from "@keystatic/remix/api";
import { config } from "../keystatic/configs";

const env = {
  clientId: import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
  clientSecret: import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
  secret: import.meta.env.KEYSTATIC_SECRET,
};

export const loader: LoaderFunction = (args) =>
  handleLoader({ config, ...env }, args);
export const action: ActionFunction = (args) =>
  handleLoader({ config, ...env }, args);
