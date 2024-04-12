import React from "react"
import { S } from "./Skills_Styles"
import { FlexWrapper } from "components/FlexWrapper"
import { SectionTitle } from "components/SectionTitle"
import { Container } from "components/Container"
import { Skill } from "layout/sections/skills/skill/Skill"

const skillData = [
  {
    iconId: "code",
    title: "html5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "css",
    title: "css3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "react",
    title: "react",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "typescript",
    title: "typescript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "styledComponents",
    title: "styled components",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
  {
    iconId: "webDesign",
    title: "WEB DESIgN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
  },
]

export const Skills = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-between">
          {skillData.map((s, index) => {
            return <Skill key={index} iconId={s.iconId} title={s.title} description={s.description} />
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}
