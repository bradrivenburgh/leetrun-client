const runFrequency = {
  labels: [],
  datasets: [
    {
      label: "Runs",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [],
    },
  ],
  addRunOccurrences: function(runEntries) {
    this.labels = [];
    this.datasets[0].data = [];
    const sortedAscOrder = runEntries
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    const occurrences = createRunDict(sortedAscOrder);
    for (const [key, value] of Object.entries(occurrences)) {
      this.labels.push(key);
      this.datasets[0].data.push(value);
    }
    return runFrequency;
  },
};

/**
 * Create a dictionary with the number of runs in each month.
 */
const createRunDict = (runs) => {
  const dict = {};
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];

  let month;
  for (const run of runs) {
    // get month string
    month = months[new Date(run.date + "EST").getMonth()];
    
    // add it to runEntryDictionary
    !dict[month] 
      ? dict[month] = 1
      : dict[month]++;
  }

  return dict;
} 

export default runFrequency