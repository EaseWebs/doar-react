import { FC } from "react";
import { MoreVertical } from "react-feather";
import Breadcrumb from "../../../components/breadcrumb";
import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea: FC = () => {
    return (
        <StyledWelcomeArea>
            <StyledWelcomeLeft>
                <Breadcrumb
                    prev={[{ text: "Dashboard", link: "/" }]}
                    title="BKS My Gold"
                    wcText="Welcome To Dashboard"
                />
            </StyledWelcomeLeft>
        </StyledWelcomeArea>
    );
};

export default WelcomeArea;
