const shimmerCards = Array(10).fill();

const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {shimmerCards.map((ele, i) => <div key={i} className="shimmer-card"/>)}
      </div>
    );
  };

export default Shimmer;