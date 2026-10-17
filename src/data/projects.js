import satyaHeroImage from '../assets/a1 (1).jpeg'
import satyaEventImage from '../assets/a1 (2).jpeg'
import satyaContactImage from '../assets/a1 (3).jpeg'
import satyaAboutImage from '../assets/a1 (4).jpeg'
import satyaSoundtrackImage from '../assets/a1 (5).jpeg'
import posSettingsImage from '../assets/y1 (1).jpeg'
import posProductsImage from '../assets/y1 (2).jpeg'
import posOrdersImage from '../assets/y1 (3).jpeg'
import posCustomersImage from '../assets/y1 (4).jpeg'
import pbModelImage from '../assets/c1.png'
import pbOverviewImage from '../assets/c2.png'
import pbDataImage from '../assets/c3.png'
import pbSectorImage from '../assets/c4.png'
import pbControversyImage from '../assets/c5.png'
import pbGeographyImage from '../assets/c6.png'
import vkReviewsImage from '../assets/s1 (1).jpeg'
import vkProductsImage from '../assets/s1 (2).jpeg'
import vkProductDetailImage from '../assets/s1 (3).jpeg'
import vkSignInImage from '../assets/s1 (4).jpeg'
import vkSignUpImage from '../assets/s1 (5).jpeg'
import vkAboutImage from '../assets/s1 (6).jpeg'
import gigworkHeroImage from '../assets/h1 (1).jpeg'
import gigworkScreensImage from '../assets/h1 (2).jpeg'
import gigworkRequestsImage from '../assets/h1 (3).jpeg'
import gigworkWireframesImage from '../assets/h1 (4).jpeg'
import gigworkBookingImage from '../assets/h1 (5).jpeg'
import gigworkWorkerFlowImage from '../assets/h1 (6).jpeg'
import roadlinesServicesImage from '../assets/q1 (1).jpeg'
import roadlinesReviewsImage from '../assets/q1 (2).jpeg'
import roadlinesQuoteImage from '../assets/q1 (3).jpeg'
import roadlinesHeroImage from '../assets/q1 (4).jpeg'
import roadlinesAboutImage from '../assets/q1 (5).jpeg'
import roadlinesPartnersImage from '../assets/q1 (6).jpeg'
import roadlinesMetricsImage from '../assets/q1 (7).jpeg'

