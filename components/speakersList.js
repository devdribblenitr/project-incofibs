
const speakersList = [
  {
    id: 1,
    designation2: "Texas A&amp;M University, USA",
    designation1: "Stem cell technology in human and public health: Current applications and future promise",
    name: "Dr. Ahmed El-Hashash ",
  },
  {
    id: 2,
    designation2: "PAPRSB Institute of Health Sciences, Universiti Brunei Darussalam, Brunei Darussalam",
    designation1: "Battling the bacterial biofilm threat",
    name: "Dr. Jagjit Singh Dhaliwal",
  },
  {
    id: 3,
    designation2: "University of Connecticut, USA",
    designation1: "NMR investigations of protein structure, folding, evolution, dynamics, and association",
    name: "Dr. Andrei Alexandrescu",
  },
  {
    id: 4,
    designation2: "Andong National University, Korea",
    designation1: "Comparative (freshwater, marine, terrestrial) animal ecophysiology, adaptation, and evolution",
    name: "Dr. Victor Benno Meyer- Rochow",
  },
  {
    id: 5,
    designation2: "Iowa State University Ames, Iowa, USA",
    designation1: "Molecular basis of plant-pathogen interactions",
    name: "Dr. Madan K Bhattacharyya",
  },
  {
    id: 6,
    designation2: "Sisli Hamidiye Etfal Training and Research Hospital Istanbul, Turkey",
    designation1: "Stem cell therapies in Type 1 Diabetes",
    name: "Dr. Ahmet Ucar",
  },
  {
    id: 7,
    designation2: "University of Ibadan, Nigeria",
    designation1: "Cancer Research and molecular biology",
    name: "Dr. Solomon E. Owumi",
  },
  {
    id: 8,
    designation2: "McGill University, Montreal, Canada",
    designation1: "Molecular Epigenetics",
    name: "Dr. Moshe Szyf",
  },
  {
    id: 9,
    designation2: "Wadsworth Center New York State Department of Health, New Scotland Avenue,Albany, New York, USA",
    designation1: "Division of Genetics",
    name: "Dr. Ye Ding",
  },
  // {
  //   id: 10,
  //   designation2: "Campus Drive Beckman Stanford, California",
  //   designation1: "Department of Genetics",
  //   name: "Dr. Leonore Herzenberg",
  // },






















  {
    id: 11,
    designation2: "Indraprastha Institute of Information Technology (IIIT), Delhi",
    designation1: "Immunoinformatics",
    name: "Dr. Gajendra P.S. Raghava",
  },
  {
    id: 12,
    designation2: "National Institute of Pharmaceutical Education and Research (NIPER), S.A.S Nagar, Punjab",
    designation1: "Neurobiology or Disease Biology stream",
    name: "Dr. Ipsita Roy",
  },
  {
    id: 13,
    designation2: "IIT Madras",
    designation1: "Polymericbiomaterials",
    name: "Dr. Mukesh Doble",
  },
  {
    id: 14,
    designation2: "Amity University Mohali, Chandigarh",
    designation1: "Synthesis of chiral drugs and drug intermediates",
    name: "Dr. Uttam Chand Banerjee",
  },
  {
    id: 15,
    designation2: "IISc, Bangalore",
    designation1: "Neuroscience",
    name: "Dr. Smitha Karunakaran",
  },
  {
    id: 3,
    designation2: "IIT Kharagpur",
    designation1: "Drug Delivery System",
    name: "Dr. Sudip K Ghosh",
  },
  {
    id: 16,
    designation2: "IISc, Bangalore",
    designation1: "Development and Neurobiology",
    name: "Dr. Kavita Babu",
  },
  {
    id: 17,
    designation2: "IIT Delhi",
    designation1: "Peptide mediated Therapeutics",
    name: "Dr. Archana Chugh",
  },
  {
    id: 18,
    designation2: "IISER Tirupati",
    designation1: "Disease biology",
    name: "Dr. Suchi Goel",
  },
  {
    id: 19,
    designation2: "BHU, Varanasi",
    designation1: "Neurobiology",
    name: "Dr. Surendra Kumar Trigun",
  },
  {
    id: 20,
    designation2: "JNU, New Delhi",
    designation1: "Disease Biology and Vaccine Approaches",
    name: "Dr. Chinmay K Mukhopadhyay",
  },
  {
    id: 21,
    designation2: "IIT Madras",
    designation1: "Bioinformatics",
    name: "Dr. M. Michael Gromiha",
  },
  {
    id: 22,
    designation2: "OUAT,Bhubaneswar",
    designation1: "AgriculturalBiotechnology",
    name: "Dr. Gyana Ranjan Rout",
  },
  {
    id: 23,
    designation2: "NISER,Bhubaneswar",
    designation1: "Host-pathogeninteraction",
    name: "Dr. Asima Bhattacharyya",
  },
  {
    id: 24,
    designation2: "IIT Delhi",
    designation1: "Drug Delivery",
    name: "Dr. Alok Ray",
  },
  {
    id: 25,
    designation2: "National Institute of Animal Biotechnology, Hyderabad",
    designation1: "Stem Cell and Regenerative medicine",
    name: "Dr. G. Taru Sharma",
  },
  {
    id: 26,
    designation2: "IIT Jodhpur",
    designation1: "Theranostic Nanomedicines",
    name: "Dr. Raviraj Vankayala",
  },
  {
    id: 27,
    designation2: "IISER Kolkata",
    designation1: "Cancer nanomedicine",
    name: "Dr. Rituparna Sinha Roy",
  },
  {
    id: 28,
    designation2: "Central University",
    designation1: "Application of and Nanotechnology",
    name: "Dr. Ratan",
  },
  {
    id: 29,
    designation2: "IIT Guwahati",
    designation1: "Tissue engineering",
    name: "Dr. Biman B Mandal",
  },
  {
    id: 30,
    designation2: "NISER Bhubaneswar",
    designation1: "Cancer Cell Signaling",
    name: "Dr.Mohammed Saleem",
  },
  {
    id: 31,
    designation2: "IISER Mohali",
    designation1: "Host-Pathogen Interaction",
    name: "Dr. Vidya Devi Negi",
  },
  {
    id: 32,
    designation2: "ILS Bhubaneswar",
    designation1: "Cancer pathogenesis and metastasis",
    name: "Dr.Shantibhusan Senapati",
  },
  {
    id: 33,
    designation2: "AIIMS Delhi",
    designation1: "Disease Biology and Vaccine",
    name: "Dr. Pratima Ray",
  },
  {
    id: 34,
    designation2: "BHU, Varanasi",
    designation1: "Plant-pathogen interaction",
    name: "Dr. Prashant Singh",
  },
  
];

export default speakersList;
