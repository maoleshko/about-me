import React, {useState} from 'react';
import * as Styled from "./styles";

function Profile() { 
  const [showText, setShowText] = useState(false); // состояние для отображения текста 
 
  const handleButtonClick = () => { 
    setShowText(!showText); // изменение состояния при нажатии на кнопку 
  } 
 
  return ( 
    <Styled.Container>
      <Styled.Photo> 
        <Styled.Image src="\images\photo2023.jpg"  alt="Photo from 2023" />
        <Styled.Image src="\images\photo2010.jpg" alt="Photo from 2010" />
      </Styled.Photo>  
       
     
      <Styled.TextContainer>
      <Styled.TextBox> 
      <Styled.Header>Мой профиль</Styled.Header>
          <Styled.Text>Олешко Мария<br/>Возраст: 29 лет<br/>Город: Москва</Styled.Text> 
          <Styled.Text>Почему программирование стало для меня любимым занятием?</Styled.Text> 
        </Styled.TextBox>
      <Styled.Button onClick={handleButtonClick}>Узнать больше</Styled.Button> {/* кнопка для отображения текста */} 
      {showText && ( {/* блок с текстом, который отображается при изменении состояния */} ,
        <Styled.TextAnswer>Процесс программирования можно смело отнести к творческому процессу. За время разработки и написания кода есть возможность создать что-то новое, уникальное и полезное. Все эти качества меня  привлекают. Когда в школе я только начала знакомится с программированием, еще не знала, насколько востребованная эта будет профессия, но решение инетересных задач и поиск эффективных решений точно подстегивали интерес к работе. <br/>Очень здорово, что сейчас программирование гибкое и одну и ту же задачу можно решить множеством способов, все зависит от разработчика. В настоящее время, я понимаю, что быть человеком, связанным с IT-индустрией это престижный статус и высокая зарплата, а приятным бонусом становится тот факт, что можно заниматься люимым делом и развиваться в данной области.</Styled.TextAnswer> 
      )}
      </Styled.TextContainer>
      
     
    </Styled.Container> 
  ); 
} 
 
export default Profile;