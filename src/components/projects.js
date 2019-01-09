import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){

    if (this.state.activeTab === 0){
      return(

        <div className="projects-grid">
          {/* Project 1!!! */ }
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png ) center / cover'}} >Food Finder</CardTitle>
              <CardText>
                Food finder website created with React. Full list of technologies used includes HTML, CSS, Javascript, and the Google Maps API.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <a href = "https://youtu.be/7vXjx0bFy-w" target="_blank">
                  <Button colored>Video Demo</Button>
                </a>

              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>


            {/* Project 2!!! */ }
            {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png ) center / cover'}} >React Project</CardTitle>
                <CardText>
                  this is text this is text this is text this is text this is text this is text
                </CardText>
                <CardActions border>
                  <Button colored>Github</Button>
                  <Button colored>Live Demo</Button>
                  <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card> */}
        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
          {/* Project 1!!! */ }
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png ) center / cover'}} >Trivia!</CardTitle>
              <CardText>
                Simple trivia game created with Javascript.
              </CardText>
              <CardActions border>
              <a href="https://github.com/jordanbedrin/Javascript-Trivia-Game" target="_blank">
                <Button colored>Github</Button>
              </a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

        </div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div className="projects-grid">
          {/* Project 1!!! */ }
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://rebornix.gallerycdn.vsassets.io/extensions/rebornix/ruby/0.20.0/1533645704022/Microsoft.VisualStudio.Services.Icons.Default ) center / cover'}} >Voter Simulation</CardTitle>
              <CardText>
                Voter simulation created with Ruby to practice concepts of object oriented programming.
              </CardText>
              <CardActions border>
              <a href="https://github.com/jordanbedrin/Voter-Sim-Wyncode-Ruby-Project-" target="_blank">
                <Button colored>Github</Button>
              </a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

        </div>
      )
    } else if(this.state.activeTab === 3){
      return(
        <div className="projects-grid">
          {/* Project 1!!! */ }
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://sdtimes.com/wp-content/uploads/2018/03/cpppp-490x490.png ) center / cover'}} >School Projects</CardTitle>
              <CardText>
                While attending Florida State University, I have had to create many
                C++ projects for my classes. Unfortunately, providing the code for these
                projects would violate university policy. Due to this barrier,
                I  am providing a list of concepts covered in these projects.
                C++ basics (loops, functions, arrays, pointers, etc.), objects, classes,
                constructors, compilation/debugging, friend functions, operator overloading,
                aggregation/composition, dynamic memory allocation (dynamic arrays, arrow/dot operators,
                destructors, etc.), copy constructor, assignment operator, inheritance, polymorphism,
                virtual functions, abstract classes, multiple inheritance.
              </CardText>
              <CardActions border>
              <a href="https://github.com/jordanbedrin/Javascript-Trivia-Game" target="_blank">
                <Button colored>Github</Button>
              </a>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

        </div>
      )
    }

  }



  render(){
    return(
      <div className = "category-tabs">
        <Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab> React </Tab>
          <Tab> Javascript </Tab>
          <Tab> Ruby </Tab>
          <Tab> C++ </Tab>
        </Tabs>


            <Grid>
              <Cell col={12}>
                <div className="content">
                {this.toggleCategories()}
                </div>
              </Cell>
            </Grid>

      </div>
    )
  }
}

export default Projects;
