import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import GetAdvisorList from '../../services/UserService/GetAdvisorList'
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const res = await GetAdvisorList()
      await sleep(1e3);

      const advisorData = res.data
      if (active) {
        setOptions(advisorData);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.Name === value.Name}
      getOptionLabel={(option) => option.Name}
      options={options}
      loading={loading}
      onChange={(event, newValue) => {
        if (newValue) {
          props.setAdvisor(newValue.email);
        } else {
          props.setAdvisor("");
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Select your advisor"
          label="Advisor"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          helperText="* Choose Advisor in Project Proposal (If have)"
          value={props.value}
          required
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}