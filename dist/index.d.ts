export interface UseCase {
    execute(): Promise<void> | void;
}
export declare type UseCaseFactory<T> = (port: T) => UseCase;
export declare type Renders<ViewModel> = (model: ViewModel) => void;
export interface UseCaseController<E> {
    handle(event: E): Promise<void> | void;
}
