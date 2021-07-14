import React from 'react';

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="social-icons">
                            <ul>
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-behance"></a></li>
                                <li><a href="#" className="fa fa-dribbble"></a></li>
                                <li><a href="#" className="fa fa-google-plus"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copyright-text">Copyright © 2021 - GIFFY
                        | Photos by <a rel="nofollow" href="http://unsplash.com">Unsplash</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
