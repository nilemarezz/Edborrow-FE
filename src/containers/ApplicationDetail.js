import React from 'react'
import Title from '../components/NewTitle'
import { connect } from 'react-redux'
import ApplicationDetail from '../components/ApplicationList/ApplicationDetail'
import { GetApplicationDetail } from '../thunk/Application/ApplicationDetail'
import WithLoading from '../utilities/WithLoading'
class ApplicationDeatail extends React.Component {
  state = { loading: false }
  componentDidMount() {
    this.setState({ loading: true })
    this.props.GetApplicationDetail(this.props.match.params.id)
    setTimeout(
      () => {
        this.setState({ loading: false })
      }, 1500)
  }

  render() {
    const id = this.props.match.params.id
    return (
      <div >
        <WithLoading loading={this.state.loading} />
        <Title title={`Application No. ${id}`} />
        <div style={{ padding: 20 }}>
          <ApplicationDetail detail={this.props.applicaiton} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { applicaiton: state.ApplicationList.applicationDetail }
}

export default connect(mapStateToProps, { GetApplicationDetail })(ApplicationDeatail)