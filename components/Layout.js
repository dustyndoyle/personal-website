import Navigation from '../components/Navigation';

const Layout = (props) => (
    <div>
        <Navigation/>
        {props.children}
    </div>
)

export default Layout