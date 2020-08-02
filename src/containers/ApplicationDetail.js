import React from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import ApplicationDetail from '../components/ApplicationList/ApplicationDetail'
import { GetApplicationDetail } from '../thunk/Application/ApplicationDetail'
class ApplicationDeatail extends React.Component {
  componentDidMount() {
    this.props.GetApplicationDetail(this.props.match.params.id)
  }

  render() {
    const id = this.props.match.params.id
    return (
      <>
        <Title title={`Application No. ${id}`} />
        <div style={{ padding: 20 }}>
          <ApplicationDetail detail={this.props.applicaiton} />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { applicaiton: state.ApplicationList.applicationDetail }
}

export default connect(mapStateToProps, { GetApplicationDetail })(ApplicationDeatail)