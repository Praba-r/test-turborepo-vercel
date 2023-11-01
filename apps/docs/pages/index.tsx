import { Button } from "ui";
import { Contain } from "ui";
import { Options } from "ui";
function receiveMessage(message: string) {
  alert("Received message in Child Window: " + message);
}
export default function Web() {
  function click() {
    console.log("clicked");
  }
  return (
    <div className="">
      <Contain>
        <div>Docs</div>
        <div className="flex flex-col gap-3">
          <Button label="click me" url="https://google.com" click = {click}/>
          <div>
            <Options />
          </div>
          <button></button>
        </div>
      </Contain>
    </div>
  );
}
