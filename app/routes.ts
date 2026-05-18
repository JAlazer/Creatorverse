import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/home.tsx"),
    route('view/:creatorId', 'pages/ViewCreator.tsx'),
    route('edit/:creatorId', 'pages/EditCreator.tsx'),
    route('add', 'pages/AddCreators.tsx')
] satisfies RouteConfig;
