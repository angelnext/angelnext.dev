import type { APIRoute } from "astro";
import satori from "satori";
import { html as toReactElement } from "satori-html";

const fontFile = await fetch(
  "https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
);
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

const height = 630;
const width = 1200;

export const get: APIRoute = async () => {
  const bgColor = "#fb923c";
  // console.log(request);
  const title = "AngelNext | Code and Coffee";
  const link = "https://angelnext.dev/";

  const html = toReactElement(`
  <div style="background-color: ${bgColor}; display: flex; flex-direction: column; height: 100%; padding: 3rem; width: 100%">
    <div style="display:flex; height: 100%; width: 100%; background-color: white; border: 6px solid black; border-radius: 0.5rem; padding: 2rem; filter: drop-shadow(6px 6px 0 rgb(0 0 0 / 1));">
      <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 2rem; width: 100%; filter: drop-shadow()">
        <div style="display: flex;">  
          <p style="font-size: 48px;">${title}</p>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline">
          <p style="font-size: 32px">${link}</p>
          <img src="https://i.imgur.com/ldJWva3.png" width="200px" height="200px" style="border: 3px solid black; border-radius: 0.5rem;" />
        </div>
      </div>
    </div>
  </div>
  `);

  const svg = await satori(html, {
    fonts: [
      {
        name: "Inter Latin",
        data: fontData,
        style: "normal",
      },
    ],
    height,
    width,
  });

  return new Response(svg, {
    headers: {
      "content-type": "image/svg",
    },
  });
};
