import { FC, useState } from "react";
import { Download, Share2, Eye } from "react-feather";
import { Col, Card, Media, MediaBody } from "@doar/components";
import ModalExport from "../../../components/dashboard-two/modal-export";
import ModalShare from "../../../components/dashboard-two/modal-share";
import {
    StyledBody,
    StyledAvatar,
    StyledTitle,
    StyledMediaBottom,
    StyledBTCNumber,
    StyledBTCRate,
    StyledRight,
    StyledButton,
} from "./style";

const RowOne: FC = () => {
    const [showExportModal, setShowExportModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const handleShowExportModal = () => {
        setShowExportModal((prev) => !prev);
    };
    const handleShowShareModal = () => {
        setShowShareModal((prev) => !prev);
    };
    return (
        <>
            <Col col={6} mt="10px">
                <Card>
                    <StyledBody>
                        <Media>
                            <MediaBody mt="5px">
                                <StyledTitle>Refer AND Earn</StyledTitle>
                                <StyledMediaBottom>
                                    <StyledBTCNumber>BKS4567</StyledBTCNumber>
                                </StyledMediaBottom>
                            </MediaBody>
                        </Media>
                        <StyledRight>
                            <StyledButton
                                color="white"
                                size="sm"
                                hasIcon
                                mt={["10px", "15px"]}
                                ml={["10px", "5px"]}
                                onClick={handleShowShareModal}
                            >
                                <Share2 size={14} strokeWidth="2.5px" />
                                Share
                            </StyledButton>
                            <StyledButton
                                color="white"
                                size="sm"
                                hasIcon
                                mt={["10px", "15px"]}
                                ml={["10px", "5px"]}
                                path="#!"
                            >
                                <Eye size={14} strokeWidth="2.5px" />
                                Check Referal Bonus
                            </StyledButton>
                        </StyledRight>
                    </StyledBody>
                </Card>
            </Col>
            <ModalExport
                show={showExportModal}
                onClose={handleShowExportModal}
            />
            <ModalShare show={showShareModal} onClose={handleShowShareModal} />
        </>
    );
};

export default RowOne;
