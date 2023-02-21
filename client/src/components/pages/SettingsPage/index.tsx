import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const SettingsPage = ({ isDarkMode, setIsDarkMode }: any) => (
  <div>
    Settings Page Place Holder
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            onChange={() => setIsDarkMode(!isDarkMode)}
            defaultChecked={isDarkMode}
            size="small"
          />
        }
        label={isDarkMode ? "Light mode" : "Dark mode"}
      />
    </FormGroup>
  </div>
);

export default SettingsPage;
