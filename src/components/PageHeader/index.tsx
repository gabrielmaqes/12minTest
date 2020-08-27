import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface PageHeaderProps {
    title?: string;
    headerAction: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, headerAction, children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title} >{title}</Text>
                {headerAction}
            </View>
            
            {children}
        </View>
    )
}

export default PageHeader;