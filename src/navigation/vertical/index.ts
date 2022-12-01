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
      sectionTitle: 'BoomG Commerce'
    },
    {
      sectionTitle: 'BoomG Business'
    },

  ]
}

export default navigation
