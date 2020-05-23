import React from 'react';
import Icon from '../ui/atoms/Icon';
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: 'Icon',
  component: Icon,
  decorators: [withKnobs],
};

export const StarIcon = () => <Icon name={select('icon', ['star', 'esport'])} />