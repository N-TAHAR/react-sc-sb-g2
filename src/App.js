import React from "react";
import Button from "./ui/atoms/Button";
import FullButton from "./ui/molecules/Button";
import Icon from "./ui/atoms/Icon";

export default function App() {
  return (
    <div className="App">
      <FullButton icon="star" sizeIcon={16} text="Primary Button With Icon" />
      <Icon name="star"/>
      <Button type="primaryButton" text="Primary" />
      <Button type="secondaryButton" text="Secondary" />
    </div>
  );
}
