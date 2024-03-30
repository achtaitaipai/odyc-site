import odyc from "odyc/dist/index.global.js?raw";
import handleErrorScript from "./handleError.js?raw";
export const prepareCode = (
  code: string,
  lang: string,
  debug = true
) => /* html */ `
<html lang="${lang}">
<head>
<meta charset="utf-8" />
${
  debug
    ? `
<style>
.odyc_wrapper:focus-within{
  outline: 1px solid blue;
}
</style>`
    : ""
}
</head>
<body>
  <div id="app"></div>
  ${
    debug
      ? `
    <script>
    ${handleErrorScript}
  </script>`
      : ""
  }
  <script>
${odyc}
const {createGame, createSound} = odyc
//startofthegame
${code}
//endofthegame
  </script>
</body>
</html>
`;

export const parseCode = (code: string) => {
  return code.match(
    /(?<=\/\/startofthegame\n)((.|\n)*)(?=\n\/\/endofthegame)/gm
  );
};

export function updateIframe(
  code: string,
  iframe: HTMLIFrameElement,
  lang: string
): void {
  const source = prepareCode(code, lang);
  iframe.srcdoc = source;
}
