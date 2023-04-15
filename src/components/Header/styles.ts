import styled from 'styled-components'
import backgroundImage from '../../assets/background.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`