import React from "react"
import { Menu } from "../menu/Menu"
import { S } from "../HeaderMenu_Styles"

export const MobileMenu: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  )
}
