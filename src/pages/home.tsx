import LineChartComponent from '@/components/LineChartComponent';
import PieChartComponent from '@/components/PieChartComponent';

export default function Home() {
  return (
    <div>
      <div className='flex'>
        <PieChartComponent />
        <LineChartComponent />
      </div>
    </div>
  );
}
