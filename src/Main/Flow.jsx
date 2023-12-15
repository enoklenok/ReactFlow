// ** React
import React from "react";

// ** ReactFlow
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";

// ** styled-components
import styled, { ThemeProvider } from "styled-components";

/** 내부 파일 import */
import { initialNodes } from "./nodes";
import { edgeOptions, initialEdges, connectionLineStyle } from "./edges";
import { nodeTypes } from "./nodes";
import { lightTheme, darkTheme } from "./styles/theme";

//스타일드 컴포넌트
/** 넓이와 높이를 가지고 있는 최상단 요소 */
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
/** 리액트 플로우의 스타일 */

const ReactFlowStyled = styled(ReactFlow)`
  background-color: ${(props) => props.theme.bg};
`;
/** Flow 컴포넌트 */
function Flow({ children }) {
  /** 노드, 엣지 드래그 함수 */
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  /** 엣지 연결 함수 */
  const onConnect = React.useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <Wrapper>
      <ReactFlowStyled
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={edgeOptions}
        connectionLineStyle={connectionLineStyle}
        fitView
        nodeTypes={nodeTypes}
      >
        <Background
          id="1"
          color="#84cc16"
          variant={BackgroundVariant.Lines}
          gap={50}
        />
        <Controls position="bottom-left" />
        <MiniMap />
        {children}
      </ReactFlowStyled>
    </Wrapper>
  );
}

export default function App() {
  const [mode, setMode] = React.useState("light");
  const theme = mode === "light" ? lightTheme : darkTheme;

  const toggleMode = () => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <Flow>
        {/* 패널은 컨트롤, 미니맵도 둘러싸고 있음.
        기본적으로 absolute 기능 */}
        <Panel position="top-left">
          <button onClick={toggleMode}>switch mode</button>
        </Panel>
      </Flow>
    </ThemeProvider>
  );
}
