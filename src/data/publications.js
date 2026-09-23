import seal from '../assets/seal-overview.png';
import lego from '../assets/multimodal-lego-overview.png';
import vortex from '../assets/vortex-overview.png';
import healnet from '../assets/healnet_overview.jpg';
import cgx from '../assets/cgx_overview.jpg';
import synergy from '../assets/SIR_paper_overview.jpg';
import augmentation from '../assets/hate_speech_paper_overview.jpg';

// Canonical sources and downloaded paper versions are recorded in public/papers/README.md.
export const publications = [
  {
    id: 'seal',
    teaserImage: seal,
    title: 'SEAL: Towards Spatial Transcriptomics-driven Pathology Foundation Models',
    venue: 'arXiv preprint, 2026',
    authors: 'Konstantin Hemker, Andrew H. Song, Cristina Almagro-Pérez, Guillaume Jaume, Sophia J. Wagner, Anurag Vaidya, Nikola Simidjievski, Mateja Jamnik, Faisal Mahmood',
    paperLink: '/papers/seal.pdf',
    codeLink: 'https://github.com/mahmoodlab/SEAL',
  },
  {
    id: 'multimodal-lego',
    teaserImage: lego,
    title: 'Multimodal Lego: Model Merging and Fusion Across Topologies and Modalities in Biomedicine',
    venue: 'ICLR 2025',
    authors: 'Konstantin Hemker, Nikola Simidjievski, Mateja Jamnik',
    paperLink: '/papers/multimodal-lego.pdf',
    codeLink: 'https://github.com/konst-int-i/mm-lego',
  },
  {
    id: 'vortex',
    teaserImage: vortex,
    title: 'AI-driven 3D Spatial Transcriptomics',
    venue: 'arXiv preprint, 2025',
    authors: 'Cristina Almagro-Pérez, Andrew H. Song, Luca Weishaupt, Ahrong Kim, Guillaume Jaume, Drew F.K. Williamson, Konstantin Hemker, Ming Y. Lu, Kritika Singh, Bowen Chen, Long Phi Le, Alexander S. Baras, Sizun Jiang, Ali Bashashati, Jonathan T.C. Liu, Faisal Mahmood',
    paperLink: '/papers/vortex.pdf',
  },
  {
    id: 'healnet',
    teaserImage: healnet,
    title: 'HEALNet: Multimodal Fusion for Heterogeneous Biomedical Data',
    venue: 'NeurIPS 2024',
    authors: 'Konstantin Hemker, Nikola Simidjievski, Mateja Jamnik',
    paperLink: 'https://proceedings.neurips.cc/paper_files/paper/2024/file/765871e77d2ca65126d3d64d31aa6908-Paper-Conference.pdf',
    codeLink: 'https://github.com/konst-int-i/healnet',
  },
  {
    id: 'cgxplain',
    teaserImage: cgx,
    title: 'CGXplain: Rule-Based Deep Neural Network Explanations Using Dual Linear Programs',
    venue: 'ICLR 2023 Workshop on Trustworthy Machine Learning for Healthcare · Best Paper Award',
    authors: 'Konstantin Hemker, Zohreh Shams, Mateja Jamnik',
    paperLink: 'https://arxiv.org/pdf/2304.05207',
  },
  {
    id: 'feature-synergy',
    teaserImage: synergy,
    title: 'Feature synergy, redundancy, and independence in global model explanations using SHAP vector decomposition',
    venue: 'White paper accompanying the Facet XAI package, 2021',
    authors: 'Jan Ittner, Łukasz Bolikowski, Konstantin Hemker, Ricardo Kennedy',
    paperLink: 'https://arxiv.org/pdf/2107.12436',
    codeLink: 'https://github.com/BCG-X-Official/facet',
  },
  {
    id: 'augment-to-prevent',
    teaserImage: augmentation,
    title: 'Augment to Prevent: Short-Text Data Augmentation in Deep Learning for Hate-Speech Classification',
    venue: 'CIKM 2019',
    authors: 'Georgios Rizos, Konstantin Hemker, Björn Schuller',
    paperLink: 'https://dl.acm.org/doi/10.1145/3357384.3358040',
  },
];
