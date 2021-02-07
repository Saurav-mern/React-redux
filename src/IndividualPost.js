import React, { useState } from 'react'
import { connect } from 'react-redux'
import EditPost from './EditPost'
import { deletePost, editPost } from './actions'
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Img from './sweden.png'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 260,
  },
});
// material ui


function IndividualPost(props) {
    const [viewForm, setViewForm] = useState(false)
    const id = props.id
    const handleForm = () => {
        setViewForm(!viewForm)
    }

    // material ui
    const classes = useStyles();
    // material ui


    return (
        // <div>
        //     <h3>{props.title}</h3>
        //     <p>{props.body}</p>
        //     <button onClick={() => props.deletePost(id)}>Delete</button>
        //     <button onClick={handleForm}>Edit</button>
        //     {
        //         viewForm ?
        //         <EditPost id={id} handleForm={handleForm} /> :
        //         null
        //     }
        //     <br/>
            
        // </div>


    // material ui
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={Img}
          component="img"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="secondary" size="small" startIcon={<DeleteIcon />} onClick={() => props.deletePost(id)}>
          Delete
        </Button>
        <Button variant="contained" color="primary" size="small" startIcon={<EditIcon />} onClick={handleForm}>
          Edit
        </Button>
      </CardActions>
      {
       viewForm ?
       <EditPost id={id} handleForm={handleForm} /> :
       null
      }
    </Card>
    // material ui
    )
}

const mapDispatchToProps = () => {
    return {
        deletePost,
        editPost
    }
}
const mapStateToProps = state => {
    return {
        posts:state.mango.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(IndividualPost)
