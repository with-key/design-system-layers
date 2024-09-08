import * as Primitive from "../../core/radio-group/radio-group";
import css from "./radio-cards.module.scss";

type RootProps = React.ComponentPropsWithoutRef<typeof Primitive.Root> & {};

const Root = (props: RootProps) => {
  return <Primitive.Root {...props} className={css.container} />;
};

type ItemProps = React.ComponentPropsWithoutRef<typeof Primitive.Item> & {};

const Item = (props: ItemProps) => {
  return <Primitive.Item {...props} className={css.item} />;
};

export const RadioCards = Object.assign(Root, { Item });
