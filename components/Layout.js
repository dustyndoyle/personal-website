import Navigation from '../components/Navigation';
import "../resources/sass/styles.scss";

const Layout = (props) => (
    <div>
        <Navigation/>
        {props.children}
    </div>
)

export default Layout