import React from "react";
import sprite from "../../../images/icons.svg";
import SocialMedia from "../../Common/SocialMedia/SocialMedia";
import { Content, GeneralContainer, Icon, SocialMediaContainer } from "./ContactInfo.styled";

const ContactInfo = () => {
  return (
    <GeneralContainer>
      <Content>
        <p>Phone:</p>
        <div>
          <Icon width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-call`}></use>
          </Icon>
          <a href="tel:380981234567">38 (098) 12 34 567</a>
        </div>
        <div>
          <Icon width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-call`}></use>
          </Icon>
          <a href="tel:380931234567">38 (093) 12 34 567</a>
        </div>
      </Content>
      <Content>
        <p>Email:</p>
        <div>
          <Icon width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-mail`}></use>
          </Icon>
          <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        </div>
      </Content>
      <Content>
        <p>Address:</p>
        <address>
          <Icon width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-map`}></use>
          </Icon>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        </address>
      </Content>
      <Content>
        <p>Social Networks:</p>
        <SocialMediaContainer>
          <SocialMedia />
        </SocialMediaContainer>
      </Content>
    </GeneralContainer>
  );
};

export default ContactInfo;
