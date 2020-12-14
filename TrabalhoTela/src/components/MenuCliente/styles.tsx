import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
  position: absolute;
  max-width: 280px;
  top: 0px;
  left: 0px;
  height: 100%;
  background-color: #00B7F1;
  z-index: 10;
`

export const HeaderContainer = styled.View`
  margin-bottom: 50px;
  width: 100%;
`

export const ButtonContainer = styled.View`
  margin: 5px 0px;
`

export const Button = styled.TouchableOpacity`
  width: 269px;
  height: 59px;
  background-color: #3AA6BD;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #FFF;
`

export const SubMenu = styled.View`
  width: 225px;
  align-items: center;
  align-self: center;
`

export const SubMenuButtonContainer = styled.View`
  margin: 6px 0px;
`
export const ButtonSubMenu = styled.TouchableOpacity`
width: 225px;
height: 47px;
background-color: #3AA6BD;
justify-content: center;
align-items: center;
`