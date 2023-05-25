export interface ApiResponse<T> {
  code: number;
  message?: string;
  data: T;
}

export enum OrderByEnum {
  CREATE_TIME = "createTime",
  LIKE = "like",
}

export enum OrderEnum {
  DESC = "DESC",
  ASC = "ASC",
}
