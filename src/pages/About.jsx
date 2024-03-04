import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const About = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4} marginBottom={6}>
        <Grid item xs={12} md={6}>
          <img src="https://via.placeholder.com/400" alt="Company" style={{ width: '100%', borderRadius: '8px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis nisi ut mi varius, nec volutpat arcu suscipit. Phasellus
            ac mi sed sapien gravida sollicitudin. In hac habitasse platea
            dictumst.
          </Typography>
          <Typography variant="h4" gutterBottom style={{ marginTop: '24px' }}>
            Our Mission
          </Typography>
          <Typography variant="body1">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Fusce nec arcu nec purus ultricies
            interdum. Nullam id ante euismod, blandit erat vel, molestie mi.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
