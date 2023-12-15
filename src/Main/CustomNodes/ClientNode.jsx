// ** react-flow
import { Handle, Position } from "reactflow";

// ** react-router-dom
import { Link } from "react-router-dom";

// 내부 styled-components import
import { NodeWrapper, NodeTitle } from "../styles/NodeStyles";

export default function ClientNode({ data, isConnectable }) {
  return (
    <NodeWrapper>
      <Link to="/client" style={{ textDecoration: "none" }}>
        <NodeTitle>Client</NodeTitle>
      </Link>

      <Handle
        id="client-a"
        type="source"
        position={Position.Right}
        style={{ top: 30, background: "red" }}
        isConnectable={isConnectable}
      />
      <Handle
        id="client-b"
        type="target"
        position={Position.Right}
        style={{ top: 60, background: "blue" }}
        isConnectable={isConnectable}
      />
    </NodeWrapper>
  );
}
