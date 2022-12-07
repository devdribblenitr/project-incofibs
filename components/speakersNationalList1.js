import image11 from '../public/national photo/11.Gajendra.jpeg'
import image12 from '../public/national photo/12.ipsita.jpg'
import image13 from '../public/national photo/13.mukesh d.jpeg'
import image14 from '../public/national photo/14.ucb.jpg'
import image15 from '../public/national photo/15.smitha.jpg'
import image3 from '../public/national photo/3.sudip.jpeg'
import image16 from '../public/national photo/16.kavita.jpg'
import image17 from '../public/national photo/17.archana.jpeg'
import image18 from '../public/national photo/18.suchi.jpg'
import image19 from '../public/national photo/19.surendra.jpeg'
import image20 from '../public/national photo/20.chinmay.jpg'
import image21 from '../public/national photo/21.m.michale.jpeg'
import image22 from '../public/national photo/22.gyana.jpeg'
import image23 from '../public/national photo/23.ashima.jpeg'
import image24 from '../public/national photo/24.alok.jpeg'
import image25 from '../public/national photo/25.g.tarun.jpeg'
import image26 from '../public/national photo/26.raviraj.jpeg'
import image27 from '../public/national photo/27.Rituparna.png'
import image28 from '../public/national photo/28.ratan.jpeg'
import image29 from '../public/national photo/29.biman.jpeg'
import image30 from '../public/national photo/30.mohammed salem.jpeg'
import image31 from '../public/national photo/31.vidya.jpeg'
import image32 from '../public/national photo/32.santi bhusan.jpg'
import image33 from '../public/national photo/33.pratima.jpeg'
import image34 from '../public/national photo/34.prashnt.jpg'
import image35 from '../public/national photo/35.anup.jpeg'
import image36 from '../public/national photo/36.smrutisanjita.jpeg'




