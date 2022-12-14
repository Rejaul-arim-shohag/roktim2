import Header from '../components/Layouts/PageHeader/PageHeader';
import Footer from '../pages/home/footer/Footer'


const Layout = ({children}) => {
    return ( 
        <>
            <Header />
                {children}
            <Footer />
        </>

    );
}
 
export default Layout;