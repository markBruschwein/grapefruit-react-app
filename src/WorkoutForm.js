import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from "react-router-dom";

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

class WorkoutForm extends React.Component {
  constructor(props) {
    super(props)
  }

  // deleteRow = (item) => {
  //   console.log("Helllls yes")
  //   console.log(item)
      
  // }
  // deleteRow = i => {
  //   this.setState(state => ({
  //     data: state.data.filter((row, j) => j !== i)
  //   }));
  // };
  

  render() {
    const { classes } = this.props;

    return (
      <div className="workoutform">
        <Paper style={{ opacity: 0.95 }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Muscle Group</TableCell>
                <TableCell align="right">Exercise Name</TableCell>
                <TableCell align="right">Sets</TableCell>
                <TableCell align="right">Reps</TableCell>
                <TableCell align="right">RPE</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.props.workouts.map((workout,i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {workout.date}
                  </TableCell>
                  <TableCell align="right">{workout.muscleGroup}</TableCell>
                  <TableCell align="right">{workout.exerciseName}</TableCell>
                  <TableCell align="right">{workout.sets}</TableCell>
                  <TableCell align="right">{workout.reps}</TableCell>
                  <TableCell align="right">{workout.rpe}</TableCell>
                  <IconButton onClick={()=>this.props.deleteWorkout(i)} className={classes.button} aria-label="Delete">
                  <DeleteIcon />
                 </IconButton>
                </TableRow>
              ))}
            </TableBody>
          </Table>
         
        </Paper>
     
      </div>
    );
  }
}

WorkoutForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(WorkoutForm));