const speakersList = [

  {
    id: 11,
    designation2: "Indraprastha Institute of Information Technology (IIIT), Delhi",
    designation1: "Immunoinformatics",
    img: image11.src,
    name: "Dr. Gajendra P.S. Raghava",
  },
  {
    id: 12,
    designation2: "National Institute of Pharmaceutical Education and Research (NIPER), S.A.S Nagar, Punjab",
    designation1: "Nucleic acid aptamers as modulators of proteostasis network",
    img: image12.src,
    name: "Dr. Ipsita Roy",
  },
  {
    id: 13,
    designation2: "IIT Madras",
    designation1: "Polymeric biomaterials ",
    img: image13.src,
    name: "Dr. Mukesh Doble",
  },
  {
    id: 14,
    designation2: "Amity University, Punjab",
    designation1: "Process development for the production of various microbial metabolites and use of enzymes and whole cells for the synthesis of chiral drugs and drug intermediates",
    img: image14.src,
    name: "Dr. Uttam Chand Banerjee",
  },
  {
    id: 15,
    designation2: "IISc, Bangalore",
    designation1: "Early degeneration of vulnerable LC-NE projection impairs the longevity of fear memory in a mouse model of Alzheimer's disease",
    img: image15.src,
    name: "Dr. Smitha Karunakaran",
  },
  {
    id: 3,
    designation2: "IIT Kharagpur",
    designation1: "Drug Delivery System",
    img: image3.src,
    name: "Dr. Sudip K Ghosh",
  },
  {
    id: 16,
    designation2: "IISc, Bangalore",
    designation1: "RNA control of neuronal cAMP and cGMP signaling factors by protein complexes",
    img: image16.src,
    name: "Dr. Kavita Babu",
  },
  {
    id: 17,
    designation2: "IIT Delhi",
    designation1: "Peptide mediated Therapeutics",
    img: image17.src,
    name: "Dr. Archana Chugh",
  },
  {
    id: 18,
    designation2: "IISER Tirupati",
    designation1: "What genetic factors in humans contribute to the severity of malaria parasite?",
    img: image18.src,
    name: "Dr. Suchi Goel",
  },
  {
    id: 19,
    designation2: "BHU, Varanasi",
    designation1: "Neurobiology",
    img: image19.src,
    name: "Dr. Surendra Kumar Trigun",
  },
  {
    id: 20,
    designation2: "JNU, New Delhi",
    designation1: "Manipulation of host iron homeostasis by pathogens: Learning from Leishmania",
    img: image20.src,
    name: "Dr. Chinmay K Mukhopadhyay",
  },
  {
    id: 21,
    designation2: "IIT Madras",
    designation1: "Bioinformatics approaches for understanding Mutational effects on protein structure and function",
    img: image21.src,
    name: "Dr. M. Michael Gromiha",
  },
  {
    id: 22,
    designation2: "OUAT,Bhubaneswar",
    designation1: "Agricultural Biotechnology",
    img: image22.src,
    name: "Dr. Gyana Rout",
  },
  {
    id: 23,
    designation2: "NISER,Bhubaneswar",
    designation1: "The enigma of ROS regulation in Helicobacter pylori-mediated gastric adenocarcinoma by SIAH2 protein",
    img: image23.src,
    name: "Dr. Asima Bhattacharyya",
  },
  {
    id: 24,
    designation2: "IIT Delhi",
    designation1: "Drug Delivery",
    img: image24.src,
    name: "Dr. Alok Ray",
  },
  {
    id: 25,
    designation2: "National Institute of Animal Biotechnology, Hyderabad",
    designation1: "Stem Cell and Regenerative medicine",
    img: image25.src,
    name: "Dr. G. Taru Sharma",
  },
  {
    id: 26,
    designation2: "IIT Jodhpur",
    designation1: "Theranostic Nanomedicines: Translating from Bench to Bedside and Beyond",
    img: image26.src,
    name: "Dr. Raviraj Vankayala",
  },
  {
    id: 27,
    designation2: "IISER Kolkata",
    designation1: "Emerging approaches for designing peptide based therapeutics",
    img: image27.src,
    name: "Dr. Rituparna Sinha Roy",
  },
  {
    id: 28,
    designation2: "Central University of Jharkhand, Ranchi",
    designation1: "Application of Materials Chemistry and Nanotechnology",
    img: image28.src,
    name: "Dr. Ratan Kumar Dey ",
  },
  {
    id: 29,
    designation2: "IIT Guwahati",
    designation1: "Bioengineered human tissues & organs: The way forward",
    img: image29.src,
    name: "Dr. Biman B Mandal",
  },
  {
    id: 30,
    designation2: "NISER Bhubaneswar",
    designation1: "Cancer Cell Signaling",
    img: image30.src,
    name: "Dr. Mohammed Saleem",
  },
  {
    id: 31,
    designation2: "IISER Mohali",
    designation1: "C. elegans life cycle and Salmonella infection: a different perspective of host-pathogen interaction",
    img: image31.src,
    name: "Dr. Vidya Devi Negi",
  },
  {
    id: 32,
    designation2: "ILS Bhubaneswar",
    designation1: "Evaluation of therapeutic role of N-acetyl cysteine (NAC) for the treatment and/or management of SARS-CoV-2 induced lung damage in hamster model",
    img: image32.src,
    name: "Dr. Shantibhusan Senapati",
  },
  {
    id: 33,
    designation2: "AIIMS Delhi",
    designation1: "Disease Biology and Vaccine",
    img: image33.src,
    name: "Dr. Pratima Ray",
  },
  {
    id: 34,
    designation2: "BHU, Varanasi",
    designation1: "Heritable Priming: A Future for Plant Health and Food Security",
    img: image34.src,
    name: "Dr. Prashant Singh",
  },
  {
    id: 35,
    designation2: "Allahabad University",
    designation1: "Understanding the regulatory network landscape in human embryonic stem  cells: A systems biology prespective",
    img: image35.src,
    name: "Dr. Anup Som",

  },
  {
    id: 36,
    designation2: "CSIR-IICB, Kolkata",
    designation1: "Plant Molecular Biology",
    img: image36.src,
    name: "Dr. Smrutisanjita Behera ",
  }
  
];

export default speakersList;
