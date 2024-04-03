import React from "react"
import { Icon } from "components/icon/Icon"
import { FlexWrapper } from "components/FlexWrapper"
import { S } from "../footer/Footer_Styles"

const socialItemsData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "in",
  },
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction="column" align="center">
        <S.Name>Svetlana</S.Name>
        <S.SocialList>
          {socialItemsData.map((i, index) => {
            return (
              <S.SocialItem>
                <S.SocialLink href={"#"}>
                  <Icon key={index} iconId={i.iconId} height={"21px"} width={"21px"} viewBox={"0 0 21 21"} />
                </S.SocialLink>
              </S.SocialItem>
            )
          })}
        </S.SocialList>
        <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  )
}
