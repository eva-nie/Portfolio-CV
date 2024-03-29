import React from "react"
import styled from "styled-components"
import { Link } from "components/Link"
import { theme } from "styles/Theme"

// type MenuPropsType = {
//     menuItems: Array<string>
// }

export const TabMenu = (props: { menuItems: string[] }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          )
        })}
      </ul>
    </StyledTabMenu>
  )
}

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    //gap: 20px;
    justify-content: space-between;
    //  эта связочка из двух строк дает нам эффект резиновости, менб не будет становиться больше родителя:
    max-width: 352px;
    width: 100%;
    border: 1px solid red;
    //  align in center and margin bottom:
    margin: 0 auto 40px;
  }
  & ${Link} {
    color: ${theme.colors.font};
  }
`

const ListItem = styled.li``
