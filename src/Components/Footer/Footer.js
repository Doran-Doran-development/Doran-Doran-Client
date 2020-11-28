import React from "react";
import {
  Copyright,
  FooterWrapper,
  IconWrapper,
  InquireWrapper,
  PrivacyPolicy,
  TextWrapper,
} from "./Styled";
import instagram from "../../img/i_icon.png";
import facebook from "../../img/f_icon.png";
import whatsapp from "../../img/call_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <IconWrapper>
        <img src={instagram} alt='instagram' />
        <img src={facebook} alt='instagram' />
        <img src={whatsapp} alt='instagram' />
      </IconWrapper>
      <TextWrapper>
        <InquireWrapper>
          <p>문의 062-115-6437 ㅣ DoranDvel@dorandoran.co.kr</p>
        </InquireWrapper>
        <PrivacyPolicy>
          <Link className='link'>개인정보 처리방침</Link>
        </PrivacyPolicy>
        <Copyright>
          <p>ⓒ 2020 Team DoranDoran</p>
        </Copyright>
      </TextWrapper>
    </FooterWrapper>
  );
};

export default Footer;
