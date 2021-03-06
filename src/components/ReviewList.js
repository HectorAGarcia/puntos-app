import React, { Component } from 'react';
import { ListView, FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import { getReviews } from '../actions';
import _ from 'lodash';
import { connect } from 'react-redux';

class ReviewList extends Component {
  componentWillMount() {
    this.props.getReviews(this.props.uid);
  }

  render() {
    return (
      <FlatList
        data={this.props.reviews}
        renderItem={({item}) => <ReviewItem review={item} />}
      />
    );
  }
}
const mapStateToProps = state => {
  var { uid } = state.businessMain;
  const reviews = _.map(state.businessMain.reviews, (val, key) => {
    return {...val, key};
  });
  return { uid, reviews };
}

export default connect(mapStateToProps, { getReviews })(ReviewList);
