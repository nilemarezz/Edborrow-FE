import React from 'react'
import Title from '../components/Title'
import ApplicationTable from '../components/ApplicationList/AplicationTable'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { GetApplicationList } from '../thunk/Application/ApplicationList'
import { route } from '../systemdata/route'
import WithLoading from '../utilities/WithLoading'
class ApplicationList extends React.Component {
  redirectToDetailPage = (value) => {
    this.props.history.push(`${route.detail.applicationDetail}/${value}`)
  }
  componentDidMount() {
    this.props.GetApplicationList()
  }

  render() {
    return (
      <div>
        <WithLoading loading={this.props.applicationList.loading} />
        <Title title="Application List" />
        <ApplicationTable applicationList={this.props.applicationList.applicationList} redirectToDetailPage={this.redirectToDetailPage} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { applicationList: state.ApplicationList };
};

export default connect(mapStateToProps, { GetApplicationList })(withRouter(ApplicationList))