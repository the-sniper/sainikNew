import React from "react";
import centered from "@storybook/addon-centered/react";
import { sized } from "../../../.storybook/decorators";
import CustomModal from "./CustomModal";
export default {
  title: "Custom Model",
  decorators: [sized({ width: "430px", height: "500px" }), centered],
};

export const defaultCustomModel = () => (
  <CustomModal
    isModalOpen
    modalTitle="Default Custom Model Storybook Test"
    onUserClose={() => {
      console.log("onUserClose function was executed. ");
    }}
  >
    <div>This is some test content. </div>
  </CustomModal>
);
