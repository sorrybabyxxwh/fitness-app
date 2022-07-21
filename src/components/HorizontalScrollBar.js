import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/icons8-right-arrow-50.png';
import LeftArrowIcon from '../assets/icons/icons8-left-arrow-50.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" width="35px" height="35px"/>
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow" >
            <img src={RightArrowIcon} alt="right-arrow" width="35px" height="35px"/>
        </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>
        ))}
    </ScrollMenu>
);

export default HorizontalScrollbar;
