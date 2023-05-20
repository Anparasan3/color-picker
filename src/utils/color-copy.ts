// Convert RGB value to hex value taken from
// https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
function rgb2hex(rgb: any) {
  if (/^#/.test(rgb)) return rgb; // if returns colors as hexadecimal
  let re = /\d+/g;
  let hex = (x: any) => (x >> 4).toString(16) + (x & 0xf).toString(16);
  return "#" + hex(re.exec(rgb)) + hex(re.exec(rgb)) + hex(re.exec(rgb));
}

function getBackgroundHexValue(rgbValue: string) {
  let hexValue = rgb2hex(rgbValue);
  navigator.clipboard.writeText(hexValue);
  return hexValue;
}

export function clickDisplayCopied(event: React.ChangeEvent<HTMLInputElement>) {
  let columnClicked = event.target.parentElement.style.background;
  getBackgroundHexValue(columnClicked);
  let n = event.target.children[0];
  n.style.display = "block";
  n.innerHTML = "Hex Value Copied!";
  setTimeout(function () {
    n.style.display = "none";
  }, 700);
}
