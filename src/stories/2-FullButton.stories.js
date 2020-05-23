import React from 'react';
import FullButton from '../ui/molecules/Button'
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
  title: 'ButtonWithIcon',
  component: FullButton,
  decorators: [withKnobs],
};

export const ButtonWithIcon = () => <FullButton icon={select('name', ['star', 'esport'])} sizeIcon={16} text={text("Label", "Primary Button With Icon")}/>;
