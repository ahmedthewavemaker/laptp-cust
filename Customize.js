import React, { Component } from 'react';
import slugify from 'slugify';
import Features from './Features';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Customize extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
              }  )}
        
            
        
    return (
        
         <form className = "main__form" >
            <h2>Customize your laptop</h2>
            <Features features={features} />
          </form>
        )

}
}


export default Customize;