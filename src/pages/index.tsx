// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Education from 'src/views/dashboard/Education'
import Health from 'src/views/dashboard/Health'
import Commerce from 'src/views/dashboard/Commerce'
import Business from 'src/views/dashboard/Business'



const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <Education />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Health />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Commerce />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Business />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
