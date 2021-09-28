export interface UseCase {
  execute(): Promise<void> | void;
}

export type UseCaseFactory<T> = (port: T) => UseCase;

export interface UseCaseController<E> {
  handle(event: E): Promise<void> | void;
}
