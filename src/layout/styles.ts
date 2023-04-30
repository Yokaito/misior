import styled from 'styled-components'

/*
  HD = Header
  LB = Left Bar
  MNL = Menu Left
  MC = Main Content
  MNR = Menu Right
  RB = Right Bar
  FT = Footer
*/

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(20px, auto) 180px minmax(25rem, 55rem) 180px minmax(
      20px,
      auto
    );
  grid-template-rows: 8.5rem max-content auto;
  grid-template-areas:
    'HD HD HD HD HD'
    'LB MNL MC MNR RB'
    'FT FT FT FT FT';
  gap: ${({ theme }) => theme.spacings[4]};
`

export const MainContentWrapper = styled.section`
  grid-area: MC;
  gap: ${({ theme }) => theme.spacings[4]};
  display: flex;
  flex-direction: column;
`

export const MenuLeftWrapper = styled.aside`
  grid-area: MNL;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings[4]};
`

export const MenuRightWrapper = styled.aside`
  grid-area: MNR;
`
