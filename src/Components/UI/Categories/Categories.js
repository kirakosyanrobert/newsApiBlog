import React from 'react';
import {connect} from 'react-redux';
import {categoryAction} from '../../../redux/filters/filtersAction';

const Categories = (props) => {
      return (
        <div className="card my-4">
          <h5 className="card-header">Categories</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a role="button" onClick={() => props.changeCategory('business')}>Business</a>
                  </li>
                  <li>
                    <a role="button" onClick={() => props.changeCategory('entertainment')}>Entertainment</a>
                  </li>
                  <li>
                    <a role="button" onClick={() => props.changeCategory('health')}>Health</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a role="button" onClick={() => props.changeCategory('science')}>Science</a>
                  </li>
                  <li>
                    <a role="button" onClick={() => props.changeCategory('sports')}>Sports</a>
                  </li>
                  <li>
                    <a role="button" onClick={() => props.changeCategory('technology')}>Technology</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      )
}

const mapDispatchToProps = dispatch => ({
  changeCategory: category => dispatch(categoryAction(category))
})

export default connect(null, mapDispatchToProps)(Categories);