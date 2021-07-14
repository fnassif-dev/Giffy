import React from 'react'

export const Gif = ({ id, url, title }) => {
    return (
        <div className="gif__gif-masonry col-md-4 col-sm-6">
            <div className="post-thumb">
                <img src={ url } alt={ title } />
                <div className="title-over">
                    <h4><a href="#">{ title }</a></h4>
                </div>
                <div className="post-hover text-center">
                    <div className="inside">
                        <i className="fa fa-plus"></i>
                        <span className="date">15 Jan 2084</span>
                        <h4><a href="#">{ title }</a></h4>
                        <p> --- </p>
                    </div>
                </div>
            </div>
        </div> 
    )
}