
import styled from "styled-components";


export const Container = styled.div`
width: 100%;
list-style: none;
margin: 0;
padding: 0;
`;

export const List = styled.ul`
width: 100%;
padding: 10px;
margin-bottom: 5px;
cursor: pointer;
background-color: #fff;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
transition: all 0.3s ease-in-out;
`;

export const ListItem = styled.li`
list-style-type: none;
padding: 10px;
margin-bottom: 5px;
cursor: pointer;
background-color: #fff;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
transition: all 0.3s ease-in-out;
&:hover {
  background-color: #191919;
  color: #fff;
}
`;


export const Title = styled.h1`
font-size: 2.2em;
text-align: center;
color: #191919;
`;

export const Subtitle = styled.h2`
font-size: 1.2em;
text-align: center;
color: #191919;
`;

export const Button = styled.button`
padding: 10px 15px;
border: none;
border-radius: 5px;
background-color: #191919;
color: #fff;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover {
  background-color: #fff;
  color: #191919;
}
`;
