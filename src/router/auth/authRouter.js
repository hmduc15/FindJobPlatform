import LoginForm from "@/view/auth/Login.vue";
import ResetPassword from "@/view/auth/ResetPassword.vue";
import SignUp from "@/view/auth/SignUp.vue";
import LadiPage from "@/view/ladipage/LadiPage.vue";

const authRouter = [
    {
      path: '/',
      component: LadiPage,
    },
    {
        path: '/login',
        component: LoginForm
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/reset-password',
        component: ResetPassword
    }
];

export default authRouter;