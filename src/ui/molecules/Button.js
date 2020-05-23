import React, { css } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "../atoms/Icon"
import { EmptyButton } from "../atoms/Button"

const ChildrenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > img {
    margin-right: 5px;
  }
  & > span {
    transform: translateY(1.5px);
  }
`;

const Button = (props) => {
  const { text, icon, sizeIcon } = props;
  return ( 
    <EmptyButton type="primaryButton">
      <ChildrenWrapper>
        <Icon name={icon} size={sizeIcon}/>
        <span>{text}</span>
      </ChildrenWrapper>
    </EmptyButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string.isRequired,
  sizeIcon: PropTypes.number
};

Button.defaultProps = {
  icon: "star"
};

export default Button;
