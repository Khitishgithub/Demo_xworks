import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Insight = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return (
          <Box p={3}>
            
            <Typography variant="body1">
              Content related to Skill Acquisition goes here.
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box p={3}>
            
            <Typography variant="body1">
              Content related to Skills Gap Analysis goes here.
            </Typography>
          </Box>
        );
      case 2:
        return (
          <Box p={3}>
           
            <Typography variant="body1">
              Content related to Competency Badges goes here.
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box height={100} />
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Skill Acquisition" />
          <Tab label="Skills Gap Analysis" />
          <Tab label="Competency Badges" />
        </Tabs>
      </Box>
      <Box>{renderContent()}</Box>
    </>
  );
}

export default Insight;
