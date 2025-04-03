import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis
  } from 'recharts';
  
  export default function ResultChart({ data }: { data: { subject: string, value: number }[] }) {
    return (
      <RadarChart outerRadius={90} width={400} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar name="Sonuçlar" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.7} />
      </RadarChart>
    );
  }