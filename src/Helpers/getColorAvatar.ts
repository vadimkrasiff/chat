import { TinyColor } from "@ctrl/tinycolor";

const getColorAvatar = (hash: string) => {
  const [r, g, b] = hash
    .slice(0, 3)
    .split("")
    .map((char) =>
      char.charCodeAt(0) > 255
        ? 255
        : char.charCodeAt(0) < 0
          ? 0
          : char.charCodeAt(0)
    );
  const color = new TinyColor({ r, g, b });
  return {
    color: color.toHexString(),
    colorLighten: color.lighten(40).saturate(20).toHexString(),
  };
};

export default getColorAvatar;
