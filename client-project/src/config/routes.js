import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";
import { Contact } from "../pages/General/Contact";
import { Home } from "../pages/General/Home";
import { NotFound } from "../pages/General/NotFound/NotFound";
import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { ListService } from "../pages/General/Services/ListServices/ListService";
import { ListClients } from "../pages/General/Clients/ListClients/ListClients";
import { LoginLayout } from "../layouts/LoginLayout/LoginLayout";
import { Register } from "../pages/Admin/Register";
import { Start } from "../pages/Admin/Start";
import { StartLayout } from "../layouts/StartLayout/StartLayout";

const AdminRoutes = [
  { path: "/admin", component: AdminHome, layout: GeneralLayout },
  { path: "/admin/sign-in", component: SignIn, layout: LoginLayout },
  { path: "/admin/register", component: Register, layout: LoginLayout },
];
const GeneralRoutes = [
  { path: "/login", component: Home, layout: GeneralLayout },
  { path: "/", component: Start, layout: StartLayout },
  { path: "/contact", component: Contact, layout: GeneralLayout },
  { path: "*", component: NotFound, layout: GeneralLayout },
  { path: "services/list", component: ListService, layout: GeneralLayout },
  { path: "clients/list", component: ListClients, layout: GeneralLayout },
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;