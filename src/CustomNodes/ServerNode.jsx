// ** react-flow
import { Handle, Position } from "reactflow";

// 내부 styled-components import
import { NodeWrapper, NodeTitle } from "./NodeStyles";

export default function ServerNode({ data, isConnectable }) {
  return (
    <NodeWrapper>
      <NodeTitle>Server</NodeTitle>

      <Handle
        id="server-a"
        type="target"
        position={Position.Left}
        style={{ top: 30, background: "blue" }}
        isConnectable={isConnectable}
      />
      <Handle
        id="server-b"
        type="source"
        position={Position.Right}
        style={{ top: 30, background: "red" }}
        isConnectable={isConnectable}
      />
      <Handle
        id="server-c"
        type="source"
        position={Position.Left}
        style={{ top: 60, background: "red" }}
        isConnectable={isConnectable}
      />
      <Handle
        id="server-d"
        type="target"
        position={Position.Right}
        style={{ top: 60, background: "blue" }}
        isConnectable={isConnectable}
      />
    </NodeWrapper>
  );
}
