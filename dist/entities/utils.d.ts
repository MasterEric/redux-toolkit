import { EntityState, IdSelector, Update, EntityId } from './models';
export declare function selectIdValue<T>(entity: T, selectId: IdSelector<T>): EntityId;
export declare function ensureEntitiesArray<T>(entities: T[] | Record<EntityId, T>): T[];
export declare function splitAddedUpdatedEntities<T>(newEntities: T[] | Record<EntityId, T>, selectId: IdSelector<T>, state: EntityState<T>): [T[], Update<T>[]];
