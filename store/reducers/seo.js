export const seo = (state = {}, action) => {
  if (action.type === "SET_SEO_DATA") {
    return {
      ...state,
      seoData: action.payload
    };
  }

  return state;
};
