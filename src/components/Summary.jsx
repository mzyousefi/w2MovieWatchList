export default function Summary({ totalMovies, watchCount,unWatchedCount }) {
    return (
      <div className="summaryWrap">
        <div className="summary">
          <SummaryCard label="Total Movie" value={`${totalMovies}`} />
          <SummaryCard label="Watch Count" value={watchCount} />
          <SummaryCard label="unWatch Count" value={unWatchedCount} />
        </div>
  
        {totalMovies==watchCount && (
          <div className="success_alert">
            You watched everything!
          </div>
        )}
      </div>
    );
  }
  
  function SummaryCard({ label, value }) {
    return (
      <div className="summaryCard">
        <div className="summaryLabel">{label}</div>
        <div className="summaryValue">{value}</div>
      </div>
    );
  }
  