import React from "react"
import styled from "styled-components"
import { SectionTitle } from "components/SectionTitle"
import { FlexWrapper } from "components/FlexWrapper"
import { Work } from "layout/sections/works/work/Work"
import socialImg from "./../../../assets/images/social-network.png"
import timerImg from "./../../../assets/images/new-york.png"
import { Container } from "components/Container"
import { TabMenu } from "layout/sections/works/tabMenu/TabMenu"

const worksItems = ["All", "landing page", "React", "spa"]
export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify="space-between" align="flex-start">
          <Work
            title="Social Network"
            src={socialImg}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />

          <Work
            title="Timer"
            src={timerImg}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.section``
