import React, { css } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const icons = {
  star: require("./../../assets/icons/star.svg"),
  esport: require("./../../assets/icons/esport.svg"),
};

const Image = styled.img`
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
`;

const Icon = (props) => {
  const { name, size } = props;
  return <Image src={icons[name]} size={size}/>;
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.number.isRequired,
};

Icon.defaultProps = {
  size: 32,
  name: "star"
};

export default Icon;
