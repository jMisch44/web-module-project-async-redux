import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVillager } from "../actions";

const Villagers = (props) => {
  const { getVillager } = props;
  //   useEffect(() => {
  //     getVillager(0);
  //   }, []);

  const handleClick = (id) => {
    getVillager(id);
  };

  if (props.error) {
    return <h2>{props.error}</h2>;
  }

  if (props.isFetching) {
    return <h2>Retrieving villager info...</h2>;
  }

  return (
    <div>
      <img src={`${props.villager.image_uri}`} />
      <h2>{props.villager.name["name-USen"]}</h2>
      <p>
        A {props.villager.personality}
        {props.villager.species}
      </p>
      <button
        onClick={() => {
          handleClick(parseInt(props.villager.id) + 1);
        }}
      >
        Get Next Villager
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    villager: state.villager,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getVillager })(Villagers);
