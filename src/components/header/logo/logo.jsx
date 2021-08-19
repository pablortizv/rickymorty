import logoImage from '../../../assets/logo.png'
import {Link} from 'react-router-dom'

const Logo = ()=>(
    <Link to='' className='link'>
        <img src={logoImage} alt='logo' className='logo'/>
    </Link>
);
export default Logo;