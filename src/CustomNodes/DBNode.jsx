// ** react-flow
import { Handle, Position } from "reactflow";

// 내부 styled-components import
import { NodeWrapper, NodeTitle } from "./NodeStyles";

export default function DBNode({ data, isConnectable }) {
  return (
    <NodeWrapper>
      <NodeTitle>DB</NodeTitle>

      <Handle
        id="db-a"
        type="target"
        position={Position.Left}
        style={{ top: 30, background: "blue" }}
        isConnectable={isConnectable}
      />
      <Handle
        id="db-b"
        type="source"
        position={Position.Left}
        style={{ top: 60, background: "red" }}
        isConnectable={isConnectable}
      />
    </NodeWrapper>
  );
}
