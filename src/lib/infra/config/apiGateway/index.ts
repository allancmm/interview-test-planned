export interface TypeOptions<T, U> {
  inType?: new () => T;
  outType?: new () => U;
}

export interface ApiGateway {
  get<T>(url: string, options?: TypeOptions<undefined, T>): Promise<T>;
  getArray<T>(url: string, options?: TypeOptions<undefined, T>): Promise<T[]>;
}
