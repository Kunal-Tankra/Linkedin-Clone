import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const Widgets = () => {

    const newsArticle = (heading, subtitle) => (

        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />

            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )


    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LindedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('React is back', 'Top news- 9999 reders')}
            {newsArticle('Coronavirus: UK updates', 'Top news- 876 reders')}
            {newsArticle('Tesla hits new highs', 'Cars & auto- 304 reders')}
            {newsArticle('Bitcoin Breaks $22k', 'Crypto- 8076 reders')}
            {newsArticle('Is Redux too good?', 'Code- 276 reders')}
        </div>
    )
}



export default Widgets
