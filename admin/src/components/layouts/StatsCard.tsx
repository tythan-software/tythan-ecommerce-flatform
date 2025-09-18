interface Props {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  change?: string | number;
  changeType?: "positive" | "negative";
}

const StatsCard = (props: Props) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium mb-1">{props.title}</p>
        <p className="text-3xl font-bold text-gray-800">{props.value}</p>
        {props.change && (
          <div
            className={`flex items-center mt-2 text-sm ${
              props.changeType === "positive" ? "text-green-600" : "text-red-600"
            }`}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d={
                  props.changeType === "positive"
                    ? "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z"
                    : "M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 15.586l5.293-5.293a1 1 0 011.414 0z"
                }
                clipRule="evenodd"
              />
            </svg>
            {props.change}
          </div>
        )}
      </div>
      <div className={`p-4 rounded-2xl ${props.color}`}>{props.icon}</div>
    </div>
  </div>
);

  export default StatsCard;