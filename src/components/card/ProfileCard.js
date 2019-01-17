// import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography'

// class ProfileCard extends Component {
//     state = {
//         students: [
//             {
//                 name:'karan',
//                 skills:'design'
//                 url : req
//             },
//             {
//                 name:'Mj',
//                 skills:'design'
//             },
//             {
//                 name:'Sid',
//                 skills:'Video'
//             },
//         ]
//     }
//     userCards = () => (
//         this.state.user.map((user,i) => (
//             <Card style={{width:300, height:400, display: 'inline-block', margin:10,textAlign:'left'}}>
//       <CardActionArea>
//         <CardMedia
//           component="img"

//           height="140"
          
//           title="Profile Picture"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="headline" component="h2">
//             {this.state.students.name[i]}
//           </Typography>
//           <Typography component="p">
//             Hi i am very skilled {this.state.students.skills[i]}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardContent>
//       <Typography gutterBottom variant="headline" component="h2">Skills Required</Typography>
//       <Typography>
//         {/* <ul>
//         <li>{seeking1[i]}</li>
//         <li>{seeking2[i]}</li>
//         <li>{seeking3[i]}</li>
//         </ul> */}
//       </Typography>
//       </CardContent>
//     </Card>
//         ))
//     )
//     render() {
//         return (
//             <div>
            
//             </div>
//         );
//     }
// }

// export default ProfileCard;