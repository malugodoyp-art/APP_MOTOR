import '../styles/components.css';

export default function ProgressBar({ current, total, label, showPercentage = true }) {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-bar-container">
      {label && <p className="progress-label">{label}</p>}
      <div className="progress-bar-wrapper">
        <div className="progress-bar-background">
          <div
            className="progress-bar-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showPercentage && (
          <span className="progress-percentage">{Math.round(percentage)}%</span>
        )}
      </div>
      {label && <p className="progress-text">{current}/{total} completado</p>}
    </div>
  );
}
