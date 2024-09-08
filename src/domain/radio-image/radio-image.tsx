import { useState } from "react";
import { RadioGroup } from "../../product/radio-group/radio-group";
import css from "./radio-image.module.scss";

export const RadioImage = () => {
  const [value, setValue] = useState<"yes" | "no">("yes");
  return (
    <RadioGroup
      defaultValue="yes"
      value={value}
      onValueChange={(val) => {
        if (val === "yes" || val === "no") {
          setValue(val);
        }
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <RadioGroup.Label
            data-state={value === "yes" ? "checked" : "unchecked"}
            className={css.label}
          >
            <div className={css.image}></div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RadioGroup.Item value="yes">
                <RadioGroup.Indicator />
              </RadioGroup.Item>
              <div>사진</div>
            </div>
          </RadioGroup.Label>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <RadioGroup.Label
            data-state={value === "no" ? "checked" : "unchecked"}
            className={css.label}
          >
            <div className={css.image}></div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RadioGroup.Item value="no">
                <RadioGroup.Indicator />
              </RadioGroup.Item>
              <div>사진 2</div>
            </div>
          </RadioGroup.Label>
        </div>
      </div>
    </RadioGroup>
  );
};
