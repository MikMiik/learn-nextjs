export const clearCache = async (value: string, type: string = "tag") => {
  await fetch(`api/cache`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      [type]: value,
    }),
  });
};
