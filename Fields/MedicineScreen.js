import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const MedicineScreen = () => {
  const [searchText, setSearchText] = useState('');

  const generateGANImage = () => {
    return require('../assets/bg2.jpg');
  };

  const fields = [
    {
      title: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
      description: 'MBBS is a professional degree in medicine and surgery. It is the basic undergraduate medical qualification.',
    },
    {
      title: 'BDS (Bachelor of Dental Surgery)',
      description: 'BDS is a professional degree in dentistry. It focuses on the study and practice of dental surgery and related treatments.',
    },
    {
      title: 'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
      description: 'BHMS is an undergraduate degree in homeopathy. It involves the study and practice of alternative medicine using homeopathic principles.',
    },
    {
      title: 'BAMS (Bachelor of Ayurvedic Medicine and Surgery)',
      description: 'BAMS is an undergraduate degree in Ayurveda. It focuses on traditional Indian medicine and holistic healing.',
    },
    {
      title: 'BUMS (Bachelor of Unani Medicine and Surgery)',
      description: 'BUMS is an undergraduate degree in Unani medicine. It involves the study and practice of traditional Islamic medicine.',
    },
    {
      title: 'BNYS (Bachelor of Naturopathy and Yogic Sciences)',
      description: 'BNYS is an undergraduate degree in naturopathy and yoga. It emphasizes natural healing methods and yoga practices.',
    },
    {
      title: 'BPT (Bachelor of Physiotherapy)',
      description: 'BPT is an undergraduate degree in physiotherapy. It focuses on physical therapy and rehabilitation techniques.',
    },
    {
      title: 'BMLT (Bachelor of Medical Laboratory Technology)',
      description: 'BMLT is an undergraduate degree in medical laboratory technology. It involves laboratory testing and analysis of medical samples.',
    },
    {
      title: 'B.Sc. Nursing (Bachelor of Science in Nursing)',
      description: 'B.Sc. Nursing is an undergraduate degree in nursing. It focuses on healthcare, patient care, and nursing practice.',
    },
    {
      title: 'B.O.T. (Bachelor of Occupational Therapy)',
      description: 'B.O.T. is an undergraduate degree in occupational therapy. It involves therapies and interventions to improve daily functioning.',
    },
    {
      title: 'B.Pharma (Bachelor of Pharmacy)',
      description: 'B.Pharma is an undergraduate degree in pharmacy. It involves the study of drugs, pharmaceuticals, and pharmacy practice.',
    },
    {
      title: 'B.Sc. Radiology (Bachelor of Science in Radiology)',
      description: 'B.Sc. Radiology is an undergraduate degree in radiology. It focuses on medical imaging and diagnostic techniques.',
    },
    {
      title: 'B.Sc. Optometry (Bachelor of Science in Optometry)',
      description: 'B.Sc. Optometry is an undergraduate degree in optometry. It involves the study of vision, eye health, and corrective lenses.',
    },
    {
      title: 'B.Sc. Medical Imaging Technology',
      description: 'B.Sc. Medical Imaging Technology involves the study of various medical imaging techniques for diagnosis and treatment planning.',
    },
    {
      title: 'B.Sc. Anesthesia Technology',
      description: 'B.Sc. Anesthesia Technology focuses on the administration of anesthesia during surgical procedures.',
    },
    {
      title: 'B.Sc. Cardiac Care Technology',
      description: 'B.Sc. Cardiac Care Technology involves the study of cardiac procedures and interventions.',
    },
    {
      title: 'B.Sc. Dialysis Technology',
      description: 'B.Sc. Dialysis Technology focuses on the process of dialysis for patients with kidney issues.',
    },
    {
      title: 'B.Sc. Respiratory Care Technology',
      description: 'B.Sc. Respiratory Care Technology involves the study of respiratory therapy and care for patients with breathing disorders.',
    },
    {
      title: 'B.Sc. Perfusion Technology',
      description: 'B.Sc. Perfusion Technology focuses on providing cardio-pulmonary support during cardiac surgeries.',
    },
    {
      title: 'B.Sc. Medical Record Technology',
      description: 'B.Sc. Medical Record Technology involves the management and maintenance of medical records in healthcare settings.',
    },
  ];
  const filteredFields = fields.filter((field) =>
  field.title.toLowerCase().includes(searchText.toLowerCase())
);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={generateGANImage()} style={styles.headerImage} />
        <View style={styles.overlay} />
        <Text style={styles.title}>
          Medicine is the science and practice of diagnosing, treating, and
          preventing diseases.
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a career..."
          placeholderTextColor="black"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fieldsContainer}>
        {filteredFields.map((field, index) => (
          <TouchableOpacity key={index} style={styles.field}>
            <Text style={styles.fieldTitle}>{field.title}</Text>
            <Text style={styles.fieldDescription}>{field.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 200, // Adjust height as needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    bottom: 16,
    left: 3,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#4A55A2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft:10
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  introText: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    margin: 16,
    textAlign: 'center',
  },
  fieldsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 16,
  },
  field: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    padding: 16,
    borderColor:"black",
    borderWidth:1,
  },
  fieldTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
    textAlign: 'center',
  },
  fieldDescription: {
    fontSize: 14,
    color: 'black',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default MedicineScreen;
