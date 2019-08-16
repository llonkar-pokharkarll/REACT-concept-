import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    border: '1px solid black',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class AddNote extends React.Component {
  constructor() {
    super()
    this.state = {
      editMessage: true,
    }
  }

  toggleEditMsg = () => {
    const editMessageValue = !this.state.editMessage;
    this.setState(
      {
        editMessage: editMessageValue
      })
  };

  render() {

    const { editMessage } = this.state;
    const { classes, post, key } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <>
        <Card className={classes.card} key={key}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              <Button size="small" onClick={this.toggleEditMsg}>Edit Note </Button>
            </Typography>
            <Typography variant="h6" component="h2">
              {bull}{
                (!editMessage) ?
                  <input type="text" value={post} />
                  :
                  post}
            </Typography>

          </CardContent>
          <CardActions>
            <Button size="small">Delete Note</Button>
            <Button size="small">Add Note</Button>
          </CardActions>
        </Card>

        < />
        );
      }
    }
    
export default withStyles(useStyles)(AddNote);