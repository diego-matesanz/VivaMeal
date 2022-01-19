import styled from "styled-components";
import { Card } from 'react-native-paper';

export const SettingsCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    opacity: 0.95;
    margin: ${(props) => props.theme.space[3]};
`;

export const SettingsCardCover = styled(Card.Cover)`
    margin-top: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
    width: ${(props) => props.theme.sizes[4]};
    height: ${(props) => props.theme.sizes[4]};
`;

export const Info = styled.View`
    padding-horizontal: ${(props) => props.theme.space[3]};
    padding-bottom: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;