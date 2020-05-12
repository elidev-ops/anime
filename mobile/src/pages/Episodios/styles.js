import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
  padding-top: ${Constants.statusBarHeight};
  background-color: #19181f;
`;
export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.05);
  padding-bottom: 20px;
`;
export const LinkToBack = styled.TouchableOpacity`
  margin-right: auto;
  padding: 0 20px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #cc0034;
  margin: 0 auto 0 -56px;
`;
export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -8px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #1e1e26;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const BtnEpisodio = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #1e1e26;
  padding: 10px 20px;
  margin-bottom: 8px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  align-items: center;
  justify-content: space-between;
`;
export const TitleEpisodio = styled.Text`
  color: #f1f1f1;
`;

export const LinkEpisodio = styled.TouchableOpacity`
  background-color: #cc0034;
  padding: 10px 20px;
  border-radius: 4px;
`;
export const TextLink = styled.Text`
  font-weight: 700;
  color: #19181f;
`;
