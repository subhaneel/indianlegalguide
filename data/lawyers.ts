export interface Lawyer {
  name: string
  specialization: string
  phone: string
  email?: string
  location: string
  experience?: string
}

export const lawyers: Lawyer[] = [
  // Delhi Lawyers
  {
    name: 'Adv. Rajesh Kumar',
    specialization: 'Criminal Law, Civil Law',
    phone: '+91-9876543210',
    email: 'rajesh.kumar@law.com',
    location: 'Delhi',
    experience: '15+ years'
  },
  {
    name: 'Adv. Vikram Singh',
    specialization: 'Constitutional Law, PIL',
    phone: '+91-9876543214',
    email: 'vikram.singh@law.com',
    location: 'Delhi',
    experience: '20+ years'
  },
  {
    name: 'Adv. Neha Gupta',
    specialization: 'Family Law, Divorce',
    phone: '+91-9876543218',
    email: 'neha.gupta@law.com',
    location: 'Delhi',
    experience: '13+ years'
  },
  {
    name: 'Adv. Rohit Malhotra',
    specialization: 'Property Law, Real Estate',
    phone: '+91-9876543219',
    email: 'rohit.malhotra@law.com',
    location: 'Delhi',
    experience: '16+ years'
  },
  
  // Mumbai Lawyers
  {
    name: 'Adv. Priya Sharma',
    specialization: 'Family Law, Property Law',
    phone: '+91-9876543211',
    email: 'priya.sharma@law.com',
    location: 'Mumbai',
    experience: '12+ years'
  },
  {
    name: 'Adv. Anjali Desai',
    specialization: 'Labor Law, Employment',
    phone: '+91-9876543217',
    email: 'anjali.desai@law.com',
    location: 'Mumbai',
    experience: '9+ years'
  },
  {
    name: 'Adv. Sameer Joshi',
    specialization: 'Corporate Law, Business',
    phone: '+91-9876543220',
    email: 'sameer.joshi@law.com',
    location: 'Mumbai',
    experience: '18+ years'
  },
  {
    name: 'Adv. Kavita Shah',
    specialization: 'Consumer Law, RTI',
    phone: '+91-9876543221',
    email: 'kavita.shah@law.com',
    location: 'Mumbai',
    experience: '11+ years'
  },
  
  // Bangalore Lawyers
  {
    name: 'Adv. Meera Nair',
    specialization: 'Women Rights, Domestic Violence',
    phone: '+91-9876543215',
    email: 'meera.nair@law.com',
    location: 'Bangalore',
    experience: '14+ years'
  },
  {
    name: 'Adv. Arjun Rao',
    specialization: 'IT Law, Cyber Law',
    phone: '+91-9876543222',
    email: 'arjun.rao@law.com',
    location: 'Bangalore',
    experience: '10+ years'
  },
  {
    name: 'Adv. Divya Menon',
    specialization: 'Family Law, Property',
    phone: '+91-9876543223',
    email: 'divya.menon@law.com',
    location: 'Bangalore',
    experience: '12+ years'
  },
  
  // Hyderabad Lawyers
  {
    name: 'Adv. Sunita Reddy',
    specialization: 'Consumer Law, RTI',
    phone: '+91-9876543213',
    email: 'sunita.reddy@law.com',
    location: 'Hyderabad',
    experience: '8+ years'
  },
  {
    name: 'Adv. Ramesh Naidu',
    specialization: 'Criminal Law, Bail',
    phone: '+91-9876543224',
    email: 'ramesh.naidu@law.com',
    location: 'Hyderabad',
    experience: '15+ years'
  },
  {
    name: 'Adv. Lakshmi Devi',
    specialization: 'Property Law, Real Estate',
    phone: '+91-9876543225',
    email: 'lakshmi.devi@law.com',
    location: 'Hyderabad',
    experience: '9+ years'
  },
  
  // Ahmedabad Lawyers
  {
    name: 'Adv. Amit Patel',
    specialization: 'Criminal Law, Bail Matters',
    phone: '+91-9876543212',
    email: 'amit.patel@law.com',
    location: 'Ahmedabad',
    experience: '10+ years'
  },
  {
    name: 'Adv. Harsh Shah',
    specialization: 'Business Law, Corporate',
    phone: '+91-9876543226',
    email: 'harsh.shah@law.com',
    location: 'Ahmedabad',
    experience: '14+ years'
  },
  
  // Pune Lawyers
  {
    name: 'Adv. Ravi Verma',
    specialization: 'Property Law, Real Estate',
    phone: '+91-9876543216',
    email: 'ravi.verma@law.com',
    location: 'Pune',
    experience: '11+ years'
  },
  {
    name: 'Adv. Sneha Kulkarni',
    specialization: 'Family Law, Divorce',
    phone: '+91-9876543227',
    email: 'sneha.kulkarni@law.com',
    location: 'Pune',
    experience: '8+ years'
  },
  
  // Chennai Lawyers
  {
    name: 'Adv. Karthik Iyer',
    specialization: 'Criminal Law, Civil Law',
    phone: '+91-9876543228',
    email: 'karthik.iyer@law.com',
    location: 'Chennai',
    experience: '17+ years'
  },
  {
    name: 'Adv. Priya Venkatesh',
    specialization: 'Family Law, Property',
    phone: '+91-9876543229',
    email: 'priya.venkatesh@law.com',
    location: 'Chennai',
    experience: '13+ years'
  },
  
  // Kolkata Lawyers
  {
    name: 'Adv. Sourav Das',
    specialization: 'Criminal Law, Bail',
    phone: '+91-9876543230',
    email: 'sourav.das@law.com',
    location: 'Kolkata',
    experience: '16+ years'
  },
  {
    name: 'Adv. Ananya Banerjee',
    specialization: 'Women Rights, Family Law',
    phone: '+91-9876543231',
    email: 'ananya.banerjee@law.com',
    location: 'Kolkata',
    experience: '10+ years'
  }
]

export const locations = [
  'All Locations',
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Ahmedabad',
  'Pune',
  'Chennai',
  'Kolkata'
]

// Legal Aid Organizations
export const legalAidOrganizations = [
  {
    name: 'National Legal Services Authority (NALSA)',
    phone: '011-23382724',
    website: 'nalsa.gov.in',
    description: 'Free legal aid for eligible citizens'
  },
  {
    name: 'District Legal Services Authority',
    phone: 'Contact your local DLSA',
    website: 'nalsa.gov.in',
    description: 'District-level free legal services'
  },
  {
    name: 'Legal Aid Clinics',
    phone: 'Varies by location',
    website: 'Check local law colleges',
    description: 'Free legal advice at law colleges'
  }
]

