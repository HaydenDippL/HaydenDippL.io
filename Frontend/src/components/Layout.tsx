import ScrollToTop from "../scripts/ScrollToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <Navbar />
            <ScrollToTop />
            <main className="pt-40 pb-32 min-h-[calc(100vh-20rem)]">
                { children }
            </main>
        <Footer />
    </>;
}