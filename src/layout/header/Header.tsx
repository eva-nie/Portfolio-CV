import React, { useEffect, useState } from "react"
import { S } from "./Header_Styles"
import { Logo } from "components/logo/Logo"
import { Container } from "components/Container"
import { FlexWrapper } from "components/FlexWrapper"
import { MobileMenu } from "layout/header/HeaderMenu/mobileMenu/MobileMenu"
import { DesktopMenu } from "layout/header/HeaderMenu/desktopMenu/DesktopMenu"

const items = ["Home", "Skills", "Works", "Testimonials", "Contact"]

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)

    //Returns a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          {width < breakpoint ? <MobileMenu menuItems={items} /> : <DesktopMenu menuItems={items} />}
        </FlexWrapper>
      </Container>
    </S.Header>
  )
}
