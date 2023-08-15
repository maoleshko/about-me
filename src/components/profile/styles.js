import styled from 'styled-components'

export const Container = styled.div`
  width: 85%;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(192, 192, 192, 0.5);
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
  margin-top: 15px;
  margin-left: 5%;
  margin-right: 5%;
  `

  export const Header = styled.h1`
    margin-top: 15px;
    margin-left: 5%;
    margin-right: 5%;
  `
  export const Profile = styled.div`
    width: 80%;
    border-radius: 30px;
    background: rgba(250, 250, 250);
    display: flex;
    flex-direction: column;
    margin-bottom: 75px;
    margin-left: 10%;
    margin-right: 10%;
  `

export const Photo = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  margin-top: 50px;
`
export const TextContainer = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 20px;
flex-direction: column;
padding-left: 30px;
padding-right: 30px;
align-items: center;
`

export const Button = styled.button`
  text-decoration: none;
  color: #6b5770;
  background-image: linear-gradient(90deg, #fd7f34, #bd155b);
  display: inline-block;
  padding: 14px 30px;
  border: 1px solid;
  position: relative;
  z-index: 0;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0 15px 15px 0;
  outline: none;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;  
  
      &:before {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(90deg, #fd7f34, #bd155b);
    z-index: -2;
    transition: .4s;
    border-radius: 5px;
    }
    &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #fff, #fff);
    z-index: -1;
    transition: .4s;
    border-radius: 4px;
    }
    &:hover {
    color: #fff;
    transition: .3s;
    }
    &:hover:after {
    background: linear-gradient(90deg, #fd7f34, #bd155b);
    }
    &:active:after {
    background: linear-gradient(90deg, #d96d2d, #760f3a);
    }
    &:focus-visible {
    box-shadow: 0 0 0 3px #fd7f34;
    }
    &:disabled {
    pointer-events: none;
    }
    .btn:disabled:before {
    filter: grayscale(100%);
    }
`
export const Image = styled.img`
  width: 40%;
  border-radius: 50%;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`
export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  `
