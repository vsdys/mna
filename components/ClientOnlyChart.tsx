'use client';

import dynamic from 'next/dynamic';

const ResultChart = dynamic(() => import('./ResultChart'), { ssr: false });

export default ResultChart;