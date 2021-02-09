import React, { useState } from 'react'
import { connect } from 'react-redux'
import EditPost from './EditPost'
import { deletePost, editPost } from './actions'
//Modal
import Modal from 'react-modal'  
//Modal
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
import SaveIcon from '@material-ui/icons/Save';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 260,
  },

});

// material ui
// modal-styles
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
// modal-styles

function IndividualPost(props) {
    const [viewForm, setViewForm] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [form, setForm] = useState({ title: '', body: '' })

    const handleSubmit = (e) => {
        // e.preventDefault()
        props.editPost(props.id, form.title, form.body)
        setModalIsOpen(false)
    }
    const id = props.id
    const handleForm = () => {
        setViewForm(!viewForm)
    }

    // material ui
    const classes = useStyles();
    // material ui


    return (
    <div> 


    {/* material ui */}
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          src={Img}
          component="img"
          title="Card Image"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button style={{margin: '0 auto'}} variant="outlined" color="secondary" size="small" startIcon={<DeleteIcon />} onClick={() => props.deletePost(id)}>
          Delete
        </Button>
        {/* <Button color="primary" size="small" startIcon={<EditIcon />} onClick={handleForm}>
          Edit
        </Button> */}
        <Button style={{margin: '0 auto'}} variant="outlined" color="primary" size="small" startIcon={<EditIcon />} onClick={() => setModalIsOpen(true)}>
          Edit
        </Button>
      </CardActions>
      {
       viewForm ?
       <EditPost id={id} handleForm={handleForm} /> :
       null
      }
    </Card>
    {/* material ui */}

    {/* //Modal */}
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
            <form onSubmit={handleSubmit} className="form">
                <div className="title">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={form.title}
                    onChange={e => setForm({...form, title: e.target.value})}
                    />
                </div>
                <div className="title">
                    <label htmlFor="body">Body:</label>
                    <textarea id="body" name="body" value={form.body}
                    onChange={e => setForm({...form, body: e.target.value})}
                    />
                </div>
                {/* <button>Update</button> */}
                <Button className='btn' variant="contained" color="primary" size="small" startIcon={<SaveIcon />} onClick={handleSubmit}>Save</Button>
            </form>
    </Modal>


    {/* //Modal */}

    </div> 

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
