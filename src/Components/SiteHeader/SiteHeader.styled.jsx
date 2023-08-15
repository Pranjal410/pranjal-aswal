import { styled } from "styled-components";

export const SiteHeaderStyled = styled.div`
    #site-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem 5rem;
    }

    .header-name {
        a {
            color: #4c4c4c;
            text-decoration: none;

            h4 {
                font-size: 1rem;
                letter-spacing: 0.5px;
                font-weight: 600 !important;
            }
        }
    }

    .header-cta {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 2.5rem;

        p {
            font-size: 1rem;
            color: lightgray;
        }

        .resume-cta {
            display: flex;
            justify-content: center;
            align-items: center;

            :hover {
                svg {
                    path {
                        display: none;
                    }
                }
            }

            svg {
                width: 24px;
            }
        }
    }

    .is-selected {
        color: black !important;
    }

    a {
        text-decoration: none;
    }
`;
