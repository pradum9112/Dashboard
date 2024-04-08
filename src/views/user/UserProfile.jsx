// import { useLocation } from "react-router-dom";
// import React from "react";
// import {  Grid, Card, CardContent, Typography, Box, Divider} from "@mui/material";
// import Header from "../../components/header";
// import { useTheme } from "../../ThemeProvider";
// import defaultImage from "../../assets/images/noimage.jpg";
// import PersonIcon from '@mui/icons-material/Person';
// import HomeIcon from '@mui/icons-material/Home';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import BadgeIcon from '@mui/icons-material/Badge';
// import BloodtypeIcon from '@mui/icons-material/Bloodtype';
// import BlockIcon from '@mui/icons-material/Block';
// import VpnKeyIcon from '@mui/icons-material/VpnKey';

// const UserProfile = () => {
//   const theme = useTheme();
//   const { palette } = theme.theme;
//   const location = useLocation();
//   const { userData } = location.state;

//   return (
//     <Box m="2rem"   p={2} style={{ width: "100%" }} sx={{ overflowY: "auto"}}>
//       <Header
//         title="USER DETAIL"
//         breadcrumbs={[
//           { text: "users", link: "/users" },
//           {
//             text: `user: ${userData.firstName}`,
//             link: "/users/userprofile",
//           },
//         ]}
//       />
//       <Box
//         sx={{
//           flexGrow: 1,
//           padding: "15px",
//           backgroundColor: "white",
//           borderWidth: "2px",
//           borderRadius: "5px",
//           borderStyle: "solid",
//           borderColor: palette.secondary.main,
//           boxShadow:
//             "inset 0 1px 1px rgba(0,0,0,0.075), inset 0 0 8px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Grid container spacing={2} >
//           <Grid item xs={12} md={6} lg={6} sm={6}>
//            <Box  sx={{display: "flex",justifyContent: "center"}}>
//            <Box>
//         <Box
//           sx={{
//             textAlign: "center",
//             border: 1,
//             borderColor: "grey.500",
//             borderRadius: 1,
//             padding: 1,
//             width: "100%",
//             maxWidth: 250,
//             height: 250,
//             maxHeight: 250,
//           }}
//         >
//               <img
//                 alt={`${userData.firstName} ${userData.lastName}`}
//                 src={defaultImage}
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: "100%",
//                   display: "block",
//                   margin: "auto",
//                 }}
//               />
//             </Box>
//             {/* Signature Box */}
//             <Box
//               sx={{
//                 textAlign: "center",
//                 border: 1,
//                 borderColor: "grey.500",
//                 borderRadius: 1,
//                 marginTop: 2,
//                 padding: 1,
//                 width: "100%",
//                 maxWidth: 250,
//                 height: 80,
//                 maxHeight: 80,
//               }}
//             >
//               <img
//                 alt={`${userData.firstName} ${userData.lastName}`}
//                 src={userData.signature}
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: "100%",
//                   display: "block",
//                   margin: "auto",
//                 }}
//               />
//             </Box>
//           </Box>

//            </Box>
//           </Grid>
//           {/* <Grid item xs={12} lg={6} md={6} sm={6}>
//             <Typography variant="h6" mt={2} textAlign="center" style={{ fontWeight:"bold"}}>
//               {`${userData.firstName} ${userData.lastName}`}
//             </Typography>
//             <Typography variant="subtitle1" textAlign="center"  style={userData.usertype==="admin"?{color:"red"}:{color:"green"}}>
//               {userData.user_type}
//             </Typography>
//             <Typography variant="body1" textAlign="center">
//               {userData.address}
//             </Typography>
//             <Typography variant="body1" textAlign="center">
//               Phone: {userData.phoneNumber}
//             </Typography>
//             <Typography variant="body1" textAlign="center">
//               Email: {userData.email}
//             </Typography>
//             <Typography variant="body1" textAlign="center">
//               Gov ID Type: {userData.gov_id_type}
//             </Typography>
//             <Typography variant="body1" textAlign="center">
//               Gov ID No: {userData.gov_id_no}
//             </Typography>
//             <Typography variant="body1" textAlign="center">
//               Blood Group: {userData.bloodGroup}
//             </Typography>
//             <Typography variant="body1" textAlign="center">
//               Blacklisted: {userData.blacklisted ? "Yes" : "No"}
//             </Typography>
//             <Typography variant="body1" textAlign="center">
//               Pass Created: {userData.isPassCreated ? "Yes" : "No"}
//             </Typography>
//           </Grid> */}
//            <Grid item xs={12} lg={6} md={6} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
//       <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
//         <CardContent>
//           <Typography variant="h5" component="div" textAlign="center" sx={{ fontWeight: 'bold', mb: 2 }}>
//             {`${userData.firstName} ${userData.lastName}`}
//           </Typography>
//           <Divider variant="middle" sx={{ mb: 2 }} />
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//             <PersonIcon color="primary" />
//             <Typography variant="subtitle1" sx={{ ml: 1 }}>
//               {userData.user_type}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//             <HomeIcon color="secondary" />
//             <Typography variant="body1" sx={{ ml: 1 }}>
//               {userData.address}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//             <PhoneIcon color="action" />
//             <Typography variant="body1" sx={{ ml: 1 }}>
//               Phone: {userData.phoneNumber}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//             <EmailIcon color="error" />
//             <Typography variant="body1" sx={{ ml: 1 }}>
//               Email: {userData.email}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//             <BadgeIcon color="info" />
//             <Typography variant="body1" sx={{ ml: 1 }}>
//               Gov ID: {userData.gov_id_no}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//             <BloodtypeIcon color="warning" />
//             <Typography variant="body1" sx={{ ml: 1 }}>
//               Blood Group: {userData.bloodGroup}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//             <BlockIcon color={userData.blacklisted ? 'error' : 'success'} />
//             <Typography variant="body1" sx={{ ml: 1 }}>
//               Blacklisted: {userData.blacklisted ? "Yes" : "No"}
//             </Typography>
//           </Box>
//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
//             <VpnKeyIcon color="primary" />
//             <Typography variant="body1" sx={{ ml: 1 }}>
//               Pass Created: {userData.isPassCreated ? "Yes" : "No"}
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//     </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default UserProfile;



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
