import React from "react"
import styled from "styled-components"
import { theme } from "styles/Theme"
import { Menu } from "layout/header/HeaderMenu/menu/Menu"
import { S } from "../HeaderMenu_Styles"

export const DesktopMenu: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenu>
  )
}