import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-bottom: 20px;
  padding-top: ${Constants.statusBarHeight};
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

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #cc0034;
  margin: 0 auto 0 -56px;
`;

export const LinkToBack = styled.TouchableOpacity`
  padding: 0 20px;
  margin-right: auto;
`;
export const InfoAnime = styled.View``;
export const ImageAnime = styled.Image`
  margin-top: 20px;
  width: 200px;
  height: 310px;
  border-radius: 4px;
`;
export const Title = styled.Text`
  margin-top: 20px;
  padding: 0 20px;
  color: #f1f1f1;
  font-weight: 700;
  font-size: 24px;
`;
export const Description = styled.Text`
  color: #f1f1f1;
  padding: 0 20px;
`;
export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  max-width: 250px;
  padding: 10px 25px;
  background-color: #cc0034;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #f1f1f1;
`;
