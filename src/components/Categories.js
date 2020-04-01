import React from 'react';
import {connect} from 'react-redux';
import { getDonationsByCategory,getDonations } from "../redux/reducers/donationReducer";
class Categories extends React.Component{ 
    selectCategory=(category)=>{
        // console.log(category);
        this.props.getDonationsByCategory(category).then(res=>{
            if(this.props.donations.length === 0){
                return(
                    this.props.getDonations()
                )
            }
        })
    }
    
    render(){
        // console.log(this.props.donations)
        return(
            <div>
                <p onClick={()=>this.selectCategory('Housing')} name="Housing">Housing</p>
                <p onClick={()=>this.selectCategory('Clothing')} name="Clothing">Clothing</p>
                <p onClick={()=>this.selectCategory('Electronics')} name="Electronics">Electronics</p>
                <p onClick={()=>this.selectCategory('Home')} name="Home&Garden">Home & Garden</p>
                <p onClick={()=>this.selectCategory('Education')} name="Education">Education</p>
                <p onClick={()=>this.selectCategory('Sports')} name="Sports&Games">Sports & Games</p>
                <p onClick={()=>this.selectCategory('Movies')} name="Movies">Movies & Music</p>
                <p onClick={()=>this.selectCategory('Baby')} name="Baby&Child">Baby & Child</p>
                <p onClick={()=>this.selectCategory('Other')} name="Other">Other</p>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
      donations: reduxState.donation.donations
    };
  };
  
  export default connect(mapStateToProps, { getDonationsByCategory,getDonations })(Categories);
  