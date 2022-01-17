import Dashboard from "./views/dashboard.js";
import Members from "./views/members.js";
import Payment from "./views/payment.js";
import Settings from "./views/settings.js";

const routes = [
    { path: "/", view: Dashboard },
    { path: "/members", view: Members },
    { path: "/payment", view: Payment },
    { path: "/settings", view: Settings },
];

export default routes;