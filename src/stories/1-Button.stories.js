import React from 'react';
import Button from '../ui/atoms/Button';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => <Button type="primaryButton" text={text("Label", "Primary Button")} />;

export const Secondary = () => <Button type="secondaryButton" text={text("Label", "Secondary Button")} />;

export const Rare = () => <Button type="rareButton" icon={select('icon', ['esport', 'star'])} />;
