import React from "react"
import styled from "styled-components"
import { SectionTitle } from "components/SectionTitle"
import { Icon } from "components/icon/Icon"
import { Slider } from "components/slider/Slider"
import { FlexWrapper } from "components/FlexWrapper"
import { Container } from "components/Container"
import { S } from "layout/sections/skills/Skills_Styles"

export const Testimonials: React.FC = () => {
  return (
    <StyledTestimonials>
      <Container>
        <SectionTitle>Testimonials</SectionTitle>
        <FlexWrapper direction="column" align="center">
          <S.IconWrapper>
            <Icon iconId="quote" />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimonials>
  )
}

const StyledTestimonials = styled.section`
  position: relative;
  min-height: 50vh;
  background-color: #72a3d2;

  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }
`
