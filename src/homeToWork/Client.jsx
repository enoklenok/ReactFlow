// ** React
import React from "react";

// ** ReactFlow
import ReactFlow, { Background, MiniMap, Controls } from "reactflow";

// ** Styled
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Client = () => {
  return (
    <Wrapper>
      <ReactFlow>
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </Wrapper>
  );
};

export default function ClientThemeProvider() {
  const [mode, setMode] = React.useState("light");
  const [modeText, setModeText] = React.useState("낮");
  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleMode = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
    setModeText((text) => (text === "낮" ? "낮" : "밤"));
  };

  return (
    <ThemeProvider theme={theme}>
      <Client>
        <button onClick={toggleMode}>{modeText}</button>
      </Client>
    </ThemeProvider>
  );
}
