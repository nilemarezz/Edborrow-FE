import React from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import { GetApplicationList } from '../thunk/Application/ApplicationList.admin'
class ApplicationDeatail extends React.Component {
  render() {
    return (
      <Title title={`Application No. ${'10001'}`} />
    )
  }
}
const mapStateToProps = (state) => {
  return { applicationList: state.ADMIN_ApplicationList };
};


export default connect(mapStateToProps, { GetApplicationList })(ApplicationDeatail)