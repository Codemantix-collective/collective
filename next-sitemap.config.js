/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://codemantix-collectives.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/admin/*", "/_next/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    additionalSitemaps: ["https://codemantix-collectives.vercel.app/sitemap.xml"],
  },
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.includes("/Services")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.includes("/Projects")) {
      priority = 0.8;
      changefreq = "monthly";
    } else if (path.includes("/About")) {
      priority = 0.6;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
