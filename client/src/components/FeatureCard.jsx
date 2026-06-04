function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
      <div className="text-4xl mb-4">{icon}</div>

      <h2 className="text-2xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;