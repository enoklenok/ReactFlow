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
    id: "e-ClientToServer",
    source: "Client",
    target: "Server",
  },
  {
    id: "e-ServerToDB",
    source: "Server",
    target: "DB",
  },
];
