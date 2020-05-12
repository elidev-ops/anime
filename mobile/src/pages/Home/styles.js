import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #19181f;
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #cc0034;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  width: 100%;
  max-width: 270px;
  flex: 1;
`;

export const TitleButton = styled.Text``;

export const Title = styled.Text`
  color: #cc0034;
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;
`;

export const AnimeContent = styled.View`
  width: 100%;
  background-color: #1e1e26;
  padding: 10px;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
`;
export const AnimeTitle = styled.Text`
  margin-top: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 10px;
`;
export const AnimeImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-left: 10px;
  width: 100%;
  max-width: 30px;
`;

export const SubTitleContext = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  margin-left: 10px;
`;
export const AnimeInfo = styled.View`
  flex: 1;
  width: 100%;
`;

export const ButtonToDetail = styled.View`
  margin-left: 10px;
  justify-content: center;
  align-items: center;

  background-color: #cc0034;
  padding: 10px;
  border-radius: 5000px;
`;
export const TextToDetail = styled.Text`
  color: #f1f1f1;
  font-size: 18px;
  margin-right: 10px;
  font-weight: 700;
`;
