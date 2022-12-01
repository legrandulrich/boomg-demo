// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
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
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
