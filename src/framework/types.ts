export interface INode {
  id: string;
  nodeName: string;
  content: INode[] | string;
  color?: string;
  groups?: []
}

export interface IResponse {
  data: Array<INode>;
}


export interface Logger {
  mode: string | null;
  log(namespace: string, call: string, data?: any): void;
}
