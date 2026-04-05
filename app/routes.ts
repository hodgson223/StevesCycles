import { type RouteConfig, index, prefix, route} from "@react-router/dev/routes";

export default [    
    index("routes/home.tsx"),
    route("About","routes/About.jsx"),
    route("Services","routes/Services.jsx"),
    route("Contact", "routes/Contact.jsx"),





] satisfies RouteConfig;
