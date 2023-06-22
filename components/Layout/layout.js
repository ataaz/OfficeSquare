import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
    return <div data-scroll-container>
        <Header></Header>
        {children}
        <Footer></Footer>
        </div>;
}