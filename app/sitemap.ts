import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vikas-k.vercel.app", 
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}