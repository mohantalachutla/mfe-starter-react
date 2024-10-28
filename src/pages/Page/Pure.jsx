import { useEffect } from "react";
import { registry } from "@mohantalachutla/mfe-utils";

const Page = ({ message } = props) => {
  useEffect(() => {
    registry.dispatch("mfe-starter-event1", {
      message: "Hello there stranger",
    });
  }, []);
  return (
    <div>
      <h1>Mfe-starter's Page</h1>
      <p>
        Message from stranger
        <br />
        <b>{message ?? "I am alone"}</b>
      </p>
    </div>
  );
};
export default Page;
