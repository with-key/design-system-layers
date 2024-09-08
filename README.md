# 디자인 시스템 계층

<img width="1280" alt="image" src="https://github.com/user-attachments/assets/66a362e4-c785-4d12-a295-d4e9862bb7d4">


## design system component
- 추상화 수준이 높음
- 확장성 >> 사용성
- 형태 없이, 기능만 제공
```tsx
// radio-group.tsx
export { Indicator, Item, Root } from "@radix-ui/react-radio-group";
```

## product system component
- `Core`의 추상화 수준을 한단계 낮춰서 제공
- 확장성 > 사용성
- 기본 `theme`이 적용되어 있음 (테마 외의 디자인을 적용하기 위한 headless 형태로도 제공함)
```tsx

// radio-group.tsx
import { ReactNode, useId } from "react";
import * as Primitive from "../../core/radio-group/radio-group";
import css from "./radio-group.module.scss";

type RootProps = React.ComponentPropsWithoutRef<typeof Primitive.Root> & {};

const Root = (props: RootProps) => {
  return <Primitive.Root className={css.container} {...props} />;
};

type ItemProps = React.ComponentPropsWithoutRef<typeof Primitive.Item> & {};

const Item = (props: ItemProps) => {
  return <Primitive.Item className={css.item} {...props} />;
};

type IndicatorProps = React.ComponentPropsWithoutRef<
  typeof Primitive.Indicator
> & {};

const Indicator = (props: IndicatorProps) => {
  return <Primitive.Indicator className={css.indicator} {...props} />;
};

type LabelProps = Omit<React.ComponentPropsWithoutRef<"label">, "children"> & {
  children: ReactNode | ((id: string) => ReactNode);
};


// design system 레벨에서는 제공되지 않지만, 사용성을 높이기 위해 서브 컴포넌트 추가함
const Label = ({ children, ...props }: LabelProps) => {
  const id = useId();
  return (
    <label {...props} className={css.label || props.className}>
      {typeof children === "function" ? children(id) : children}
    </label>
  );
};

export const RadioGroup = Object.assign(Root, {
  Item,
  Indicator,
  Label,
});


```

## domain component
- 도메인의 맥락을 담고 있는 영역
- 도메인의 세부 형태와 세부 기능을 추가적으로 담고 있음
- 도메인의 맥락을 담고 있지만, 재사용 될 순 있음
```tsx
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
```

## theme (color tokens)
```tsx
// main.tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import Theme from "./styles/utils/theme.tsx";

createRoot(document.getElementById("root")!).render(
    // Theme의 `accentColor`에 따라 --accent-color가 변경됨
  <Theme accentColor="blue">
    <App />
  </Theme>
);
```
```css
@import "./primitive-colors.scss";

[data-accent-color="red"] {
  --accent-01: var(--red01);
  --accent-02: var(--red02);
  --accent-03: var(--red03);
  --accent-04: var(--red04);
  --accent-05: var(--red05);
  --accent-06: var(--red06);
  --accent-07: var(--red07);
  --accent-08: var(--red08);
  --accent-09: var(--red09);
  --accent-10: var(--red10);
}

[data-accent-color="blue"] {
  --accent-01: var(--blue01);
  --accent-02: var(--blue02);
  --accent-03: var(--blue03);
  --accent-04: var(--blue04);
  --accent-05: var(--blue05);
  --accent-06: var(--blue06);
  --accent-07: var(--blue07);
  --accent-08: var(--blue08);
  --accent-09: var(--blue09);
  --accent-10: var(--blue10);
}

[data-accent-color="green"] {
  --accent-01: var(--green01);
  --accent-02: var(--green02);
  --accent-03: var(--green03);
  --accent-04: var(--green04);
  --accent-05: var(--green05);
  --accent-06: var(--green06);
  --accent-07: var(--green07);
  --accent-08: var(--green08);
  --accent-09: var(--green09);
  --accent-10: var(--green10);
}

```

### 레퍼런스
> [so-so.dev](https://so-so.dev/react/design-system-beyond-code/) 디자인 시스템 코드를 넘어서
> [radix-theme](https://github.com/radix-ui/themes/blob/main/packages/radix-ui-themes/src/components/theme.tsx)

