export default async function processImage(
  imageUrl: string,
): Promise<string | undefined> {
  if (!imageUrl) {
    return undefined;
  }
  try {
    const response = await fetch("http://127.0.0.1:8000/process_image/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: imageUrl }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error("There has been a problem with fetch operation:", error);
    throw error;
  }
}
