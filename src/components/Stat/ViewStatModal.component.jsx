

export default class ViewTeamModal extends React.Component {
    constructor(props) {
        super(props);
        state = {
            stats = []
        }
        this.TID = JSON.parse(localStorage.getItem('moreInfoTeam'));
        this.GID = JSON.parse(localStorage.getItem('GID'));
    }

    componentDidMount() {
        const statTeamReq = queryBuilder('/api/stat/viewTeamStatByGame', { TID: this.TID, GID: this.GID }, 'GET');
        fetch(statTeamReq, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json())
        .then((result) => {
            console.log(result.statsteam);
            if(result.success==true){
                this.setState({
                    stats: result.statsteam,
                })
            }
        })
    }


    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide} centered>
                <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <StatGameTable statmap={this.state.stats} />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }

}