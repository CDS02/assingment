import React, { Component } from "react";
import data from "./data.json";

class SearchFilter extends Component {
  state = {
    itemsToDisplay: [],
    itemsToUse: [],
  };
  render() {
    return (

      <div className="big">
      

        <div className="containerone">
             <h1 className="neon" style={{color: "black" ,fontSize: "50px"}}>Catagory</h1> 


            <div  className="restfilter"> 
            <select className="edi"  id="restfilter" onChange={this.optionSelected}>
              <option value="any">Choose Any</option>
              <option value="Foot">Footwear</option>
              <option value="Foot">Clothes</option>
              <option value="Foot">Makeup</option>
              <option value="Foot">Gaming</option>
            </select>
          </div>

            <div>
            <select id="sortfilter" className="edi" onChange={this.sortBy}>
              <option value="ranking">Id</option>
              <option value="none" selected disabled hidden> Filter Items</option>
              <option value="asc">Price: Low to High</option>
              <option value="des">Price: High to Low</option>
            </select>
          </div>

        </div>
        




        <div className="restcontainer">
          {this.state.itemsToDisplay.map(rest => {
            
            return (
              <div className="rest">
                <div className="restinfo">
                  &nbsp;
                  <span className="restcity">{rest["SubCatagoryName"]}</span>
                  <br />
                  <span className="restname">{rest["Name"]}</span>
                  <div className="restcata">
                   {rest["Catagory"]}
                  </div>
                </div>
                <div className="sepline"></div>
                <div className="reststats">
                  <div>
                    &nbsp;
                    {rest["Id"]}
                  </div>
                  <div>
                    &nbsp;
                    <b>{rest["Price"]}Rs</b>
                  </div>
                </div>
              </div>
            );
          })}
        </div>






    </div>
    );
  }

  

  optionSelected = () => {

      var e = document.getElementById("restfilter");
    var selected = e.options[e.selectedIndex].text;   

    if (selected === "Choose Any")
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else {
      let itemsToDisplay = [];
      itemsToDisplay = this.state.itemsToUse.filter(item =>
        item["Catagory"].toLowerCase().includes(selected.toLowerCase())
      );
      this.setState({ itemsToDisplay });
    }
  };

  sortBy = () => {
    var e = document.getElementById("sortfilter");
    var selected = e.options[e.selectedIndex].value;

    if (selected === "ranking")
      this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
    else if (selected === "asc") {
      let itemsToDisplay = [...this.state.itemsToDisplay];
      itemsToDisplay.sort(function(a, b) {
        return a["Price"] - b["Price"];
      });
      this.setState({ itemsToDisplay });
    } else {
      let itemsToDisplay = [...this.state.itemsToDisplay];
      itemsToDisplay.sort(function(a, b) {
        return b["Price"] - a["Price"];
      });
      this.setState({ itemsToDisplay });
    }
  };

  componentDidMount() {
    this.reRenderList();
  }

  reRenderList() {
    var cuisines = [];
    var itemsToDisplay = [];
    for (var i = 0; i < data.length; i++) {
      itemsToDisplay.push(data[i]);
     }
    


    this.setState({ itemsToDisplay }, () => {
      this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
    });
  }
}

export default SearchFilter;