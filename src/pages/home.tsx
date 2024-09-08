import { Button } from "../product/button/button";
import { RadioCards } from "../product/radio-cards/radio-cards";
import { RadioGroup } from "../product/radio-group/radio-group";
import { RadioImage } from "../domain/radio-image/radio-image";
import { RadioWithTag } from "../domain/radio-with-tag/radio-with-tag";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>hello world!</p>
      <div>
        <Button>버튼</Button>
      </div>

      <div>
        <RadioCards defaultValue="yes">
          <RadioCards.Item value="yes">네</RadioCards.Item>
          <RadioCards.Item value="no">아니오</RadioCards.Item>
        </RadioCards>
      </div>

      <div>
        <RadioWithTag></RadioWithTag>
      </div>

      <div>
        <RadioGroup defaultValue="yes">
          <RadioGroup.Label>
            {(id) => (
              <>
                <RadioGroup.Item value="yes" id={id}>
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <span>예</span>
              </>
            )}
          </RadioGroup.Label>

          <RadioGroup.Label>
            {(id) => {
              return (
                <>
                  <RadioGroup.Item value="no" id={id}>
                    <RadioGroup.Indicator />
                  </RadioGroup.Item>
                  <span>아니오</span>
                </>
              );
            }}
          </RadioGroup.Label>
        </RadioGroup>
      </div>

      <div>
        <RadioImage></RadioImage>
      </div>
    </div>
  );
};
