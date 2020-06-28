import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Card, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AutoCompleteForm from "../../utilities/AutocompleteForm";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { connect } from "react-redux";
import { searchItem } from "../../thunk/Item/FilterItem";
const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  ${(props) =>
    props.button &&
    `
    justify-content: center;
    margin-top: 10px;
    padding:20px;
  `}
`;
class AdvanceSearch extends React.Component {
  state = {
    name: "",
    category: "",
    department: "",
    avalibility: false,
  };

  onSubmit = (e) =>{
    e.preventDefault();
    const data = {
        name : this.state.name,
        category : this.state.category,
        department : this.state.department,
        avalibility : this.state.avalibility
    }
    this.props.searchItem(data)
  }
  render() {
    const { name, category, department, avalibility } = this.state;
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Advance Search
          </Typography>
          <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => this.onSubmit(e)}
            >
          <ContentContainer>
          
            <TextField
              id="standard-basic"
              label="Name"
              style={{ width: 430 }}
              onChange={(e) => this.setState({ name: e.target.value })}
              value={name}
            />
            <AutoCompleteForm
              body="Category"
              res="categoryName"
              label="Category"
              setValue={(value) => this.setState({ category: value })}
              value={category}
            />
          </ContentContainer>
          <ContentContainer>
            <AutoCompleteForm
              body="Department"
              res="departmentName"
              label="Department"
              setValue={(value) => this.setState({ department: value })}
              value={department}
            />
            <AutoCompleteForm
              body="OwnerItem"
              res="ownerName"
              label="Item Owner"
              setValue={(value) => this.setState({ value })}
              value={category}
            />
          </ContentContainer>
          <ContentContainer button={true}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={avalibility}
                  onChange={(e) =>
                    this.setState({ avalibility: e.target.checked })
                  }
                  name="checkedA"
                />
              }
              label="Avaliable"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
            >
              Search
            </Button>

            <Button
              variant="contained"
              color="secondary"
              size="medium"
              startIcon={<RotateLeftIcon />}
              //   onClick={() => resetFormSearch()}
            >
              Reset
            </Button>
          </ContentContainer>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default connect(null, { searchItem })(AdvanceSearch);
