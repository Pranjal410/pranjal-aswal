import React from "react";
import { SiteHeaderStyled } from "./SiteHeader.styled";

//Icons
import { ReactComponent as IconArrowTopRight } from "../../assets/icons/arrow-top-right.svg";
import { Link } from "react-router-dom";

export const SiteHeader = () => {
    return (
        <SiteHeaderStyled>
            <div id="site-header">
                <div className="header-name">
                    <a href="/">
                        <h4>PRANJAL ASWAL</h4>
                    </a>
                </div>

                <div className="header-cta">
                    <Link>
                        <p className="is-selected">Work</p>
                    </Link>
                    <Link to="/play">
                        <p>Play</p>
                    </Link>
                    <Link to="#about">
                        <p>About</p>
                    </Link>
                    <a href="/">
                        <div className="resume-cta">
                            <p>Resume</p>

                            <IconArrowTopRight />
                        </div>
                    </a>
                </div>
            </div>
        </SiteHeaderStyled>
    );
};
