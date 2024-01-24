import React from "react";
import { CopilotKitChat, CopilotKitChatProps } from "./Chat";

export const CopilotPopup: React.FC<CopilotKitChatProps> = (props) => {
  props = {
    ...props,
    className: props.className ? props.className + " copilotKitPopup" : "copilotKitPopup",
  };
  return <CopilotKitChat {...props} />;
};
