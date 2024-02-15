
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    Thread: ThreadPayload<ExtArgs>[]
    Community: CommunityPayload<ExtArgs>[]
    communities: CommunityPayload<ExtArgs>[]
    liked: ThreadPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
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

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type ThreadPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Thread"
  objects: {
    author: UserPayload<ExtArgs>
    parent: ThreadPayload<ExtArgs> | null
    children: ThreadPayload<ExtArgs>[]
    Community: CommunityPayload<ExtArgs> | null
    likes: UserPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
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

/**
 * Model Thread
 * 
 */
export type Thread = runtime.Types.DefaultSelection<ThreadPayload>
export type CommunityPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Community"
  objects: {
    createdBy: UserPayload<ExtArgs>
    threads: ThreadPayload<ExtArgs>[]
    members: UserPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
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

/**
 * Model Community
 * 
 */
export type Community = runtime.Types.DefaultSelection<CommunityPayload>

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
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
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
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

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
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.thread`: Exposes CRUD operations for the **Thread** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Threads
    * const threads = await prisma.thread.findMany()
    * ```
    */
  get thread(): Prisma.ThreadDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<GlobalReject, ExtArgs>;
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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

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


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'thread' | 'community'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
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
            result: $Utils.PayloadToResult<UserPayload>
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
        payload: ThreadPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ThreadFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ThreadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThreadFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ThreadPayload>
          }
          findFirst: {
            args: Prisma.ThreadFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ThreadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThreadFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ThreadPayload>
          }
          findMany: {
            args: Prisma.ThreadFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ThreadPayload>[]
          }
          create: {
            args: Prisma.ThreadCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ThreadPayload>
          }
          createMany: {
            args: Prisma.ThreadCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ThreadDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ThreadPayload>
          }
          update: {
            args: Prisma.ThreadUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ThreadPayload>
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
            result: $Utils.PayloadToResult<ThreadPayload>
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
        payload: CommunityPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CommunityPayload>
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
            result: $Utils.PayloadToResult<CommunityPayload>
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
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Thread?: boolean | UserCountOutputTypeCountThreadArgs
    Community?: boolean | UserCountOutputTypeCountCommunityArgs
    communities?: boolean | UserCountOutputTypeCountCommunitiesArgs
    liked?: boolean | UserCountOutputTypeCountLikedArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountThreadArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunitiesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }



  /**
   * Count Type ThreadCountOutputType
   */


  export type ThreadCountOutputType = {
    children: number
    likes: number
  }

  export type ThreadCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    children?: boolean | ThreadCountOutputTypeCountChildrenArgs
    likes?: boolean | ThreadCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes

  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThreadCountOutputType
     */
    select?: ThreadCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * ThreadCountOutputType without action
   */
  export type ThreadCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type CommunityCountOutputType
   */


  export type CommunityCountOutputType = {
    threads: number
    members: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    threads?: boolean | CommunityCountOutputTypeCountThreadsArgs
    members?: boolean | CommunityCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountThreadsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
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
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
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

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Thread?: boolean | User$ThreadArgs<ExtArgs>
    Community?: boolean | User$CommunityArgs<ExtArgs>
    communities?: boolean | User$communitiesArgs<ExtArgs>
    liked?: boolean | User$likedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Thread<T extends User$ThreadArgs<ExtArgs> = {}>(args?: Subset<T, User$ThreadArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findMany', never>| Null>;

    Community<T extends User$CommunityArgs<ExtArgs> = {}>(args?: Subset<T, User$CommunityArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findMany', never>| Null>;

    communities<T extends User$communitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$communitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findMany', never>| Null>;

    liked<T extends User$likedArgs<ExtArgs> = {}>(args?: Subset<T, User$likedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type User$ThreadArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * User.Community
   */
  export type User$CommunityArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommunityScalarFieldEnum>
  }


  /**
   * User.communities
   */
  export type User$communitiesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommunityScalarFieldEnum>
  }


  /**
   * User.liked
   */
  export type User$likedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type ThreadAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thread to aggregate.
     */
    where?: ThreadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Threads to fetch.
     */
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
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




  export type ThreadGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithAggregationInput>
    by: ThreadScalarFieldEnum[]
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
      PickArray<ThreadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThreadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThreadGroupByOutputType[P]>
            : GetScalarType<T[P], ThreadGroupByOutputType[P]>
        }
      >
    >


  export type ThreadSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    communityId?: boolean
    userlike?: boolean
    author?: boolean | UserArgs<ExtArgs>
    parent?: boolean | ThreadArgs<ExtArgs>
    children?: boolean | Thread$childrenArgs<ExtArgs>
    Community?: boolean | CommunityArgs<ExtArgs>
    likes?: boolean | Thread$likesArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeArgs<ExtArgs>
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

  export type ThreadInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    author?: boolean | UserArgs<ExtArgs>
    parent?: boolean | ThreadArgs<ExtArgs>
    children?: boolean | Thread$childrenArgs<ExtArgs>
    Community?: boolean | CommunityArgs<ExtArgs>
    likes?: boolean | Thread$likesArgs<ExtArgs>
    _count?: boolean | ThreadCountOutputTypeArgs<ExtArgs>
  }


  type ThreadGetPayload<S extends boolean | null | undefined | ThreadArgs> = $Types.GetResult<ThreadPayload, S>

  type ThreadCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ThreadFindManyArgs, 'select' | 'include'> & {
      select?: ThreadCountAggregateInputType | true
    }

  export interface ThreadDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends ThreadFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ThreadFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Thread'> extends True ? Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends ThreadFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ThreadFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Thread'> extends True ? Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Thread that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Thread.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ThreadClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    parent<T extends ThreadArgs<ExtArgs> = {}>(args?: Subset<T, ThreadArgs<ExtArgs>>): Prisma__ThreadClient<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    children<T extends Thread$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Thread$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findMany', never>| Null>;

    Community<T extends CommunityArgs<ExtArgs> = {}>(args?: Subset<T, CommunityArgs<ExtArgs>>): Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    likes<T extends Thread$likesArgs<ExtArgs> = {}>(args?: Subset<T, Thread$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Thread base type for findUnique actions
   */
  export type ThreadFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Thread findUnique
   */
  export interface ThreadFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ThreadFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Thread findUniqueOrThrow
   */
  export type ThreadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Thread base type for findFirst actions
   */
  export type ThreadFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
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
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }

  /**
   * Thread findFirst
   */
  export interface ThreadFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ThreadFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Thread findFirstOrThrow
   */
  export type ThreadFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
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
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread findMany
   */
  export type ThreadFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
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
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread create
   */
  export type ThreadCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ThreadCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Threads.
     */
    data: Enumerable<ThreadCreateManyInput>
  }


  /**
   * Thread update
   */
  export type ThreadUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ThreadUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ThreadUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ThreadDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ThreadDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Threads to delete
     */
    where?: ThreadWhereInput
  }


  /**
   * Thread findRaw
   */
  export type ThreadFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type ThreadAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Thread.children
   */
  export type Thread$childrenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Thread.likes
   */
  export type Thread$likesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Thread without action
   */
  export type ThreadArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
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




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: Enumerable<CommunityOrderByWithAggregationInput>
    by: CommunityScalarFieldEnum[]
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
      PickArray<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    image?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    membersIDs?: boolean
    createdBy?: boolean | UserArgs<ExtArgs>
    threads?: boolean | Community$threadsArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeArgs<ExtArgs>
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

  export type CommunityInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserArgs<ExtArgs>
    threads?: boolean | Community$threadsArgs<ExtArgs>
    members?: boolean | Community$membersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeArgs<ExtArgs>
  }


  type CommunityGetPayload<S extends boolean | null | undefined | CommunityArgs> = $Types.GetResult<CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CommunityFindManyArgs, 'select' | 'include'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends CommunityFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Community'> extends True ? Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends CommunityFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Community'> extends True ? Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Community that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__CommunityClient<$Types.GetResult<CommunityPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    createdBy<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    threads<T extends Community$threadsArgs<ExtArgs> = {}>(args?: Subset<T, Community$threadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ThreadPayload<ExtArgs>, T, 'findMany', never>| Null>;

    members<T extends Community$membersArgs<ExtArgs> = {}>(args?: Subset<T, Community$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Community base type for findUnique actions
   */
  export type CommunityFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Community findUnique
   */
  export interface CommunityFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CommunityFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Community base type for findFirst actions
   */
  export type CommunityFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
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
    distinct?: Enumerable<CommunityScalarFieldEnum>
  }

  /**
   * Community findFirst
   */
  export interface CommunityFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CommunityFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
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
    distinct?: Enumerable<CommunityScalarFieldEnum>
  }


  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<CommunityOrderByWithRelationInput>
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
    distinct?: Enumerable<CommunityScalarFieldEnum>
  }


  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: Enumerable<CommunityCreateManyInput>
  }


  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
  }


  /**
   * Community findRaw
   */
  export type CommunityFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type CommunityAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
  export type Community$threadsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thread
     */
    select?: ThreadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ThreadInclude<ExtArgs> | null
    where?: ThreadWhereInput
    orderBy?: Enumerable<ThreadOrderByWithRelationInput>
    cursor?: ThreadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ThreadScalarFieldEnum>
  }


  /**
   * Community.members
   */
  export type Community$membersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Community without action
   */
  export type CommunityArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    username?: StringFilter | string
    name?: StringFilter | string
    image?: StringFilter | string
    bio?: StringNullableFilter | string | null
    onboarded?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    communityIDs?: StringNullableListFilter
    userliked?: StringNullableListFilter
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

  export type UserWhereUniqueInput = {
    id?: string
    userId?: string
    username?: string
  }

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
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    bio?: StringNullableWithAggregatesFilter | string | null
    onboarded?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    communityIDs?: StringNullableListFilter
    userliked?: StringNullableListFilter
  }

  export type ThreadWhereInput = {
    AND?: Enumerable<ThreadWhereInput>
    OR?: Enumerable<ThreadWhereInput>
    NOT?: Enumerable<ThreadWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
    authorId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    parentId?: StringNullableFilter | string | null
    communityId?: StringNullableFilter | string | null
    userlike?: StringNullableListFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
    parent?: XOR<ThreadRelationFilter, ThreadWhereInput> | null
    children?: ThreadListRelationFilter
    Community?: XOR<CommunityRelationFilter, CommunityWhereInput> | null
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

  export type ThreadWhereUniqueInput = {
    id?: string
  }

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
    AND?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    OR?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ThreadScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    authorId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    parentId?: StringNullableWithAggregatesFilter | string | null
    communityId?: StringNullableWithAggregatesFilter | string | null
    userlike?: StringNullableListFilter
  }

  export type CommunityWhereInput = {
    AND?: Enumerable<CommunityWhereInput>
    OR?: Enumerable<CommunityWhereInput>
    NOT?: Enumerable<CommunityWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    name?: StringFilter | string
    image?: StringFilter | string
    bio?: StringNullableFilter | string | null
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    creatorId?: StringFilter | string
    membersIDs?: StringNullableListFilter
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

  export type CommunityWhereUniqueInput = {
    id?: string
    username?: string
  }

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
    AND?: Enumerable<CommunityScalarWhereWithAggregatesInput>
    OR?: Enumerable<CommunityScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CommunityScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    bio?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    creatorId?: StringWithAggregatesFilter | string
    membersIDs?: StringNullableListFilter
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
    communityIDs?: UserCreatecommunityIDsInput | Enumerable<string>
    userliked?: UserCreateuserlikedInput | Enumerable<string>
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
    communityIDs?: UserUpdatecommunityIDsInput | Enumerable<string>
    userliked?: UserUpdateuserlikedInput | Enumerable<string>
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
    communityIDs?: UserCreatecommunityIDsInput | Enumerable<string>
    userliked?: UserCreateuserlikedInput | Enumerable<string>
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
    communityIDs?: UserUpdatecommunityIDsInput | Enumerable<string>
    userliked?: UserUpdateuserlikedInput | Enumerable<string>
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
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
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
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
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
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
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
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
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
    membersIDs?: CommunityCreatemembersIDsInput | Enumerable<string>
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
    membersIDs?: CommunityUpdatemembersIDsInput | Enumerable<string>
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
    membersIDs?: CommunityCreatemembersIDsInput | Enumerable<string>
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
    membersIDs?: CommunityUpdatemembersIDsInput | Enumerable<string>
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
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

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ThreadRelationFilter = {
    is?: ThreadWhereInput | null
    isNot?: ThreadWhereInput | null
  }

  export type CommunityRelationFilter = {
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

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
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

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type ThreadCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type CommunityCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutCreatedByInput>, Enumerable<CommunityUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutCreatedByInput>
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: Enumerable<CommunityWhereUniqueInput>
  }

  export type CommunityCreateNestedManyWithoutMembersInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutMembersInput>, Enumerable<CommunityUncheckedCreateWithoutMembersInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutMembersInput>
    connect?: Enumerable<CommunityWhereUniqueInput>
  }

  export type ThreadCreateNestedManyWithoutLikesInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutLikesInput>, Enumerable<ThreadUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutLikesInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type UserCreatecommunityIDsInput = {
    set: Enumerable<string>
  }

  export type UserCreateuserlikedInput = {
    set: Enumerable<string>
  }

  export type ThreadUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    createMany?: ThreadCreateManyAuthorInputEnvelope
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type CommunityUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutCreatedByInput>, Enumerable<CommunityUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutCreatedByInput>
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    connect?: Enumerable<CommunityWhereUniqueInput>
  }

  export type CommunityUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutMembersInput>, Enumerable<CommunityUncheckedCreateWithoutMembersInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutMembersInput>
    connect?: Enumerable<CommunityWhereUniqueInput>
  }

  export type ThreadUncheckedCreateNestedManyWithoutLikesInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutLikesInput>, Enumerable<ThreadUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutLikesInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
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
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type CommunityUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutCreatedByInput>, Enumerable<CommunityUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<CommunityUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: Enumerable<CommunityWhereUniqueInput>
    disconnect?: Enumerable<CommunityWhereUniqueInput>
    delete?: Enumerable<CommunityWhereUniqueInput>
    connect?: Enumerable<CommunityWhereUniqueInput>
    update?: Enumerable<CommunityUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<CommunityUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<CommunityScalarWhereInput>
  }

  export type CommunityUpdateManyWithoutMembersNestedInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutMembersInput>, Enumerable<CommunityUncheckedCreateWithoutMembersInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutMembersInput>
    upsert?: Enumerable<CommunityUpsertWithWhereUniqueWithoutMembersInput>
    set?: Enumerable<CommunityWhereUniqueInput>
    disconnect?: Enumerable<CommunityWhereUniqueInput>
    delete?: Enumerable<CommunityWhereUniqueInput>
    connect?: Enumerable<CommunityWhereUniqueInput>
    update?: Enumerable<CommunityUpdateWithWhereUniqueWithoutMembersInput>
    updateMany?: Enumerable<CommunityUpdateManyWithWhereWithoutMembersInput>
    deleteMany?: Enumerable<CommunityScalarWhereInput>
  }

  export type ThreadUpdateManyWithoutLikesNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutLikesInput>, Enumerable<ThreadUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutLikesInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutLikesInput>
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutLikesInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutLikesInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type UserUpdatecommunityIDsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type UserUpdateuserlikedInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ThreadUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutAuthorInput>, Enumerable<ThreadUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: ThreadCreateManyAuthorInputEnvelope
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type CommunityUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutCreatedByInput>, Enumerable<CommunityUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<CommunityUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: CommunityCreateManyCreatedByInputEnvelope
    set?: Enumerable<CommunityWhereUniqueInput>
    disconnect?: Enumerable<CommunityWhereUniqueInput>
    delete?: Enumerable<CommunityWhereUniqueInput>
    connect?: Enumerable<CommunityWhereUniqueInput>
    update?: Enumerable<CommunityUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<CommunityUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<CommunityScalarWhereInput>
  }

  export type CommunityUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<Enumerable<CommunityCreateWithoutMembersInput>, Enumerable<CommunityUncheckedCreateWithoutMembersInput>>
    connectOrCreate?: Enumerable<CommunityCreateOrConnectWithoutMembersInput>
    upsert?: Enumerable<CommunityUpsertWithWhereUniqueWithoutMembersInput>
    set?: Enumerable<CommunityWhereUniqueInput>
    disconnect?: Enumerable<CommunityWhereUniqueInput>
    delete?: Enumerable<CommunityWhereUniqueInput>
    connect?: Enumerable<CommunityWhereUniqueInput>
    update?: Enumerable<CommunityUpdateWithWhereUniqueWithoutMembersInput>
    updateMany?: Enumerable<CommunityUpdateManyWithWhereWithoutMembersInput>
    deleteMany?: Enumerable<CommunityScalarWhereInput>
  }

  export type ThreadUncheckedUpdateManyWithoutLikesNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutLikesInput>, Enumerable<ThreadUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutLikesInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutLikesInput>
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutLikesInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutLikesInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
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
    create?: XOR<Enumerable<ThreadCreateWithoutParentInput>, Enumerable<ThreadUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutParentInput>
    createMany?: ThreadCreateManyParentInputEnvelope
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type CommunityCreateNestedOneWithoutThreadsInput = {
    create?: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutThreadsInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutLikedInput = {
    create?: XOR<Enumerable<UserCreateWithoutLikedInput>, Enumerable<UserUncheckedCreateWithoutLikedInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLikedInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type ThreadCreateuserlikeInput = {
    set: Enumerable<string>
  }

  export type ThreadUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutParentInput>, Enumerable<ThreadUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutParentInput>
    createMany?: ThreadCreateManyParentInputEnvelope
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutLikedInput = {
    create?: XOR<Enumerable<UserCreateWithoutLikedInput>, Enumerable<UserUncheckedCreateWithoutLikedInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLikedInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutThreadNestedInput = {
    create?: XOR<UserCreateWithoutThreadInput, UserUncheckedCreateWithoutThreadInput>
    connectOrCreate?: UserCreateOrConnectWithoutThreadInput
    upsert?: UserUpsertWithoutThreadInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutThreadInput, UserUncheckedUpdateWithoutThreadInput>
  }

  export type ThreadUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: ThreadCreateOrConnectWithoutChildrenInput
    upsert?: ThreadUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: boolean
    connect?: ThreadWhereUniqueInput
    update?: XOR<ThreadUpdateWithoutChildrenInput, ThreadUncheckedUpdateWithoutChildrenInput>
  }

  export type ThreadUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutParentInput>, Enumerable<ThreadUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutParentInput>
    createMany?: ThreadCreateManyParentInputEnvelope
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type CommunityUpdateOneWithoutThreadsNestedInput = {
    create?: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutThreadsInput
    upsert?: CommunityUpsertWithoutThreadsInput
    disconnect?: boolean
    delete?: boolean
    connect?: CommunityWhereUniqueInput
    update?: XOR<CommunityUpdateWithoutThreadsInput, CommunityUncheckedUpdateWithoutThreadsInput>
  }

  export type UserUpdateManyWithoutLikedNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutLikedInput>, Enumerable<UserUncheckedCreateWithoutLikedInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLikedInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutLikedInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutLikedInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutLikedInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type ThreadUpdateuserlikeInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ThreadUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutParentInput>, Enumerable<ThreadUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutParentInput>
    createMany?: ThreadCreateManyParentInputEnvelope
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutLikedNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutLikedInput>, Enumerable<UserUncheckedCreateWithoutLikedInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLikedInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutLikedInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutLikedInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutLikedInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutCommunityInput = {
    create?: XOR<UserCreateWithoutCommunityInput, UserUncheckedCreateWithoutCommunityInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityInput
    connect?: UserWhereUniqueInput
  }

  export type ThreadCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutCommunityInput>, Enumerable<ThreadUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutCommunityInput>
    createMany?: ThreadCreateManyCommunityInputEnvelope
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<Enumerable<UserCreateWithoutCommunitiesInput>, Enumerable<UserUncheckedCreateWithoutCommunitiesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCommunitiesInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type CommunityCreatemembersIDsInput = {
    set: Enumerable<string>
  }

  export type ThreadUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutCommunityInput>, Enumerable<ThreadUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutCommunityInput>
    createMany?: ThreadCreateManyCommunityInputEnvelope
    connect?: Enumerable<ThreadWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutCommunitiesInput = {
    create?: XOR<Enumerable<UserCreateWithoutCommunitiesInput>, Enumerable<UserUncheckedCreateWithoutCommunitiesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCommunitiesInput>
    connect?: Enumerable<UserWhereUniqueInput>
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
    update?: XOR<UserUpdateWithoutCommunityInput, UserUncheckedUpdateWithoutCommunityInput>
  }

  export type ThreadUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutCommunityInput>, Enumerable<ThreadUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutCommunityInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutCommunityInput>
    createMany?: ThreadCreateManyCommunityInputEnvelope
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutCommunityInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutCommunityInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type UserUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCommunitiesInput>, Enumerable<UserUncheckedCreateWithoutCommunitiesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCommunitiesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCommunitiesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCommunitiesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCommunitiesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CommunityUpdatemembersIDsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ThreadUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<Enumerable<ThreadCreateWithoutCommunityInput>, Enumerable<ThreadUncheckedCreateWithoutCommunityInput>>
    connectOrCreate?: Enumerable<ThreadCreateOrConnectWithoutCommunityInput>
    upsert?: Enumerable<ThreadUpsertWithWhereUniqueWithoutCommunityInput>
    createMany?: ThreadCreateManyCommunityInputEnvelope
    set?: Enumerable<ThreadWhereUniqueInput>
    disconnect?: Enumerable<ThreadWhereUniqueInput>
    delete?: Enumerable<ThreadWhereUniqueInput>
    connect?: Enumerable<ThreadWhereUniqueInput>
    update?: Enumerable<ThreadUpdateWithWhereUniqueWithoutCommunityInput>
    updateMany?: Enumerable<ThreadUpdateManyWithWhereWithoutCommunityInput>
    deleteMany?: Enumerable<ThreadScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutCommunitiesNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCommunitiesInput>, Enumerable<UserUncheckedCreateWithoutCommunitiesInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCommunitiesInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCommunitiesInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCommunitiesInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCommunitiesInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
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
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedInput
  }

  export type ThreadCreateOrConnectWithoutAuthorInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutAuthorInput, ThreadUncheckedCreateWithoutAuthorInput>
  }

  export type ThreadCreateManyAuthorInputEnvelope = {
    data: Enumerable<ThreadCreateManyAuthorInput>
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
    membersIDs?: CommunityCreatemembersIDsInput | Enumerable<string>
    threads?: ThreadUncheckedCreateNestedManyWithoutCommunityInput
    members?: UserUncheckedCreateNestedManyWithoutCommunitiesInput
  }

  export type CommunityCreateOrConnectWithoutCreatedByInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutCreatedByInput, CommunityUncheckedCreateWithoutCreatedByInput>
  }

  export type CommunityCreateManyCreatedByInputEnvelope = {
    data: Enumerable<CommunityCreateManyCreatedByInput>
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
    membersIDs?: CommunityCreatemembersIDsInput | Enumerable<string>
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
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
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
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutThreadInput>
  }

  export type ThreadScalarWhereInput = {
    AND?: Enumerable<ThreadScalarWhereInput>
    OR?: Enumerable<ThreadScalarWhereInput>
    NOT?: Enumerable<ThreadScalarWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
    authorId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    parentId?: StringNullableFilter | string | null
    communityId?: StringNullableFilter | string | null
    userlike?: StringNullableListFilter
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
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutCommunityInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: Enumerable<CommunityScalarWhereInput>
    OR?: Enumerable<CommunityScalarWhereInput>
    NOT?: Enumerable<CommunityScalarWhereInput>
    id?: StringFilter | string
    username?: StringFilter | string
    name?: StringFilter | string
    image?: StringFilter | string
    bio?: StringNullableFilter | string | null
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    creatorId?: StringFilter | string
    membersIDs?: StringNullableListFilter
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
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutCommunitiesInput>
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
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutLikedInput>
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
    communityIDs?: UserCreatecommunityIDsInput | Enumerable<string>
    userliked?: UserCreateuserlikedInput | Enumerable<string>
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
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
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
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedInput
  }

  export type ThreadCreateOrConnectWithoutParentInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutParentInput, ThreadUncheckedCreateWithoutParentInput>
  }

  export type ThreadCreateManyParentInputEnvelope = {
    data: Enumerable<ThreadCreateManyParentInput>
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
    membersIDs?: CommunityCreatemembersIDsInput | Enumerable<string>
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
    communityIDs?: UserCreatecommunityIDsInput | Enumerable<string>
    userliked?: UserCreateuserlikedInput | Enumerable<string>
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
    communityIDs?: UserUpdatecommunityIDsInput | Enumerable<string>
    userliked?: UserUpdateuserlikedInput | Enumerable<string>
    Community?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
    liked?: ThreadUncheckedUpdateManyWithoutLikesNestedInput
  }

  export type ThreadUpsertWithoutChildrenInput = {
    update: XOR<ThreadUpdateWithoutChildrenInput, ThreadUncheckedUpdateWithoutChildrenInput>
    create: XOR<ThreadCreateWithoutChildrenInput, ThreadUncheckedCreateWithoutChildrenInput>
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
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
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
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutChildrenInput>
  }

  export type CommunityUpsertWithoutThreadsInput = {
    update: XOR<CommunityUpdateWithoutThreadsInput, CommunityUncheckedUpdateWithoutThreadsInput>
    create: XOR<CommunityCreateWithoutThreadsInput, CommunityUncheckedCreateWithoutThreadsInput>
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
    membersIDs?: CommunityUpdatemembersIDsInput | Enumerable<string>
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
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikesInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    username?: StringFilter | string
    name?: StringFilter | string
    image?: StringFilter | string
    bio?: StringNullableFilter | string | null
    onboarded?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    communityIDs?: StringNullableListFilter
    userliked?: StringNullableListFilter
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
    communityIDs?: UserCreatecommunityIDsInput | Enumerable<string>
    userliked?: UserCreateuserlikedInput | Enumerable<string>
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
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
    children?: ThreadUncheckedCreateNestedManyWithoutParentInput
    likes?: UserUncheckedCreateNestedManyWithoutLikedInput
  }

  export type ThreadCreateOrConnectWithoutCommunityInput = {
    where: ThreadWhereUniqueInput
    create: XOR<ThreadCreateWithoutCommunityInput, ThreadUncheckedCreateWithoutCommunityInput>
  }

  export type ThreadCreateManyCommunityInputEnvelope = {
    data: Enumerable<ThreadCreateManyCommunityInput>
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
    communityIDs?: UserCreatecommunityIDsInput | Enumerable<string>
    userliked?: UserCreateuserlikedInput | Enumerable<string>
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
    communityIDs?: UserUpdatecommunityIDsInput | Enumerable<string>
    userliked?: UserUpdateuserlikedInput | Enumerable<string>
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
    data: XOR<ThreadUpdateManyMutationInput, ThreadUncheckedUpdateManyWithoutThreadsInput>
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
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMembersInput>
  }

  export type ThreadCreateManyAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
  }

  export type CommunityCreateManyCreatedByInput = {
    id?: string
    username: string
    name: string
    image: string
    bio?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    membersIDs?: CommunityCreatemembersIDsInput | Enumerable<string>
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
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutThreadInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
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
    membersIDs?: CommunityUpdatemembersIDsInput | Enumerable<string>
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
    members?: UserUncheckedUpdateManyWithoutCommunitiesNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutCommunityInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membersIDs?: CommunityUpdatemembersIDsInput | Enumerable<string>
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
    membersIDs?: CommunityUpdatemembersIDsInput | Enumerable<string>
    threads?: ThreadUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutCommunitiesInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    membersIDs?: CommunityUpdatemembersIDsInput | Enumerable<string>
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
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutLikedInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
  }

  export type ThreadCreateManyParentInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId?: string | null
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
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
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutChildrenInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
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
    communityIDs?: UserUpdatecommunityIDsInput | Enumerable<string>
    userliked?: UserUpdateuserlikedInput | Enumerable<string>
    Thread?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    Community?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | Enumerable<string>
    userliked?: UserUpdateuserlikedInput | Enumerable<string>
  }

  export type ThreadCreateManyCommunityInput = {
    id?: string
    content: string
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    userlike?: ThreadCreateuserlikeInput | Enumerable<string>
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
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
    children?: ThreadUncheckedUpdateManyWithoutParentNestedInput
    likes?: UserUncheckedUpdateManyWithoutLikedNestedInput
  }

  export type ThreadUncheckedUpdateManyWithoutThreadsInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    userlike?: ThreadUpdateuserlikeInput | Enumerable<string>
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
    communityIDs?: UserUpdatecommunityIDsInput | Enumerable<string>
    userliked?: UserUpdateuserlikedInput | Enumerable<string>
    Thread?: ThreadUncheckedUpdateManyWithoutAuthorNestedInput
    Community?: CommunityUncheckedUpdateManyWithoutCreatedByNestedInput
    liked?: ThreadUncheckedUpdateManyWithoutLikesNestedInput
  }

  export type UserUncheckedUpdateManyWithoutMembersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    onboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityIDs?: UserUpdatecommunityIDsInput | Enumerable<string>
    userliked?: UserUpdateuserlikedInput | Enumerable<string>
  }



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