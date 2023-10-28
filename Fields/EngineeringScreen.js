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

import { useNavigation } from '@react-navigation/native';

const DetailsScreen = ({ route }) => {
  const { title, description } = route.params.field;
  return (
    <View style={styles.container}>
      <Text style={styles.fieldTitle}>{title}</Text>
      <Text style={styles.fieldDescription}>{description}</Text>
    </View>
  );
};

const EngineeringScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const generateGANImage = () => {
    return require('../assets/bg2.jpg');
  };

  const fields = [
    {
      title: 'Civil Engineering',
      description: 'Civil engineers design and oversee the construction of infrastructure projects like buildings, roads, bridges, and dams.',
      details: `Salary: $70,000 - $100,000\n\nAverage Fees: $10,000 - $20,000\n\nScope: High demand in the construction industry\n\nInterests: Design, Construction, Project Management\n\nJob Types: Structural Engineer, Construction Manager, Urban Planner`,
    },
    
    
      {
        title: 'Mechanical Engineering',
        description: 'Mechanical engineers work on the design and manufacturing of machinery, equipment, and systems.',
        details: `Salary: $75,000 - $110,000\n\nAverage Fees: $12,000 - $22,000\n\nScope: High demand in various industries\n\nInterests: Machine Design, Thermodynamics, Robotics\n\nJob Types: Mechanical Engineer, Product Designer, Manufacturing Engineer`,
      },
      {
        title: 'Electrical Engineering',
        description: 'Electrical engineers deal with the generation, distribution, and application of electrical power.',
        details: `Salary: $75,000 - $120,000\n\nAverage Fees: $15,000 - $25,000\n\nScope: High demand in the power and electronics industry\n\nInterests: Electronics, Power Systems, Control Systems\n\nJob Types: Electrical Engineer, Power Systems Engineer, Control Systems Engineer`,
      },
      {
        title: 'Computer Science Engineering',
        description: 'Computer science engineers develop software and work on various computing technologies.',
        details: `Salary: $80,000 - $130,000\n\nAverage Fees: $15,000 - $30,000\n\nScope: High demand in the technology and software industry\n\nInterests: Software Development, Algorithms, Machine Learning\n\nJob Types: Software Engineer, Data Scientist, Web Developer`,
      },
      {
        title: 'Chemical Engineering',
        description: 'Chemical engineers work on processes for the production, transformation, and transportation of chemicals and materials.',
        details: `Salary: $80,000 - $120,000\n\nAverage Fees: $15,000 - $25,000\n\nScope: High demand in the chemical and pharmaceutical industries\n\nInterests: Chemical Processes, Material Science, Environmental Protection\nJob Types: Chemical Engineer, Process Engineer, Materials Scientist`,
      },
      {
        title: 'Electronics and Communication Engineering',
        description: 'ECE engineers work on communication systems, electronic circuits, and devices.',
        details: `Salary: $75,000 - $110,000\n\nAverage Fees: $12,000 - $22,000\n\nScope: High demand in the telecommunications and electronics industry\n\nInterests: Communication Systems, Microelectronics, Signal Processing\n\nJob Types: Electronics Engineer, Telecommunications Specialist, Network Engineer`,
      },
    {
      title: 'Aerospace Engineering',
      description: 'Aerospace engineers design and develop aircraft, spacecraft, and related systems and equipment.',
    },
    {
      title: 'Biotechnology Engineering',
      description: 'Biotech engineers work on applications of biological systems and organisms in various fields.',
    },
    {
      title: 'Automobile Engineering',
      description: 'Automobile engineers focus on the design, development, and manufacturing of vehicles.',
    },
    {
      title: 'Instrumentation and Control Engineering',
      description: 'Instrumentation engineers deal with measurement and control systems in various industries.',
    },
    {
      title: 'Information Technology Engineering',
      description: 'IT engineers work on software development, networking, and information systems.',
    },
    {
      title: 'Environmental Engineering',
      description: 'Environmental engineers work on projects related to environmental protection and sustainability.',
    },
    {
      title: 'Metallurgical and Materials Engineering',
      description: 'Metallurgical engineers deal with the processing and properties of metals and materials.',
    },
    {
      title: 'Petroleum Engineering',
      description: 'Petroleum engineers focus on the extraction and processing of oil and gas resources.',
    },
    {
      title: 'Production Engineering',
      description: 'Production engineers work on the planning and control of manufacturing processes.',
    },
    {
      title: 'Textile Engineering',
      description: 'Textile engineers focus on the production and processing of textiles and fabrics.',
    },
    {
      title: 'Mining Engineering',
      description: 'Mining engineers are involved in the extraction and processing of minerals and resources from the earth.',
    },
    {
      title: 'Marine Engineering',
      description: 'Marine engineers work on the design and maintenance of ships and marine systems.',
    },
    {
      title: 'Nuclear Engineering',
      description: 'Nuclear engineers work on the applications of nuclear energy and radiation.',
    },
    {
      title: 'Fire Safety Engineering',
      description: 'Fire safety engineers focus on preventing and managing fires in various environments.',
    },
    {
      title: 'Biochemical Engineering',
      description: 'Biochemical engineers work on processes involving biological materials and systems.',
    },
    {
      title: 'Ceramic Engineering',
      description: 'Ceramic engineers deal with the production and properties of ceramics and related materials.',
    },
    {
      title: 'Industrial and Production Engineering',
      description: 'Industrial engineers focus on optimizing production processes in industries.',
    },
    {
      title: 'Software Engineering',
      description: 'Software engineers develop and maintain software applications and systems.',
    },
    {
      title: 'Power Engineering',
      description: 'Power engineers work on the generation, transmission, and distribution of electrical power.',
    },
    {
      title: 'Telecommunication Engineering',
      description: 'Telecom engineers work on communication networks and systems.',
    },
    {
      title: 'Bioinformatics',
      description: 'Bioinformatics engineers work at the intersection of biology, computer science, and data analysis.',
    },
    {
      title: 'Robotics and Automation Engineering',
      description: 'Robotics engineers design and develop automated systems and robots.',
    },
    {
      title: 'Artificial Intelligence and Machine Learning',
      description: 'AI/ML engineers work on developing intelligent systems and algorithms.',
    },
    {
      title: 'Cybersecurity Engineering',
      description: 'Cybersecurity engineers focus on securing digital systems and networks.',
    },
    {
      title: 'Nanotechnology Engineering',
      description: 'Nanotech engineers work on manipulating materials at the nanoscale for various applications.',
    },
    {
      title: 'Geological Engineering',
      description: 'Geological engineers work on projects related to geological and geotechnical aspects.',
    },
    {
      title: 'Naval Architecture and Ocean Engineering',
      description: 'Naval architects design ships, boats, and offshore structures for marine environments.',
    },
    {
      title: 'Metallurgical Engineering and Materials Science',
      description: 'Metallurgical engineers focus on the properties and applications of metals and materials.',
    },
    {
      title: 'Food Technology Engineering',
      description: 'Food tech engineers work on the processing and preservation of food products.',
    },
    {
      title: 'Dairy Technology Engineering',
      description: 'Dairy tech engineers focus on the production and processing of dairy products.',
    },
    {
      title: 'Bio-Medical Engineering',
      description: 'Biomedical engineers work at the intersection of engineering and healthcare, developing medical devices and technologies.',
    },
    {
      title: 'Fire and Safety Engineering',
      description: 'Fire and safety engineers focus on preventing and managing fires in various environments.',
    },
    {
      title: 'Petroleum Refining and Petrochemicals Engineering',
      description: 'Engineers in this field work on the refining and processing of petroleum and petrochemical products.',
    },
    {
      title: 'Civil and Environmental Engineering',
      description: 'Engineers in this field work on projects related to both civil engineering and environmental protection.',
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
          Engineering is the application of scientific principles to design and
          build systems, structures, and products that solve real-world problems.
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
          <View key={index} style={styles.field}>
            <Text style={styles.fieldTitle}>{field.title}</Text>
            <Text style={styles.fieldDescription}>{field.description}</Text>
            <TouchableOpacity
              style={styles.knowMoreButton}
              onPress={() => {
                navigation.navigate('Details', { field });
              }}
            >
              <Text style={styles.knowMoreButtonText}>Know More</Text>
            </TouchableOpacity>
          </View>
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
    height: 200,
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
    borderColor: 'black',
    borderWidth: 1,
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
  knowMoreButton: {
    backgroundColor: '#4A55A2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  knowMoreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  knowMoreButton: {
    backgroundColor: '#4A55A2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  knowMoreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EngineeringScreen;
