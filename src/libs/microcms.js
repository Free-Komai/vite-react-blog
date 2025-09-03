import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

export const getPortforioData = async () => {
  const data = await client.get({
    endpoint: "portforio",
    queries: {
      limit: 20,
    },
  });
  return data.contents;
};

export const getSkillData = async () => {
  const data = await client.get({
    endpoint: "skill",
    queries: {
      limit: 20,
    },
  });
  return data.contents;
};

export const getProfileData = async () => {
  const data = await client.get({
    endpoint: "profile",
    queries: {
      limit: 1,
    },
  });
  return data.contents;
};
