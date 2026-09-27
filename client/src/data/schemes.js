export const governmentSchemes = [
  {
    id: 1,
    name: 'Pradhan Mantri Kisan Samman Nidhi',
    shortName: 'PM-KISAN',
    category: 'Agriculture',
    logo: 'K',
    logoBg: 'bg-green-600',
    description: 'Direct income support for eligible small and marginal farmers to support crop cultivation and household needs.',
    benefit: '₹6,000/year in three equal installments',
    eligibility: 'Small and marginal farmer families with cultivable land holding.',
    registrationStart: '2026-01-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Online through PM-KISAN portal / CSC centers',
    requiredDocuments: ['Aadhaar card', 'Bank account details', 'Land ownership records', 'Farmer identity proof'],
    officialWebsite: 'https://pmkisan.gov.in'
  },
  {
    id: 2,
    name: 'Pradhan Mantri Awas Yojana – Rural',
    shortName: 'PMAY-G',
    category: 'Housing',
    logo: 'A',
    logoBg: 'bg-orange-500',
    description: 'Provides financial assistance for housing construction and home upgrades in rural areas.',
    benefit: 'Up to ₹1.20 lakh for eligible households',
    eligibility: 'Rural households without a pucca house and meeting poverty criteria.',
    registrationStart: '2026-01-15',
    registrationEnd: '2026-10-31',
    lastDate: '31 Oct 2026',
    applicationMode: 'Online application and Gram Panchayat verification',
    requiredDocuments: ['Aadhaar card', 'Caste certificate (if applicable)', 'Income proof', 'Address proof'],
    officialWebsite: 'https://pmayg.nic.in'
  },
  {
    id: 3,
    name: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana',
    shortName: 'AB-PMJAY',
    category: 'Health',
    logo: 'H',
    logoBg: 'bg-red-500',
    description: 'Health insurance cover for families to access cashless treatment at empanelled hospitals.',
    benefit: 'Up to ₹5 lakh per family per year',
    eligibility: 'Families listed under SECC and eligible ration card households.',
    registrationStart: '2026-02-01',
    registrationEnd: '2026-11-30',
    lastDate: '30 Nov 2026',
    applicationMode: 'Common Service Center / online portal / hospital registration',
    requiredDocuments: ['Aadhaar card', 'Family ID', 'Ration card', 'Address proof'],
    officialWebsite: 'https://abha.gov.in'
  },
  {
    id: 4,
    name: 'National Rural Employment Guarantee Act',
    shortName: 'NREGA',
    category: 'Employment',
    logo: 'E',
    logoBg: 'bg-blue-600',
    description: 'Guarantees 100 days of wage employment for rural households, promoting livelihood security.',
    benefit: 'Wage support for 100 days of work',
    eligibility: 'Rural households willing to do unskilled manual work under public works.',
    registrationStart: '2026-01-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Gram Panchayat / local job card center',
    requiredDocuments: ['Job card', 'Aadhaar card', 'Address proof', 'Bank account details'],
    officialWebsite: 'https://nrega.nic.in'
  },
  {
    id: 5,
    name: 'Pradhan Mantri Ujjwala Yojana',
    shortName: 'PMUY',
    category: 'Energy',
    logo: 'U',
    logoBg: 'bg-yellow-500',
    description: 'Provides LPG connections to women from below-poverty-line households to reduce smoke exposure.',
    benefit: 'Free LPG connection and subsidy support',
    eligibility: 'Women from BPL households and eligible families in identified districts.',
    registrationStart: '2026-03-01',
    registrationEnd: '2026-09-30',
    lastDate: '30 Sep 2026',
    applicationMode: 'Online or through LPG distributor',
    requiredDocuments: ['Aadhaar card', 'Bank passbook', 'Ration card', 'Address proof'],
    officialWebsite: 'https://pmuy.gov.in'
  },
  {
    id: 6,
    name: 'Pradhan Mantri Jan Dhan Yojana',
    shortName: 'PMJDY',
    category: 'Banking',
    logo: 'J',
    logoBg: 'bg-indigo-600',
    description: 'Promotes financial inclusion through zero-balance bank accounts, insurance, and overdraft facilities.',
    benefit: 'Zero-balance account, insurance benefits, RuPay debit card',
    eligibility: 'Unbanked adult citizens with valid identity proof.',
    registrationStart: '2026-01-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Bank branch / common service center',
    requiredDocuments: ['Aadhaar card', 'Address proof', 'Passport-size photo'],
    officialWebsite: 'https://pmjdy.gov.in'
  },
  {
    id: 7,
    name: 'Pradhan Mantri Fasal Bima Yojana',
    shortName: 'PMFBY',
    category: 'Agriculture',
    logo: 'F',
    logoBg: 'bg-emerald-600',
    description: 'Crop insurance support for farmers against crop loss due to natural calamities and pest infestations.',
    benefit: 'Premium subsidy and claim compensation on crop losses',
    eligibility: 'Registered farmers growing notified crops in eligible districts.',
    registrationStart: '2026-04-01',
    registrationEnd: '2026-07-31',
    lastDate: '31 Jul 2026',
    applicationMode: 'Insurance portal / bank + government link',
    requiredDocuments: ['Land records', 'Aadhaar card', 'Bank account details', 'Crop details'],
    officialWebsite: 'https://pmfby.gov.in'
  },
  {
    id: 8,
    name: 'Pradhan Mantri Vishwakarma Yojana',
    shortName: 'PMVY',
    category: 'Skill Development',
    logo: 'V',
    logoBg: 'bg-violet-600',
    description: 'Supports artisans and craftspeople with toolkit, credit, training, and market linkage assistance.',
    benefit: 'Tool kit support, margin money, skill training, and digital incentives',
    eligibility: 'Traditional artisans and craftsmen across specified trades.',
    registrationStart: '2026-02-10',
    registrationEnd: '2026-09-30',
    lastDate: '30 Sep 2026',
    applicationMode: 'Online portal / CSC / district office',
    requiredDocuments: ['Aadhaar card', 'Caste or community proof', 'Trade certificate', 'Bank account details'],
    officialWebsite: 'https://pmvishwakarma.gov.in'
  },
  {
    id: 9,
    name: 'PM-SVANidhi',
    shortName: 'SVANidhi',
    category: 'Business',
    logo: 'S',
    logoBg: 'bg-amber-500',
    description: 'Provides micro-credit support to street vendors and informal traders to restart and expand their businesses.',
    benefit: 'Micro-loan and working capital assistance',
    eligibility: 'Street vendors with valid vending certificate or proof of vending.',
    registrationStart: '2026-01-15',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Online and municipal office',
    requiredDocuments: ['Aadhaar card', 'Vendor certificate', 'Bank account details', 'Photo'],
    officialWebsite: 'https://svanidhi.mohua.gov.in'
  },
  {
    id: 10,
    name: 'Stand-Up India Scheme',
    shortName: 'SUI',
    category: 'Business',
    logo: 'SU',
    logoBg: 'bg-cyan-600',
    description: 'Helps women and SC/ST entrepreneurs by providing loan support for new enterprises.',
    benefit: 'Bank loan up to ₹1 crore',
    eligibility: 'Women entrepreneurs and SC/ST borrowers setting up greenfield enterprises.',
    registrationStart: '2026-02-01',
    registrationEnd: '2026-12-15',
    lastDate: '15 Dec 2026',
    applicationMode: 'Bank branch and online application',
    requiredDocuments: ['Aadhaar card', 'Business plan', 'Bank application form', 'Caste certificate if applicable'],
    officialWebsite: 'https://www.standupmitra.in'
  },
  {
    id: 11,
    name: 'Pradhan Mantri Mudra Yojana',
    shortName: 'PMMY',
    category: 'Business',
    logo: 'M',
    logoBg: 'bg-pink-500',
    description: 'Provides collateral-free loans to micro and small enterprises for business expansion and setup.',
    benefit: 'Up to ₹10 lakh unsecured working capital loans',
    eligibility: 'Small business owners and entrepreneurs in non-corporate sectors.',
    registrationStart: '2026-01-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Bank branch / partner lending institutions',
    requiredDocuments: ['Aadhaar card', 'Business proof', 'Bank account details', 'Photograph'],
    officialWebsite: 'https://www.mudra.org.in'
  },
  {
    id: 12,
    name: 'Atal Pension Yojana',
    shortName: 'APY',
    category: 'Pension',
    logo: 'P',
    logoBg: 'bg-slate-700',
    description: 'Provides fixed pension benefits to workers in unorganized sectors after retirement.',
    benefit: 'Monthly pension ranging from ₹1,000 to ₹5,000',
    eligibility: 'Citizen aged 18-40 with bank account and regular contribution.',
    registrationStart: '2026-01-05',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Bank branch / online through participating banks',
    requiredDocuments: ['Aadhaar card', 'Bank account', 'Mobile number', 'Photo'],
    officialWebsite: 'https://www.npscra.nsdl.co.in'
  },
  {
    id: 13,
    name: 'Kisan Credit Card Scheme',
    shortName: 'KCC',
    category: 'Agriculture',
    logo: 'KCC',
    logoBg: 'bg-lime-600',
    description: 'Provides short-term credit support to farmers for crop cultivation and allied activities.',
    benefit: 'Crop loan credit with flexible repayment periods',
    eligibility: 'Farmers and agricultural households with land records or tenant farmer proof.',
    registrationStart: '2026-03-01',
    registrationEnd: '2026-08-31',
    lastDate: '31 Aug 2026',
    applicationMode: 'Banks and cooperative institutions',
    requiredDocuments: ['Aadhaar card', 'Land documents', 'Bank passbook', 'Income proof'],
    officialWebsite: 'https://www.rbi.org.in'
  },
  {
    id: 14,
    name: 'Pradhan Mantri Kisan Maandhan Yojana',
    shortName: 'PM-KMY',
    category: 'Pension',
    logo: 'M',
    logoBg: 'bg-teal-600',
    description: 'Old age pension support for farmers who are not covered by other pension schemes.',
    benefit: '₹3,000 monthly pension after age 60',
    eligibility: 'Small and marginal farmers aged 18-40 with eligible income.',
    registrationStart: '2026-02-10',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Common Service Centers / CSC / state agriculture portals',
    requiredDocuments: ['Aadhaar card', 'Bank account', 'Farmer identity proof', 'Age proof'],
    officialWebsite: 'https://pmkmy.gov.in'
  },
  {
    id: 15,
    name: 'National Scholarship Portal',
    shortName: 'NSP',
    category: 'Education',
    logo: 'N',
    logoBg: 'bg-purple-600',
    description: 'Centralized portal for scholarships to support meritorious students from economically weaker backgrounds.',
    benefit: 'Tuition fee support and monthly scholarship grant',
    eligibility: 'Students from eligible income groups and institutions with valid enrollment.',
    registrationStart: '2026-05-01',
    registrationEnd: '2026-10-15',
    lastDate: '15 Oct 2026',
    applicationMode: 'Online through National Scholarship Portal',
    requiredDocuments: ['Aadhaar card', 'Income certificate', 'Mark sheets', 'Bank account details'],
    officialWebsite: 'https://scholarships.gov.in'
  },
  {
    id: 16,
    name: 'Pradhan Mantri Rozgar Yojana',
    shortName: 'PMRY',
    category: 'Employment',
    logo: 'R',
    logoBg: 'bg-blue-500',
    description: 'Supports youth employment through self-employment and entrepreneurship in rural and urban areas.',
    benefit: 'Skill training and subsidy support for new ventures',
    eligibility: 'Unemployed youth, educated or skilled candidates seeking self-employment.',
    registrationStart: '2026-02-15',
    registrationEnd: '2026-09-30',
    lastDate: '30 Sep 2026',
    applicationMode: 'District employment office and online portal',
    requiredDocuments: ['Aadhaar card', 'Education certificate', 'Resume', 'Bank account details'],
    officialWebsite: 'https://www.ddugjy.gov.in'
  },
  {
    id: 17,
    name: 'Indira Gandhi National Old Age Pension Scheme',
    shortName: 'IGNOAPS',
    category: 'Pension',
    logo: 'O',
    logoBg: 'bg-sky-700',
    description: 'Provides monthly pension to elderly citizens in need for social security and livelihood support.',
    benefit: '₹200 to ₹1,000 monthly pension',
    eligibility: 'Senior citizens below poverty line or in BPL categories.',
    registrationStart: '2026-01-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'District welfare office / village secretariat',
    requiredDocuments: ['Age proof', 'Aadhaar card', 'Income certificate', 'Address proof'],
    officialWebsite: 'https://nsap.nic.in'
  },
  {
    id: 18,
    name: 'Pradhan Mantri Shram Yogi Maan-dhan',
    shortName: 'PM-SYM',
    category: 'Pension',
    logo: 'S',
    logoBg: 'bg-fuchsia-600',
    description: 'Old age pension scheme for laborers and workers in unorganized sectors.',
    benefit: '₹3,000 pension after age 60',
    eligibility: 'Unorganized sector workers aged 18-40 with income below threshold.',
    registrationStart: '2026-01-20',
    registrationEnd: '2026-11-30',
    lastDate: '30 Nov 2026',
    applicationMode: 'Common Service Centers / online portal',
    requiredDocuments: ['Aadhaar card', 'Bank account', 'Age proof', 'Work identity proof'],
    officialWebsite: 'https://maandhan.in'
  },
  {
    id: 19,
    name: 'Mission Indradhanush',
    shortName: 'MI',
    category: 'Health',
    logo: 'I',
    logoBg: 'bg-rose-500',
    description: 'Immunization drive to increase vaccination coverage and reduce preventable child mortality.',
    benefit: 'Free vaccination and child healthcare support',
    eligibility: 'Children aged 0-5 years and pregnant women in underserved areas.',
    registrationStart: '2026-03-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Anganwadi / PHC / vaccination centers',
    requiredDocuments: ['Child vaccination card', 'Mother’s Aadhaar', 'Address proof'],
    officialWebsite: 'https://www.mohfw.gov.in'
  },
  {
    id: 20,
    name: 'Samagra Shiksha Abhiyan',
    shortName: 'SSA',
    category: 'Education',
    logo: 'S',
    logoBg: 'bg-indigo-500',
    description: 'School education scheme focused on quality, digital learning, and inclusive education access.',
    benefit: 'School infrastructure support, scholarships, and digital access',
    eligibility: 'Students and schools in rural and underserved regions.',
    registrationStart: '2026-04-01',
    registrationEnd: '2026-09-30',
    lastDate: '30 Sep 2026',
    applicationMode: 'School / district education office',
    requiredDocuments: ['Student ID', 'School records', 'Caste/income certificate if applicable', 'Guardian ID'],
    officialWebsite: 'https://samagrashiksha.in'
  },
  {
    id: 21,
    name: 'PM POSHAN Scheme',
    shortName: 'PM POSHAN',
    category: 'Education',
    logo: 'P',
    logoBg: 'bg-yellow-600',
    description: 'Provides hot cooked meals to school students to improve nutrition and enrolment.',
    benefit: 'Daily nutritious meals and school attendance support',
    eligibility: 'Students in government and aided schools.',
    registrationStart: '2026-06-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'School registration',
    requiredDocuments: ['Student identity proof', 'School enrollment details', 'Parent record'],
    officialWebsite: 'https://pm-poshan.education.gov.in'
  },
  {
    id: 22,
    name: 'Digital India Programme',
    shortName: 'DIP',
    category: 'Technology',
    logo: 'D',
    logoBg: 'bg-sky-500',
    description: 'Boosts digital governance, internet access, and digital services for citizens and enterprises.',
    benefit: 'Digital literacy support, online access, and service delivery',
    eligibility: 'Citizens, institutions, and entrepreneurs in eligible service areas.',
    registrationStart: '2026-01-05',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Online portals / CSC / government digital kiosks',
    requiredDocuments: ['Aadhaar card', 'Address proof', 'Photograph'],
    officialWebsite: 'https://digitalindia.gov.in'
  },
  {
    id: 23,
    name: 'PM-Surya Ghar: Muft Bijli Yojana',
    shortName: 'Surya Ghar',
    category: 'Energy',
    logo: 'S',
    logoBg: 'bg-amber-600',
    description: 'Provides rooftop solar subsidies to households to promote clean and affordable power.',
    benefit: 'Solar rooftop subsidy and reduced electricity bills',
    eligibility: 'Homeowners and residential households with rooftop space.',
    registrationStart: '2026-03-15',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'National portal / DISCOM registration',
    requiredDocuments: ['Aadhaar card', 'Electricity bill', 'Roof ownership proof', 'Bank details'],
    officialWebsite: 'https://pmsuryaghar.gov.in'
  },
  {
    id: 24,
    name: 'Sukanya Samriddhi Yojana',
    shortName: 'SSY',
    category: 'Women & Children',
    logo: 'S',
    logoBg: 'bg-pink-600',
    description: 'Savings-cum-investment scheme for girl children to secure future education and marriage expenses.',
    benefit: 'High-interest savings account with tax benefits',
    eligibility: 'Parents or guardians of girl children below 10 years.',
    registrationStart: '2026-01-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Post office / bank branch',
    requiredDocuments: ['Girl child birth certificate', 'Aadhaar of guardian', 'Bank account', 'Address proof'],
    officialWebsite: 'https://www.sukanyasamriddhi.gov.in'
  },
  {
    id: 25,
    name: 'Beti Bachao Beti Padhao',
    shortName: 'BBBP',
    category: 'Women & Children',
    logo: 'B',
    logoBg: 'bg-purple-500',
    description: 'Promotes gender equality, survival, protection, and education of girl children.',
    benefit: 'Awareness support, scholarships, and community incentives',
    eligibility: 'Families and communities in high-priority districts.',
    registrationStart: '2026-02-01',
    registrationEnd: '2026-11-30',
    lastDate: '30 Nov 2026',
    applicationMode: 'District administration / school / anganwadi',
    requiredDocuments: ['Girl child birth certificate', 'Family ID', 'Address proof'],
    officialWebsite: 'https://betibachaobetipadhao.gov.in'
  },
  {
    id: 26,
    name: 'Mahila Samman Savings Certificate',
    shortName: 'MSSC',
    category: 'Women & Children',
    logo: 'W',
    logoBg: 'bg-red-600',
    description: 'Savings scheme for women with assured returns and social security benefits.',
    benefit: 'Fixed-income savings account with government-backed returns',
    eligibility: 'Women residents above 18 years.',
    registrationStart: '2026-03-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Post office / bank branch',
    requiredDocuments: ['Aadhaar card', 'Pan card (if applicable)', 'Address proof'],
    officialWebsite: 'https://www.postoffice.gov.in'
  },
  {
    id: 27,
    name: 'Pradhan Mantri Gramin Digital Saksharta Abhiyan',
    shortName: 'PMGDISHA',
    category: 'Skill Development',
    logo: 'D',
    logoBg: 'bg-cyan-700',
    description: 'Encourages digital literacy among rural citizens to access e-services and digital transactions.',
    benefit: 'Digital literacy training and certificate support',
    eligibility: 'Rural citizens, especially women and youth.',
    registrationStart: '2026-01-10',
    registrationEnd: '2026-10-31',
    lastDate: '31 Oct 2026',
    applicationMode: 'CSC / village service centers',
    requiredDocuments: ['Aadhaar card', 'Photo', 'Address proof'],
    officialWebsite: 'https://www.pmgdisha.in'
  },
  {
    id: 28,
    name: 'PM Laptop Distribution Scheme',
    shortName: 'Laptop Scheme',
    category: 'Education',
    logo: 'L',
    logoBg: 'bg-slate-800',
    description: 'Provides laptops and digital devices to meritorious students to support online learning.',
    benefit: 'Free laptop or tablet device support',
    eligibility: 'Meritorious students from economically weaker sections.',
    registrationStart: '2026-05-01',
    registrationEnd: '2026-07-31',
    lastDate: '31 Jul 2026',
    applicationMode: 'School / state education portal',
    requiredDocuments: ['Mark sheet', 'Income certificate', 'Aadhaar card', 'Admission proof'],
    officialWebsite: 'https://education.gov.in'
  },
  {
    id: 29,
    name: 'National Rural Livelihood Mission',
    shortName: 'NRLM',
    category: 'Women & Children',
    logo: 'L',
    logoBg: 'bg-green-700',
    description: 'Builds self-help groups and promotes livelihoods, financial literacy, and enterprise support.',
    benefit: 'Micro-finance support, training, and enterprise development',
    eligibility: 'Rural women and SHG members in eligible areas.',
    registrationStart: '2026-02-05',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'SHG / block-level livelihood office',
    requiredDocuments: ['Aadhaar card', 'Group membership proof', 'Bank account', 'Address proof'],
    officialWebsite: 'https://aajeevika.gov.in'
  },
  {
    id: 30,
    name: 'Pradhan Mantri Jan Arogya Suraksha',
    shortName: 'PMJAS',
    category: 'Health',
    logo: 'A',
    logoBg: 'bg-red-700',
    description: 'Improves access to health insurance, hospitalization, and emergency medical support for vulnerable families.',
    benefit: 'Cashless treatment coverage for selected categories',
    eligibility: 'Families below poverty line and vulnerable groups.',
    registrationStart: '2026-03-01',
    registrationEnd: '2026-10-31',
    lastDate: '31 Oct 2026',
    applicationMode: 'Government health portal / hospital desk',
    requiredDocuments: ['Aadhaar card', 'Family ID', 'Income proof', 'Address proof'],
    officialWebsite: 'https://abha.gov.in'
  },
  {
    id: 31,
    name: 'PM Gati Shakti',
    shortName: 'Gati Shakti',
    category: 'Infrastructure',
    logo: 'G',
    logoBg: 'bg-blue-800',
    description: 'Multi-modal infrastructure planning to improve connectivity, logistics, and economic development.',
    benefit: 'Road, logistics, and industrial connectivity support',
    eligibility: 'Regional development agencies, transport enterprises, and eligible infrastructure projects.',
    registrationStart: '2026-01-15',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Online project submission portal',
    requiredDocuments: ['Project proposal', 'Land documents', 'Financial statements', 'Authority certifications'],
    officialWebsite: 'https://gati.shakti.gov.in'
  },
  {
    id: 32,
    name: 'National Food Security Mission',
    shortName: 'NFSM',
    category: 'Agriculture',
    logo: 'F',
    logoBg: 'bg-orange-600',
    description: 'Enhances food grain production and productivity through supportive services for farmers.',
    benefit: 'Input subsidy and crop support assistance',
    eligibility: 'Farmers in identified food grain production districts.',
    registrationStart: '2026-04-05',
    registrationEnd: '2026-08-31',
    lastDate: '31 Aug 2026',
    applicationMode: 'Agriculture department / online portal',
    requiredDocuments: ['Farmer ID', 'Land records', 'Aadhaar card', 'Crop plan'],
    officialWebsite: 'https://nfsm.gov.in'
  },
  {
    id: 33,
    name: 'Rural Development Scheme for Minor Irrigation',
    shortName: 'Minor Irrigation',
    category: 'Agriculture',
    logo: 'I',
    logoBg: 'bg-teal-700',
    description: 'Supports irrigation infrastructure to improve water access and crop productivity in rural regions.',
    benefit: 'Irrigation infrastructure grants and water support',
    eligibility: 'Farmers and village water committees in irrigation-deficit villages.',
    registrationStart: '2026-03-10',
    registrationEnd: '2026-09-30',
    lastDate: '30 Sep 2026',
    applicationMode: 'District agriculture office / Panchayat',
    requiredDocuments: ['Land details', 'Water access plan', 'Aadhaar card', 'Bank account'],
    officialWebsite: 'https://agricoop.nic.in'
  },
  {
    id: 34,
    name: 'Rural Women Self-Help Group Support Program',
    shortName: 'SHG Support',
    category: 'Women & Children',
    logo: 'W',
    logoBg: 'bg-fuchsia-700',
    description: 'Provides credit, training, and entrepreneurship support to women-led self-help groups in villages.',
    benefit: 'Group loan support and enterprise development aid',
    eligibility: 'Women self-help groups registered under the state livelihood mission.',
    registrationStart: '2026-02-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Block office / self-help group office',
    requiredDocuments: ['SHG registration proof', 'Aadhaar cards', 'Bank passbook', 'Address proof'],
    officialWebsite: 'https://aajeevika.gov.in'
  },
  {
    id: 35,
    name: 'Skill India Mission',
    shortName: 'Skill India',
    category: 'Skill Development',
    logo: 'SI',
    logoBg: 'bg-violet-700',
    description: 'Provides vocational training and skill certifications to help young citizens secure employment and entrepreneurship opportunities.',
    benefit: 'Training scholarships, certification, and placement support',
    eligibility: 'Youth, unemployed workers, and women seeking vocational training.',
    registrationStart: '2026-01-01',
    registrationEnd: '2026-12-31',
    lastDate: '31 Dec 2026',
    applicationMode: 'Training center / online portal',
    requiredDocuments: ['Aadhaar card', 'Education proof', 'Photo', 'Address proof'],
    officialWebsite: 'https://skillindia.gov.in'
  }
];

