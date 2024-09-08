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
