import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import Header from '../../components/header';
import { useTheme } from '../../ThemeProvider';
import defaultImage from '../../assets/images/noimage.jpg';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import BlockIcon from '@mui/icons-material/Block';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const UserProfile = () => {
  const theme = useTheme();
  const { palette } = theme.theme;
  const location = useLocation();
  const { userData } = location.state || {}; // Ensure userData exists

  return (
    <Box m="2rem" p={2} sx={{ width: '100%', overflowY: 'auto' }}>
      <Header
        title="USER DETAIL"
        breadcrumbs={[
          { text: 'users', link: '/users' },
          { text: `user: ${userData.firstName}`, link: '/users/userprofile' },
        ]}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '5px',
          border: `2px solid ${palette.secondary.main}`,
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
          p: 2,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
           <Card  sx={{ maxWidth: 595, boxShadow: 3 }} >
             <Box m={1.4}  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                alt={`${userData.firstName} ${userData.lastName}`}
                src={userData.image || defaultImage}
                style={{
                  width: 240,
                  height: 240,
                  border: '1px solid grey',
                  borderRadius: 5,
                  padding: 4,
                  objectFit: 'cover',
                  marginBottom: '1rem',
                }}
              />

               {/* Signature Box */}
              <img
                alt={`${userData.firstName} ${userData.lastName}`}
                src={userData.signature}
                style={{
                  width: 250,
                  height: 80,
                  objectFit: 'cover',
                  borderRadius: '5px',
                  border: `1px solid ${palette.grey[500]}`,
                }}
              />
            </Box>
           </Card>
          </Grid>
          <Grid  item xs={12} md={6}>
            <Card  sx={{ maxWidth: 610, boxShadow: 3}}>
             <Box>
               <CardContent >
                <Typography variant="h5" component="div" textAlign="center" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {`${userData.firstName} ${userData.lastName}`}
                </Typography>
                <Divider variant="middle" sx={{ mb: 2 }} />
                <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PersonIcon color="primary" />
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                      {userData.user_type}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <HomeIcon color="secondary" />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      {userData.address}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PhoneIcon color="action" />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      Phone: {userData.phoneNumber}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <EmailIcon color="error" />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      Email: {userData.email}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BadgeIcon color="info" />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      Gov ID: {userData.gov_id_no}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BloodtypeIcon color="warning" />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      Blood Group: {userData.bloodGroup}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BlockIcon color={userData.blacklisted ? 'error' : 'success'} />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      Blacklisted: {userData.blacklisted ? "Yes" : "No"}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <VpnKeyIcon color="primary" />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      Pass Created: {userData.isPassCreated ? "Yes" : "No"}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
             </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UserProfile;
