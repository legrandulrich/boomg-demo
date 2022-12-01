// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'BoomG Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'BoomG Education'
    },
    {
      title: 'Global School',
      icon: GoogleCirclesExtended,
      path: '/education/global-school'
    },
    {
      title: 'Parent Control',
      icon: GoogleCirclesExtended,
      path: '/education/parent-control'
    },
    {
      title: 'e-Learning',
      icon: GoogleCirclesExtended,
      path: '/education/e-learning'
    },
    {
      title: 'News',
      icon: GoogleCirclesExtended,
      path: '/education/news'
    },
    {
      title: 'Blockchain & DeFi',
      icon: GoogleCirclesExtended,
      path: '/education/blockchain-defi'
    },
    {
      title: 'Coding Game',
      icon: GoogleCirclesExtended,
      path: '/education/coding-game'
    },
    {
      sectionTitle: 'BoomG Santé'
    },
    {
      title: 'Health Care',
      icon: GoogleCirclesExtended,
      path: '/sante/health-care'
    },
    {
      title: 'Hospital',
      icon: GoogleCirclesExtended,
      path: '/sante/hospital'
    },
    {
      title: 'e-Health',
      icon: GoogleCirclesExtended,
      path: '/sante/e-health'
    },
    {
      title: 'Traditional Medecine',
      icon: GoogleCirclesExtended,
      path: '/sante/traditional-medecine'
    },
    {
      title: 'Sport',
      icon: GoogleCirclesExtended,
      path: '/sante/sport'
    },
    {
      title: 'Tourism',
      icon: GoogleCirclesExtended,
      path: '/sante/tourism'
    },
    {
      sectionTitle: 'BoomG Commerce'
    },
    {
      title: 'e-Tontine',
      icon: GoogleCirclesExtended,
      path: '/commerce/e-tontine'
    },
    {
      title: 'Shop',
      icon: GoogleCirclesExtended,
      path: '/commerce/shop'
    },
    {
      title: 'Location & Reservation',
      icon: GoogleCirclesExtended,
      path: '/commerce/location-reservation'
    },
    {
      title: 'Delivery',
      icon: GoogleCirclesExtended,
      path: '/commerce/delivery'
    },
    {
      title: 'Travel agency',
      icon: GoogleCirclesExtended,
      path: '/commerce/travel-agency'
    },
    {
      title: 'Wedding planner',
      icon: GoogleCirclesExtended,
      path: '/commerce/wedding-planner'
    },
    {
      sectionTitle: 'BoomG Business'
    },
    {
      title: 'Wallet',
      icon: GoogleCirclesExtended,
      path: '/business/'
    },
    {
      title: 'Consulting',
      icon: GoogleCirclesExtended,
      path: '/business/'
    },
    {
      title: 'Bill Pay',
      icon: GoogleCirclesExtended,
      path: '/business/'
    },
    {
      title: 'API',
      icon: GoogleCirclesExtended,
      path: '/business/'
    },
    {
      title: 'Smart Contract',
      icon: GoogleCirclesExtended,
      path: '/business/'
    },
    {
      title: 'Price tracking',
      icon: GoogleCirclesExtended,
      path: '/business/'
    },

  ]
}

export default navigation
