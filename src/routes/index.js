// Auth Pages 
import AgentLogin from "../pages/Authenticaton/login"

//Agent Pages 
import AgentJobList from "../pages/Agent/JobList/index"

//these are agent auth protected routes
const agentRoutes = [

    // Job List
    { path: "/job-list", component: AgentJobList }
]

//these routes are public routes(with out layout))
const authRoutes = [
  { path: "/login", component: AgentLogin }
]

export { agentRoutes, authRoutes }
