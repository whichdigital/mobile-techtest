import React from 'react';
import type { ReactElement } from 'react';
import { Text, View } from 'react-native';
import styles from './App.styles';

const App: () => ReactElement = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mobile Tech Test</Text>
            <Text style={styles.text}>Please replace this with your solution.</Text>
            <Text style={styles.subtitle}>Description:</Text>
            <Text style={styles.text}>
                The screen must have the title "Magazine issues". We would like you to display the data contained in
                data.json. Between the title and the data, you should create 4 toggles which filter based on cover name.
                The default is that all 4 are switched on. Switching off a toggle should hide all instances of that
                issue type. Switching it back on should bring them back. We would like you to include a footnote at the
                bottom "The full archive is available to Which? members". The whole screen should be scrollable, not
                just the data.
            </Text>
            <Text style={styles.subtitle}>Constraints:</Text>
            <Text style={styles.text}>
                You should consider mobile portrait, mobile landscape and tablet devices. Mobile portrait will have one
                item per row. Mobile landscape will have 2 items per row. Tablet will have 3 items per row with the
                content centered. The content should not touch the edge of the screen. You should take care to account
                for phone notches.
            </Text>
        </View>
    );
};

export default App;
