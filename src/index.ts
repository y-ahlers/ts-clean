export interface UseCase<Request> {
  execute(request: Readonly<Request>): Promise<void> | void;
}

export type UseCaseFactory<T, R> = (port: T) => UseCase<R>;

export interface UseCaseController<E> {
  handle(event: E): void;
}
