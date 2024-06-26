import { config as ksConfig, fields, collection } from "@keystatic/core";

export const config = ksConfig({
  storage: {
    kind: "github",
    repo: "trangcongthanh/remix-keystatic-playground",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "app/keystatic/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
