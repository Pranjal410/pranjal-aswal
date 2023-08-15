import { LayoutStyled } from "./Layout.styled";
import { SiteHeader } from "./../SiteHeader/SiteHeader";

const Layout = () => {
    return (
        <LayoutStyled>
            <div>
                <SiteHeader />
            </div>
        </LayoutStyled>
    );
};

export default Layout;
