import React from "react"
import styled from "styled-components"
import { SectionTitle } from "components/SectionTitle"
import { Icon } from "components/icon/Icon"
import { Slider } from "components/slider/Slider"
import { FlexWrapper } from "components/FlexWrapper"
import { IconWrapper } from "layout/sections/skills/skill/Skill"
import { Container } from "components/Container"

export const Testimonials = () => {
  return (
    <StyledTestimonials>
      <Container>
        <SectionTitle>Testimonials</SectionTitle>
        <FlexWrapper direction="column" align="center">
          <IconWrapper>
            <Icon iconId="quote" />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimonials>
  )
}

const StyledTestimonials = styled.section`
  min-height: 50vh;
  background-color: #72a3d2;

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`
