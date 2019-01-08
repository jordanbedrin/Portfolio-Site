import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){

    if (this.state.activeTab === 0){
      return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png ) center / cover'}} >React Project</CardTitle>
        </Card>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3){
      return(
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render(){
    return(
      <div className = "category-tabs">
        <Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab> React </Tab>
          <Tab> React </Tab>
          <Tab> React </Tab>
          <Tab> React </Tab>
        </Tabs>

          <section className="projects-grid">
            <Grid className="projects-grid">
              <Cell col={12}>
                <div className="content">
                {this.toggleCategories()}
                </div>
              </Cell>
            </Grid>
          </section>
      </div>
    )
  }
}

export default Projects;
