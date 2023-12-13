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
} from "reactflow";
import "reactflow/dist/style.css";

// ** styled-components
import styled from "styled-components";

/** 내부 파일 import */
import { initialNodes } from "./nodes";
import { edgeOptions, initialEdges, connectionLineStyle } from "./edges";
import "./styles/flow.css";

/** 넓이와 높이를 가지고 있는 최상단 요소 */
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ReactFlowStyle = {
  background: "#dcfce7",
};
/** Flow 컴포넌트 */
export default function Flow() {
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
      <ReactFlow
        style={ReactFlowStyle}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={edgeOptions}
        connectionLineStyle={connectionLineStyle}
        fitView
      >
        <Background
          id="1"
          color="#84cc16"
          variant={BackgroundVariant.Lines}
          gap={50}
        />
        <Controls position="top-left" />
        <MiniMap />
      </ReactFlow>
    </Wrapper>
  );
}
