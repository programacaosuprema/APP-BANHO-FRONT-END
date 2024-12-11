import Toast from 'react-native-toast-message';
import { View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface FeedbackProps {
    type: 'success' | 'error' | 'info';
    title?: string;
    message?: string;
  }

const Feedback: React.FC<FeedbackProps> = ({ type, title, message }) => {
    React.useEffect(() => {
        Toast.show({
            type: type,
            position: 'bottom',
            text1: title,
            text2: message,
            visibilityTime: 4000,
            autoHide: true,
        });
    }, [type, title, message]);

    return <View />;
};

const styles = StyleSheet.create({
    toastContainer: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        fontSize: 20,
        color: '#000000',
    },
})

export default Feedback;