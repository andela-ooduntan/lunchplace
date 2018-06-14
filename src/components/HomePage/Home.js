import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Row, Input, Button, Preloader, Table, Icon } from 'react-materialize';
import autoBind from 'auto-bind';
import './Home.css';

class Hompage extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      placeName: '',
      rating: {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      ratingCount: {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      votes: [],
      votersName: '',
      aVote: ''

    }
  }


  onChangeHandler(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change);
  }

  searchForPlaces() {
    const { placeName } = this.state;
    if (placeName.length > 1) {
      this.props.getPlaces(this.state.placeName);
    }
  }

  // calculateResult(index) {
  //   const { rating } = this.state;
  //   let largest = rating[index];

  //   for (const key in rating) {
  //     if (largest < rating[key]) {
  //       largest = rating[index];
  //     }
  //   }

  //   return largest === rating[index] &&  largest > 0;
  // }

  addVote() {
    const { votes, aVote, rating, ratingCount, votersName } = this.state;
    const newRating = { ...rating };
    const newRatingCount = { ...ratingCount };
    const newVotes = [ ...votes, {
      name: votersName,
      vote: aVote
    }];

    if (votersName.length && aVote) {
      newRatingCount[aVote] = newRatingCount[aVote] + 1;
      for (const key in rating) {
        const eachVoteCount = newRatingCount[key];
        newRating[key] = (eachVoteCount / newVotes.length) * 10;
      }

      this.setState({
        votes: newVotes,
        votersName: "",
        rating: newRating,
        ratingCount: newRatingCount,
      });
    }
  }

  renderTableHead(places, rating) {
    // const { largest } = this.state;
    return places.groups[0].items.map((eachPlaces, index) => (
      <th
        // className={largest[index] ? 'largestClass' : ''}
        data-field={eachPlaces.venue.categories[0].name}
        key={eachPlaces.venue.id}
      >
        <h5 className='center-align'>{eachPlaces.venue.name}</h5>
        <h6 className='center-align'>{eachPlaces.venue.categories[0].name}</h6>
        <h6 className='center-align'>{ parseFloat(rating[index]).toFixed(2) || 0.0}</h6>
      </th>
    ));
  }

  renderVotesResult(votes) {
    return votes.map((eachVotes, index) => (
      <tr
        key={index}
      >
        <td>
          <h6>{eachVotes.name}</h6>
        </td>
        <td className={eachVotes.vote === '0' ? 'votedClass': ''}>
           {eachVotes.vote === '0' && <Icon small>check</Icon>}
        </td>
        <td className={eachVotes.vote === '1' ? 'votedClass': ''}>
          {eachVotes.vote === '1' && <Icon small>check</Icon>}
        </td>
        <td className={eachVotes.vote === '2' ? 'votedClass': ''}>
          {eachVotes.vote === '2' && <Icon small>check</Icon>}
        </td>
      </tr>
    ));
  }

  render() {
    const { placeName, rating, votersName, votes } = this.state;
    const { places: { loadingPlaces, places } } = this.props;

    return (
      <Row>
      <div className="placeInputContainer">
        <Row>
          <Input
            s={3}
            label="Search Near by Places Eg. Berlin"
            validate
            name='placeName'
            value={placeName}
            onChange={this.onChangeHandler}
          />
          <Button
            s={3}
            waves='light'
            onClick={this.searchForPlaces}
          >
            Search
          </Button>
        </Row>
      </div>
      <Row>
        {
          (loadingPlaces && <div className='result-container' >
              <Preloader className='loader' size='big'/>
          </div>)
        }
      </Row>
      <Row>
        {places.groups && places.groups[0].items.length > 0 ?
          (<div>
            <Table>
            <thead>
              <tr>
                <th>Participant</th>
              { this.renderTableHead(places, rating) }
              </tr>
            </thead>

            <tbody>
              { this.renderVotesResult(votes) }
              <tr>
                <td><Input name='votersName' onChange={this.onChangeHandler} defaultValue={votersName} s={6}/></td>
                <td className='vote-cards'>
                  <input
                    value={0}
                    type="radio"
                    id="f-option"
                    name="aVote"
                    onChange={this.onChangeHandler}
                  />
                   <label htmlFor="f-option"></label>
                    <div className="check"></div>
                </td>
                <td className='vote-cards'>
                <input type="radio" value={1} id="s-option" name="aVote" onChange={this.onChangeHandler}/>
                  <label htmlFor="s-option"></label>
                    <div className="check"></div>
                </td>
                <td className='vote-cards'>
                  <input type="radio" value={2} id="t-option" name="aVote" onChange={this.onChangeHandler}/>
                  <label htmlFor="t-option"></label>
                  <div className="check"></div>
                </td>
              </tr>
            </tbody>
          </Table>
          <Button
            s={3}
            waves='light'
            onClick={this.addVote}
          >
            Add participant
          </Button>
        </div>): <h4>No result</h4>}
      </Row>
      </Row>
    );
  }
};

Hompage.propTypes = {
  // children: PropTypes.object.isRequired
};

export default Hompage;
