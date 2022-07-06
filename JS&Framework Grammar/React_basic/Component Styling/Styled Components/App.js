import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import styled, { createGlobalStyle } from "styled-components";

const MyButton = (props) => <button  className={props.className} children={`MyButton ${props.children}`}/>;

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 5px;
  border: 2px solid ${((props) => props.color || "palevioletred")};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover{
    border: 2px solid red;
  }
  ::before{
    content: "@";
  }
`;

const GlobalStyle = createGlobalStyle`
button{
  color: yellow
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>버튼</StyledButton>
          <StyledButton primary>버튼</StyledButton>
          <StyledMyButton color="green">button</StyledMyButton>
        </p>
      </header>
    </div>
  );
}

export default App;
