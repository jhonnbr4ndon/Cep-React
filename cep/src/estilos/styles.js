import styled from "styled-components";

export const Title = styled.h1 `
    color: yellowgreen;
    font-size: ${props =>`${props.fontSize}px`};
    text-transform: uppercase;

    span{
        font-size: 25px;
        color: green; 
    }
`;

export const TitleSmall = styled(Title)`
    color:blue;
    font-size: 25px;
`;