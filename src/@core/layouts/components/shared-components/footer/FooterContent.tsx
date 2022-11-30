// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const FooterContent = () => {
  // ** Var
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`Copyright © ${new Date().getFullYear()},`}
        <Link target='_blank' href='https://www.boomgtech.com/'>
          BoomG Tech.
        </Link>
        {` All Rights Reserved. `}
      </Typography>

    </Box>
  )
}

export default FooterContent
