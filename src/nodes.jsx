// ** ReactFlow
import { Position } from "reactflow";

// ** 커스텀 노드 import
import ClientNode from "./CustomNodes/ClientNode";
import ServerNode from "./CustomNodes/ServerNode";
import DBNode from "./CustomNodes/DBNode";

/** 기본 노드 공통 */
const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

export const nodeTypes = {
  clientNode: ClientNode,
  serverNode: ServerNode,
  dbNode: DBNode,
};

/** 부모 노드 공통 */
const parentNodeDefaults = {
  className: "parentNode",
  type: "group",
  draggable: false,
  style: {
    height: "150px",
    width: "150px",
  },
};

/** 자녀 노드 공통 */
const childNodeDefaults = {
  className: "child",
  extent: "parent",
  position: { x: 25, y: 25 }, //부모 상속하면 위치는 부모 기준으로 바뀜.
  style: {
    background: "#fef9c3",
    width: "100px",
  },
};

/** 기본 노드 */
export const initialNodes = [
  //<-- 부모 노드 -->
  {
    id: "ClientBox",
    ...parentNodeDefaults,
    ...nodeDefaults,
    position: { x: 0, y: 0 },
  },
  {
    id: "ServerBox",
    ...parentNodeDefaults,
    ...nodeDefaults,
    position: { x: 200, y: 100 },
  },
  {
    id: "DBBox",
    ...parentNodeDefaults,
    ...nodeDefaults,
    position: { x: 400, y: 0 },
  },

  // <-- 자녀 노드 -->
  {
    id: "Client",
    ...childNodeDefaults,
    ...nodeDefaults,
    data: { label: "Client" },
    parentNode: "ClientBox",
    type: "clientNode",
  },
  {
    id: "Server",
    ...childNodeDefaults,
    ...nodeDefaults,

    data: { label: "Server" },
    parentNode: "ServerBox",
    type: "serverNode",
  },
  {
    id: "DB",
    ...childNodeDefaults,
    ...nodeDefaults,

    data: { label: "DB" },
    parentNode: "DBBox",
    type: "dbNode",
  },
];
