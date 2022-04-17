// This file was generated by RedwoodJS
import '@redwoodjs/router'
import { A } from 'ts-toolbelt'



type RouteParams<Route> = Route extends `${string}/${infer Rest}`
  ? A.Compute<ParsedParams<Rest>>
  : {}

type QueryParams = Record<string | number, string | number | boolean>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
    login: (params?: RouteParams<"/login"> & QueryParams) => "/login"
    signup: (params?: RouteParams<"/signup"> & QueryParams) => "/signup"
    forgotPassword: (params?: RouteParams<"/forgot-password"> & QueryParams) => "/forgot-password"
    resetPassword: (params?: RouteParams<"/reset-password"> & QueryParams) => "/reset-password"
    newPost: (params?: RouteParams<"/admin/posts/new"> & QueryParams) => "/admin/posts/new"
    editPost: (params?: RouteParams<"/admin/posts/{id:Int}/edit"> & QueryParams) => "/admin/posts/{id:Int}/edit"
    post: (params?: RouteParams<"/admin/posts/{id:Int}"> & QueryParams) => "/admin/posts/{id:Int}"
    posts: (params?: RouteParams<"/admin/posts"> & QueryParams) => "/admin/posts"
    contact: (params?: RouteParams<"/contact"> & QueryParams) => "/contact"
    article: (params?: RouteParams<"/article/{id:Int}"> & QueryParams) => "/article/{id:Int}"
    about: (params?: RouteParams<"/about"> & QueryParams) => "/about"
    home: (params?: RouteParams<"/"> & QueryParams) => "/"
  }
}

type ParamType<match> = match extends 'Int'
  ? number
  : match extends 'Boolean'
  ? boolean
  : match extends 'Float'
  ? number
  : string

// Path string parser for Redwood Routes
type ParsedParams<PartialRoute> =
  // {a:Int}/[...moar]
  PartialRoute extends `{${infer Param}:${infer Match}}/${infer Rest}`
    ? // check for greedy match e.g. {b}/{c:Int}
      // Param = b}/{c, Rest2 = {c, Match = Int so we reconstruct the old one {c + : + Int + }
      Param extends `${infer Param2}}/${infer Rest2}`
      ? { [ParamName in Param2]: string } &
          ParsedParams<`${Rest2}:${Match}}`> &
          ParsedParams<`${Rest}`>
      : { [Entry in Param]: ParamType<Match> } & ParsedParams<`${Rest}`>
    : // has type, but at the end e.g. {d:Int}
    PartialRoute extends `{${infer Param}:${infer Match}}`
    ? // Greedy match order 2
      Param extends `${infer Param2}}/${infer Rest2}`
      ? { [ParamName in Param2]: string } &
          ParsedParams<`${Rest2}:${Match}}`>
      : { [Entry in Param]: ParamType<Match> }
    : // no type, but has stuff after it, e.g. {c}/{d}
    PartialRoute extends `{${infer Param}}/${infer Rest}`
    ? { [ParamName in Param]: string } & ParsedParams<`${Rest}`>
    : // last one with no type e.g. {d}
    PartialRoute extends `{${infer Param}}`
    ? { [ParamName in Param]: string }
    : // if theres a non param
    PartialRoute extends `${string}/${infer Rest}`
    ? ParsedParams<`${Rest}`>
    : {}
