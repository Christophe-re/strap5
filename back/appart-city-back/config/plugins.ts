export default ({ env }) => ({
  "strapi-v5-plugin-populate-deep": {
    config: {
      defaultDepth: 10, // Default is 5
    },
  },
  seo: {
    enabled: true,
  },
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "DOCUMENTATION",
        description: "",
        termsOfService: "YOUR_TERMS_OF_SERVICE_URL",
        contact: {
          name: "TEAM",
          email: "contact-email@something.io",
          url: "mywebsite.io",
        },
        license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
      },
      "x-strapi-config": {
        // Leave empty to ignore plugins during generation
        plugins: [],
        path: "/documentation",
      },
      servers: [
        { url: "http://localhost:1337/api", description: "Development server" },
      ],
      externalDocs: {
        description: "Find out more",
        url: "https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html",
      },
      security: [
        {
          bearerAuth: [
            "2c49f05b2e50babe1b3da01f58cb3b09678e8c556a6297ada0448631909ef727d43a2585db75a4f0506eb2e9e728a40dd6d789baccd55213427b7649d8007aa9f25cfe5989d7d7ba35be8b4d8d6b2e0771bc59c02e9e8ff731d9e8478c5b1e33f36cfe303ab9924d72f3d88a0a7670e6622b478f18d8e69cb8a76426a1735065",
          ],
        },
      ],
    },
  },
});

// 2c49f05b2e50babe1b3da01f58cb3b09678e8c556a6297ada0448631909ef727d43a2585db75a4f0506eb2e9e728a40dd6d789baccd55213427b7649d8007aa9f25cfe5989d7d7ba35be8b4d8d6b2e0771bc59c02e9e8ff731d9e8478c5b1e33f36cfe303ab9924d72f3d88a0a7670e6622b478f18d8e69cb8a76426a1735065
