import React from 'react';
import {StyleSheet, View} from 'react-native';

import * as Yup from 'yup';
import {useFormik} from 'formik';

import AppInput from '@app/components/AppInput';
import AppModal from '@app/components/AppModal';

import {useUpdateAlbumMutation} from '@app/services/AlbumService';

import {Album} from '@app/models/Album';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, 'Album name must be at least 4')
    .required('Required'),
});

interface Props {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  album: Album | null;
}

const EditAlbumNameModal = ({visible, onCancel, onConfirm, album}: Props) => {
  const [updateAlbum] = useUpdateAlbumMutation();
  const {values, handleChange, submitForm, errors} = useFormik({
    initialValues: {title: album?.title || ''},
    validationSchema,
    onSubmit: formValues => {
      updateAlbum({...album, title: formValues.title});
      onConfirm();
    },
  });
  return (
    <AppModal
      title="Edit Album name"
      visible={visible}
      onCancel={onCancel}
      onConfirm={submitForm}>
      <View style={styles.container}>
        <AppInput
          name="Album name"
          value={values.title}
          onChangeText={handleChange('title')}
          errorText={errors.title}
        />
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default EditAlbumNameModal;
