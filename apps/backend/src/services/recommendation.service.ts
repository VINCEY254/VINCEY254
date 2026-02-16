export const getAiRecommendations = async (productIds: string[], userPreferences: string[]): Promise<string[]> => {
  const merged = [...new Set([...productIds, ...userPreferences])];
  return merged.slice(0, 8);
};
