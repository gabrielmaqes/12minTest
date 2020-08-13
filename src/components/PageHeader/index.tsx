import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

interface PageHeaderProps {
    title?: string;
    iconName: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, iconName, children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {children}
                <Text style={styles.title} >{title}</Text>
                <MaterialCommunityIcons name={iconName} size={32} color="white" />
            </View>
        </View>
    )
}

export default PageHeader;