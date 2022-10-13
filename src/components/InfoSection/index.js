import React from 'react';
/*import ReactLogo from '../../images/svg01.svg';*/
/*import { Button } from '../ButtonElements';*/
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, ExtraLine, AnotherLine, Heading, Subtitle, BtnWrap, ImgWrap, Img}  from './InfoElements';
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, anotherLine, addLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <ExtraLine darkText={darkText}>{addLine}</ExtraLine>
                    <AnotherLine darkText={darkText}>{anotherLine}</AnotherLine>
                    <TopLine darkText={darkText}>{topLine}</TopLine>
                    <Subtitle darkText ={darkText}>{description}</Subtitle>
                    
                    <BtnWrap>
                        
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={'computer'} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>

    </>
  );
};
export default InfoSection;