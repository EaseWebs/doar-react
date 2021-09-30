import { FC } from "react";
import { Card, CardBody, SectionTitle } from "@doar/components";
import {
    StyledHeader,
    StyledTopDiv,
    StyledTopTitle,
    StyledTopFlex,
    StyledTopCoin,
} from "./style";

const Portfolio: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Portfolio" />
            </StyledHeader>
            <CardBody p={["0px", "0px"]} position="relative">
                <StyledTopDiv>
                    <StyledTopTitle>Total Balance</StyledTopTitle>
                    <StyledTopFlex>
                        <StyledTopCoin>
                            <span>200.0</span> <small>gram</small>
                        </StyledTopCoin>
                    </StyledTopFlex>
                    <StyledTopTitle>Total Bonus</StyledTopTitle>
                </StyledTopDiv>
            </CardBody>
        </Card>
    );
};

export default Portfolio;
