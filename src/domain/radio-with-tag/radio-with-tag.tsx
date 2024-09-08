import { useState } from "react";
import * as Primitive from "../../core/radio-group/radio-group";
import css from "./radio-with-tag.module.scss";

export const RadioWithTag = () => {
  const [value, setValue] = useState<"normal" | "standard">("normal");
  return (
    <Primitive.Root
      className={css.container}
      value={value}
      onValueChange={(value) => {
        if (value === "normal" || value === "standard") {
          setValue(value);
        }
      }}
    >
      <Primitive.Item value="normal" className={css.item}>
        일반세액공제
        <div className={css.badge}>유리</div>
      </Primitive.Item>
      <Primitive.Item value="standard" className={css.item}>
        표준세액공제
      </Primitive.Item>
    </Primitive.Root>
  );
};
