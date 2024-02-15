
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Thread
 * 
 */
export type Thread = $Result.DefaultSelection<Prisma.$ThreadPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<ExtArgs>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Thread: 'Thread',
    Community: 'Community'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'thread' | 'community'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Thread: {
        payload: Prisma.$ThreadPayload<ExtArgs>
        fields: Prisma.ThreadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThreadFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findFirst: {
            args: Prisma.ThreadFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          findMany: {
            args: Prisma.ThreadFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>[]
          }
          create: {
            args: Prisma.ThreadCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          createMany: {
            args: Prisma.ThreadCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ThreadDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          update: {
            args: Prisma.ThreadUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          deleteMany: {
            args: Prisma.ThreadDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ThreadUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ThreadUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ThreadPayload>
          }
          aggregate: {
            args: Prisma.ThreadAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateThread>
          }
          groupBy: {
            args: Prisma.ThreadGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ThreadGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ThreadFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ThreadAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ThreadCountArgs<ExtArgs>,
            result: $Utils.Optional<ThreadCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommunityFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommunityAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>,
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Thread: number
    Community: number
    communities: number
    liked: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Thread?: boolean | UserCountOutputTypeCountThreadArgs
    Community?: boolean | UserCountOutputTypeCountCommunityArgs
    communities?: boolean | UserCountOutputTypeCountCommunitiesArgs
    liked?: boolean | UserCountOutputTypeCountLikedArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }



  /**
   * Count Type ThreadCountOutputType
   */

  export type ThreadCountOutputType = {
    children: number
    likes: number
  }

  export type ThreadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | ThreadCountOutputTypeCountChildrenArgs
    likes?: boolean | ThreadCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     */
    select?: ThreadCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    threads: number
    members: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    threads?: boolean | CommunityCountOutputTypeCountThreadsArgs
    members?: boolean | CommunityCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    name: string | null
    image: string | null
    bio: string | null
    onboarded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    name: string | null
    image: string | null
    bio: string | null
    onboarded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    name: number
    image: number
    bio: number
    onboarded: number
    createdAt: number
    updatedAt: number
    communityIDs: number
    userliked: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    name?: true
    image?: true
    bio?: true
    onboarded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    name?: true
    image?: true
    bio?: true
    onboarded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    name?: true
    image?: true
    bio?: true
    onboarded?: true
    createdAt?: true
    updatedAt?: true
    communityIDs?: true
    userliked?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userId: string
    username: string
    name: string
    image: string
    bio: string | null
    onboarded: boolean
    createdAt: Date
    updatedAt: Date
    communityIDs: string[]
    userliked: string[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    bio?: boolean
    onboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communityIDs?: boolean
    userliked?: boolean
    Thread?: boolean | User$ThreadArgs<ExtArgs>
    Community?: boolean | User$CommunityArgs<ExtArgs>
    communities?: boolean | User$communitiesArgs<ExtArgs>
    liked?: boolean | User$likedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    bio?: boolean
    onboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    communityIDs?: boolean
    userliked?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Thread?: boolean | User$ThreadArgs<ExtArgs>
    Community?: boolean | User$CommunityArgs<ExtArgs>
    communities?: boolean | User$communitiesArgs<ExtArgs>
    liked?: boolean | User$likedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Thread: Prisma.$ThreadPayload<ExtArgs>[]
      Community: Prisma.$CommunityPayload<ExtArgs>[]
      communities: Prisma.$CommunityPayload<ExtArgs>[]
      liked: Prisma.$ThreadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      username: string
      name: string
      image: string
      bio: string | null
      onboarded: boolean
      createdAt: Date
      updatedAt: Date
      communityIDs: string[]
      userliked: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Thread<T extends User$ThreadArgs<ExtArgs> = {}>(args?: Subset<T, User$ThreadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'> | Null>;

    Community<T extends User$CommunityArgs<ExtArgs> = {}>(args?: Subset<T, User$CommunityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'> | Null>;

    communities<T extends User$communitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$communitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'> | Null>;

    liked<T extends User$likedArgs<ExtArgs> = {}>(args?: Subset<T, User$likedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly onboarded: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly communityIDs: FieldRef<"User", 'String[]'>
    readonly userliked: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.Thread
   */
  export type User$ThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * User.Community
   */
  export type User$CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * User.communities
   */
  export type User$communitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * User.liked
   */
  export type User$likedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Thread
   */

  export type AggregateThread = {
    _count: ThreadCountAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  export type ThreadMinAggregateOutputType = {
    id: string | null
    content: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
    communityId: string | null
  }

  export type ThreadMaxAggregateOutputType = {
    id: string | null
    content: string | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: string | null
    communityId: string | null
  }

  export type ThreadCountAggregateOutputType = {
    id: number
    content: number
    authorId: number
    createdAt: number
    updatedAt: number
    parentId: number
    communityId: number
    userlike: number
    _all: number
  }


  export type ThreadMinAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    communityId?: true
  }

  export type ThreadMaxAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    communityId?: true
  }

  export type ThreadCountAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    communityId?: true
    userlike?: true
    _all?: true
  }

  export type ThreadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thread to aggregate.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Threads
    **/
    _count?: true | ThreadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThreadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThreadMaxAggregateInputType
  }

  export type GetThreadAggregateType<T extends ThreadAggregateArgs> = {
        [P in keyof T & keyof AggregateThread]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThread[P]>
      : GetScalarType<T[P], AggregateThread[P]>
  }




  export type ThreadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithAggregationInput | ThreadOrderByWithAggregationInput[]
    by: ThreadScalarFieldEnum[] | ThreadScalarFieldEnum
    having?: ThreadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThreadCountAggregateInputType | true
    _min?: ThreadMinAggregateInputType
    _max?: ThreadMaxAggregateInputType
  }

  export type ThreadGroupByOutputType = {
    id: string
    content: string
    authorId: string
    createdAt: Date
    updatedAt: Date
    parentId: string | null
    communityId: string | null
    userlike: string[]
    _count: ThreadCountAggregateOutputType | null
    _min: ThreadMinAggregateOutputType | null
    _max: ThreadMaxAggregateOutputType | null
  }

  type GetThreadGroupByPayload<T extends ThreadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    communityId?: boolean
    userlike?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Thread$parentArgs<ExtArgs>
    children?: boolean | Thread$childrenArgs<ExtArgs>
    Community?: boolean | Thread$CommunityArgs<ExtArgs>
    likes?: boolean | Thread$likesArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thread"]>

  export type ThreadSelectScalar = {
    id?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    communityId?: boolean
    userlike?: boolean
  }

  export type ThreadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Thread$parentArgs<ExtArgs>
    children?: boolean | Thread$childrenArgs<ExtArgs>
    Community?: boolean | Thread$CommunityArgs<ExtArgs>
    likes?: boolean | Thread$likesArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ThreadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thread"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$ThreadPayload<ExtArgs> | null
      children: Prisma.$ThreadPayload<ExtArgs>[]
      Community: Prisma.$CommunityPayload<ExtArgs> | null
      likes: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      authorId: string
      createdAt: Date
      updatedAt: Date
      parentId: string | null
      communityId: string | null
      userlike: string[]
    }, ExtArgs["result"]["thread"]>
    composites: {}
  }


  type ThreadGetPayload<S extends boolean | null | undefined | ThreadDefaultArgs> = $Result.GetResult<Prisma.$ThreadPayload, S>

  type ThreadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ThreadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ThreadCountAggregateInputType | true
    }

  export interface ThreadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thread'], meta: { name: 'Thread' } }
    /**
     * Find zero or one Thread that matches the filter.
     * @param {ThreadFindUniqueArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ThreadFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadFindUniqueArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Thread that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ThreadFindUniqueOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ThreadFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Thread that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ThreadFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadFindFirstArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Thread that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindFirstOrThrowArgs} args - Arguments to find a Thread
     * @example
     * // Get one Thread
     * const thread = await prisma.thread.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ThreadFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Threads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Threads
     * const threads = await prisma.thread.findMany()
     * 
     * // Get first 10 Threads
     * const threads = await prisma.thread.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const threadWithIdOnly = await prisma.thread.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ThreadFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Thread.
     * @param {ThreadCreateArgs} args - Arguments to create a Thread.
     * @example
     * // Create one Thread
     * const Thread = await prisma.thread.create({
     *   data: {
     *     // ... data to create a Thread
     *   }
     * })
     * 
    **/
    create<T extends ThreadCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadCreateArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Threads.
     *     @param {ThreadCreateManyArgs} args - Arguments to create many Threads.
     *     @example
     *     // Create many Threads
     *     const thread = await prisma.thread.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ThreadCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Thread.
     * @param {ThreadDeleteArgs} args - Arguments to delete one Thread.
     * @example
     * // Delete one Thread
     * const Thread = await prisma.thread.delete({
     *   where: {
     *     // ... filter to delete one Thread
     *   }
     * })
     * 
    **/
    delete<T extends ThreadDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadDeleteArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Thread.
     * @param {ThreadUpdateArgs} args - Arguments to update one Thread.
     * @example
     * // Update one Thread
     * const thread = await prisma.thread.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ThreadUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadUpdateArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Threads.
     * @param {ThreadDeleteManyArgs} args - Arguments to filter Threads to delete.
     * @example
     * // Delete a few Threads
     * const { count } = await prisma.thread.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ThreadDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ThreadDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Threads
     * const thread = await prisma.thread.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ThreadUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Thread.
     * @param {ThreadUpsertArgs} args - Arguments to update or create a Thread.
     * @example
     * // Update or create a Thread
     * const thread = await prisma.thread.upsert({
     *   create: {
     *     // ... data to create a Thread
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thread we want to update
     *   }
     * })
    **/
    upsert<T extends ThreadUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ThreadUpsertArgs<ExtArgs>>
    ): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Threads that matches the filter.
     * @param {ThreadFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const thread = await prisma.thread.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ThreadFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Thread.
     * @param {ThreadAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const thread = await prisma.thread.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ThreadAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Threads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadCountArgs} args - Arguments to filter Threads to count.
     * @example
     * // Count the number of Threads
     * const count = await prisma.thread.count({
     *   where: {
     *     // ... the filter for the Threads we want to count
     *   }
     * })
    **/
    count<T extends ThreadCountArgs>(
      args?: Subset<T, ThreadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThreadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThreadAggregateArgs>(args: Subset<T, ThreadAggregateArgs>): Prisma.PrismaPromise<GetThreadAggregateType<T>>

    /**
     * Group by Thread.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThreadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThreadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThreadGroupByArgs['orderBy'] }
        : { orderBy?: ThreadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThreadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThreadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thread model
   */
  readonly fields: ThreadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThreadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    parent<T extends Thread$parentArgs<ExtArgs> = {}>(args?: Subset<T, Thread$parentArgs<ExtArgs>>): Prisma__ThreadClient<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    children<T extends Thread$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Thread$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'> | Null>;

    Community<T extends Thread$CommunityArgs<ExtArgs> = {}>(args?: Subset<T, Thread$CommunityArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    likes<T extends Thread$likesArgs<ExtArgs> = {}>(args?: Subset<T, Thread$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Thread model
   */ 
  interface ThreadFieldRefs {
    readonly id: FieldRef<"Thread", 'String'>
    readonly content: FieldRef<"Thread", 'String'>
    readonly authorId: FieldRef<"Thread", 'String'>
    readonly createdAt: FieldRef<"Thread", 'DateTime'>
    readonly updatedAt: FieldRef<"Thread", 'DateTime'>
    readonly parentId: FieldRef<"Thread", 'String'>
    readonly communityId: FieldRef<"Thread", 'String'>
    readonly userlike: FieldRef<"Thread", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Thread findUnique
   */
  export type ThreadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread findFirst
   */
  export type ThreadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Thread to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Threads.
     */
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter, which Threads to fetch.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Threads.
     */
    cursor?: ThreadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Threads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Threads.
     */
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Thread create
   */
  export type ThreadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to create a Thread.
     */
    data: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
  }


  /**
   * Thread createMany
   */
  export type ThreadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Threads.
     */
    data: ThreadCreateManyInput | ThreadCreateManyInput[]
  }


  /**
   * Thread update
   */
  export type ThreadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The data needed to update a Thread.
     */
    data: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
    /**
     * Choose, which Thread to update.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread updateMany
   */
  export type ThreadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Threads.
     */
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyInput>
    /**
     * Filter which Threads to update
     */
    where?: ThreadWhereInput
  }


  /**
   * Thread upsert
   */
  export type ThreadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * The filter to search for the Thread to update in case it exists.
     */
    where: ThreadWhereUniqueInput
    /**
     * In case the Thread found by the `where` argument doesn't exist, create a new Thread with this data.
     */
    create: XOR<ThreadCreateInput, ThreadUncheckedCreateInput>
    /**
     * In case the Thread was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThreadUpdateInput, ThreadUncheckedUpdateInput>
  }


  /**
   * Thread delete
   */
  export type ThreadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    /**
     * Filter which Thread to delete.
     */
    where: ThreadWhereUniqueInput
  }


  /**
   * Thread deleteMany
   */
  export type ThreadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Threads to delete
     */
    where?: ThreadWhereInput
  }


  /**
   * Thread findRaw
   */
  export type ThreadFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Thread aggregateRaw
   */
  export type ThreadAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Thread.parent
   */
  export type Thread$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
  }


  /**
   * Thread.children
   */
  export type Thread$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Thread.Community
   */
  export type Thread$CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
  }


  /**
   * Thread.likes
   */
  export type Thread$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Thread without action
   */
  export type ThreadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
  }



  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    image: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    image: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    username: number
    name: number
    image: number
    bio: number
    createdAt: number
    updatedAt: number
    creatorId: number
    membersIDs: number
    _all: number
  }


  export type CommunityMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    image?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    image?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    image?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    membersIDs?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: string
    username: string
    name: string
    image: string
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string
    membersIDs: string[]
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    membersIDs?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    threads?: boolean | Community$threadsArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    membersIDs?: boolean
  }

  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    threads?: boolean | Community$threadsArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      threads: Prisma.$ThreadPayload<ExtArgs>[]
      members: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string
      image: string
      bio: string | null
      createdAt: Date | null
      updatedAt: Date | null
      creatorId: string
      membersIDs: string[]
    }, ExtArgs["result"]["community"]>
    composites: {}
  }


  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Community that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommunityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
    **/
    create<T extends CommunityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Communities.
     *     @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     *     @example
     *     // Create many Communities
     *     const community = await prisma.community.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
    **/
    delete<T extends CommunityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
    **/
    upsert<T extends CommunityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Communities that matches the filter.
     * @param {CommunityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const community = await prisma.community.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: CommunityFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Community.
     * @param {CommunityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const community = await prisma.community.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: CommunityAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    threads<T extends Community$threadsArgs<ExtArgs> = {}>(args?: Subset<T, Community$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThreadPayload<ExtArgs>, T, 'findMany'> | Null>;

    members<T extends Community$membersArgs<ExtArgs> = {}>(args?: Subset<T, Community$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Community model
   */ 
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'String'>
    readonly username: FieldRef<"Community", 'String'>
    readonly name: FieldRef<"Community", 'String'>
    readonly image: FieldRef<"Community", 'String'>
    readonly bio: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
    readonly creatorId: FieldRef<"Community", 'String'>
    readonly membersIDs: FieldRef<"Community", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }


  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
  }


  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
  }


  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }


  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
  }


  /**
   * Community findRaw
   */
  export type CommunityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Community aggregateRaw
   */
  export type CommunityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Community.threads
   */
  export type Community$threadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: ThreadOrderByWithRelationInput | ThreadOrderByWithRelationInput[]
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThreadScalarFieldEnum | ThreadScalarFieldEnum[]
  }


  /**
   * Community.members
   */
  export type Community$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    name: 'name',
    image: 'image',
    bio: 'bio',
    onboarded: 'onboarded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    communityIDs: 'communityIDs',
    userliked: 'userliked'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ThreadScalarFieldEnum: {
    id: 'id',
    content: 'content',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parentId: 'parentId',
    communityId: 'communityId',
    userlike: 'userlike'
  };

  export type ThreadScalarFieldEnum = (typeof ThreadScalarFieldEnum)[keyof typeof ThreadScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    image: 'image',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId',
    membersIDs: 'membersIDs'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    communityIDs?: StringNullableListFilter<"User">
    userliked?: StringNullableListFilter<"User">
    Thread?: ThreadListRelationFilter
    Community?: CommunityListRelationFilter
    communities?: CommunityListRelationFilter
    liked?: ThreadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityIDs?: SortOrder
    userliked?: SortOrder
    Thread?: ThreadOrderByRelationAggregateInput
    Community?: CommunityOrderByRelationAggregateInput
    communities?: CommunityOrderByRelationAggregateInput
    liked?: ThreadOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    communityIDs?: StringNullableListFilter<"User">
    userliked?: StringNullableListFilter<"User">
    Thread?: ThreadListRelationFilter
    Community?: CommunityListRelationFilter
    communities?: CommunityListRelationFilter
    liked?: ThreadListRelationFilter
  }, "id" | "userId" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityIDs?: SortOrder
    userliked?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    image?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    onboarded?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    communityIDs?: StringNullableListFilter<"User">
    userliked?: StringNullableListFilter<"User">
  }

  export type ThreadWhereInput = {
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    id?: StringFilter<"Thread"> | string
    content?: StringFilter<"Thread"> | string
    authorId?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    parentId?: StringNullableFilter<"Thread"> | string | null
    communityId?: StringNullableFilter<"Thread"> | string | null
    userlike?: StringNullableListFilter<"Thread">
    author?: XOR<UserRelationFilter, UserWhereInput>
    parent?: XOR<ThreadNullableRelationFilter, ThreadWhereInput> | null
    children?: ThreadListRelationFilter
    Community?: XOR<CommunityNullableRelationFilter, CommunityWhereInput> | null
    likes?: UserListRelationFilter
  }

  export type ThreadOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
    userlike?: SortOrder
    author?: UserOrderByWithRelationInput
    parent?: ThreadOrderByWithRelationInput
    children?: ThreadOrderByRelationAggregateInput
    Community?: CommunityOrderByWithRelationInput
    likes?: UserOrderByRelationAggregateInput
  }

  export type ThreadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ThreadWhereInput | ThreadWhereInput[]
    OR?: ThreadWhereInput[]
    NOT?: ThreadWhereInput | ThreadWhereInput[]
    content?: StringFilter<"Thread"> | string
    authorId?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    parentId?: StringNullableFilter<"Thread"> | string | null
    communityId?: StringNullableFilter<"Thread"> | string | null
    userlike?: StringNullableListFilter<"Thread">
    author?: XOR<UserRelationFilter, UserWhereInput>
    parent?: XOR<ThreadNullableRelationFilter, ThreadWhereInput> | null
    children?: ThreadListRelationFilter
    Community?: XOR<CommunityNullableRelationFilter, CommunityWhereInput> | null
    likes?: UserListRelationFilter
  }, "id">

  export type ThreadOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
    userlike?: SortOrder
    _count?: ThreadCountOrderByAggregateInput
    _max?: ThreadMaxOrderByAggregateInput
    _min?: ThreadMinOrderByAggregateInput
  }

  export type ThreadScalarWhereWithAggregatesInput = {
    AND?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    OR?: ThreadScalarWhereWithAggregatesInput[]
    NOT?: ThreadScalarWhereWithAggregatesInput | ThreadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Thread"> | string
    content?: StringWithAggregatesFilter<"Thread"> | string
    authorId?: StringWithAggregatesFilter<"Thread"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Thread"> | Date | string
    parentId?: StringNullableWithAggregatesFilter<"Thread"> | string | null
    communityId?: StringNullableWithAggregatesFilter<"Thread"> | string | null
    userlike?: StringNullableListFilter<"Thread">
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: StringFilter<"Community"> | string
    username?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    image?: StringFilter<"Community"> | string
    bio?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    creatorId?: StringFilter<"Community"> | string
    membersIDs?: StringNullableListFilter<"Community">
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    threads?: ThreadListRelationFilter
    members?: UserListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    membersIDs?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    threads?: ThreadOrderByRelationAggregateInput
    members?: UserOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    name?: StringFilter<"Community"> | string
    image?: StringFilter<"Community"> | string
    bio?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    creatorId?: StringFilter<"Community"> | string
    membersIDs?: StringNullableListFilter<"Community">
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    threads?: ThreadListRelationFilter
    members?: UserListRelationFilter
  }, "id" | "username">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    membersIDs?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Community"> | string
    username?: StringWithAggregatesFilter<"Community"> | string
    name?: StringWithAggregatesFilter<"Community"> | string
    image?: StringWithAggregatesFilter<"Community"> | string
    bio?: StringNullableWithAggregatesFilter<"Community"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Community"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Community"> | Date | string | null
    creatorId?: StringWithAggregatesFilter<"Community"> | string
    membersIDs?: StringNullableListFilter<"Community">
  }

  export type UserCreateInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadCreateNestedManyWithoutAuthorInput
    Community?: CommunityCreateNestedManyWithoutCreatedByInput
    communities?: CommunityCreateNestedManyWithoutMembersInput
    liked?: ThreadCreateNestedManyWithoutLikesInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    communityIDs?: UserCreatecommunityIDsInput | string[]
    userliked?: UserCreateuserlikedInput | string[]
    Thread?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    Community?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    communities?: CommunityUncheckedCreateNestedManyWithoutMembersInput
    liked?: ThreadUncheckedCreateNestedManyWithoutLikesInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUpdateManyWithoutAuthorNestedInput
    Community?: CommunityUpdateManyWithoutCreatedByNestedInput
    communities?: CommunityUpdateManyWithoutMembersNestedInput
    liked?: ThreadUpdateManyWithoutLikesNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | string[]
    userliked?: UserUpdateuserlikedInput | string[]
    Thread?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    Community?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    liked?: ThreadUncheckedUpdateManyWithoutLikesNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    communityIDs?: UserCreatecommunityIDsInput | string[]
    userliked?: UserCreateuserlikedInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | string[]
    userliked?: UserUpdateuserlikedInput | string[]
  }

  export type ThreadCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadInput
    parent?: ThreadCreateNestedOneWithoutChildrenInput
    children?: ThreadCreateNestedManyWithoutParentInput
    Community?: CommunityCreateNestedOneWithoutThreadsInput
    likes?: UserCreateNestedManyWithoutLikedInput
  }

  export type ThreadUncheckedCreateInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedInput
  }

  export type ThreadUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadNestedInput
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
    Community?: CommunityUpdateOneWithoutThreadsNestedInput
    likes?: UserUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedNestedInput
  }

  export type ThreadCreateManyInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
  }

  export type ThreadUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThreadUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
  }

  export type CommunityCreateInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCommunityInput
    threads?: ThreadCreateNestedManyWithoutCommunityInput
    members?: UserCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    creatorId: string
    membersIDs?: CommunityCreatemembersIDsInput | string[]
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
    members?: UserUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCommunityNestedInput
    threads?: ThreadUpdateManyWithoutCommunityNestedInput
    members?: UserUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    membersIDs?: CommunityUpdatemembersIDsInput | string[]
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
    members?: UserUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    creatorId: string
    membersIDs?: CommunityCreatemembersIDsInput | string[]
  }

  export type CommunityUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommunityUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    membersIDs?: CommunityUpdatemembersIDsInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ThreadListRelationFilter = {
    every?: ThreadWhereInput
    some?: ThreadWhereInput
    none?: ThreadWhereInput
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type ThreadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    communityIDs?: SortOrder
    userliked?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    onboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ThreadNullableRelationFilter = {
    is?: ThreadWhereInput | null
    isNot?: ThreadWhereInput | null
  }

  export type CommunityNullableRelationFilter = {
    is?: CommunityWhereInput | null
    isNot?: CommunityWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThreadCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
    userlike?: SortOrder
  }

  export type ThreadMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
  }

  export type ThreadMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
    communityId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    membersIDs?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ThreadCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutMembersInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput> | CommunityCreateWithoutMembersInput[] | CommunityUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput | CommunityCreateOrConnectWithoutMembersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type ThreadCreateNestedManyWithoutLikesInput = {
    create?: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput> | ThreadCreateWithoutLikesInput[] | ThreadUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutLikesInput | ThreadCreateOrConnectWithoutLikesInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type UserCreatecommunityIDsInput = {
    set: string[]
  }

  export type UserCreateuserlikedInput = {
    set: string[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput> | CommunityCreateWithoutMembersInput[] | CommunityUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput | CommunityCreateOrConnectWithoutMembersInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutLikesInput = {
    create?: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput> | ThreadCreateWithoutLikesInput[] | ThreadUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutLikesInput | ThreadCreateOrConnectWithoutLikesInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ThreadUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput | ThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput | ThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput | ThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatedByInput | CommunityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatedByInput | CommunityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatedByInput | CommunityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutMembersNestedInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput> | CommunityCreateWithoutMembersInput[] | CommunityUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput | CommunityCreateOrConnectWithoutMembersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutMembersInput | CommunityUpsertWithWhereUniqueWithoutMembersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutMembersInput | CommunityUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutMembersInput | CommunityUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type ThreadUpdateManyWithoutLikesNestedInput = {
    create?: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput> | ThreadCreateWithoutLikesInput[] | ThreadUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutLikesInput | ThreadCreateOrConnectWithoutLikesInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutLikesInput | ThreadUpsertWithWhereUniqueWithoutLikesInput[]
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutLikesInput | ThreadUpdateWithWhereUniqueWithoutLikesInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutLikesInput | ThreadUpdateManyWithWhereWithoutLikesInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type UserUpdatecommunityIDsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateuserlikedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput> | ThreadCreateWithoutAuthorInput[] | ThreadUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutAuthorInput | ThreadCreateOrConnectWithoutAuthorInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutAuthorInput | ThreadUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutAuthorInput | ThreadUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutAuthorInput | ThreadUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput> | CommunityCreateWithoutCreatedByInput[] | CommunityUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutCreatedByInput | CommunityCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutCreatedByInput | CommunityUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutCreatedByInput | CommunityUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutCreatedByInput | CommunityUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput> | CommunityCreateWithoutMembersInput[] | CommunityUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput | CommunityCreateOrConnectWithoutMembersInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutMembersInput | CommunityUpsertWithWhereUniqueWithoutMembersInput[]
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutMembersInput | CommunityUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutMembersInput | CommunityUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type ThreadUncheckedUpdateManyWithoutLikesNestedInput = {
    create?: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput> | ThreadCreateWithoutLikesInput[] | ThreadUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutLikesInput | ThreadCreateOrConnectWithoutLikesInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutLikesInput | ThreadUpsertWithWhereUniqueWithoutLikesInput[]
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutLikesInput | ThreadUpdateWithWhereUniqueWithoutLikesInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutLikesInput | ThreadUpdateManyWithWhereWithoutLikesInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutThreadInput = {
    create?: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedOneWithoutChildrenInput = {
    create?: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutChildrenInput
    connect?: ThreadWhereUniqueInput
  }

  export type ThreadCreateNestedManyWithoutParentInput = {
    create?: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput> | ThreadCreateWithoutParentInput[] | ThreadUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutParentInput | ThreadCreateOrConnectWithoutParentInput[]
    createMany?: ThreadCreateManyParentInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type CommunityCreateNestedOneWithoutThreadsInput = {
    create?: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutThreadsInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutLikedInput = {
    create?: XOR<UserCreateWithoutLikedInput, UserUncheckedCreateWithoutLikedInput> | UserCreateWithoutLikedInput[] | UserUncheckedCreateWithoutLikedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedInput | UserCreateOrConnectWithoutLikedInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ThreadCreateuserlikeInput = {
    set: string[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput> | ThreadCreateWithoutParentInput[] | ThreadUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutParentInput | ThreadCreateOrConnectWithoutParentInput[]
    createMany?: ThreadCreateManyParentInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLikedInput = {
    create?: XOR<UserCreateWithoutLikedInput, UserUncheckedCreateWithoutLikedInput> | UserCreateWithoutLikedInput[] | UserUncheckedCreateWithoutLikedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedInput | UserCreateOrConnectWithoutLikedInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutThreadNestedInput = {
    create?: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadInput
    upsert?: UserUpsertWithoutThreadInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutThreadInput, UserUpdateWithoutThreadInput>, UserUncheckedUpdateWithoutThreadInput>
  }

  export type ThreadUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutChildrenInput
    upsert?: ThreadUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: ThreadWhereInput | boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<XOR<ThreadUpdateToOneWithWhereWithoutChildrenInput, ThreadUpdateWithoutChildrenInput>, ThreadUncheckedUpdateWithoutChildrenInput>
  }

  export type ThreadUpdateManyWithoutParentNestedInput = {
    create?: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput> | ThreadCreateWithoutParentInput[] | ThreadUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutParentInput | ThreadCreateOrConnectWithoutParentInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutParentInput | ThreadUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ThreadCreateManyParentInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutParentInput | ThreadUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutParentInput | ThreadUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type CommunityUpdateOneWithoutThreadsNestedInput = {
    create?: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutThreadsInput
    upsert?: CommunityUpsertWithoutThreadsInput
    disconnect?: boolean
    delete?: CommunityWhereInput | boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutThreadsInput, CommunityUpdateWithoutThreadsInput>, CommunityUncheckedUpdateWithoutThreadsInput>
  }

  export type UserUpdateManyWithoutLikedNestedInput = {
    create?: XOR<UserCreateWithoutLikedInput, UserUncheckedCreateWithoutLikedInput> | UserCreateWithoutLikedInput[] | UserUncheckedCreateWithoutLikedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedInput | UserCreateOrConnectWithoutLikedInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedInput | UserUpsertWithWhereUniqueWithoutLikedInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedInput | UserUpdateWithWhereUniqueWithoutLikedInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedInput | UserUpdateManyWithWhereWithoutLikedInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ThreadUpdateuserlikeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ThreadUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput> | ThreadCreateWithoutParentInput[] | ThreadUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutParentInput | ThreadCreateOrConnectWithoutParentInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutParentInput | ThreadUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ThreadCreateManyParentInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutParentInput | ThreadUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutParentInput | ThreadUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLikedNestedInput = {
    create?: XOR<UserCreateWithoutLikedInput, UserUncheckedCreateWithoutLikedInput> | UserCreateWithoutLikedInput[] | UserUncheckedCreateWithoutLikedInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedInput | UserCreateOrConnectWithoutLikedInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedInput | UserUpsertWithWhereUniqueWithoutLikedInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedInput | UserUpdateWithWhereUniqueWithoutLikedInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedInput | UserUpdateManyWithWhereWithoutLikedInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommunityInput = {
    create?: XOR<UserCreateWithoutCommunityInput, UserUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput> | ThreadCreateWithoutCommunityInput[] | ThreadUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutCommunityInput | ThreadCreateOrConnectWithoutCommunityInput[]
    createMany?: ThreadCreateManyCommunityInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput> | UserCreateWithoutCommunitiesInput[] | UserUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | UserCreateOrConnectWithoutCommunitiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CommunityCreatemembersIDsInput = {
    set: string[]
  }

  export type ThreadUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput> | ThreadCreateWithoutCommunityInput[] | ThreadUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutCommunityInput | ThreadCreateOrConnectWithoutCommunityInput[]
    createMany?: ThreadCreateManyCommunityInputEnvelope
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput> | UserCreateWithoutCommunitiesInput[] | UserUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | UserCreateOrConnectWithoutCommunitiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutCommunityNestedInput = {
    create?: XOR<UserCreateWithoutCommunityInput, UserUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityInput
    upsert?: UserUpsertWithoutCommunityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunityInput, UserUpdateWithoutCommunityInput>, UserUncheckedUpdateWithoutCommunityInput>
  }

  export type ThreadUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput> | ThreadCreateWithoutCommunityInput[] | ThreadUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutCommunityInput | ThreadCreateOrConnectWithoutCommunityInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutCommunityInput | ThreadUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ThreadCreateManyCommunityInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutCommunityInput | ThreadUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutCommunityInput | ThreadUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput> | UserCreateWithoutCommunitiesInput[] | UserUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | UserCreateOrConnectWithoutCommunitiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommunitiesInput | UserUpsertWithWhereUniqueWithoutCommunitiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommunitiesInput | UserUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommunitiesInput | UserUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CommunityUpdatemembersIDsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ThreadUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput> | ThreadCreateWithoutCommunityInput[] | ThreadUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: ThreadCreateOrConnectWithoutCommunityInput | ThreadCreateOrConnectWithoutCommunityInput[]
    upsert?: ThreadUpsertWithWhereUniqueWithoutCommunityInput | ThreadUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: ThreadCreateManyCommunityInputEnvelope
    set?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    disconnect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    delete?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    connect?: ThreadWhereUniqueInput | ThreadWhereUniqueInput[]
    update?: ThreadUpdateWithWhereUniqueWithoutCommunityInput | ThreadUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: ThreadUpdateManyWithWhereWithoutCommunityInput | ThreadUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput> | UserCreateWithoutCommunitiesInput[] | UserUncheckedCreateWithoutCommunitiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput | UserCreateOrConnectWithoutCommunitiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCommunitiesInput | UserUpsertWithWhereUniqueWithoutCommunitiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCommunitiesInput | UserUpdateWithWhereUniqueWithoutCommunitiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCommunitiesInput | UserUpdateManyWithWhereWithoutCommunitiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ThreadCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: ThreadCreateNestedOneWithoutChildrenInput
    children?: ThreadCreateNestedManyWithoutParentInput
    Community?: CommunityCreateNestedOneWithoutThreadsInput
    likes?: UserCreateNestedManyWithoutLikedInput
  }

  export type ThreadUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedInput
  }

  export type ThreadCreateOrConnectWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadCreateManyAuthorInputEnvelope = {
    data: ThreadCreateManyAuthorInput | ThreadCreateManyAuthorInput[]
  }

  export type CommunityCreateWithoutCreatedByInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    threads?: ThreadCreateNestedManyWithoutCommunityInput
    members?: UserCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUncheckedCreateWithoutCreatedByInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    membersIDs?: CommunityCreatemembersIDsInput | string[]
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
    members?: UserUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityCreateOrConnectWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityCreateManyCreatedByInputEnvelope = {
    data: CommunityCreateManyCreatedByInput | CommunityCreateManyCreatedByInput[]
  }

  export type CommunityCreateWithoutMembersInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCommunityInput
    threads?: ThreadCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutMembersInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    creatorId: string
    membersIDs?: CommunityCreatemembersIDsInput | string[]
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
  }

  export type ThreadCreateWithoutLikesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadInput
    parent?: ThreadCreateNestedOneWithoutChildrenInput
    children?: ThreadCreateNestedManyWithoutParentInput
    Community?: CommunityCreateNestedOneWithoutThreadsInput
  }

  export type ThreadUncheckedCreateWithoutLikesInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
  }

  export type ThreadCreateOrConnectWithoutLikesInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput>
  }

  export type ThreadUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutAuthorInput, ThreadUncheckedUpdateWithoutAuthorInput>
  }

  export type ThreadUpdateManyWithWhereWithoutAuthorInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    OR?: ThreadScalarWhereInput[]
    NOT?: ThreadScalarWhereInput | ThreadScalarWhereInput[]
    id?: StringFilter<"Thread"> | string
    content?: StringFilter<"Thread"> | string
    authorId?: StringFilter<"Thread"> | string
    createdAt?: DateTimeFilter<"Thread"> | Date | string
    updatedAt?: DateTimeFilter<"Thread"> | Date | string
    parentId?: StringNullableFilter<"Thread"> | string | null
    communityId?: StringNullableFilter<"Thread"> | string | null
    userlike?: StringNullableListFilter<"Thread">
  }

  export type CommunityUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutCreatedByInput, CommunityUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutCreatedByInput, CommunityUncheckedUpdateWithoutCreatedByInput>
  }

  export type CommunityUpdateManyWithWhereWithoutCreatedByInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: StringFilter<"Community"> | string
    username?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    image?: StringFilter<"Community"> | string
    bio?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Community"> | Date | string | null
    creatorId?: StringFilter<"Community"> | string
    membersIDs?: StringNullableListFilter<"Community">
  }

  export type CommunityUpsertWithWhereUniqueWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
  }

  export type CommunityUpdateManyWithWhereWithoutMembersInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutMembersInput>
  }

  export type ThreadUpsertWithWhereUniqueWithoutLikesInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutLikesInput, ThreadUncheckedUpdateWithoutLikesInput>
    create: XOR<ThreadCreateWithoutLikesInput, ThreadUncheckedCreateWithoutLikesInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutLikesInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutLikesInput, ThreadUncheckedUpdateWithoutLikesInput>
  }

  export type ThreadUpdateManyWithWhereWithoutLikesInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutLikesInput>
  }

  export type UserCreateWithoutThreadInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Community?: CommunityCreateNestedManyWithoutCreatedByInput
    communities?: CommunityCreateNestedManyWithoutMembersInput
    liked?: ThreadCreateNestedManyWithoutLikesInput
  }

  export type UserUncheckedCreateWithoutThreadInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    communityIDs?: UserCreatecommunityIDsInput | string[]
    userliked?: UserCreateuserlikedInput | string[]
    Community?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    communities?: CommunityUncheckedCreateNestedManyWithoutMembersInput
    liked?: ThreadUncheckedCreateNestedManyWithoutLikesInput
  }

  export type UserCreateOrConnectWithoutThreadInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
  }

  export type ThreadCreateWithoutChildrenInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadInput
    parent?: ThreadCreateNestedOneWithoutChildrenInput
    Community?: CommunityCreateNestedOneWithoutThreadsInput
    likes?: UserCreateNestedManyWithoutLikedInput
  }

  export type ThreadUncheckedCreateWithoutChildrenInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
    likes?: UserUncheckedCreateNestedManyWithoutLikedInput
  }

  export type ThreadCreateOrConnectWithoutChildrenInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
  }

  export type ThreadCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadInput
    children?: ThreadCreateNestedManyWithoutParentInput
    Community?: CommunityCreateNestedOneWithoutThreadsInput
    likes?: UserCreateNestedManyWithoutLikedInput
  }

  export type ThreadUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedInput
  }

  export type ThreadCreateOrConnectWithoutParentInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput>
  }

  export type ThreadCreateManyParentInputEnvelope = {
    data: ThreadCreateManyParentInput | ThreadCreateManyParentInput[]
  }

  export type CommunityCreateWithoutThreadsInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    createdBy: UserCreateNestedOneWithoutCommunityInput
    members?: UserCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityUncheckedCreateWithoutThreadsInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    creatorId: string
    membersIDs?: CommunityCreatemembersIDsInput | string[]
    members?: UserUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityCreateOrConnectWithoutThreadsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
  }

  export type UserCreateWithoutLikedInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadCreateNestedManyWithoutAuthorInput
    Community?: CommunityCreateNestedManyWithoutCreatedByInput
    communities?: CommunityCreateNestedManyWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutLikedInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    communityIDs?: UserCreatecommunityIDsInput | string[]
    userliked?: UserCreateuserlikedInput | string[]
    Thread?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    Community?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    communities?: CommunityUncheckedCreateNestedManyWithoutMembersInput
  }

  export type UserCreateOrConnectWithoutLikedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedInput, UserUncheckedCreateWithoutLikedInput>
  }

  export type UserUpsertWithoutThreadInput = {
    update: XOR<UserUpdateWithoutThreadInput, UserUncheckedUpdateWithoutThreadInput>
    create: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutThreadInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutThreadInput, UserUncheckedUpdateWithoutThreadInput>
  }

  export type UserUpdateWithoutThreadInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Community?: CommunityUpdateManyWithoutCreatedByNestedInput
    communities?: CommunityUpdateManyWithoutMembersNestedInput
    liked?: ThreadUpdateManyWithoutLikesNestedInput
  }

  export type UserUncheckedUpdateWithoutThreadInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | string[]
    userliked?: UserUpdateuserlikedInput | string[]
    Community?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    liked?: ThreadUncheckedUpdateManyWithoutLikesNestedInput
  }

  export type ThreadUpsertWithoutChildrenInput = {
    update: XOR<ThreadUpdateWithoutChildrenInput, ThreadUncheckedUpdateWithoutChildrenInput>
    create: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
    where?: ThreadWhereInput
  }

  export type ThreadUpdateToOneWithWhereWithoutChildrenInput = {
    where?: ThreadWhereInput
    data: XOR<ThreadUpdateWithoutChildrenInput, ThreadUncheckedUpdateWithoutChildrenInput>
  }

  export type ThreadUpdateWithoutChildrenInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadNestedInput
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
    Community?: CommunityUpdateOneWithoutThreadsNestedInput
    likes?: UserUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateWithoutChildrenInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
    likes?: UserUncheckedUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUpsertWithWhereUniqueWithoutParentInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutParentInput, ThreadUncheckedUpdateWithoutParentInput>
    create: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutParentInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutParentInput, ThreadUncheckedUpdateWithoutParentInput>
  }

  export type ThreadUpdateManyWithWhereWithoutParentInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutParentInput>
  }

  export type CommunityUpsertWithoutThreadsInput = {
    update: XOR<CommunityUpdateWithoutThreadsInput, CommunityUncheckedUpdateWithoutThreadsInput>
    create: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutThreadsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutThreadsInput, CommunityUncheckedUpdateWithoutThreadsInput>
  }

  export type CommunityUpdateWithoutThreadsInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCommunityNestedInput
    members?: UserUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateWithoutThreadsInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    membersIDs?: CommunityUpdatemembersIDsInput | string[]
    members?: UserUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutLikedInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLikedInput, UserUncheckedUpdateWithoutLikedInput>
    create: XOR<UserCreateWithoutLikedInput, UserUncheckedCreateWithoutLikedInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLikedInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLikedInput, UserUncheckedUpdateWithoutLikedInput>
  }

  export type UserUpdateManyWithWhereWithoutLikedInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikedInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    userId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    onboarded?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    communityIDs?: StringNullableListFilter<"User">
    userliked?: StringNullableListFilter<"User">
  }

  export type UserCreateWithoutCommunityInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadCreateNestedManyWithoutAuthorInput
    communities?: CommunityCreateNestedManyWithoutMembersInput
    liked?: ThreadCreateNestedManyWithoutLikesInput
  }

  export type UserUncheckedCreateWithoutCommunityInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    communityIDs?: UserCreatecommunityIDsInput | string[]
    userliked?: UserCreateuserlikedInput | string[]
    Thread?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    communities?: CommunityUncheckedCreateNestedManyWithoutMembersInput
    liked?: ThreadUncheckedCreateNestedManyWithoutLikesInput
  }

  export type UserCreateOrConnectWithoutCommunityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityInput, UserUncheckedCreateWithoutCommunityInput>
  }

  export type ThreadCreateWithoutCommunityInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutThreadInput
    parent?: ThreadCreateNestedOneWithoutChildrenInput
    children?: ThreadCreateNestedManyWithoutParentInput
    likes?: UserCreateNestedManyWithoutLikedInput
  }

  export type ThreadUncheckedCreateWithoutCommunityInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedInput
  }

  export type ThreadCreateOrConnectWithoutCommunityInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput>
  }

  export type ThreadCreateManyCommunityInputEnvelope = {
    data: ThreadCreateManyCommunityInput | ThreadCreateManyCommunityInput[]
  }

  export type UserCreateWithoutCommunitiesInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Thread?: ThreadCreateNestedManyWithoutAuthorInput
    Community?: CommunityCreateNestedManyWithoutCreatedByInput
    liked?: ThreadCreateNestedManyWithoutLikesInput
  }

  export type UserUncheckedCreateWithoutCommunitiesInput = {
    id?: string
    userId: string
    username: string
    name: string
    image: string
    bio?: string | null
    onboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    communityIDs?: UserCreatecommunityIDsInput | string[]
    userliked?: UserCreateuserlikedInput | string[]
    Thread?: ThreadUncheckedCreateNestedManyWithoutAuthorInput
    Community?: CommunityUncheckedCreateNestedManyWithoutCreatedByInput
    liked?: ThreadUncheckedCreateNestedManyWithoutLikesInput
  }

  export type UserCreateOrConnectWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type UserUpsertWithoutCommunityInput = {
    update: XOR<UserUpdateWithoutCommunityInput, UserUncheckedUpdateWithoutCommunityInput>
    create: XOR<UserCreateWithoutCommunityInput, UserUncheckedCreateWithoutCommunityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunityInput, UserUncheckedUpdateWithoutCommunityInput>
  }

  export type UserUpdateWithoutCommunityInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUpdateManyWithoutAuthorNestedInput
    communities?: CommunityUpdateManyWithoutMembersNestedInput
    liked?: ThreadUpdateManyWithoutLikesNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | string[]
    userliked?: UserUpdateuserlikedInput | string[]
    Thread?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    liked?: ThreadUncheckedUpdateManyWithoutLikesNestedInput
  }

  export type ThreadUpsertWithWhereUniqueWithoutCommunityInput = {
    where: ThreadWhereUniqueInput
    update: XOR<ThreadUpdateWithoutCommunityInput, ThreadUncheckedUpdateWithoutCommunityInput>
    create: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput>
  }

  export type ThreadUpdateWithWhereUniqueWithoutCommunityInput = {
    where: ThreadWhereUniqueInput
    data: XOR<ThreadUpdateWithoutCommunityInput, ThreadUncheckedUpdateWithoutCommunityInput>
  }

  export type ThreadUpdateManyWithWhereWithoutCommunityInput = {
    where: ThreadScalarWhereInput
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutCommunityInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type UserUpdateManyWithWhereWithoutCommunitiesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCommunitiesInput>
  }

  export type ThreadCreateManyAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
  }

  export type CommunityCreateManyCreatedByInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    membersIDs?: CommunityCreatemembersIDsInput | string[]
  }

  export type ThreadUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
    Community?: CommunityUpdateOneWithoutThreadsNestedInput
    likes?: UserUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
  }

  export type CommunityUpdateWithoutCreatedByInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    threads?: ThreadUpdateManyWithoutCommunityNestedInput
    members?: UserUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateWithoutCreatedByInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membersIDs?: CommunityUpdatemembersIDsInput | string[]
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
    members?: UserUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membersIDs?: CommunityUpdatemembersIDsInput | string[]
  }

  export type CommunityUpdateWithoutMembersInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneRequiredWithoutCommunityNestedInput
    threads?: ThreadUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutMembersInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    membersIDs?: CommunityUpdatemembersIDsInput | string[]
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutMembersInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    membersIDs?: CommunityUpdatemembersIDsInput | string[]
  }

  export type ThreadUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadNestedInput
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
    Community?: CommunityUpdateOneWithoutThreadsNestedInput
  }

  export type ThreadUncheckedUpdateWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutLikesInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
  }

  export type ThreadCreateManyParentInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
  }

  export type ThreadUpdateWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
    Community?: CommunityUpdateOneWithoutThreadsNestedInput
    likes?: UserUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutParentInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
  }

  export type UserUpdateWithoutLikedInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUpdateManyWithoutAuthorNestedInput
    Community?: CommunityUpdateManyWithoutCreatedByNestedInput
    communities?: CommunityUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | string[]
    userliked?: UserUpdateuserlikedInput | string[]
    Thread?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    Community?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikedInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | string[]
    userliked?: UserUpdateuserlikedInput | string[]
  }

  export type ThreadCreateManyCommunityInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    userlike?: ThreadCreateuserlikeInput | string[]
  }

  export type ThreadUpdateWithoutCommunityInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutThreadNestedInput
    parent?: ThreadUpdateOneWithoutChildrenNestedInput
    children?: ThreadUpdateManyWithoutParentNestedInput
    likes?: UserUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateWithoutCommunityInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutCommunityInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | string[]
  }

  export type UserUpdateWithoutCommunitiesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Thread?: ThreadUpdateManyWithoutAuthorNestedInput
    Community?: CommunityUpdateManyWithoutCreatedByNestedInput
    liked?: ThreadUpdateManyWithoutLikesNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunitiesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | string[]
    userliked?: UserUpdateuserlikedInput | string[]
    Thread?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    Community?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    liked?: ThreadUncheckedUpdateManyWithoutLikesNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCommunitiesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | string[]
    userliked?: UserUpdateuserlikedInput | string[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThreadCountOutputTypeDefaultArgs instead
     */
    export type ThreadCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThreadCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityCountOutputTypeDefaultArgs instead
     */
    export type CommunityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ThreadDefaultArgs instead
     */
    export type ThreadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ThreadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityDefaultArgs instead
     */
    export type CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}