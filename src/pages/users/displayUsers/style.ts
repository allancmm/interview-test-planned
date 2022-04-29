import styled from "styled-components";
import { ReactComponent as Arrows } from "../../../assets/sort-arrows.svg";

export const HeaderTable = styled.span`
     font-weight: bold;
`

export const ArrowSortIcon = styled(Arrows)`
     padding-left: var(--s-half);
     height: var(--s-base);
`;

export const ContainerAgeTable = styled.div`
    width: calc(var(--s-base) *4);
    text-align: center;
`;
