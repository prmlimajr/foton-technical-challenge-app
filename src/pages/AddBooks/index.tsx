import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';
import {useBook} from '../../hooks/BookContext';
import {
  Container,
  Title,
  FormContainer,
  Label,
  Field,
  LongTextField,
  SubmitButton,
  Shadow,
  ButtonText,
} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

interface BookProps {
  name: String;
  author: String;
  description: String;
  cover: String;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Please inform the name of the book'),
  author: Yup.string().required("Please inform the author's name"),
  description: Yup.string().required(
    'Please inform a description for the book',
  ),
});

export default function AddBooks() {
  const {createBook} = useBook();
  const navigation = useNavigation();

  const handleSubmit = (data: BookProps) => {
    try {
      createBook(data);
      navigation.navigate('Home');
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Oops... This is awkward.',
        text2: 'It looks like we had some problem. Please try again',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    }
  };

  return (
    <ScrollView>
      <Container>
        <Title>Add a new book</Title>

        <Formik
          initialValues={{name: '', author: '', description: '', cover: ''}}
          onSubmit={values => handleSubmit(values)}
          validationSchema={schema}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <FormContainer>
              <Label>Name</Label>
              {errors.name && (
                <Label style={{fontSize: 10, color: 'red'}}>
                  {errors.name}
                </Label>
              )}
              <Shadow elevation={20} style={styles.shadow}>
                <Field
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </Shadow>

              <Label>Author</Label>
              {errors.author && (
                <Label style={{fontSize: 10, color: 'red'}}>
                  {errors.author}
                </Label>
              )}
              <Shadow elevation={20} style={styles.shadow}>
                <Field
                  onChangeText={handleChange('author')}
                  onBlur={handleBlur('author')}
                  value={values.author}
                />
              </Shadow>

              <Label>Description</Label>
              {errors.description && (
                <Label style={{fontSize: 10, color: 'red'}}>
                  {errors.description}
                </Label>
              )}
              <Shadow elevation={40} style={styles.shadow}>
                <LongTextField
                  multiline={true}
                  numberOfLines={8}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                />
              </Shadow>

              <SubmitButton onPress={handleSubmit}>
                <ButtonText>Add new book</ButtonText>
              </SubmitButton>
            </FormContainer>
          )}
        </Formik>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'rgb(212, 173, 134)',
    borderRadius: 10,
    shadowColor: 'rgb(212, 173, 134)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
});
