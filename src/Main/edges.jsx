/** 기본 연결하는 엣지 스타일 */
export const connectionLineStyle = { stroke: "#0f766e" };

/** 기본 엣지 스타일 */
export const edgeOptions = {
  animated: true,
  style: {
    stroke: "#0f766e",
  },
};

/** 기본 엣지 */
export const initialEdges = [
  {
    id: "1-request",
    source: "Client",
    sourceHandle: "client-a",
    target: "Server",
    targetHandle: "server-a",
    label: "1-request",
  },
  {
    id: "2-request",
    source: "Server",
    sourceHandle: "server-b",
    target: "DB",
    targetHandle: "db-a",
    label: "2-requset",
  },
  {
    id: "1-response",
    source: "DB",
    sourceHandle: "db-b",
    target: "Server",
    targetHandle: "server-d",
    label: "1-response",
  },
  {
    id: "2-response",
    source: "Server",
    sourceHandle: "server-c",
    target: "Client",
    targetHandle: "client-a",
    label: "2-response",
  },
];
