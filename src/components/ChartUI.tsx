import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

interface ChartUIProps {
    title: string;
    labels: string[];
    values1: number[];
    values2: number[];
    label1: string;
    label2: string;
}

// const arrValues1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const arrValues2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const arrLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export default function ChartUI({ title, labels, values1, values2, label1, label2 }: ChartUIProps) {
    return (
        <>
            <Typography variant="h5" component="div">{title}</Typography>
            <LineChart
                height={300}
                series={[
                    { data: values1, label: label1 },
                    { data: values2, label: label2 },
                ]}
                xAxis={[{ scaleType: 'point', data: labels }]} />
        </>

    );
}