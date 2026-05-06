export function getEmbedUrl(provider: "youtube" | "vimeo", url: string) {
  if (provider === "vimeo") {
    const id = url.split("/").filter(Boolean).pop() ?? "";
    return `https://player.vimeo.com/video/${id}`;
  }

  const match = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]+)/);
  const id = match?.[1] ?? url;
  return `https://www.youtube.com/embed/${id}`;
}
