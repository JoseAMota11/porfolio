import en from "./en.json";
import es from "./es.json";

/**
 * Flattens a message object into dot-separated key paths.
 * e.g. { nav: { about: "About" } } -> "nav" | "nav.about"
 */
type MessagePaths<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${MessagePaths<T[K]>}`;
}[keyof T & string];

type SameKeys<A, B> = [MessagePaths<A>] extends [MessagePaths<B>]
  ? [MessagePaths<B>] extends [MessagePaths<A>]
    ? true
    : false
  : false;

type AssertTrue<T extends "keys match"> = T;

/**
 * Compile-time guard: both locale files must have exactly the same keys.
 * Removing or adding a key in one file makes this type fail, which breaks
 * `tsc` and therefore `next build`.
 */
export type MessagesParity = AssertTrue<
  SameKeys<typeof en, typeof es> extends true
    ? "keys match"
    : "messages/en.json and messages/es.json must have identical keys"
>;
