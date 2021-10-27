export interface UseCase {
  execute(): Promise<void> | void;
}

export type UseCaseFactory<T> = (port: T) => UseCase;

export type Renders<ViewModel> = (model: ViewModel) => void;

export interface UseCaseController {
  handle(): Promise<void> | void;
}