const schemeProfiles = {
  1: {
    detailedDescription: 'PM-KISAN is a central sector scheme under the Ministry of Agriculture & Farmers Welfare that provides income support to eligible landholding farmer families. It is designed to help farmers meet agricultural and household expenses by providing direct cash benefits in three installments each year.',
    howToApply: [
      'Visit the official PM-KISAN portal and complete new farmer registration.',
      'Upload Aadhaar-linked farmer details and land records.',
      'Verify mobile number, bank account and eKYC status.',
      'Track approval and installment status through the beneficiary dashboard.'
    ],
    officialFormUrl: 'https://pmkisan.gov.in/RegistrationFormupdated.aspx',
    formFields: [
      { name: 'farmerName', label: 'Farmer name', type: 'text', required: true },
      { name: 'village', label: 'Village / tehsil', type: 'text', required: true },
      { name: 'landholding', label: 'Landholding details', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account number / IFSC', type: 'text', required: true },
      { name: 'mobile', label: 'Registered mobile number', type: 'tel', required: true },
      { name: 'notes', label: 'Additional information', type: 'textarea', required: false }
    ]
  },
  2: {
    detailedDescription: 'PMAY-G provides assistance to rural households for construction or enhancement of pucca houses, with focus on women, scheduled castes, scheduled tribes, and economically weaker sections. The scheme promotes shelter security and improved rural housing standards.',
    howToApply: [
      'Check eligibility under PMAY-G at the Gram Panchayat or beneficiary list portal.',
      'Submit the application with household and identity details.',
      'Attach Aadhar, income and housing documents for verification.',
      'Complete field verification before sanction and fund release.'
    ],
    officialFormUrl: 'https://pmayg.nic.in/',
    formFields: [
      { name: 'applicantName', label: 'Applicant name', type: 'text', required: true },
      { name: 'familyHead', label: 'Family head name', type: 'text', required: true },
      { name: 'village', label: 'Village / panchayat', type: 'text', required: true },
      { name: 'housingStatus', label: 'Current housing status', type: 'select', required: true, options: ['No pucca house', 'Kutcha house', 'Semi-pucca house', 'Other'] },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'income', label: 'Annual household income', type: 'text', required: true },
      { name: 'notes', label: 'Household details', type: 'textarea', required: false }
    ]
  },
  3: {
    detailedDescription: 'Ayushman Bharat PM-JAY is the largest health insurance scheme in India. It provides cashless secondary and tertiary hospitalization cover to eligible families and helps reduce catastrophic health expenditures in rural and vulnerable communities.',
    howToApply: [
      'Generate or verify the family’s Ayushman card through the ABHA / PM-JAY portal.',
      'Submit family details with Aadhaar and ration card information.',
      'Complete beneficiary verification at the common service center or hospital.',
      'Use the card at empanelled hospitals for cashless treatment.'
    ],
    officialFormUrl: 'https://abha.gov.in/',
    formFields: [
      { name: 'familyHead', label: 'Family head name', type: 'text', required: true },
      { name: 'state', label: 'State', type: 'text', required: true },
      { name: 'district', label: 'District', type: 'text', required: true },
      { name: 'rationCard', label: 'Ration card number', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'hospitalPreference', label: 'Preferred empanelled hospital', type: 'text', required: false },
      { name: 'notes', label: 'Medical details / family details', type: 'textarea', required: false }
    ]
  },
  4: {
    detailedDescription: 'MGNREGA guarantees a minimum of 100 days of wage employment in a financial year to each rural household that volunteers for unskilled manual work. The scheme creates livelihood security and strengthens rural infrastructure through public works.',
    howToApply: [
      'Register at the Gram Panchayat or local job card office.',
      'Submit identity, address and household details.',
      'Receive a job card after verification.',
      'Apply for work and receive wages through the wage payment system.'
    ],
    officialFormUrl: 'https://nrega.nic.in/',
    formFields: [
      { name: 'householdHead', label: 'Household head name', type: 'text', required: true },
      { name: 'village', label: 'Village / worksite', type: 'text', required: true },
      { name: 'jobCard', label: 'Job card number', type: 'text', required: false },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'category', label: 'Household category', type: 'select', required: true, options: ['SC', 'ST', 'OBC', 'General', 'Other'] },
      { name: 'bankAccount', label: 'Bank / post office account details', type: 'text', required: true },
      { name: 'notes', label: 'Work preference', type: 'textarea', required: false }
    ]
  },
  5: {
    detailedDescription: 'PM Ujjwala Yojana is aimed at providing clean cooking fuel to women from Below Poverty Line households by offering free LPG connections and subsidy support. It reduces indoor air pollution and improves health and safety in rural homes.',
    howToApply: [
      'Find the nearest LPG distributor or apply through the state portal.',
      'Submit KYC and address documents for verification.',
      'Book the free LPG connection and complete document check.',
      'Activate the connection, receive cylinder and safety instructions.'
    ],
    officialFormUrl: 'https://pmuy.gov.in/',
    formFields: [
      { name: 'beneficiaryName', label: 'Women beneficiary name', type: 'text', required: true },
      { name: 'husbandName', label: 'Husband / family head name', type: 'text', required: true },
      { name: 'address', label: 'Residential address', type: 'textarea', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'rationCard', label: 'Ration card number', type: 'text', required: true },
      { name: 'gasDistributor', label: 'Preferred LPG distributor', type: 'text', required: false },
      { name: 'notes', label: 'Any additional family information', type: 'textarea', required: false }
    ]
  },
  6: {
    detailedDescription: 'PMJDY promotes financial inclusion by providing every eligible adult with access to a zero-balance basic savings account, accident insurance, digital banking access and RuPay debit card. It is a cornerstone of the government’s inclusive banking mission.',
    howToApply: [
      'Visit a participating bank branch or CSC.',
      'Submit the account opening form and KYC documents.',
      'Complete Aadhaar and address verification.',
      'Activate the account and receive the RuPay debit card and benefits.'
    ],
    officialFormUrl: 'https://pmjdy.gov.in/files/forms/account-opening/English.pdf',
    formFields: [
      { name: 'accountHolder', label: 'Account holder name', type: 'text', required: true },
      { name: 'fatherName', label: 'Father / husband name', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'address', label: 'Permanent address', type: 'textarea', required: true },
      { name: 'bankBranch', label: 'Bank branch name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'notes', label: 'Additional KYC notes', type: 'textarea', required: false }
    ]
  },
  7: {
    detailedDescription: 'Pradhan Mantri Fasal Bima Yojana protects farmers against crop losses due to natural calamities, pests, disease and adverse weather conditions. It provides a transparent insurance process with settlement support and premium subsidy.',
    howToApply: [
      'Select the notified crop and village coverage on the agriculture portal.',
      'Confirm land records and bank account details for enrollment.',
      'Submit the crop insurance application through the bank or insurance channel.',
      'Track claim status after seasonal loss or weather event.'
    ],
    officialFormUrl: 'https://pmfby.gov.in/',
    formFields: [
      { name: 'farmerName', label: 'Farmer name', type: 'text', required: true },
      { name: 'village', label: 'Village / district', type: 'text', required: true },
      { name: 'cropName', label: 'Crop insured', type: 'text', required: true },
      { name: 'surveyNumber', label: 'Survey / land record number', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account number / IFSC', type: 'text', required: true },
      { name: 'notes', label: 'Crop loss details', type: 'textarea', required: false }
    ]
  },
  8: {
    detailedDescription: 'PM Vishwakarma Yojana supports traditional artisans and craftsmen by providing toolkit support, margin money, skill training and digital support. It helps improve productivity and market competitiveness for local craft communities.',
    howToApply: [
      'Register at the official PM Vishwakarma portal or CSC.',
      'Select the artisan category and provide caste or community proof.',
      'Submit trade/occupation certificates and bank details.',
      'Complete verification and receive training and benefits.'
    ],
    officialFormUrl: 'https://pmvishwakarma.gov.in/',
    formFields: [
      { name: 'artisanName', label: 'Artisan / craftsperson name', type: 'text', required: true },
      { name: 'trade', label: 'Traditional trade', type: 'text', required: true },
      { name: 'district', label: 'District / block', type: 'text', required: true },
      { name: 'community', label: 'Community / caste proof', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account number / IFSC', type: 'text', required: true },
      { name: 'notes', label: 'Trade and equipment details', type: 'textarea', required: false }
    ]
  },
  9: {
    detailedDescription: 'PM SVANidhi provides micro-credit support to street vendors and small informal workers to upgrade their businesses and access digital payment systems. It is aimed at vendor formalization and business revival.',
    howToApply: [
      'Register as a street vendor with local municipal or state authorities.',
      'Submit vendor certification and Aadhaar details.',
      'Apply online for the loan or working capital assistance.',
      'Use the sanctioned amount for business expansion and repayment tracking.'
    ],
    officialFormUrl: 'https://svanidhi.mohua.gov.in/',
    formFields: [
      { name: 'vendorName', label: 'Street vendor name', type: 'text', required: true },
      { name: 'vendorType', label: 'Vendor category', type: 'select', required: true, options: ['Food cart', 'Mobile vendor', 'Stationary shop', 'Other'] },
      { name: 'market', label: 'Local market / area', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'certificate', label: 'Vendor certificate / ID', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Business details', type: 'textarea', required: false }
    ]
  },
  10: {
    detailedDescription: 'Stand-Up India supports women, SC and ST entrepreneurs by providing bank loan assistance for greenfield enterprises. The scheme promotes business ownership and social inclusion at the grassroots level.',
    howToApply: [
      'Visit a participating bank branch with your project plan.',
      'Submit details under the Stand-Up India loan application process.',
      'Attach Aadhaar, caste proof and business idea documents.',
      'Complete bank appraisal and sanction once the project is approved.'
    ],
    officialFormUrl: 'https://www.standupmitra.in/',
    formFields: [
      { name: 'entrepreneurName', label: 'Applicant entrepreneur name', type: 'text', required: true },
      { name: 'businessName', label: 'Proposed business name', type: 'text', required: true },
      { name: 'businessType', label: 'Business sector', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'casteCertificate', label: 'Caste / community certificate', type: 'text', required: false },
      { name: 'bankBranch', label: 'Preferred bank branch', type: 'text', required: true },
      { name: 'notes', label: 'Business plan summary', type: 'textarea', required: false }
    ]
  },
  11: {
    detailedDescription: 'Mudra Yojana provides collateral-free loans to micro and small enterprises to support business expansion, working capital needs, and startup financing. It is designed for non-corporate small business owners in both urban and rural settings.',
    howToApply: [
      'Approach a Mudra lending partner or branch of a public/private bank.',
      'Submit personal, business and financial details.',
      'Choose the applicable Mudra loan category based on business need.',
      'Track sanction and disbursal through the bank process.'
    ],
    officialFormUrl: 'https://www.mudra.org.in/',
    formFields: [
      { name: 'applicantName', label: 'Business owner name', type: 'text', required: true },
      { name: 'businessType', label: 'Business type', type: 'text', required: true },
      { name: 'turnover', label: 'Annual turnover / scale', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'loanPurpose', label: 'Loan purpose', type: 'text', required: true },
      { name: 'notes', label: 'Business activity summary', type: 'textarea', required: false }
    ]
  },
  12: {
    detailedDescription: 'Atal Pension Yojana ensures dignified pension support for workers in the unorganized sector after retirement. It encourages regular contributions and financial planning for old age income security.',
    howToApply: [
      'Open an account with a participating bank or post office.',
      'Submit age, Aadhaar and bank details.',
      'Choose a pension amount between the allowed monthly options.',
      'Continue regular contributions until retirement and receive pension after age 60.'
    ],
    officialFormUrl: 'https://www.npscra.nsdl.co.in/',
    formFields: [
      { name: 'subscriberName', label: 'Subscriber name', type: 'text', required: true },
      { name: 'dob', label: 'Date of birth', type: 'date', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account number / IFSC', type: 'text', required: true },
      { name: 'pensionOption', label: 'Monthly pension option', type: 'select', required: true, options: ['₹1,000', '₹2,000', '₹3,000', '₹4,000', '₹5,000'] },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'notes', label: 'Nominee / family details', type: 'textarea', required: false }
    ]
  },
  13: {
    detailedDescription: 'Kisan Credit Card is a short-term credit facility for farmers to meet crop production and allied agriculture needs. It provides timely access to funds and supports working capital requirements without complicated procedures.',
    howToApply: [
      'Visit the bank or cooperative operating the KCC facility.',
      'Submit land records, identity and crop details.',
      'Apply for the credit limit under the KCC scheme.',
      'Use the sanctioned credit for cultivation and allied agriculture activities.'
    ],
    officialFormUrl: 'https://www.rbi.org.in/',
    formFields: [
      { name: 'farmerName', label: 'Farmer name', type: 'text', required: true },
      { name: 'landRecord', label: 'Land record / khata number', type: 'text', required: true },
      { name: 'cropType', label: 'Main crop / activity', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankBranch', label: 'Bank / cooperative branch', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Farm activity details', type: 'textarea', required: false }
    ]
  },
  14: {
    detailedDescription: 'PM-KMY provides pension support to eligible small and marginal farmers after age 60. It aims to reduce old-age hardship and secure a stable income for farmers who are outside other pension schemes.',
    howToApply: [
      'Register through the official PM-KMY portal or nearest CSC.',
      'Submit farmer identity, age and bank details for verification.',
      'Choose the monthly contribution and nominee details.',
      'Receive pension after the beneficiary reaches 60 years of age.'
    ],
    officialFormUrl: 'https://pmkmy.gov.in/',
    formFields: [
      { name: 'farmerName', label: 'Farmer name', type: 'text', required: true },
      { name: 'dob', label: 'Date of birth', type: 'date', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account number / IFSC', type: 'text', required: true },
      { name: 'village', label: 'Village / block', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'notes', label: 'Nominee details', type: 'textarea', required: false }
    ]
  },
  15: {
    detailedDescription: 'The National Scholarship Portal consolidates information and applications for scholarships run by the central and state governments. It helps meritorious students from weaker economic backgrounds continue education without financial hurdles.',
    howToApply: [
      'Register on the National Scholarship Portal with academic details.',
      'Select the relevant scholarship and category based on income and education.',
      'Upload mark sheets, income certificate and bank details.',
      'Track approval and scholarship disbursal status online.'
    ],
    officialFormUrl: 'https://scholarships.gov.in/',
    formFields: [
      { name: 'studentName', label: 'Student name', type: 'text', required: true },
      { name: 'schoolName', label: 'School / college name', type: 'text', required: true },
      { name: 'course', label: 'Course / class', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'incomeCertificate', label: 'Income certificate number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Academic performance and scholarship category', type: 'textarea', required: false }
    ]
  },
  16: {
    detailedDescription: 'Pradhan Mantri Rozgar Yojana promotes self-employment and entrepreneurship for unemployed and educated youth. It supports training, business planning and subsidy-linked assistance for starting income-generating activities.',
    howToApply: [
      'Register at the district employment office or online portal.',
      'Submit education, work and skill details.',
      'Choose the self-employment project or business opportunity.',
      'Get training and sanction support before launching the venture.'
    ],
    officialFormUrl: 'https://www.ddugjy.gov.in/',
    formFields: [
      { name: 'applicantName', label: 'Applicant name', type: 'text', required: true },
      { name: 'qualification', label: 'Education / qualification', type: 'text', required: true },
      { name: 'district', label: 'District / block', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'skill', label: 'Preferred skill / business area', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Training and employment background', type: 'textarea', required: false }
    ]
  },
  17: {
    detailedDescription: 'IGNOAPS provides monthly pension to elderly citizens below the poverty line to support social security and basic living needs. It is a key welfare intervention for senior citizens in rural and urban vulnerable communities.',
    howToApply: [
      'Apply through the district welfare office or village secretariat.',
      'Submit age and income verification documents.',
      'Complete beneficiary verification and bank details.',
      'Receive pension through direct benefit transfer after approval.'
    ],
    officialFormUrl: 'https://nsap.nic.in/',
    formFields: [
      { name: 'beneficiaryName', label: 'Senior citizen name', type: 'text', required: true },
      { name: 'dob', label: 'Date of birth', type: 'date', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'incomeCertificate', label: 'Income / BPL certificate', type: 'text', required: true },
      { name: 'address', label: 'Address proof', type: 'textarea', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Family and nominee details', type: 'textarea', required: false }
    ]
  },
  18: {
    detailedDescription: 'PM-SYM provides pension benefits to workers in the unorganized sector after they reach 60 years of age. It targets those who do not have formal pension access and need a secure income for retirement years.',
    howToApply: [
      'Register online or at a CSC with personal and work details.',
      'Submit age and occupational information.',
      'Complete bank seeding and monthly contributions.',
      'Get pension after retirement age with direct transfer.'
    ],
    officialFormUrl: 'https://maandhan.in/',
    formFields: [
      { name: 'workerName', label: 'Worker name', type: 'text', required: true },
      { name: 'dob', label: 'Date of birth', type: 'date', required: true },
      { name: 'occupation', label: 'Occupation / work type', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account number / IFSC', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'notes', label: 'Nominee and family details', type: 'textarea', required: false }
    ]
  },
  19: {
    detailedDescription: 'Mission Indradhanush focuses on improving full immunization coverage among children and pregnant women, especially in underserved and low-coverage districts. It aims to reduce preventable child mortality and disease burden.',
    howToApply: [
      'Register at the local Anganwadi, PHC or vaccination session site.',
      'Provide child and mother details for immunization tracking.',
      'Schedule vaccination at approved health facilities.',
      'Continue follow-up doses and record immunization completion.'
    ],
    officialFormUrl: 'https://www.mohfw.gov.in/',
    formFields: [
      { name: 'motherName', label: 'Mother name', type: 'text', required: true },
      { name: 'childName', label: 'Child name', type: 'text', required: true },
      { name: 'age', label: 'Child age', type: 'text', required: true },
      { name: 'aadhaar', label: 'Mother Aadhaar number', type: 'text', required: true },
      { name: 'village', label: 'Village / health center', type: 'text', required: true },
      { name: 'vaccinationStatus', label: 'Vaccination status', type: 'select', required: true, options: ['Not started', 'Partially vaccinated', 'Due for vaccination', 'Completed'] },
      { name: 'notes', label: 'Vaccination and health details', type: 'textarea', required: false }
    ]
  },
  20: {
    detailedDescription: 'Samagra Shiksha Abhiyan is a centrally sponsored education scheme that supports school quality, digital learning, inclusion and teacher capacity across states. It works to improve access and retention in schools, especially in underserved areas.',
    howToApply: [
      'Register through the school or district education office.',
      'Submit student and school details for support programs.',
      'Attach academic records and category documents if applicable.',
      'Get school or scholarship support after verification.'
    ],
    officialFormUrl: 'https://samagrashiksha.in/',
    formFields: [
      { name: 'studentName', label: 'Student name', type: 'text', required: true },
      { name: 'schoolName', label: 'School name', type: 'text', required: true },
      { name: 'class', label: 'Class / grade', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'guardianName', label: 'Guardian name', type: 'text', required: true },
      { name: 'category', label: 'Category', type: 'select', required: false, options: ['General', 'OBC', 'SC', 'ST', 'EWS'] },
      { name: 'notes', label: 'Academic support needs', type: 'textarea', required: false }
    ]
  },
  21: {
    detailedDescription: 'PM POSHAN provides hot cooked meals to school children to improve nutrition, enrolment and attendance. It is one of the largest school meal programs and helps reduce classroom hunger among children in government schools.',
    howToApply: [
      'Register the child through the school nutrition program.',
      'Submit student enrollment and identity information.',
      'Complete school-level beneficiary verification.',
      'Receive meals and monitor attendance through school records.'
    ],
    officialFormUrl: 'https://pm-poshan.education.gov.in/',
    formFields: [
      { name: 'studentName', label: 'Student name', type: 'text', required: true },
      { name: 'schoolName', label: 'School name', type: 'text', required: true },
      { name: 'class', label: 'Class / grade', type: 'text', required: true },
      { name: 'aadhaar', label: 'Student Aadhaar number', type: 'text', required: true },
      { name: 'guardianName', label: 'Parent / guardian name', type: 'text', required: true },
      { name: 'address', label: 'Home address', type: 'textarea', required: true },
      { name: 'notes', label: 'School meal support details', type: 'textarea', required: false }
    ]
  },
  22: {
    detailedDescription: 'Digital India Programme helps villages and citizens access digital services, literacy and online public services. It improves digital infrastructure, e-governance and connectivity for better public participation and outreach.',
    howToApply: [
      'Register through CSC, digital kiosk or the official digital portal.',
      'Submit citizen identity and connectivity requirements.',
      'Complete digital literacy or service registration.',
      'Access digital public services and government platforms.'
    ],
    officialFormUrl: 'https://digitalindia.gov.in/',
    formFields: [
      { name: 'citizenName', label: 'Applicant name', type: 'text', required: true },
      { name: 'village', label: 'Village / district', type: 'text', required: true },
      { name: 'serviceType', label: 'Required digital service', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'serviceCenter', label: 'Preferred digital center', type: 'text', required: false },
      { name: 'notes', label: 'Service need details', type: 'textarea', required: false }
    ]
  },
  23: {
    detailedDescription: 'PM Surya Ghar: Muft Bijli Yojana provides rooftop solar subsidies to households to reduce electricity expenditure and promote clean energy. It helps families generate electricity from rooftop solar and adopt sustainable power solutions.',
    howToApply: [
      'Apply on the rooftop solar portal with household and electrical details.',
      'Submit rooftop ownership, electricity bill and Aadhaar details.',
      'Select an empanelled vendor and complete site verification.',
      'Receive subsidy post installation and commissioning.'
    ],
    officialFormUrl: 'https://pmsuryaghar.gov.in/',
    formFields: [
      { name: 'applicantName', label: 'Household owner name', type: 'text', required: true },
      { name: 'address', label: 'Address and rooftop details', type: 'textarea', required: true },
      { name: 'electricityConsumer', label: 'Electricity consumer number', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'vendor', label: 'Preferred vendor / installer', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Solar installation requirements', type: 'textarea', required: false }
    ]
  },
  24: {
    detailedDescription: 'Sukanya Samriddhi Yojana is a long-term savings scheme aimed at the financial security of girl children. It offers attractive returns, deposit incentives and tax benefits to support education and marriage expenses.',
    howToApply: [
      'Open an account at the post office or bank branch.',
      'Submit the girl child’s birth certificate and guardian details.',
      'Complete KYC and address verification.',
      'Continue deposits and monitor account growth over time.'
    ],
    officialFormUrl: 'https://www.sukanyasamriddhi.gov.in/',
    formFields: [
      { name: 'girlName', label: 'Girl child name', type: 'text', required: true },
      { name: 'dob', label: 'Date of birth', type: 'date', required: true },
      { name: 'guardianName', label: 'Guardian name', type: 'text', required: true },
      { name: 'aadhaar', label: 'Guardian Aadhaar number', type: 'text', required: true },
      { name: 'address', label: 'Address proof', type: 'textarea', required: true },
      { name: 'bankBranch', label: 'Post office / bank branch', type: 'text', required: true },
      { name: 'notes', label: 'Account and nominee details', type: 'textarea', required: false }
    ]
  },
  25: {
    detailedDescription: 'Beti Bachao Beti Padhao promotes gender equality and the survival, protection and education of girl children. It focuses on community awareness, welfare outreach and targeted support in priority districts.',
    howToApply: [
      'Register through the district administration or school / Anganwadi center.',
      'Submit family and child details for support and awareness programs.',
      'Participate in local campaigns and community programs.',
      'Use available scholarships and support initiatives after verification.'
    ],
    officialFormUrl: 'https://betibachaobetipadhao.gov.in/',
    formFields: [
      { name: 'childName', label: 'Girl child name', type: 'text', required: true },
      { name: 'dob', label: 'Date of birth', type: 'date', required: true },
      { name: 'motherName', label: 'Mother name', type: 'text', required: true },
      { name: 'address', label: 'Residential address', type: 'textarea', required: true },
      { name: 'aadhaar', label: 'Family Aadhaar details', type: 'text', required: true },
      { name: 'schoolName', label: 'School / Anganwadi center', type: 'text', required: true },
      { name: 'notes', label: 'Support needs and remarks', type: 'textarea', required: false }
    ]
  },
  26: {
    detailedDescription: 'Mahila Samman Savings Certificate offers a government-backed savings option for women with assured returns and social-security benefits. It is intended to help women build financial discipline and savings habits.',
    howToApply: [
      'Visit the designated post office or bank branch.',
      'Submit KYC and residence details as part of the account opening process.',
      'Complete the certificate application form and nomination details.',
      'Track certificate maturity and renewal details as required.'
    ],
    officialFormUrl: 'https://www.postoffice.gov.in/',
    formFields: [
      { name: 'beneficiaryName', label: 'Woman beneficiary name', type: 'text', required: true },
      { name: 'dob', label: 'Date of birth', type: 'date', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'address', label: 'Address proof', type: 'textarea', required: true },
      { name: 'bankBranch', label: 'Post office / bank branch', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'notes', label: 'Nominee Information', type: 'textarea', required: false }
    ]
  },
  27: {
    detailedDescription: 'PMGDISHA promotes digital literacy in rural areas so citizens can access e-governance, online transactions and digital services. It focuses on women, youth and rural communities with limited digital access.',
    howToApply: [
      'Register through CSC or village service centres.',
      'Submit identity and location details for training access.',
      'Attend digital literacy classes and complete digital skills assessment.',
      'Receive certification and support for digital access services.'
    ],
    officialFormUrl: 'https://www.pmgdisha.in/',
    formFields: [
      { name: 'citizenName', label: 'Applicant name', type: 'text', required: true },
      { name: 'village', label: 'Village / district', type: 'text', required: true },
      { name: 'ageGroup', label: 'Age group', type: 'select', required: true, options: ['15-25', '26-35', '36-45', '46+'] },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'serviceCenter', label: 'Preferred training center', type: 'text', required: false },
      { name: 'notes', label: 'Training need details', type: 'textarea', required: false }
    ]
  },
  28: {
    detailedDescription: 'The PM Laptop Distribution Scheme supports meritorious and economically weaker students by providing digital devices for learning and online education. It helps bridge the digital divide in rural and underserved communities.',
    howToApply: [
      'Apply through the school or state education portal.',
      'Submit academic performance and household income documents.',
      'Complete school verification and selection process.',
      'Receive the laptop or tablet after approval and device distribution.'
    ],
    officialFormUrl: 'https://education.gov.in/',
    formFields: [
      { name: 'studentName', label: 'Student name', type: 'text', required: true },
      { name: 'schoolName', label: 'School / college name', type: 'text', required: true },
      { name: 'class', label: 'Class / course', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'marksheet', label: 'Latest mark sheet / result', type: 'text', required: true },
      { name: 'incomeCertificate', label: 'Income certificate', type: 'text', required: true },
      { name: 'notes', label: 'Need and academic details', type: 'textarea', required: false }
    ]
  },
  29: {
    detailedDescription: 'NRLM strengthens women-led self-help groups and rural livelihoods by promoting enterprise, financial literacy, livelihoods and capacity-building support. It helps rural households create sustainable income and resilience.',
    howToApply: [
      'Join or register with the SHG or block livelihood mission office.',
      'Submit membership, identity and bank details.',
      'Complete training and livelihood assessment.',
      'Get support for enterprise development and credit linkage.'
    ],
    officialFormUrl: 'https://aajeevika.gov.in/',
    formFields: [
      { name: 'memberName', label: 'SHG member name', type: 'text', required: true },
      { name: 'groupName', label: 'SHG / group name', type: 'text', required: true },
      { name: 'village', label: 'Village / block', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'activity', label: 'Livelihood activity', type: 'text', required: true },
      { name: 'notes', label: 'Self-help group and support details', type: 'textarea', required: false }
    ]
  },
  30: {
    detailedDescription: 'Pradhan Mantri Jan Arogya Suraksha focuses on hospital coverage and emergency care for vulnerable households. It aims to provide financial protection during health crises and reduce out-of-pocket treatment burden.',
    howToApply: [
      'Verify family eligibility and identity details.',
      'Register on the official healthcare or hospital portal.',
      'Submit family card and income verification documents.',
      'Use the health cover at empanelled facilities during hospitalization.'
    ],
    officialFormUrl: 'https://abha.gov.in/',
    formFields: [
      { name: 'familyHead', label: 'Family head name', type: 'text', required: true },
      { name: 'familyMembers', label: 'Family member count', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'incomeProof', label: 'Income / BPL proof', type: 'text', required: true },
      { name: 'address', label: 'Address proof', type: 'textarea', required: true },
      { name: 'hospital', label: 'Preferred hospital / district', type: 'text', required: false },
      { name: 'notes', label: 'Health and emergency details', type: 'textarea', required: false }
    ]
  },
  31: {
    detailedDescription: 'PM Gati Shakti is a multi-modal infrastructure planning initiative that promotes integrated connectivity and logistics efficiency. It supports project execution across transport, industrial and social infrastructure sectors.',
    howToApply: [
      'Submit project proposal through the designated planning portal.',
      'Attach land, financial and authority-related documents.',
      'Complete project assessment and connectivity mapping.',
      'Receive project support and implementation guidance after approval.'
    ],
    officialFormUrl: 'https://gati.shakti.gov.in/',
    formFields: [
      { name: 'projectName', label: 'Project name', type: 'text', required: true },
      { name: 'agency', label: 'Implementing agency', type: 'text', required: true },
      { name: 'district', label: 'District / region', type: 'text', required: true },
      { name: 'projectType', label: 'Project type', type: 'select', required: true, options: ['Road', 'Logistics', 'Industrial', 'Urban Infrastructure', 'Other'] },
      { name: 'landDocuments', label: 'Land and project documents', type: 'textarea', required: true },
      { name: 'budget', label: 'Estimated project budget', type: 'text', required: true },
      { name: 'notes', label: 'Project summary', type: 'textarea', required: false }
    ]
  },
  32: {
    detailedDescription: 'National Food Security Mission enhances production of major crops and assists farmers through better input support, technology and crop planning. It is aimed at improving food grain productivity and nutrient security.',
    howToApply: [
      'Register through the agriculture department or online farmer portal.',
      'Submit land and crop details for identified districts.',
      'Attach Aadhaar and bank record for support programs.',
      'Receive input support and crop-related assistance after validation.'
    ],
    officialFormUrl: 'https://nfsm.gov.in/',
    formFields: [
      { name: 'farmerName', label: 'Farmer name', type: 'text', required: true },
      { name: 'village', label: 'Village / district', type: 'text', required: true },
      { name: 'cropName', label: 'Crop to be supported', type: 'text', required: true },
      { name: 'landRecord', label: 'Land record / survey number', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Input support needs', type: 'textarea', required: false }
    ]
  },
  33: {
    detailedDescription: 'The Minor Irrigation scheme helps support water infrastructure and irrigation facilities in rural regions. It reduces water stress and improves crop yield in areas affected by erratic rainfall and low groundwater access.',
    howToApply: [
      'Submit village-level irrigation proposal at district agriculture office.',
      'Attach land, water and bank details for feasibility review.',
      'Complete project appraisal and technical validation.',
      'Receive infrastructure support after sanctioning and implementation.'
    ],
    officialFormUrl: 'https://agricoop.nic.in/',
    formFields: [
      { name: 'farmerName', label: 'Applicant / farmer group name', type: 'text', required: true },
      { name: 'village', label: 'Village / block', type: 'text', required: true },
      { name: 'landArea', label: 'Irrigation area / land size', type: 'text', required: true },
      { name: 'waterSource', label: 'Water source / irrigation need', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'bankAccount', label: 'Bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Project or irrigation requirement summary', type: 'textarea', required: false }
    ]
  },
  34: {
    detailedDescription: 'Rural Women SHG Support Program promotes self-help groups by providing training, credit linkage and entrepreneurship support. It helps rural women become financially independent and improve collective livelihood opportunities.',
    howToApply: [
      'Register the SHG at the block or livelihood mission office.',
      'Submit group registration details and member Aadhaar records.',
      'Complete training and livelihood assessment for credit support.',
      'Receive funding and enterprise support based on group approval.'
    ],
    officialFormUrl: 'https://aajeevika.gov.in/',
    formFields: [
      { name: 'groupName', label: 'SHG name', type: 'text', required: true },
      { name: 'leaderName', label: 'Group leader name', type: 'text', required: true },
      { name: 'village', label: 'Village / block', type: 'text', required: true },
      { name: 'membershipCount', label: 'Number of members', type: 'text', required: true },
      { name: 'aadhaar', label: 'Member Aadhaar details', type: 'text', required: true },
      { name: 'bankAccount', label: 'Group bank account details', type: 'text', required: true },
      { name: 'notes', label: 'Group activity and support needs', type: 'textarea', required: false }
    ]
  },
  35: {
    detailedDescription: 'Skill India Mission offers vocational training, certification and career support to youth, women and unemployed adults. It strengthens employability and supports entrepreneurship in fast-growing sectors.',
    howToApply: [
      'Register on the Skill India portal or at the training center.',
      'Submit educational and identity information.',
      'Select a training course and complete the enrollment process.',
      'Receive certification, placement support and follow-up guidance.'
    ],
    officialFormUrl: 'https://skillindia.gov.in/',
    formFields: [
      { name: 'candidateName', label: 'Candidate name', type: 'text', required: true },
      { name: 'qualification', label: 'Educational qualification', type: 'text', required: true },
      { name: 'trainingCourse', label: 'Preferred skill course', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'district', label: 'District / training center', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'notes', label: 'Career and training details', type: 'textarea', required: false }
    ]
  }
};

Object.entries(schemeProfiles).forEach(([id, profile]) => {
  const scheme = governmentSchemes.find((item) => item.id === Number(id));

  if (!scheme) return;

  Object.assign(scheme, {
    detailedDescription: profile.detailedDescription || scheme.description,
    howToApply: profile.howToApply || ['Visit the official portal', 'Verify eligibility', 'Submit necessary documents', 'Track application status'],
    officialFormUrl: profile.officialFormUrl || scheme.officialWebsite,
    formFields: profile.formFields || [
      { name: 'fullName', label: 'Full name', type: 'text', required: true },
      { name: 'mobile', label: 'Mobile number', type: 'tel', required: true },
      { name: 'state', label: 'State', type: 'text', required: true },
      { name: 'aadhaar', label: 'Aadhaar number', type: 'text', required: true },
      { name: 'notes', label: 'Additional information', type: 'textarea', required: false }
    ]
  });
});