export const projects = [
  {
    id: 'tomorrowland',
    slug: 'tomorrowland',
    title: 'Satya Production',
    clientName: 'Satya Films Company',
    period: 'FEATURED FILM',
    type: 'Film production',
    image: satyaHeroImage,
    accent: '#f4ad4f',
    profileLabel: 'PROJECT OVERVIEW',
    toolsLabel: 'PROJECT FOCUS',
    description: 'A digital showcase for Satya Films Company, featuring the Bandhini film, production approach, events, and soundtrack.',
    tools: ['Film production', 'Storytelling', 'Digital showcase'],
    purpose: 'Bring the Bandhini film campaign and Satya Films Company work together in one place',
    gallery: [
      {
        image: satyaHeroImage,
        title: 'Bandhini Campaign',
        detail: 'FILM WEBSITE & HERO',
        tag: 'SATYA FILMS',
        alt: 'Satya Films Company website featuring the Bandhini film hero banner',
      },
      {
        image: satyaEventImage,
        title: 'Bandhini Events',
        detail: 'FILM PROMOTION & EVENTS',
        tag: 'SATYA FILMS',
        alt: 'Bandhini film promotion and event photographs',
      },
      {
        image: satyaContactImage,
        title: 'Contact Satya',
        detail: 'CONTACT & ENQUIRIES',
        tag: 'SATYA FILMS',
        alt: 'Satya Films Company contact page',
      },
      {
        image: satyaAboutImage,
        title: 'Production Approach',
        detail: 'FILMMAKING & STORYTELLING',
        tag: 'SATYA FILMS',
        alt: 'Satya Films Company production and storytelling overview',
      },
      {
        image: satyaSoundtrackImage,
        title: 'Bandhini Soundtrack',
        detail: 'MUSIC & TRACK LIST',
        tag: 'SATYA FILMS',
        alt: 'Bandhini soundtrack page with album art and track list',
      },
    ],
    index: '01',
  },
  {
    id: 'navy-pier',
    slug: 'navy-pier',
    title: 'POS App',
    clientName: 'Point of Sale',
    period: 'FIGMA CONCEPT',
    type: 'Mobile POS app',
    image: posProductsImage,
    accent: '#66aaff',
    profileLabel: 'PROJECT OVERVIEW',
    description: 'A mobile point-of-sale concept designed in Figma for browsing products, managing customer records, and configuring store settings.',
    tools: ['Figma'],
    purpose: 'Bring product browsing, customer management, and store setup into one mobile workflow',
    gallery: [
      {
        image: posSettingsImage,
        title: 'POS Settings',
        detail: 'STORE, TAX & PAYMENT OPTIONS',
        tag: 'FIGMA SCREEN',
        alt: 'Mobile POS settings screen with store details, tax settings, and payment methods',
      },
      {
        image: posProductsImage,
        title: 'Product Browsing',
        detail: 'CATEGORIES & PRODUCT CARDS',
        tag: 'FIGMA SCREEN',
        alt: 'Mobile storefront screen with product categories and product cards',
      },
      {
        image: posOrdersImage,
        title: 'Order Discovery',
        detail: 'SEARCH & ITEM LISTING',
        tag: 'FIGMA SCREEN',
        alt: 'Mobile order discovery screen with search and food item cards',
      },
      {
        image: posCustomersImage,
        title: 'Customer Management',
        detail: 'CUSTOMER RECORDS',
        tag: 'FIGMA SCREEN',
        alt: 'Mobile POS customer management screen with customer records and purchase totals',
      },
    ],
    index: '02',
  },
  {
    id: 'msi-chicago',
    slug: 'msi-chicago',
    title: 'PB Dashboard',
    clientName: 'ESG Investing Analysis',
    period: 'POWER BI DASHBOARD',
    type: 'Business intelligence',
    image: pbOverviewImage,
    accent: '#3296f3',
    profileLabel: 'PROJECT OVERVIEW',
    description: 'An interactive Power BI dashboard for exploring ESG scores, company financials, sector performance, geographic data, and controversies.',
    tools: ['Power BI'],
    purpose: 'Analyze ESG performance and financial trends across companies, sectors, and locations',
    gallery: [
      {
        image: pbModelImage,
        title: 'Data Model',
        detail: 'TABLES & RELATIONSHIPS',
        tag: 'POWER BI',
        alt: 'Power BI data model showing ESG, financial, location, and measures tables',
      },
      {
        image: pbOverviewImage,
        title: 'ESG Investing Analysis',
        detail: 'ESG SCORES & FINANCIAL KPIS',
        tag: 'POWER BI',
        alt: 'Power BI ESG dashboard with score cards and sector performance charts',
      },
      {
        image: pbDataImage,
        title: 'Company Data',
        detail: 'ESG COMPANY RECORDS',
        tag: 'POWER BI',
        alt: 'Power BI table view with company controversy records',
      },
      {
        image: pbSectorImage,
        title: 'Sector Analysis',
        detail: 'PROFITABILITY & ESG SCORES',
        tag: 'POWER BI',
        alt: 'Power BI sector analysis with company scores, profitability, and trends',
      },
      {
        image: pbControversyImage,
        title: 'Controversy Analysis',
        detail: 'COMPANY RISK & CONTROVERSIES',
        tag: 'POWER BI',
        alt: 'Power BI controversy analysis with company table and business area breakdowns',
      },
      {
        image: pbGeographyImage,
        title: 'Geographical Analysis',
        detail: 'HEADQUARTERS & FINANCIAL TRENDS',
        tag: 'POWER BI',
        alt: 'Power BI geographic analysis with headquarters data and financial trends',
      },
    ],
    index: '03',
  },
  {
    id: 'phone',
    slug: 'this-was-louises-phone',
    title: 'VK Bags',
    clientName: 'VK Bags',
    period: 'PREMIUM E-COMMERCE',
    type: 'E-commerce website',
    image: vkProductsImage,
    accent: '#ff7a1a',
    profileLabel: 'PROJECT OVERVIEW',
    toolsLabel: 'SHOPPING FEATURES',
    description: 'An online bag store experience for exploring collections, viewing product details, and managing customer accounts.',
    tools: ['Product catalog', 'Shopping flow', 'Customer accounts'],
    purpose: 'Make bag discovery and online shopping clear through product recommendations, reviews, and account flows',
    gallery: [
      {
        image: vkReviewsImage,
        title: 'Customer Reviews',
        detail: 'SHOPPER FEEDBACK',
        tag: 'VK BAGS',
        alt: 'VK Bags website customer review cards',
      },
      {
        image: vkProductsImage,
        title: 'Recommended Bags',
        detail: 'PRODUCT CATALOG',
        tag: 'VK BAGS',
        alt: 'VK Bags recommended products page with bag cards and prices',
      },
      {
        image: vkProductDetailImage,
        title: 'Product Details',
        detail: 'PRODUCT INFORMATION & ADD TO BAG',
        tag: 'VK BAGS',
        alt: 'VK Bags product detail page with price and add to bag button',
      },
      {
        image: vkSignInImage,
        title: 'Sign In',
        detail: 'CUSTOMER LOGIN',
        tag: 'VK BAGS',
        alt: 'VK Bags customer sign-in page',
      },
      {
        image: vkSignUpImage,
        title: 'Create Account',
        detail: 'CUSTOMER REGISTRATION',
        tag: 'VK BAGS',
        alt: 'VK Bags customer account registration page',
      },
      {
        image: vkAboutImage,
        title: 'About VK Bags',
        detail: 'BRAND VALUES & CRAFT',
        tag: 'VK BAGS',
        alt: 'VK Bags about page describing brand values and craftsmanship',
      },
    ],
    index: '04',
  },
  {
    id: 'kikk',
    slug: 'kikk-festival',
    title: 'GIGWORK AND',
    clientName: 'Gigwork',
    period: 'SERVICE MARKETPLACE APP',
    type: 'On-demand services app',
    image: gigworkHeroImage,
    accent: '#8257d8',
    profileLabel: 'PROJECT OVERVIEW',
    toolsLabel: 'APP FEATURES',
    description: 'A home-services marketplace that connects customers with local workers, from job requests and verification to live tracking and completion.',
    tools: ['Customer bookings', 'Worker verification', 'Live job tracking'],
    purpose: 'Help customers find service professionals and let workers manage jobs from request to completion',
    gallery: [
      {
        image: gigworkHeroImage,
        title: 'Gigwork Services',
        detail: 'HOME SERVICE MARKETPLACE',
        tag: 'GIGWORK',
        alt: 'Gigwork handyman illustration with home repair service icons',
      },
      {
        image: gigworkScreensImage,
        title: 'Worker Job Flow',
        detail: 'VERIFY · START · COMPLETE',
        tag: 'GIGWORK',
        alt: 'Gigwork worker app screens for QR verification, starting a job, and marking a task complete',
      },
      {
        image: gigworkRequestsImage,
        title: 'Requests & Live Location',
        detail: 'JOB DETAILS & TRACKING',
        tag: 'GIGWORK',
        alt: 'Gigwork mobile app screens for request details, live location, and worker activity',
      },
      {
        image: gigworkWireframesImage,
        title: 'Service Wireframes',
        detail: 'BOOKING · ACCEPTANCE · PAYMENT',
        tag: 'GIGWORK',
        alt: 'Hand-drawn Gigwork service booking and worker payment flow wireframes',
      },
      {
        image: gigworkBookingImage,
        title: 'Customer Booking Flow',
        detail: 'SEARCH · BOOK · TRACK',
        tag: 'GIGWORK',
        alt: 'Hand-drawn Gigwork customer flow for searching and booking a service',
      },
      {
        image: gigworkWorkerFlowImage,
        title: 'Worker App Wireframes',
        detail: 'PROFILE · VERIFICATION · JOBS',
        tag: 'GIGWORK',
        alt: 'Hand-drawn Gigwork worker profile, verification, and job flow wireframes',
      },
    ],
    index: '05',
  },
  {
    id: 'kennedy',
    slug: 'kennedy-center',
    title: 'Krushna Roadlines',
    clientName: 'Krushna Roadlines',
    period: 'LOGISTICS & TRANSPORT',
    type: 'Logistics website',
    image: roadlinesHeroImage,
    accent: '#f2cf27',
    profileLabel: 'PROJECT OVERVIEW',
    toolsLabel: 'SERVICE AREAS',
    description: 'A logistics website for Krushna Roadlines, highlighting road transport, fleet management, trailer services, and quote requests.',
    tools: ['Road transport', 'Fleet management', 'Trailer services'],
    purpose: 'Showcase logistics capabilities and help customers request transport quotes',
    gallery: [
      {
        image: roadlinesServicesImage,
        title: 'Logistics Services',
        detail: 'ROAD TRANSPORT · FLEET · TRAILERS',
        tag: 'KRUSHNA ROADLINES',
        alt: 'Krushna Roadlines service cards for road transport, fleet management, and trailers',
      },
      {
        image: roadlinesReviewsImage,
        title: 'Client Testimonials',
        detail: 'REVIEWS & TRUST',
        tag: 'KRUSHNA ROADLINES',
        alt: 'Krushna Roadlines customer testimonial section',
      },
      {
        image: roadlinesQuoteImage,
        title: 'Request a Quote',
        detail: 'PICKUP & DELIVERY DETAILS',
        tag: 'KRUSHNA ROADLINES',
        alt: 'Krushna Roadlines transport quote form for pickup and delivery locations',
      },
      {
        image: roadlinesHeroImage,
        title: 'Krushna Roadlines Home',
        detail: 'DELIVERING EXCELLENCE',
        tag: 'KRUSHNA ROADLINES',
        alt: 'Krushna Roadlines home page hero with a logistics message and quote button',
      },
      {
        image: roadlinesAboutImage,
        title: 'About Krushna Roadlines',
        detail: 'SAFETY & ON-TIME PERFORMANCE',
        tag: 'KRUSHNA ROADLINES',
        alt: 'Krushna Roadlines company overview with truck photography',
      },
      {
        image: roadlinesPartnersImage,
        title: 'Industry Partners',
        detail: 'TRUSTED LOGISTICS NETWORK',
        tag: 'KRUSHNA ROADLINES',
        alt: 'Krushna Roadlines industry partners and logistics solutions section',
      },
      {
        image: roadlinesMetricsImage,
        title: 'Fleet Performance',
        detail: 'SHIPMENTS · DELIVERY · TRUST',
        tag: 'KRUSHNA ROADLINES',
        alt: 'Krushna Roadlines performance metrics and certifications',
      },
    ],
    index: '06',
  },
]

export function findProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
