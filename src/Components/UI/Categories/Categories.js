import React from 'react';
import './Categories.scss';
import {connect} from 'react-redux';
import {categoryAction} from '../../../redux/filters/filtersAction';

const Categories = () => {
      return (
        <div className="card my-4">
          <h5 className="card-header">Categories</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">business</a>
                  </li>
                  <li>
                    <a href="#">entertainment</a>
                  </li>
                  <li>
                    <a href="#">health</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">science</a>
                  </li>
                  <li>
                    <a href="#">sports</a>
                  </li>
                  <li>
                    <a href="#">technology</a>
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

export default connect(mapDispatchToProps)(Categories);