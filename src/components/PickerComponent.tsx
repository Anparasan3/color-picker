import { useState } from "react";
import { clickDisplayCopied } from "../utils/color-copy";

const PickerComponent: React.FC = () => {
  const [color, setColor] = useState("#9B75F5");

  const handlePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setColor(event.target.value)
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: ".2rem" }}>
      {/** default browser colot picker id*/}
      <input id="color-wheel" type="color" defaultValue="#9B75F5" onChange={handlePickerChange} />

      <span id="color-columns" onChange={clickDisplayCopied}
        style={{ display: "flex", alignItems: "center", }}
      >
        <div id="zero" style={{ color: color, border: "1px solid #8c8c8c", padding: "1px 5px", borderRadius: "5px" }}>
          Copy
        </div>

      </span>
    </div>
  )
}

export default PickerComponent