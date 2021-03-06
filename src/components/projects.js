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
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '28%'}}>
            <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png ) center / cover'}} >Food Finder</CardTitle>
              <CardText >
                Food finder website created with React. This project was made to help students at my coding bootcamp find local places to eat for lunch. It utilizes the Google Maps API for interactivity and directions.<br /><br />HTML <br /> CSS<br /> Javascript <br /> ReactJS <br /> Github <br /> Google Maps API <br />
              </CardText>
              <CardActions border>
                <a href ="https://github.com/jordanbedrin/Food-Finder-Project" target="_blank">
                    <Button colored>Github</Button>
                </a>

                <a href = "https://youtu.be/7vXjx0bFy-w" target="_blank">
                  <Button colored>Video Demo</Button>
                </a>

              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '30%'}}>
              <CardTitle style={{color: 'black', height: '300px', background: 'url(http://globalpetfoodsnb.ca/gpfoods/wp-content/uploads/2016/10/roadtrip-feat.jpg ) center / cover'}} >Dog Party</CardTitle>
                <CardText >
                  React website that populates the page with random pictures of dogs at an interval chosen by the user. This project was created to gain practice with APIs, state, and props.  <br /><br />HTML <br /> CSS<br /> Javascript <br /> ReactJS <br /> Github <br /> Dog CEO API <br />
                </CardText>
                <CardActions border>
                  <a href ="https://github.com/jordanbedrin/Dog-Party" target="_blank">
                      <Button colored>Github</Button>
                  </a>

                  <a href = "https://dogparty.herokuapp.com/" target="_blank">
                    <Button colored>Link to website</Button>
                  </a>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '28%'}}>
              <CardTitle style={{color: 'yellow', height: '300px', background: 'url(https://digileaders.com/wp-content/uploads/2018/07/ai-blur-codes-577585-e1531921747927.jpg) center / cover'}} >Session Timeout</CardTitle>
                <CardText >
                During my internship in summer 2019, I used React and Redux to develop a session timeout feature to enhance security for idle users. Additionally, I used Enzyme and Sinon to create tests for this feature.  <br /> <br /> Javascript <br /> ReactJS <br /> Redux <br /> Gitlab <br /> Enzyme <br /> Sinon <br /> HTML <br /> CSS<br />
                </CardText>
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
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '50%'}}>
            <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://cdn-images-1.medium.com/max/2000/1*6ahbWjp_g9hqhaTDSJOL1Q.png ) center / cover'}} >Trivia!</CardTitle>
              <CardText>
                Simple trivia game created with Javascript. This project was made to practice user input, functions, loops, and boolean logic.
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
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '50%'}}>
            <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://rebornix.gallerycdn.vsassets.io/extensions/rebornix/ruby/0.20.0/1533645704022/Microsoft.VisualStudio.Services.Icons.Default ) center / cover'}} >Voter Simulation</CardTitle>
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
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '50%'}}>
            <CardTitle style={{color: 'black', height: '300px', background: 'url(https://sdtimes.com/wp-content/uploads/2018/03/cpppp-490x490.png ) center / cover'}} >School Projects</CardTitle>
              <CardText>

                While attending Florida State University, I have had to create many
                C++ projects for my classes. Unfortunately, uploading the code for these
                projects would violate university policy. Due to this barrier,
                I  am providing a list of concepts covered in these projects. I can provide code upon request.  <br /> <br />
                - C++ basics (loops, functions, arrays, pointers, etc.)<br />
                - Objects <br />
                - Classes <br />
                - Constructors <br />
                - Compilation/Debugging <br />
                - Friend functions <br />
                - Operator overloading <br />
                - Aggregation/Composition <br />
                - Dynamic Memory Allocation (dynamic arrays, arrow/dot operators,
                destructors, etc.)<br />
                - Copy constructor <br />
                - Assignment operator <br />
                - Inheritance, Multiple inheritance <br />
                - Polymorphism <br />
                - Virtual functions <br />
                - Abstract classes

              </CardText>

              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

        </div>
      )
    } else if(this.state.activeTab === 4){
      return(
        <div className="projects-grid">
          {/* Project 1!!! */ }
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '50%'}}>
            <CardTitle style={{color: 'black', height: '300px', background: 'url(https://www.muralswallpaper.com/app/uploads/retro-filter-beach-plain-820x532.jpg) center / cover'}} >Database Design Project</CardTitle>
              <CardText>
              This was a project I completed for my "Information for Operating Control and Data Management" course at FSU. I was given a two page description about a scuba diving company that needed a database designed with many, specific requirements. In order to complete the project, I did the following tasks.
              <br/>
              <br/> - Designed an entity relationship diagram (ERD) that met the requirements of the business
              <br/> - Ensured the ERD satisfied the third normal form requirements
              <br/> - Developed SQL scripts to create the entire database
              <br/> - Generated sample data to populate the database
              <br/> - Wrote SQL queries to answer business questions
              <br/> - Created a data dictionary to document about 100 attributes
         

              </CardText>

              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

        </div>
      )
    }

    else if(this.state.activeTab === 5){
      return(
        <div className="projects-grid">
          {/* Project 1!!! */ }
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', width: '50%'}}>
            <CardTitle style={{color: 'black', height: '375px', background: 'url(https://cdnl.tblsft.com/sites/default/files/pages/downright_beautiful.jpg) center / cover'}} >Tableau Project</CardTitle>
              <CardText>
              For my Business Intelligence course, I completed a Tableau group project. My group members and I analyzed a large data set containing information about millennials and baby boomers before and after the Great Recession. We experimented with Tableau’s data visualization tools and reported trends that we found. We created an interactive dashboard with graphs we made and presented our findings to the class.
         

              </CardText>

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
          <Tab> SQL </Tab>
          <Tab> Analytics </Tab>
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
