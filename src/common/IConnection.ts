export interface IConnection {
  label: string;
  readonly host: string;
  readonly user: string;
  password?: string;
  readonly port: number;
  readonly database?: string;
  multipleStatements?: boolean;
  readonly certPath?: string;
  ssl?: any;
  sslMode?: any;
}