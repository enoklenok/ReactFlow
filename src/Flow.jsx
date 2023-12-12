// ** React
import React from "react";

// ** ReactFlow
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

/** 기본 노드 */
const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
    type: "input", //노드에 엣지 출발점만 있다.
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "2" },
    type: "default", //출발점, 도착점 모두 있다.
  },
  {
    id: "3",
    position: { x: 0, y: 200 },
    data: { label: "3" },
    type: "output", //노드에 엣지 도착점만 있다.
  },
];

/** 기본 엣지 */
const initialEdges = [
  {
    id: "e1-2", //노드1에서 2로 엣지가 연결된다는 뜻
    source: "1", //엣지 출발 지점(노드의 id)
    target: "2", //엣지 도착 지점(노드의 id)
    label: "to the", //엣지에 라벨을 만들어줄 수 있다.
    // type : 'step', // 선의 형태를 바꿀 수 있다.(2번째 노드의 x값을 100으로 설정하면 알 수 있음)
    // animated : true, // 애니메이션을 넣어줄 수 있다.
  },
];

export default function Flow() {
  // <-- 함수 -->
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  /** 노드 드래그 함수 */
  const onNodesChange = React.useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  /** 엣지 드래그 함수 */
  const onEdgesChange = React.useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  /** 엣지 연결 함수 */
  const onConnect = React.useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  /** 넓이와 높이를 가지고 있는 최상단 요소 */
  const flowStyle = { width: "100vw", height: "100vh" };

  return (
    <div style={flowStyle}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        edges={edges}
        onConnect={onConnect}
        fitView //<--fitView를 넣으면 노드에 맞춰 화면을 보여준다.
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
