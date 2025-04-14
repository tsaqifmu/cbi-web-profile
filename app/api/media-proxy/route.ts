/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/media-proxy/route.js
export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "URL parameter required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Fetch the file from Strapi
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data = await response.arrayBuffer();

    // Return the file data with appropriate headers
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type":
          response.headers.get("content-type") || "application/octet-stream",
        "Content-Length":
          response.headers.get("content-length") || Buffer.byteLength(data),
      },
    } as any);
  } catch (error) {
    console.error("Proxy error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch media" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
