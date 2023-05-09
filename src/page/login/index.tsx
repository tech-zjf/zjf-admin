import LoginCard from '@/components/global/login-card'
import './style.less'

const LoginPage: React.FC = () => {
    return (
        <div className=" w-full h-full overflow-hidden login-wrap flex items-center justify-center">
            <LoginCard />
        </div>
    )
}
export default LoginPage