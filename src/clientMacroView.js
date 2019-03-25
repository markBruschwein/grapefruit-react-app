import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";
import moment from 'moment'
import axios from 'axios'
let host;
if (process.env.NODE_ENV === 'production') {
    host = 'https://grapefruit-server.herokuapp.com/'
} else { host = 'http://localhost:3000' }

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto",
        opacity: 0.9
    },
    table: {
        minWidth: 700
    }

});

class clientMacroView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullMacros: []
        }

    }

    componentDidMount() {

        axios.get(`${host}/macros`,
            {
                headers: {
                    Authorization: localStorage.getItem('grapefruit-jwt')
                }
            }).then((response) => {
                const fullMacros = response.data;
                this.setState({ fullMacros })


            })

    }

    render() {
        const { classes } = this.props;

        return (
            <div className="clientMacroView">

                <Table className={classes.table}>

                    {this.state.fullMacros.map(macro => (
                        <Paper>

                            <h3>Week : {moment(macro.date).format('LL')}</h3>

                            <TableHead>



                                <TableCell align="right">Protein</TableCell>
                                <TableCell align="right">Carbs</TableCell>
                                <TableCell align="right">Fats</TableCell>
                                <TableCell align="right">Total Calories</TableCell>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="right">
                                        {macro.protein}
                                    </TableCell>

                                    <TableCell align="right">
                                        {macro.carbohydrates}
                                    </TableCell>

                                    <TableCell align="right">
                                        {macro.fats}
                                    </TableCell>

                                    <TableCell align="right">
                                        {macro.total_daily_calories}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Paper>
                    ))}



                </Table>
            </div>
        );
    }
}

clientMacroView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(clientMacroView));
