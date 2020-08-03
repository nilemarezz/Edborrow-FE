import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import getAutoData from '../services/getAutoComplete'
const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const AutocompleteForm = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      var formData = new FormData();
      formData.append("command", "Category");
      const data = await getAutoData(props.body);

      let items = [];
      if (props.body === "Department") {
        data.data.forEach((item) => {
          items.push({ item: item.departmentName });
        });
      } else if (props.body === "Category") {
        data.data.forEach((item) => {
          items.push({ item: item.categoryName });
        });
      } else if (props.body === "OwnerItem") {
        data.data.forEach((item) => {
          items.push({ item: item.ownerName });
        });
      }

      if (active) {
        setOptions(items);
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
    <Grid item sm={4} xs={12}>
      <Autocomplete
        id="standard-basic"
        label="Name"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.item === value.item}
        getOptionLabel={(option) => option.item}
        options={options}
        loading={loading}
        onChange={(event, newValue) => {
          if (newValue) {
            props.setValue(newValue.item);
          } else {
            props.setValue("");
          }
        }}
        renderInput={(params) => (
          <TextField
            style={{ minWidth: 400 }}
            id="standard-basic"
            value={props.value}
            {...params}
            label={props.label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </Grid>
  );
};

export default AutocompleteForm;
