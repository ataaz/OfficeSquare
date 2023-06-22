import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
    return <div data-scroll-section>
        <Header></Header>
        {children}
        <Footer></Footer>
        </div>;
}