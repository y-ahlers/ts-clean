export interface UseCase {
    execute(): Promise<void> | void;
}
export declare type UseCaseFactory<T> = (port: T) => UseCase;
export declare type Renders<ViewModel> = (model: ViewModel) => void;
export interface UseCaseController {
    handle(): Promise<void> | void;
}
