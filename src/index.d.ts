/**
 * A plain and simple usecase abstraction
 */
export interface UseCase {
  execute(): Promise<void> | void;
}

/**
 * Helper interface for contructing usecases
 */
export interface UseCaseConstructable<Request> {
  new (input: Request): UseCase;
}

/**
 * Type defintion for presenters that can expect an external function
 *  that renders the view model
 */
export type Renders<ViewModel> = (model: ViewModel) => void;

/**
 * Controller abstraction with a handle function that should transform
 * an application event to an usecase input, extend the request model and
 * execute the usecase
 */
export interface UseCaseController<Event> {
  handle(event: Event): Promise<void> | void;
}

/**
 * A factory interface which can be expected by a controller constructor
 * to form a usecase
 */
export interface UseCaseFactory<Input> {
  create(input: Input): UseCase;
}
