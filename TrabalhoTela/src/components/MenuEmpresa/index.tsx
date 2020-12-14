import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, ButtonContainer, ButtonSubMenu, ButtonText, Container, HeaderContainer, SubMenu, SubMenuButtonContainer } from './styles';

export default function MenuCliente() {
  const navigation = useNavigation();

  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <Container>
      <HeaderContainer />
      <ButtonContainer>
        <Button>
          <ButtonText>
            Informações da conta
          </ButtonText>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>
          <ButtonText>
            Exibir empresas
          </ButtonText>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button>
          <ButtonText>
            Exibir pontos
          </ButtonText>
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button onPress={() => setShowSubMenu(!showSubMenu)}>
          <ButtonText>
            Gerenciar pontos   {showSubMenu ? <MaterialIcons name="keyboard-arrow-down" size={18} color="#DDD" /> : <MaterialIcons name="keyboard-arrow-right" size={18} color="#DDD" />}
          </ButtonText>
        </Button>
      </ButtonContainer>
      {showSubMenu ?
        <SubMenu>
          <SubMenuButtonContainer>
            <ButtonSubMenu onPress={() => navigation.navigate('ResgatarCodigo')}>
              <ButtonText>
                Gerar pontos
            </ButtonText>
            </ButtonSubMenu>
          </SubMenuButtonContainer>
          <SubMenuButtonContainer>
            <ButtonSubMenu>
              <ButtonText>
                Gerar código de resgate
            </ButtonText>
            </ButtonSubMenu>
          </SubMenuButtonContainer>
        </SubMenu> : null}
    </Container>
  )
}