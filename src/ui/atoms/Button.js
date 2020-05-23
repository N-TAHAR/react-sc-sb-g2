import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import Icon, { icons } from "../atoms/Icon"

export const iconsList = {
  star: icons.star,
  esport: icons.star
}

export const types = {
  primaryButton: {
    background: Colors.brand_primary,
    color: Colors.neutral_white,
    borderRadius: "4px",
    padding: "8px 16px",
  },
  secondaryButton: {
    background: Colors.neutral_white,
    color: Colors.neutral_black,
    borderRadius: "4px",
    padding: "8px 64px",
  },
  rareButton: {
    background: Colors.light_green,
    color: Colors.neutral_white,
    borderRadius: "38px",
    padding: "14px 30px",
  },
};

const ButtonWrapper = styled.button`
  background: ${(props) => types[props.type].background};
  color: ${(props) => types[props.type].color};
  padding: ${(props) => types[props.type].padding};
  border-radius: ${(props) => types[props.type].borderRadius};
  font-family: sans-serif;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  border: none;
`;

const Button = (props) => {
  const { text, type, icon } = props;
  return (
    <ButtonWrapper type={type}>
      {text ? <span>{text}</span> : <Icon name={icon} />}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
  text: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(iconsList)),
};

Button.defaultProps = {
  type: "primaryButton",
  icon: "esport"
};

export const EmptyButton = (props) => {
  const { type, children } = props;
  return (
    <ButtonWrapper type={type}>
      {children}
    </ButtonWrapper>
  );
}

EmptyButton.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)).isRequired,
  children: PropTypes.any,
};

EmptyButton.defaultProps = {
  type: "primaryButton",
};

export default Button;
