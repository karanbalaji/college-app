import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import karan from '../../resources/images/karan.jpeg';
import profilePic from '../../resources/images/user.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import Grow from '@material-ui/core/Grow';





const seeking1 = ['Graphic Design','Content','UI Design','Analytics','Graphic Designer','Coder','Graphic Designer','Code','Photography','Design','Ui Design','Content Writing','Developer','Project Manager','Code & Wordpress','Tech Specs','Graphic Design','Graphic Design']
const seeking2 = ['Content','Coding','Content PLanning','Business & Content','Content','Visual Design','Research Ideas','Content','Graphic Designer','Copyediting','Music','Ecommerce','Content Strategy','Decision Making','Copyediting','Data Visualizer','Research Ideas','Coding']
const seeking3 = ['Video','Tech Spec','Healthcare','Coding','UI','Copyediting','Journalism','Copyediting','Sports','Books','Healthcare','Copywriting','Visual Storyteller','Pop Culture','Content','UI & Graphic Design','Content & UI','Marketing Strategies']




class UserCard extends Component {

    state = {
        user:['Karan','Sid','Mj','Nerissa','Lucas','Kai','Mara','Krystal','Sabrina','Julia','Sonia','Shivang','Natalia','Jermaine','Beb','Lexx','Paulina','Maysa'],
        skill:['Business','Graphic Design','Graphics Design','Graphic Design','Strategy','Media & Psychology','Media Designer','Marketing','Media','Marketing','Graphic Designer','Graphic Designer','Graphic Designer','Graphic Design','Graphic Design','Copywriting','Journalism','Copywriting'],
        img: {karan}
        
    }
    

    userCards = () => (
        this.state.user.map((user,i) => (
            <Grow in={true} timeout={1000}>
            <Card style={{width:300, height:400, display: 'inline-block', margin:10,textAlign:'left',}}>
      <CardActionArea style={{backgroundColor:'#'}}>
        <CardMedia
          component="img"

          height="140"
          image = {profilePic}
          title="Profile Picture"
          style={{padding:10}}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.state.user[i]}
          </Typography>
          <Typography component="p">
           <div style={{fontSize:25,display:'inline-block',borderBottom:'2px solid #d4df38',paddingBottom:5}}> {this.state.skill[i]}</div>
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
      <Typography gutterBottom variant="headline" component="h2">Requirement:</Typography>
      <Typography>
        <ul style={{fontSize:15}}>
        <li style={{color:'#d4df38'}}><span style={{color:'rgba(0, 0, 0, 0.87)'}} >{seeking1[i]}</span></li>
        <li style={{color:'#d4df38'}}><span style={{color:'rgba(0, 0, 0, 0.87)'}} >{seeking2[i]}</span></li>
        <li style={{color:'#d4df38'}}><span style={{color:'rgba(0, 0, 0, 0.87)'}} >{seeking3[i]}</span></li>

        </ul>
      </Typography>
      </CardContent>
    </Card>
    </Grow>
    




        ))
    )

    render() {
        return (
            <div style={{textAlign:'center',fontFamily:'Roboto'}}>
                <br></br>
                <h1>Senior Project's Human Resource</h1>
            {this.userCards()}
            </div>
        );
    }
}

export default UserCard        