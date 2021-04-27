import React from 'react';
import {Formik} from 'formik';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

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

interface BookProps {
  name: String;
  author: String;
  description: String;
  cover: String;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Please inform the name of the book'),
  author: Yup.string().required("Please inform the author's name"),
  description: Yup.string(),
});

export default function AddBooks() {
  const handleSubmit = () => {
    console.log('click');
  };

  return (
    <ScrollView>
      <Container>
        <Title>Add a new book</Title>

        <Formik
          initialValues={{name: '', author: '', description: ''}}
          onSubmit={values => handleSubmit(values)}
          validationSchema={schema}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <FormContainer>
              <Label>Name</Label>
              <Shadow elevation={20} style={styles.shadow}>
                <Field
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </Shadow>
              {errors.name && (
                <Label style={{fontSize: 10, color: 'red'}}>
                  {errors.name}
                </Label>
              )}

              <Label>Author</Label>
              <Shadow elevation={20} style={styles.shadow}>
                <Field
                  onChangeText={handleChange('author')}
                  onBlur={handleBlur('author')}
                  value={values.author}
                />
              </Shadow>
              {errors.author && (
                <Label style={{fontSize: 10, color: 'red'}}>
                  {errors.author}
                </Label>
              )}

              <Label>Description</Label>
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
