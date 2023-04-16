import home from "./pages/home";
import profile from "./pages/profile";
import investorDashboard from "./pages/investorDashboard";
import studentDashboard from './pages/studentDashboard';
import login from './pages/login'
import loginInvestor from './pages/loginInvestor'
import investorHome from './pages/investorHome'
import studentHome from "./pages/studentHome";
import studentProfile from "./components/studentProfile";
import RegisterStudent from "./pages/RegisterStudent"
import RegisterInvestor from "./pages/RegisterInvestor";
import PDF from './components/PDF'
import InvestorProfile from './components/InvestorProfile'
import PaymentGateway from './components/PaymentGateway'
import ChatBot from "./components/Chat";
import Admin from './pages/Admin'
const routes = [
    {
        path: "/",
        component: home,
    },
    {
        path: "/investor-dashboard",
        component: investorDashboard,
    },
    {
        path: "/student-dashboard",
        component: studentDashboard,
    },
    {
        path: "/profile",
        component: profile,
    },
    {
        path: "/login-student",
        component: login,
    },
    {
        path: "/login-investor",
        component: loginInvestor,
    },
    {
        path: "/investorHome",
        component: investorHome,
    },
    {
        path: '/studentHome',
        component: studentHome
    },
    {
        path: '/studentProfile/:id',
        component: studentProfile
    },
    {
        path: '/registerStudent',
        component: RegisterStudent
    },
    {
        path: '/registerInvestor',
        component: RegisterInvestor
    },
    {
        path: '/contract',
        component: PDF
    },
    {
        path: '/investorProfile',
        component: InvestorProfile
    },
    {
        path: '/payment',
        component: PaymentGateway
    },
    {
        path: '/chat',
        component: ChatBot
    },
    {
        path: '/admin',
        component: Admin
    }
];

export default routes;
