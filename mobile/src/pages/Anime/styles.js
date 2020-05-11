import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #19181f;
`;
export const InfoAnime = styled.View``;
export const ImageAnime = styled.Image`
  margin-top: 40px;
  width: 200px;
  height: 310px;
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
