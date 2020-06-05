export const setSeo = data => {
  return {
    type: "SET_SEO_DATA",
    payload: data
  };
};

export const getSeoData = pageSlug => {
  const url = `https://api-content.priotix.xyz/pages/4/${pageSlug}/meta`;
  return fetch(url);
};