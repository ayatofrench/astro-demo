import type { APIRoute } from "astro";
import Htmx from "../../components/Htmx.svelte";

export const post: APIRoute = ({ params, request }) => {
  const prompt = request.headers.get("hx-prompt");

  const { html } = Htmx.render({
    prompt,
  });

  return new Response(html);
};
