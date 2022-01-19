import React from "react";
import { SectionEnd, Section, SettingsCard, SettingsCardCover, Info } from "./settings-card.styles";
import { Text } from '../../../components/typography/text.component';

export const SettingsInfo = () => {
    return (
        <SettingsCard>
            <Info>
                <Section>
                    <SettingsCardCover source={require('../../../../assets/coding.png')}/>
                    <SectionEnd>
                        <Text variant='label'>Section under development</Text>
                    </SectionEnd>
                </Section>
            </Info>
        </SettingsCard>
    );
};