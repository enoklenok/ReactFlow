import ReactFlow, { Background, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

function ClientNode({ data, isConnectable }) {
  return (
    <div style={{ height: "100px", width: "100px", background: "yellow" }}>
      <div>Client</div>
      <Handle
        id="client-a"
        type="source" //edge의 출발 지점으로 type 설정
        position={Position.Right} //Handle의 위치를 오른쪽으로 지정
        style={{ top: 30, background: "red" }} //Handle 위치가 우측 상단(top)에서 아래로 30정도 내려옴
        isConnectable={isConnectable}
      />
      <Handle
        id="client-b"
        type="target" //edge의 도착 지점으로 type 설정
        position={Position.Right}
        style={{ top: 60, background: "blue" }} //Handle 위치가 우측 상단(top)에서 아래로 60정도 내려옴
        isConnectable={isConnectable}
      />
    </div>
  );
}

const nodeTypes = {
  clientNode: ClientNode,
};

const nodes = [
  {
    id: "Client",
    position: { x: 0, y: 0 },
    data: { label: "Client" },
    type: "clientNode",
  },
];

export default function Example() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
}
