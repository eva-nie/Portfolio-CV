import React, { useState } from "react"
import { SectionTitle } from "components/SectionTitle"
import { FlexWrapper } from "components/FlexWrapper"
import { Work } from "layout/sections/works/work/Work"
import socialImg from "./../../../assets/images/work1jpg.jpg"
import timerImg from "./../../../assets/images/work2.jpg"
import { Container } from "components/Container"
import { TabMenu, TabsStatusType } from "layout/sections/works/tabMenu/TabMenu"
import { S } from "./Works_Styles"

const tabsItems: Array<{ status: TabsStatusType; title: string }> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "landing page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
]

const worksData = [
  {
    title: "Social Network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
  },
  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "react",
  },
]

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
  //пересенная, куда складываем отфильтрованные проекты

  let filteredWorks = worksData

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((w) => w.type === "landing")
  }
  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((w) => w.type === "react")
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((w) => w.type === "spa")
  }

  const changeFilterStatus = (value: TabsStatusType) => setCurrentFilterStatus(value)

  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {filteredWorks.map((w, index) => {
            return <Work key={index} title={w.title} text={w.text} src={w.src} />
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
