import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { SettingsInfo } from '../components/settings-card.component';

export const SettingsScreen = () => {
    return (
        <ImageBackground source={require('../../../../assets/bg-main.png')} resizeMode="cover" style={{flex: 1}}>
            <SafeArea style={{justifyContent: 'center'}}>
                <SettingsInfo />
            </SafeArea>
        </ImageBackground>
    );
};