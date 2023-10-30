import { Button } from "ui";
import { Contain } from "ui";
import { Options } from "ui";
export default function Web() {
  return (
    <div className="">
      <Contain>
        <div>Docs</div>
        <div className="flex flex-col gap-3">
          <Button label="click me" url="https://google.com" />
          <div>
            <Options />
          </div>
          
        </div>
      </Contain>
    </div>
  );
}
