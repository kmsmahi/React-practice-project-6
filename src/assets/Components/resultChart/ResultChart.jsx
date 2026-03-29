import { Line, LineChart ,  XAxis, YAxis} from 'recharts';
const students = [
  { id: 1, name: "Kazi Mahi", physics: 85, chemistry: 92, math: 78, biology: 88 },
  { id: 2, name: "Ayesha Siddiqa", physics: 78, chemistry: 85, math: 95, biology: 82 },
  { id: 3, name: "Tanvir Ahmed", physics: 92, chemistry: 88, math: 81, biology: 75 },
  { id: 4, name: "Sajid Islam", physics: 65, chemistry: 72, math: 88, biology: 94 },
  { id: 5, name: "Nusrat Jahan", physics: 89, chemistry: 94, math: 76, biology: 91 },
  { id: 6, name: "Rakibul Hasan", physics: 74, chemistry: 80, math: 82, biology: 79 },
  { id: 7, name: "Fahmida Akter", physics: 95, chemistry: 91, math: 89, biology: 97 },
  { id: 8, name: "Imran Hossain", physics: 82, chemistry: 76, math: 93, biology: 70 },
  { id: 9, name: "Jannatul Ferdous", physics: 88, chemistry: 82, math: 85, biology: 89 },
  { id: 10, name: "Ariful Islam", physics: 71, chemistry: 69, math: 75, biology: 83 }
];
const ResultChart = () => {
    return (
        <div className='justify-content items-center'>
      <LineChart md:width={800} width={300} md:height={500} height={300} data={students}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="physics" stroke="#8884d8" />
        <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
        <Line type="monotone" dataKey="math" stroke="#ffc658" />
        <Line type="monotone" dataKey="biology" stroke="#ff7300" />
      </LineChart>
        </div>
    );
};

export default ResultChart;