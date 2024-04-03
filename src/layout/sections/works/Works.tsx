import React from "react"
import { SectionTitle } from "components/SectionTitle"
import { FlexWrapper } from "components/FlexWrapper"
import { Work } from "layout/sections/works/work/Work"
import socialImg from "./../../../assets/images/work1jpg.jpg"
import timerImg from "./../../../assets/images/work2.jpg"
import { Container } from "components/Container"
import { TabMenu } from "layout/sections/works/tabMenu/TabMenu"
import { S } from "./Works_Styles"

const worksItems = ["All", "landing page", "React", "spa"]
const workData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
]

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {workData.map((w, index) => {
            return <Work key={index} title={w.title} text={w.text} src={w.src} />
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
