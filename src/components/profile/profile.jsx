import React, {useState} from 'react';
import * as Styled from "./styles";

function Profile() { 
  const [showText, setShowText] = useState(false); // состояние для отображения текста 
 
  const handleButtonClick = () => { 
    setShowText(!showText); // изменение состояния при нажатии на кнопку 
  } 
 
  return ( 
    <Styled.Container> 
      <Styled.Header>Мой профиль</Styled.Header>
      <Styled.Profile>
      
      <Styled.Photo> 
        <Styled.Image src="\images\photo2023.jpg"  alt="Photo from 2023" />
        <Styled.Image src="\images\photo2010.jpg" alt="Photo from 2010" />
      </Styled.Photo> 
      <Styled.TextContainer>
      <Styled.TextBox> 
          <Styled.Text>Олешко Мария</Styled.Text> 
          <Styled.Text>Возраст: 29</Styled.Text> 
          <Styled.Text>Город: Москва</Styled.Text> 
          <Styled.Text>почему программирование стало для тебя любимым занятием</Styled.Text> 
        </Styled.TextBox>
      <Styled.Button onClick={handleButtonClick}>Узнать больше</Styled.Button> {/* кнопка для отображения текста */} 
      {showText && ( {/* блок с текстом, который отображается при изменении состояния */} ,
        <Styled.TextBox> 
          <Styled.Text>Ответ</Styled.Text> 
        </Styled.TextBox> 
      )}
      </Styled.TextContainer>

      </Styled.Profile>
    </Styled.Container> 
  ); 
} 
 
export default Profile;